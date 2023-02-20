<template>
    <div class="flip-clock">
        <template v-for="data in timeData" :key="data.label">
            <span class="flip-clock__piece" :id="data.elementId" v-show="data.show">
                <div v-if="flipAnimation">
                    <span class="flip-clock__card flip-card" :style="countdownSize ? `font-size:${countdownSize}` : ''">
                        <b class="flip-card__top">{{ twoDigits(data.current) }}</b>
                        <b class="flip-card__bottom" :data-value="twoDigits(data.current)"></b>
                        <b class="flip-card__back" :data-value="twoDigits(data.previous)"></b>
                        <b class="flip-card__back-bottom" :data-value="twoDigits(data.previous)"></b>
                    </span>
                </div>
                <div v-else>
                    <span class="no-animation__card">{{ twoDigits(data.current) }}</span>
                </div>
                <span v-if="showLabels" class="flip-clock__slot" :style="labelSize ? `font-size:${labelSize}` : ''">{{
                    data.label }}</span>
            </span>
        </template>
    </div>
</template>

    
<script setup lang="ts">

const props = withDefaults(defineProps<{
    flipCardId: string;
    deadline?: string;
    deadlineISO?: string;
    stop?: boolean;
    showLabels?: boolean;
    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    labels: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };
    deadlineDate?: Date;
    countdownSize?: string;
    labelSize?: string;
    flipAnimation?: boolean;
    mainColor?: string;
    secondFlipColor?: string;
    mainFlipBackgroundColor?: string;
    secondFlipBackgroundColor?: string;
    labelColor?: string
}>(), {
    deadline: '32d,0h,0m,0s',
    deadlineISO: '',
    stop: false,
    showLabels: true,
    showDays: true,
    showHours: true,
    showMinutes: true,
    showSeconds: true,
    countdownSize: '3rem',
    labelSize: '1.2rem',
    flipAnimation: true,
    mainColor: 'var(--color-brand-blue)',
    secondFlipColor: 'var(--color-brand-blue)',
    mainFlipBackgroundColor: '#222222',
    secondFlipBackgroundColor: '#393939',
    labelColor: '#222222',
})

const {
    deadline,
    stop,
    showDays,
    showHours,
    showMinutes,
    showSeconds,
    labels,
    deadlineDate,
    deadlineISO,
    flipCardId
} = toRefs(props);


const emit = defineEmits<{
    (event: 'timeElapsed', time: number): void;
}>()


const now = ref(Math.trunc(new Date().getTime() / 1000));
const date = ref<number | null>(null);
const interval = ref<number | null>(null);
const diff = ref(0);
const show = ref(false);
const timeData = ref([{
    current: 0,
    previous: 0,
    label: labels.value.days,
    elementId: 'flip-card-days-' + flipCardId.value,
    show: showDays.value,
},
{
    current: 0,
    previous: 0,
    label: labels.value.hours,
    elementId: 'flip-card-hours-' + flipCardId.value,
    show: showHours.value,
},
{
    current: 0,
    previous: 0,
    label: labels.value.minutes,
    elementId: 'flip-card-minutes-' + flipCardId.value,
    show: showMinutes.value,
},
{
    current: 0,
    previous: 0,
    label: labels.value.seconds,
    elementId: 'flip-card-seconds-' + flipCardId.value,
    show: showSeconds.value,
},
]);

const seconds = computed(() => {
    return Math.trunc(diff.value) % 60;
});
const minutes = computed(() => {
    return Math.trunc(diff.value / 60) % 60;
});
const hours = computed(() => {
    return Math.trunc(diff.value / 60 / 60) % 24;
});
const days = computed(() => {
    return Math.trunc(diff.value / 60 / 60 / 24);
});


function updateTime(idx: number, newValue: Ref<number>) {
    if (idx >= timeData.value.length || newValue === undefined) {
        return;
    }
    const d = timeData.value[idx];
    const val = newValue.value < 0 ? 0 : newValue.value;
    const el = document.querySelector<HTMLElement>(`#${d.elementId}`);
    if (val !== d.current && el) {
        d.previous = d.current;
        d.current = val;
        if (el) {
            el.classList.remove('flip');
            void el.offsetWidth;
            el.classList.add('flip');
        }
        if (idx === 0) {
            const els = el.querySelectorAll<HTMLElement>('span b');
            if (els) {
                els.forEach(e => {
                    const cls = e.classList[0];
                    if (newValue.value / 1000 >= 1) {
                        if (!cls.includes('-4digits')) {
                            const newCls = cls + '-4digits';
                            e.classList.add(newCls);
                            e.classList.remove(cls);
                        }
                    } else {
                        if (cls.includes('-4digits')) {
                            const newCls = cls.replace('-4digits', '');
                            e.classList.add(newCls);
                            e.classList.remove(cls);
                        }
                    }
                })
            }
        }
    }
}

function updateAllCards() {
    updateTime(0, days);
    updateTime(1, hours);
    updateTime(2, minutes);
    updateTime(3, seconds);
}


function twoDigits(value: number) {
    if (value != undefined) {
        if (value.toString().length <= 1) {
            return '0' + value.toString();
        }
        return value.toString();
    } else {
        return '00';
    }
}




