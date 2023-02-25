<script setup lang="ts">
import gsap from "gsap"
import imagesLoaded from 'imagesloaded'


function randomFunctionFactory(value: number) {
    return () => {
        return value * Math.random() - value / 2;
    };
}

const whatTheySay = ref<HTMLDivElement>()
const slideImages = ref<HTMLDivElement[]>()

const { y } = useElementBounding(whatTheySay)
const loadedOnce = ref(false)

watch(y, () => {
    if (y.value < 200 && !loadedOnce.value) {
        if (slideImages.value) {
            const timeline = gsap.timeline();
            timeline
                .set(slideImages.value, {
                    x: randomFunctionFactory(500),
                    y: "500%",
                    rotation: randomFunctionFactory(90),
                    opacity: 1,
                })
                .to(slideImages.value, { x: 0, y: 0, z: 1, stagger: -0.25 })
                .to(slideImages.value, {
                    rotation: randomFunctionFactory(16),
                });
        }
        loadedOnce.value = true
    }
})


const sayings = [
    {
        name: "Sathsarani",
        quote: "The moments we share are the moments we keep forever.",
        position: "Finalist - Intellihack 2019",
        profession: "Neuro Nerds from SLIIT",
        url: "/posts/Instagram post - 1.webp",
    },
    {
        name: "Sasindu",
        quote: "Every moment past is a learning experience to grow on.",
        position: "Winning team - IntelliHack 2019",
        profession: "Secret agents from SLIIT",
        url: "/posts/Instagram post - 2.webp",
    }, {
        name: "Chathura",
        quote: "Memories fade but experience holds our hand forever.",
        position: "Finalist - IntelliHack 2019",
        profession: "Runners Up - IntelliHack 2.0",
        url: "/posts/Instagram post - 3.webp",
    }, {
        name: "Sahan",
        quote: "A tour to the past, to capture the best moments that last.",
        position: "Finalist - IntelliHack 2019",
        profession: "IntelliHack Master from UCSC",
        url: "/posts/Instagram post - 4.webp",
    },
]

onMounted(() => {
    const slides = document.querySelectorAll(".showcase-pictures");


    slides.forEach((slide) => {
        let current = -1;
        let zIndex = 1000000000;
        let direction = "125%";

        if (slideImages.value) {
            slideImages.value.forEach((image) => {
                image.style.zIndex = `${--zIndex}`;
            })

            gsap.set(slideImages.value, { opacity: 0 });
            slide.addEventListener("click", () => {
                --zIndex;
                current = (current + 1) % (slideImages.value as HTMLDivElement[]).length;

                let midAngle = 15;
                if (direction === "-125%") {
                    midAngle = -15;
                }

                const currentImage = (slideImages.value as HTMLDivElement[])[current];

                const flipTimeline = gsap.timeline();
                flipTimeline
                    .set(currentImage, { x: 0 })
                    .to(currentImage, {
                        x: direction,
                        rotation: midAngle,
                        scale: 1.05,
                    })
                    .set(currentImage, { zIndex })
                    .to(currentImage, {
                        x: 0,
                        rotation: randomFunctionFactory(16),
                        scale: 1,
                    });

                if (direction === "125%") {
                    direction = "-125%";
                } else {
                    direction = "125%";
                }
            });
        }

    });
})


let current = -1;
let zIndex = 1000000000;
let direction = "125%";



function nextSaying() {
    --zIndex;
    current = (current + 1) % (slideImages.value as HTMLDivElement[]).length;


    let midAngle = 15;
    if (direction === "-125%") {
        midAngle = -15;
    }

    const currentImage = (slideImages.value as HTMLDivElement[])[current];
    console.log(currentImage)
    const flipTimeline = gsap.timeline();
    flipTimeline
        .set(currentImage, { x: 0 })
        .to(currentImage, {
            x: direction,
            rotation: midAngle,
            scale: 1.05,
        })
        .set(currentImage, { zIndex })
        .to(currentImage, {
            x: 0,
            rotation: randomFunctionFactory(16),
            scale: 1,
        });

    if (direction === "125%") {
        direction = "-125%";
    } else {
        direction = "125%";
    }
}


