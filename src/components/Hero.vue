<template>
    <main class="hero">
        <h1 class="mb-16" id="heading">
            IntelliHack 3.0
        </h1>
        <p id="submission-reminder">
            Proposal submissions deadline in
        </p>
        <AppCountdown flip-card-id="Intellihach3" :labels="{
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds'
        }" :deadline-date="new Date('2023-03-11 00:00:00')" label-color="#bbb" class="z-2" id="countdown" />

        <AppButton class="mt-8 z-2 cta" href="#submissions" :is-link="true" id="cta"> Register </AppButton>
        <img src="@/assets/images/logo.webp" alt="Intellihack Logo" class="hero-logo" id="logo">
        <img src="@/assets/images/robot.webp" alt="Robo Human Hybrid Woman" class="hero-img" id="robo">
        <ScrollReminder id="scroll-reminder" />

    </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
import AppCountdown from "@/components/AppCountdown.vue";
import AppButton from "@/components/AppButton.vue";
import ScrollReminder from "@/components/ScrollReminder.vue";

let heading: HTMLHeadingElement;
let submissionReminder: HTMLParagraphElement;
let countdown: HTMLDivElement;
let scrollReminder: HTMLDivElement;
let cta: HTMLAnchorElement | HTMLButtonElement;
let logo: HTMLImageElement;
let robo: HTMLImageElement;

onMounted(() => {
    document.body.style.overflowY = 'hidden'
    heading = document.getElementById('heading') as HTMLHeadingElement
    submissionReminder = document.getElementById('submission-reminder') as HTMLParagraphElement
    countdown = document.getElementById('countdown') as HTMLDivElement
    scrollReminder = document.getElementById('scroll-reminder') as HTMLDivElement
    cta = document.getElementById('cta') as HTMLAnchorElement | HTMLButtonElement
    logo = document.getElementById('logo') as HTMLImageElement
    robo = document.getElementById('robo') as HTMLImageElement


    // make heading, countdown, cta invisible at start and animate them from bottom to top and make them visible
    gsap.set([heading, submissionReminder, countdown, cta, scrollReminder], { autoAlpha: 0, y: 50 })
    // gsap.set([logo], { autoAlpha: 0 })
    gsap.set([robo], { autoAlpha: 0, x: 100 })

    gsap.to([heading, submissionReminder, countdown, cta, scrollReminder], { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.25 })

    // // wait until all images are loaded and then animate the logo
    // imagesLoaded(logo as HTMLImageElement, () => {
    //     gsap.to(logo, { autoAlpha: 1, duration: 0.5 })
    // })

    // wait until all images are loaded and then animate the robo
    imagesLoaded(robo as HTMLImageElement, () => {
        gsap.to(robo, { autoAlpha: 1, x: 0, duration: 1 })
    })

    // after all animations are done, make the body scrollable
    gsap.delayedCall(1.5, () => {
        document.body.style.overflowY = 'scroll'
    })

})


</script>

<style scoped lang="scss">
h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #fff;
    display: inline-block;
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    margin-top: 6rem;
    margin-bottom: 2rem;
    z-index: 2;


    @include mq(sm) {
        font-size: 3.5rem;
    }


    @include mq(lg) {
        font-size: 4rem;
        text-align: left;
        width: auto;
        margin-top: 0;
    }

    @include mq(xl) {
        font-size: 6rem;
    }
}

p {

    color: #fff;
    z-index: 2;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.2rem;

    @include mq(sm) {
        font-size: 1.3rem;
    }

    @include mq(md) {
        text-align: left;
        font-size: 1.4rem;
    }

    @include mq(lg) {
        width: 40%;
        text-align: justify;
        font-size: 1.5rem;
    }
}

button.cta {
    padding: 0.75rem 1.5rem;
    background-color: $brandBlue;
    color: #fff;
    margin-top: 2rem;
    margin-inline: auto;
    z-index: 2;
    position: relative;

    @include mq(md) {
        margin-inline: 0;
    }


    &::after {
        position: relative;
        content: "";
        display: block;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: black;
        transition: width 0.2s ease-in-out;

    }

    &:hover {

        &::after {
            width: 100%;
        }
    }
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}


.hero {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    padding-inline: 1rem;
    background-color: $brandBlack;

    @include mq(lg) {
        align-items: flex-start;
        justify-content: center;
        padding-inline: 3rem;
    }


    @include mq(xl) {
        padding-inline: 5rem;
    }
}

.hero-img {
    position: absolute;
    bottom: 0;
    right: -75%;
    height: 80vh;
    transform: scaleX(-1);
    max-width: 200%;
    filter: brightness(30%);

    @include mq(425px) {
        right: -20%;
    }

    @include mq(768px) {
        right: 2rem;
        height: 90vh;
    }

    @include mq(1178px) {
        object-fit: cover;
        height: 90vh;
        right: 4rem;
        filter: none;
    }
}


.hero-logo {
    position: absolute;
    top: 1rem;
    left: 2rem;
    object-fit: cover;
    width: 100px;

    @include mq(md) {
        width: 125px;
    }

    @include mq(lg) {
        width: 150px;
        left: 5rem;
    }

    @include mq(xl) {
        width: 175px;
    }
}

</style>