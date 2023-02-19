<template>
    <section id="how-it-works">
        <h2>How It Works</h2>
        <div id="timeline">
            <div id="pipe" ref="pipe">
                <div id="pipe-progress" ref="pipeProgress">

                </div>
            </div>
            <div class="timeline-event" v-for="event in timelineItems" :key="event.key" :data-event="event.key">
                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>
                <div class="timeline-indicator" ref="indicators" :data-indicator="event.key">
                    <!-- <img src="@/assets/images/logo-blue.png" alt="Intellihack Logo" class="hero-logo"> -->
                </div>
                <div class="timeline-event__date">
                    {{ event.date }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const indicators = ref<HTMLDivElement[]>()

const timelineItems = [{
    key: 1,
    title: "Workshop 1",
    description: `First workshop, which will be held online on Deployment of ML models using Cloud based Applications.
An Experienced individual from Google Developers Group Sri Lanka will be the speaker of the workshop 1.`,
    date: `12-02-2023`
},
{
    key: 2,
    title: "Proposal Submissions Open",
    description: `The first round of InteliHack is an Ideathon where participants can pitch their ideas and form teams. During this round, 
participants must submit a proposal describing the machine learning solution to the problem within the selected area according to the given proposal template.`,
    date: `18-02-2023`
},
{
    key: 3,
    title: "Workshop 2",
    description: `Second workshop, which also is an online event will cover the topic Deploy and orchestrate machine learning pipelines with Azure.
Speaker is the Gold Microsoft Learn Student Ambassador of Microsoft Sri Lanka..`,
    date: `26-02-2023`
},
{
    key: 4,
    title: "Proposal Submissions Close",
    description: `The submissions for the ideathon will be closed. Top 10 teams will be selected based on the potential of their ideas and the feasibility of their implementation
by the evaluation panel will be selected for the final round.`,
    date: `11-03-2023`
},
{
    key: 5,
    title: "Proposal Evaluation Stage",
    description: `The proposals submitted during the initial phase will be evaluated by the experienced panel of expertise during this period and the finalists will be announced.`,
    date: `18-03-2023`
},
{
    key: 6,
    title: "Final Round Start",
    description: `The submitted proposals will be shortlisted into best ten proposals.
The top ten contestants need to implement the idea that they had proposed in the initial phase. 
The solution must meet the conditions specified in the submitted proposal.`,
    date: `25-03-2023`
},

{
    key: 7,
    title: "Final Hackathon",
    description: `The final touches of the solution and the deployment process is implemented in this 24 hour long hackathon.`,
    date: `06-05-2023`
},

{
    key: 8,
    title: "Final Presentation And Close Event",
    description: `Participants will present their projects in final presentations, and an award ceremony will be organized to honor the top projects.`,
    date: `07-05-2023`
}
]

const pipe = ref<HTMLDivElement>()
const pipeProgress = ref<HTMLDivElement>()
const { y } = useElementBounding(pipe)
let previousProgressPercentage = 0;

watch(y, () => {
    if (pipe && pipe.value && pipeProgress && pipeProgress.value) {
        const rawHeightOfPipe = window.innerHeight - y.value - 100
        const pipeTotalHeight = pipe.value.getBoundingClientRect().height
        const percentageOfPipeShown = Math.min((rawHeightOfPipe / pipeTotalHeight) * 100, 100)
        if (percentageOfPipeShown > 0 && percentageOfPipeShown > previousProgressPercentage) {
            pipeProgress.value.style.height = `${percentageOfPipeShown}%`
            previousProgressPercentage = percentageOfPipeShown
        }
    }
})


onMounted(() => {
    const indicatorObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const indicator = entry.target as HTMLDivElement;
                const key = indicator.dataset.indicator
                const event = document.querySelector<HTMLDivElement>(`[data-event="${key}"]`)
                if (event) {
                    event.classList.add("active")
                    setTimeout(() => {
                        indicator.classList.add('active')
                    }, 300)
                }
            }
        });
    }, {
        rootMargin: "0px 0px -128px"
    });
    indicators.value?.forEach(i => {
        indicatorObserver.observe(i)
    })
})

</script>

<style lang="scss" scoped>
#how-it-works {
    width: 100vw;
    min-height: 100vh;
}

h2 {
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    height: 12.5%;
    margin-block: 3rem;

    @include mq(sm) {
        font-size: 1.8rem;
    }



    @include mq(lg) {
        font-size: 2.5rem;
    }

    @include mq(xl) {
        font-size: 3rem;
    }
}

#timeline {
    position: relative;
    margin: 2rem auto 2rem auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;


    @include mq(lg) {
        width: 75vw;
    }
}

#pipe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1.25rem;
    transform: translateX(-50%);
    width: 0.8rem;
    background-color: #999;
    border-radius: 100px;

    @include mq(lg) {
        left: 50%;
    }
}

#pipe-progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: $brandBlue;
    border-radius: 100px;
}

.timeline-event {
    width: 87.5%;
    background-color: rgba(var(--brand-black), 0.4);
    // border: 2px solid $brandBlue;
    align-self: flex-start;
    transform: translateX(8rem);
    opacity: 0;
    padding: 2rem 1.5rem;
    border-radius: 1rem;
    position: relative;
    color: #fff;
    transition: all 0.3s ease-in-out;


    @include mq(lg) {
        width: 50%;
        transform: translateX(-10rem);
        align-self: flex-start;
    }


    &.active {
        opacity: 1;
        transform: translateX(2.5rem);

        @include mq(lg) {
            transform: translateX(-3rem);
        }
    }


    &__date {
        margin-top: 1rem;
        background-color: #fff;
        color: #151515;
        display: inline-block;
        padding-block: 0.25rem;
        border-radius: 0.5rem;
        width: 125px;
        display: grid;
        place-items: center;

        @include mq(lg) {
            position: absolute;
            top: 50%;
            left: calc(448pxpx);
            right: -14rem;
            transform: translateY(-50%);
            margin-top: 0rem;
        }
    }

    &:nth-child(even) {


        @include mq(lg) {
            transform: translateX(10rem);
            align-self: flex-end;

        }

        &.active {

            @include mq(lg) {
                transform: translateX(3rem);
            }
        }

        & .timeline-event__date {

            @include mq(lg) {
                position: absolute;
                top: 50%;
                right: -14rem;
                right: cac(224px);
                left: -14rem;
                transform: translateY(-50%);
                margin-top: 0rem;
            }
        }
    }
}

.timeline-event h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.timeline-indicator {
    background-color: $brandBlack;
    border: 3px solid $brandBlue;
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0);
    left: calc(-2rem);
    transition: all 0.2s ease-in-out;



    &.active {
        animation: scaleUp 0.3s ease-in forwards;
    }


    @include mq(lg) {
        left: calc(-3rem - 12px);
    }
}

.timeline-event:nth-child(odd) .timeline-indicator {

    @include mq(lg) {
        left: calc(100% + 36px);
    }
}


.timeline-indicator img {
    width: 80%;
    filter: grayscale(100%) brightness(50%);
}


@keyframes scaleUp {
    0% {
        transform: translateY(-50%) scale(0);
        opacity: 0;
    }

    50% {
        transform: translateY(-50%) scale(1.3);
        opacity: 1;
    }

    100% {
        transform: translateY(-50%) scale(1);
    }
}
</style>


