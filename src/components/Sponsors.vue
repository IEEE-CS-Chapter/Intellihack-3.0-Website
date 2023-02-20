<template>
    <section id="sponsors">
        <h2>Sponsors</h2>
        <div id="platinum">
            <div class="sponsor-card">
                <h3>Offcial Platinum Sponsor</h3>
                <img src="@/assets/images/sponsors/dialogLogo.webp" alt="Dialog Logo">
            </div>
        </div>
        <div id="gold">
            <div class="sponsor-card">
                <h3>Official Gold Sponsor</h3>
                <img src="@/assets/images/sponsors/lsegLogo.webp" alt="LSEG Logo">
            </div>
        </div>
        <div id="silver">
            <div class="sponsor-card">
                <h3>Official Silver Sponsor</h3>
                <img src="@/assets/images/sponsors/ifsLogo.webp" alt="IFS Logo">
            </div>
        </div>
        <div id="knowledge">
            <div class="sponsor-card">
                <h3>Official Knowledge Partner</h3>
                <img src="@/assets/images/sponsors/GDG_Logo.webp" alt="GDG Logo">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

let sponsors: HTMLDivElement;
let platinum: HTMLDivElement;
let gold: HTMLDivElement;
let silver: HTMLDivElement;
let knowledge: HTMLDivElement;

onMounted(() => {
    sponsors = document.getElementById('sponsors') as HTMLDivElement;
    platinum = document.getElementById('platinum') as HTMLDivElement;
    gold = document.getElementById('gold') as HTMLDivElement;
    silver = document.getElementById('silver') as HTMLDivElement;
    knowledge = document.getElementById('knowledge') as HTMLDivElement;

    gsap.set([platinum,  silver], { autoAlpha: 0, x: -100 })
    gsap.set([gold, knowledge], { autoAlpha: 0, x: 100 })
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to([platinum, gold, silver, knowledge], {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.25,
                    delay: 0.5,
                })
                observer.unobserve(entry.target)
            }
        })
    }, {
        root: null,
        rootMargin: '0px',
    })
    observer.observe(sponsors as HTMLDivElement)
})




</script>

<style lang="scss" scoped>
#sponsors {
    background-color: #fff;
    width: 100vw;
    min-height: 100vh;
}

h2 {
    color: $brandBlue;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    margin-block: 3rem;
    // margin-bottom: rem;

    @include mq(sm) {
        font-size: 1.8rem;
    }



    @include mq(lg) {
        font-size: 2.5rem;
        // margin-bottom: 1rem;

    }

    @include mq(xl) {
        font-size: 3rem;
        // margin-bottom: 2rem;
    }
}

#platinum {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    margin: 0 auto;


    @include mq(lg) {
        flex-direction: row;
        gap: 3rem;
        width: 70%;
    }
}

#gold {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 3rem auto 3rem auto;

    @include mq(lg) {
        width: 70%;
    }
}


#silver {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 3rem auto 3rem auto;

    @include mq(lg) {
        width: 70%;
    }
}

#knowledge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

    margin: 0 auto 3rem auto;

    @include mq(lg) {
        width: 70%;
    }

}


.sponsor-card {
    width: 99vw;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 2rem;
    transition: all 0.3s ease-in-out;
    padding: 2rem;
    font-size: 1.5rem;


    img {
        width: 90%;
        max-width: 280px;
        width: 280px;
    }

    &:hover {
        box-shadow: 0px 0px 47px -34px rgba(0, 0, 0, 0.69)
    }

    @include mq(lg) {
        width: 40vw;
        font-size: 2rem;
    }

    @include mq(xl) {
        width: 38vw;
        font-size: 2rem;
    }

    @include mq(2xl) {
        width: 33vw;
        font-size: 2rem;
    }

    h3 {
        text-align: center;
    }
}

img[alt='Dialog Logo'] {
    width: 75%;
}
</style>