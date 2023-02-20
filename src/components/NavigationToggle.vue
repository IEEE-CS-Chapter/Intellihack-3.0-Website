<template>
    <div class="nav-toggle" :class="isActive ? 'is-active' : ''" id="nav-toggle" @click="isActive = !isActive">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
    <div id="nav-menu" :class="isActive ? 'active' : ''" class="flex items-center justify-center">
        <div class="Menu">
            <ul class="Menu-list" data-offset="10">
                <li v-for="linkMap in linkMapList" :key="linkMap.text" @click="isActive = false">
                    <a class="Menu-list-item" :href="linkMap.link" :ref="el => linkRefs.push(el as HTMLAnchorElement)">
                        {{ linkMap.text }}
                        <span class="Mask"><span>{{ linkMap.text }}</span></span>
                        <span class="Mask"><span>{{ linkMap.text }}</span></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const isActive = ref(false)

watch(isActive, () => {
    // prevent scroll when menu is active
    if (isActive.value) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'auto'
    }
})

const navToggle = ref<HTMLDivElement>()

const linkMapList = [{
    link: "",
    text: "Intellihack",
}, {
    link: "#timeline",
    text: "Timeline",
}, {
    link: "#submissions",
    text: "Submissions"
}, {
    link: "#prizes",
    text: "Prizes"
}, {
    link: "#sponsors",
    text: "Sponsors"
}, {
    link: "#what-they-say",
    text: "What They Say"
}, {
    link: "#contact-us",
    text: "Contact Us"
}]

const linkRefs = ref<HTMLAnchorElement[]>([])
</script>



<style lang="scss" scoped>
#nav-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
    cursor: pointer;


    @include mq(lg) {
        right: 2rem;
    }
}




.line {
    width: 36px;
    height: 3.6px;
    background-color: #ecf0f1;
    mix-blend-mode: difference;
    display: block;
    margin: 8px auto;
    transition: all 0.2s ease-in-out;
}

#nav-toggle.is-active {
    transition: all 0.2s ease-in-out;
    transition-delay: 0.3s;
    transform: rotate(45deg);
}

#nav-toggle.is-active .line:nth-child(2) {
    width: 0px;
}

#nav-toggle.is-active .line:nth-child(1),
#nav-toggle.is-active .line:nth-child(3) {
    transition-delay: 0.2s;
}

#nav-toggle.is-active .line:nth-child(1) {
    transform: translateY(13px);
}

#nav-toggle.is-active .line:nth-child(3) {
    transform: translateY(-13px) rotate(90deg);
}


#nav-menu {
    backdrop-filter: blur(12px) saturate(167%);
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 0vh;
    z-index: 99;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &.active {
        height: 100vh;

        // @include mq(lg) {
        //     height: 100vh;
        // }

    }
}






// === Variables =====
$perspective: 60rem;
$font-size: 3.5rem;
$xs-font-size: 2rem;
$sml-font-size: 2.25rem;
$md-font-size: 2.5rem;
$lg-font-size: 3rem;
$split-position: 49%;
$split-thickness: 4px;
// $split-color: #2c5aff;
$split-color: $brandBlue;




.Menu-list {
    font-size: $xs-font-size;
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotateX(-10deg) rotateY(20deg);
    gap: 1.5rem;

    @include mq(sml) {
        font-size: $sml-font-size;
    }

    @include mq(md) {
        font-size: $md-font-size;
    }

    @include mq(lg) {
        font-size: $lg-font-size;
    }

    @include mq(xl) {
        font-size: $font-size;
    }
}

// === Menu item =====
.Menu-list-item {
    margin-bottom: 1rem;
    position: relative;
    color: transparent;

    // === Split Line =====
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: $split-position;
        left: -10%;
        right: -10%;
        height: $split-thickness;
        border-radius: $split-thickness;
        margin-top: - calc($split-thickness / 2);
        background: $split-color;
        transform: scale(0);
        transition: transform .8s cubic-bezier(.16, 1.08, .38, .98);
        z-index: 1;
    }
}

// === Top/bottom mask =====
.Mask {
    display: block;
    position: absolute;
    overflow: hidden;
    color: $split-color;
    top: 0;
    height: $split-position;
    transition: all .8s cubic-bezier(.16, 1.08, .38, .98);

    span {
        display: block;
    }
}

// === Bottom mask specific =====
.Mask+.Mask {
    top: $split-position - 0.1;
    height: 100 - $split-position + 0.1;

    span {
        transform: translateY(-$split-position);
    }
}

// === Where the fun stuff happens =====
.Menu-list-item:hover,
.Menu-list-item:active {
    .Mask {
        color: #FFF;
        transform: skewX(12deg) translateX(1px);
    }

    .Mask+.Mask {
        transform: skewX(12deg) translateX(-1px);
    }

    &::before {
        transform: scale(1);
    }
}
</style>