// function previousSaying() {
//     console.log("Called")
//     ++zIndex;
//     // current = (current - 1) % (slideImages.value as HTMLDivElement[]).length;
//     if (current === 0) {
//         current = (slideImages.value as HTMLDivElement[]).length - 1;
//     } else if (current === -1) {
//         current = (slideImages.value as HTMLDivElement[]).length - 1;
//     } else {
//         --current;
//     }

//     let midAngle = 15;
//     if (direction === "125%") {
//         midAngle = -15;
//     }

//     const currentImage = (slideImages.value as HTMLDivElement[])[current];
//     const flipTimeline = gsap.timeline();
//     flipTimeline
//         .set(currentImage, { x: 0 })
//         .to(currentImage, {
//             x: direction,
//             rotation: midAngle,
//             scale: 1.05,
//         })
//         .set(currentImage, { zIndex })
//         .to(currentImage, {
//             x: 0,
//             rotation: randomFunctionFactory(16),
//             scale: 1,
//         });

//     if (direction === "-125%") {
//         direction = "125%";
//     } else {
//         direction = "-125%";
//     }
// }
</script>


<template>
    <section id="what-they-say" ref="whatTheySay">
        <h2>What They Say</h2>
        <div class="showcase-pictures">
            <div class="showcase-pictures--slides">
                <div class="slide-image" v-for="{ name, position, profession, quote, url } in sayings" :key="url"
                    ref="slideImages">
                    <img v-lazy="{ src: url }" :alt="profession">
                    <div>
                        <h3>{{ name }}</h3>
                        <p>{{ quote }}</p>
                        <!-- <span>{{ position }}</span> -->
                        <span>{{ profession }}</span>
                    </div>
                </div>
            </div>
            <!-- <Icon name="uil:angle-left"  /> -->
            <!-- <Icon name="uil:angle-right"  /> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
#what-they-say {
    width: 100vw;
    min-height: 100vh;
    overflow-y: hidden;
}


h2 {
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    height: 12.5%;
    margin-top: 3rem;

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


.showcase {
    display: flex;
    width: 100%;
}

.showcase--alt {
    flex-direction: row-reverse;
}

.showcase-pictures {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    // cursor: pointer;
    position: relative;


    svg {
        font-size: 4rem;
        color: red;
        position: absolute;
        color: $brandBlue;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }

        &:nth-child(2) {
            left: 0;


            @include mq(lg) {
                left: 25%;
            }

            @include mq(xl) {
                left: 25%;
            }

            &:hover {
                transform: scale(1.1) translateX(-10px);
            }
        }

        &:last-child {
            right: 1rem;


            @include mq(lg) {
                right: calc(25% + 1rem);
            }

            @include mq(xl) {
                right: calc(25% + 1rem);
            }


            &:hover {
                transform: scale(1.1) translateX(10px);
            }
        }
    }
}

.showcase-pictures--slides {
    width: 400px;
    aspect-ratio: 2 / 3;
    position: relative;
    perspective: 800px;
    margin-top: -1rem;


    @include mq(sm) {
        margin-top: 2.5rem;
    }


    @include mq(xl) {
        margin-top: 3rem;
    }
}

.slide-image {
    position: absolute;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #151515;
    cursor: pointer;


    &>div {
        padding: 1rem;
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        p {
            margin-block: 0rem 1rem;
        }

        span {
            font-size: 0.9rem;
            color: $brandBlue;
        }
    }

}

.showcase-pictures--slides img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 0.2rem;
}

@media (max-width: 1080px) {
    .showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }

    .showcase--alt {
        flex-direction: column;
    }

    .showcase-pictures {
        width: 100%;
        padding-block: 4rem;
    }
}

@media (max-width: 700px) {
    .showcase-pictures--slides {
        width: 80vw;
    }
}
</style>