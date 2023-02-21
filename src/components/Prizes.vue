<template>
    <section id="prizes">
        <h2>Prizes</h2>
        <div>
            <div class="prize-card" id="price-card-1">
                <div class="prize-card__details">
                    <h3>Third Place</h3>
                    <img src='@/assets/images/Bronze Trophy.png' alt="Bronze Laurel">
                    <p>Rs. 50 000</p>
                </div>
            </div>
            <div class="prize-card" id="price-card-2">
                <div class="prize-card__details">
                    <h3>First Place</h3>
                    <img src='@/assets/images/Gold Trophy.png' alt="Gold Laurel">
                    <p>Rs. 100 000</p>
                </div>
            </div>
            <div class="prize-card" id="price-card-3">
                <div class="prize-card__details">
                    <h3>Second Place</h3>
                    <img src='@/assets/images/Silver Trophy.png' alt="Silver Laurel">
                    <p>Rs. 75 000</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'


let prizes: HTMLDivElement
let prizeCard3: HTMLDivElement
let prizeCard2: HTMLDivElement
let prizeCard1: HTMLDivElement

onMounted(() => {

    prizes = document.getElementById('prizes') as HTMLDivElement
    prizeCard3 = document.getElementById('price-card-3') as HTMLDivElement
    prizeCard2 = document.getElementById('price-card-2') as HTMLDivElement
    prizeCard1 = document.getElementById('price-card-1') as HTMLDivElement

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to([prizeCard1, prizeCard2, prizeCard3], {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.25,
                    delay: 0.5,
                })
                observer.unobserve(entry.target)
            }
        })
    }, {
        root: null,
        rootMargin: "0px",
    })

    observer.observe(prizes as HTMLDivElement)
})

</script>

<style lang="scss" scoped>
#prizes {
    width: 100vw;
    overflow: hidden;


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
    justify-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100px);

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
        justify-content: center;
        gap: 2rem;


        @include mq(sm) {
            gap: 3rem;
        }


        @include mq(718px) {
            gap: 2rem;
        }


        img {
            width: 55%;
        }

        p {
            color: #fff;
            font-size: 1.4rem;
            font-weight: bold;

            @include mq(sm) {
                font-size: 1.5rem;
            }

            @include mq(md) {
                font-size: 1.6rem;
            }

            @include mq(lg) {
                font-size: 1.8rem;
            }

            @include mq(xl) {
                font-size: 2rem;
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