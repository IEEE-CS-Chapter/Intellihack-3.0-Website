<template>
    <!-- <ClientOnly> -->
        <section id="why-intellihack" ref="whyIntellihack">
            <Carousel :items-to-show="1" :wrap-around="true" :autoplay="2000" :transition="500">
                <Slide v-for="image, index in images" :key="image">
                    <img :src="image" :alt="`Carousel Image #${index + 1}`">
                </Slide>
            </Carousel>
            <div class="info" ref="infoDiv">
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
    <!-- </ClientOnly> -->
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { gsap } from 'gsap'

const images = [
    "/memories/intelli1.webp",
    "/memories/intelli2.webp",
    "/memories/intelli3.webp",
    "/memories/intelli4.webp",
    "/memories/intelli5.webp",
]

const whyIntellihack = ref<HTMLDivElement>()
const infoDiv = ref<HTMLDivElement>()

onMounted(() => {

    gsap.set([infoDiv.value], {
        opacity: 0,
    })

    // using intersection observer to animate the info section when why-intellihack section is half visible for the first time
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to([infoDiv.value], {
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                })
                observer.unobserve(entry.target)
            }
        })
    }, {
        root: null,
        rootMargin: "0px",
    })

    observer.observe(whyIntellihack.value as HTMLDivElement)
})

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
        font-size: 1rem;
        line-height: 1.5;
        height: 80%;
    }
}


.info p::-webkit-scrollbar-track {
    background-color: transparent;
}

.info p::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
}

.info p::-webkit-scrollbar-thumb {
    background-color: #fefefe;
    border-radius: 100px;
}

.info p {
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
}

/* Firefox scrollbar thumb */
.info p::-moz-scrollbar-thumb {
    background-color: #fefefe;
    border-radius: 100px;
}
</style>