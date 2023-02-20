<template>
    <section id="prizes" ref="prizes">
        <h2>Prizes</h2>
        <div ref="prizeContainer">
            <div class="prize-card" ref="prizeCard1">
                <div class="prize-card__details">
                    <h3>Third Place</h3>
                    <img src='/prizes/third_place.webp' alt="Bronze Laurel">
                    <p>Rs. 50 000</p>
                </div>
            </div>
            <div class="prize-card" ref="prizeCard2">
                <div class="prize-card__details">
                    <h3>First Place</h3>
                    <img src='/prizes/first_place.webp' alt="Gold Laurel">
                    <p>Rs. 100 000</p>
                </div>
            </div>
            <div class="prize-card" ref="prizeCard3">
                <div class="prize-card__details">
                    <h3>Second Place</h3>
                    <img src='/prizes/second_place.webp' alt="Silver Laurel">
                    <p>Rs. 75 000</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'


const prizes = ref<HTMLDivElement>()
const prizeCard3 = ref<HTMLDivElement>()
const prizeCard2 = ref<HTMLDivElement>()
const prizeCard1 = ref<HTMLDivElement>()
const prizeContainer = ref<HTMLDivElement>()

onMounted(() => {
    // make the prize cards invisible at start and animate them from bottom to top and make them visible when scrolled to them
    gsap.set([prizeCard1.value, prizeCard2.value, prizeCard3.value], { autoAlpha: 0, y: 50 })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to([prizeCard1.value, prizeCard2.value, prizeCard3.value], {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.5,
                })
                observer.unobserve(entry.target)
            }
        })
    }, {
        root: null,
        rootMargin: "0px",
    })

    observer.observe(prizes.value as HTMLDivElement)
})

</script>

<style lang="scss" scoped>
#prizes {
    width: 100vw;
    // min-height: 100vh;


    &>div {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        gap: 1.5rem;
        padding: 0rem 1rem;
        margin-bottom: 2rem;

        @include mq(sm) {
            gap: 2rem;
            padding: 1.5rem;
            padding-top: 0rem;
            margin-bottom: 2.2rem;
        }

        @include mq(718px) {
            gap: 3rem;
            grid-template-columns: repeat(3, 1fr);
            padding: 2rem;
            padding-top: 0rem;
            margin-bottom: 2.5rem;
        }

        @include mq(lg) {
            width: 100%;
            gap: 4rem;
            margin-bottom: 3rem;
        }

        @include mq(xl) {
            width: 80%;
            gap: 5rem;
            padding-top: 1rem;
        }
    }
}


h2 {
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    height: 12.5%;
    margin-block: 2rem;

    @include mq(sm) {
        font-size: 1.8rem;
        margin-block: 2.2rem;
    }

    @include mq(md) {
        margin-block: 2.5rem;
    }

    @include mq(lg) {
        margin-block: 3rem;
    }

    @include mq(lg) {
        font-size: 2.5rem;
    }

    @include mq(xl) {
        font-size: 3rem;
    }
}


.prize-card {
    aspect-ratio: 4 / 5.5;
    background-color: rgba($color: $brandBlue, $alpha: 0.5);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;


    &:hover {
        transform: scale(1.05);
    }


    @include mq(sm) {}

    @include mq(md) {}

    @include mq(lg) {}

    // @include mq(xl) {
    //     width: 600px;
    // }

    &::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 130%;
        animation: rotatePrizeCardBackground 3s linear infinite;
        transition: all 0.2s linear;
    }


    &:nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;


        @include mq(718px) {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }



        @include mq(768px) {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
        }


        @include mq(918px) {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }

        &::before {
            background-image: linear-gradient(180deg, #CD7F32, #CD7F32);
        }
    }

    &:nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;



        @include mq(718px) {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }


        @include mq(768px) {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }

        @include mq(918px) {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }

        &::before {
            background-image: linear-gradient(180deg, #FFD700, #FFD700);
        }
    }

    &:nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;

        @include mq(718px) {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
        }


        @include mq(768px) {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }




        @include mq(918px) {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
        }

        &::before {
            background-image: linear-gradient(180deg, #C0C0C0, #C0C0C0);
        }
    }

    &__details {
        content: '';
        position: absolute;
        background-color: #07182E;
        inset: 5px;
        border-radius: 15px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        gap: 1.5rem;


        img {
            width: 75%;
        }

        p {
            color: #fff;
            font-size: 1.2rem;
            font-weight: bold;

            @include mq(sm) {
                font-size: 1.3rem;
            }

            @include mq(md) {
                font-size: 1.4rem;
            }

            @include mq(lg) {
                font-size: 1.5rem;
            }

            @include mq(xl) {
                font-size: 1.8rem;
            }
        }
    }

    h3 {
        z-index: 1;
        color: white;
        font-size: 1.2rem;
        text-align: center;

        @include mq(sm) {
            font-size: 1.3rem;
        }

        @include mq(md) {
            font-size: 1.4rem;
        }

        @include mq(lg) {
            font-size: 1.4rem;
        }

        @include mq(xl) {
            font-size: 1.5rem;
        }
    }
}

@keyframes rotatePrizeCardBackground {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>