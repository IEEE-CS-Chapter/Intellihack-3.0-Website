<template>
    <main class="hero">
        <h1>
            IntelliHack 3.0
        </h1>
        <p>
            Sri Lanka's First ever Machine Learning Hackathon organized by the IEEE Computer Society Student Branch
            Chapter of UCSC.
            With the primary goal of introducing contestants to the concept of Machine Learning,
            or the use of artificial intelligence to create self-learning systems, the hackathon includes several
            phases and sub-events. IntelliHack 3.0 is aimed to provide participants with a strong understanding of
            machine learning so that they can come up with solutions that help them make better judgments.
        </p>
        <a href="#submissions" class="cta">Register</a>
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

    @include mq(lg) {
        width: 40%;
        text-align: justify;
    }
}

a.cta {
    padding: 0.75rem 1.5rem;
    background-color: $brandBlue;
    color: #fff;
    margin-top: 2rem;
    width: min-content;
    margin-inline: auto;
    z-index: 2;

    @include mq(md) {
        margin-inline: 0;
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

    @include mq(lg) {
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


    @include mq(lg) {
        left: 5rem;
    }
}

</style>