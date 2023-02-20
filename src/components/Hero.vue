<template>
    <main class="hero">
        <h1 class="mb-16">
            IntelliHack 3.0
        </h1>
        <p>
            Proposal Submissions Closes in...
        </p>
        <AppCountdown flip-card-id="Intellihach3" :labels="{
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds'
        }" :deadline-date="new Date('2023-03-11 00:00:00')" label-color="#bbb" class="z-2"/>

        <AppButton class="mt-8 z-2" href="#submissions" :is-link="true"> Register </AppButton>
        <img src="@/assets/images/logo.webp" alt="Intellihack Logo" class="hero-logo">
        <img src="@/assets/images/robot.webp" alt="Robo Human Hybrid Woman" class="hero-img">
        <ScrollReminder />

    </main>
</template>

<script setup lang="ts">

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
    animation: slideFromRight 0.5s ease-in-out forwards;

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