watch(deadline, (newVal) => {
    const endTime = newVal;
    date.value = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000);
    if (!date.value) {
        throw new Error("Invalid props value, correct the 'deadline'");
    }
})
watch(now, () => {
    if (date.value)
        diff.value = date.value - now.value;
    if (diff.value <= 0 || stop.value) {
        diff.value = 0;
        updateTime(3, ref(0));
    } else {
        updateAllCards();
    }
})
watch(diff, (newVal) => {
    if (newVal == 0) {
        emit('timeElapsed', 0);
        updateAllCards();
    }
})


onMounted(() => {
    if (diff.value !== 0) {
        show.value = true;
    }
});
onBeforeMount(() => {
    if (!deadline.value) {
        throw new Error("Missing props 'deadline'");
    }
    const endTime = deadline.value;
    let epoch = Date.parse(endTime.replace(/-/g, '/'));
    if (deadlineDate && deadlineDate.value != null) {
        epoch = Date.parse(deadlineDate.value.toString())
    }
    else if (deadlineISO.value) {
        epoch = Date.parse(deadlineISO.value);
    }
    date.value = Math.trunc(epoch / 1000);
    if (!date.value) {
        throw new Error("Invalid props value, correct the 'deadline'");
    }
    interval.value = setInterval(() => {
        now.value = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
});
onUnmounted(() => {
    if (interval.value)
        clearInterval(interval.value);
});
</script>
    
<style lang="scss" scoped>
.no-animation__card {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.5;
    display: block;
    color: v-bind(mainColor);
}

.flip-clock {
    text-align: center;
    perspective: 600px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.flip-clock__piece {
    display: inline-block;
    // margin: 0 0.2vw;

    @media (min-width: 1000px) {
        // margin: 0 5px;
    }
}

.flip-clock__slot {
    font-size: 1rem;
    line-height: 1.5;
    display: block;
    color: v-bind(labelColor);
}

$halfHeight: 0.72em;
$borderRadius: 0.15em;

.flip-card {
    display: block;
    position: relative;
    padding-bottom: $halfHeight;
    font-size: 1.5rem;
    line-height: 0.95;

    @include mq(md) {
        font-size: 1.75rem;
    }

    @include mq(lg) {
        font-size: 2rem;
    }

    @include mq(xl) {
        font-size: 2.25rem;
    }
}

@media (min-width: 1000px) {
    .flip-clock__slot {
        font-size: 1.2rem;
    }

    .flip-card {
        font-size: 3rem;
    }
}

.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
    display: block;
    height: $halfHeight;
    color: v-bind(mainColor);
    background: v-bind(mainFlipBackgroundColor);
    padding: 0.23em 0.15em 0.4em;
    border-radius: $borderRadius $borderRadius 0 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
    width: 1.5em;
    height: $halfHeight;


    @include mq(md) {
        width: 1.75em;
    }

    @include mq(lg) {
        width: 2em;
    }

    @include mq(xl) {
        width: 2.25em;
    }
}

.flip-card__top-4digits,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits,
.flip-card__back-4digits::before,
.flip-card__back-4digits::after {
    display: block;
    height: $halfHeight;
    color: v-bind(mainColor);
    background: v-bind(mainFlipBackgroundColor);
    padding: 0.23em 0.15em 0.4em;
    border-radius: $borderRadius $borderRadius 0 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
    width: 1.5em;
    height: $halfHeight;


    @include mq(md) {
        width: 1.75em;
    }

    @include mq(lg) {
        width: 2em;
    }

    @include mq(xl) {
        width: 2.25em;
    }
}

.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits {
    color: v-bind(secondFlipColor);
    position: absolute;
    top: 50%;
    left: 0;
    border-top: solid 1px #000;
    background: v-bind(secondFlipBackgroundColor);
    border-radius: 0 0 $borderRadius $borderRadius;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
}

.flip-card__back-bottom,
.flip-card__back-bottom-4digits {
    z-index: 1;
}

.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after {
    display: block;
    margin-top: -$halfHeight;
}

.flip-card__back::before,
.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__back-4digits::before,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after {
    content: attr(data-value);
}

.flip-card__back,
.flip-card__back-4digits {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0%;
    pointer-events: none;
}

.flip-card__back::before,
.flip-card__back-4digits::before {
    position: relative;
    overflow: hidden;
    z-index: -1;
}

.flip .flip-card__back::before,
.flip .flip-card__back-4digits::before {
    z-index: 1;
    animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
    animation-fill-mode: both;
    transform-origin: center bottom;
}

.flip .flip-card__bottom,
.flip .flip-card__bottom-4digits {
    transform-origin: center top;
    animation-fill-mode: both;
    animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
}

@keyframes flipTop {
    0% {
        transform: rotateX(0deg);
        z-index: 2;
    }

    0%,
    99% {
        opacity: 1;
    }

    100% {
        transform: rotateX(-90deg);
        opacity: 0;
    }
}

@keyframes flipBottom {

    0%,
    50% {
        z-index: -1;
        transform: rotateX(90deg);
        opacity: 0;
    }

    51% {
        opacity: 1;
    }

    100% {
        opacity: 1;
        transform: rotateX(0deg);
        z-index: 5;
    }
}
</style>