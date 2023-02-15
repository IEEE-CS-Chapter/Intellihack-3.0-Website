<template>
    <ClientOnly>
        <section id="why-intellihack">
            <Carousel :items-to-show="1" :wrap-around="true" :autoplay="2000" :transition="500">
                <Slide v-for="image, index in images" :key="image">
                    <img :src="image" :alt="`Carousel Image #${index + 1}`">
                </Slide>
            </Carousel>
            <div class="info">
                <h2>Why IntelliHack ?</h2>
                <p>
                    IntelliHack is the first-ever Machine Learning hackathon in Sri Lanka. This is one of the year’s
                    most
                    anticipated, exciting, and electrifying events that innovative minds look forward to. The
                    contestants
                    get the privilege to network with some of the topmost experts in the industry and expose themselves
                    to
                    this attractive technology that would benefit them immensely in their future activities. IntelliHack
                    is
                    a great platform for curious minds interested in machine learning to meet and collaborate with each
                    other. It also encourages the youth to participate and be a part of this revolutionary technology
                    and
                    sciences which are the upcoming breakthroughs in the technical world. Moreover, among many more
                    benefits, IntelliHack aims to raise awareness among society about machine learning and artificial
                    intelligence.
                </p>
            </div>
        </section>
    </ClientOnly>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const images = [
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli1.jpg?alt=media&token=3dbe51e8-5ccd-4fc5-8e2d-395b8cdfca99",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli2.jpg?alt=media&token=6a7b5170-f128-4112-8304-63f6aebf74f3",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli3.jpg?alt=media&token=1996ab46-6bb4-4bdd-b4af-d60a792eaf7b",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli4.jpg?alt=media&token=9d803190-b24e-4a16-bc67-b55e21d4abe3",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli5.jpg?alt=media&token=4f56a270-8595-4431-a2aa-7bcf605e620e",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli6.jpg?alt=media&token=380f12fc-fe60-4ab6-9aae-af3c485988b9",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli7.jpg?alt=media&token=b4535cb5-b83e-479b-a638-28800e7c0b4e",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli8.jpg?alt=media&token=80e18f0e-b891-43d1-9552-7a592ebfef49",
    "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli9.jpg?alt=media&token=c21b7ef9-1eb0-4101-9dc5-b5863594258d"
]

</script>


<style lang="scss" scoped>
#why-intellihack {
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
}

#why-intellihack img {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    filter: grayscale(100%);
}

.info {
    position: absolute;
    top: 70vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 87.5vw;
    height: 50vh;
    background-color: rgba($color: #fff, $alpha: 1);
    padding: 1.5rem;
    border-radius: 2rem;
    box-shadow: 0 0 6rem 6rem rgba($color: #000000, $alpha: 0.3);
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include mq(md) {
        top: 50vh;
        width: 65vw;
        height: 60vh;
        padding: 2rem;
        gap: 2rem;  
    }

    @include mq(lg) {
        width: 55vw;
    }

    @include mq(2xl) {
        width: 40vw;
        height: 52vh;
        gap: 3rem;
    }

    @include mq(3xl) {
        width: 40vw;
    }
}

.info h2 {
    color: $brandBlue;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    height: 12.5%;

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


.info p {
    text-align: justify;
    line-height: 1.6;
    height: 87.5%;
    overflow-y: auto;


    @include mq(lg) {
        font-size: 1.1rem;
        line-height: 1;
        height: 80%;
    }
}
</style>