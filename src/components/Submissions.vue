<template>
    <section id="submissions">
        <h2>Proposal Submissions</h2>
        <p class="text-center text-2xl font-bold">You can download</p>
        <a class="text-lg  text-[var(--color-brand-blue)]"
            href="https://docs.google.com/document/d/1mrExAJwIrDrr4O2Uj9i0kvtFLac4Dwkh/edit?usp=sharing&ouid=116367104644039849362&rtpof=true&sd=true"
            target="_blank">

            Proposal template here
            <IconExternalLinkFill />
        </a>
        <a class="text-lg  text-[var(--color-brand-blue)]"
            href="https://drive.google.com/drive/folders/1nVO9421uGZjR5Ep6OIpRIO2gfqotY70n?usp=sharing"
            target="_blank"
            >
            Booklet here
            <IconExternalLinkFill />
        </a>
        <a class="text-lg  text-[var(--color-brand-blue)]"
            href="https://drive.google.com/drive/folders/1drfWDhF2UbtIQaNknDaERVyjsxEyKI0l?usp=share_link"
            target="_blank"
            >
            Rules & Regulations
            <IconExternalLinkFill />
        </a>
    </section>
</template>

<script setup lang="ts">
import IconExternalLinkFill from "~icons/ri/external-link-fill"
</script>

<style lang="scss" scoped>
#submissions {
    width: 100vw;
    background-color: #fff;
    padding-bottom: 1rem;
}

h2 {
    color: $brandBlue;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    margin-block: 3rem;

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

a {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.form__header {
    color: #222;
    display: flex;
    justify-content: stretch;
    align-items: center;
    width: 95%;
    max-width: 560px;
    overflow-x: auto;
    margin: 3rem auto 0 auto;

    @include mq(lg) {
        width: 50%;
    }
}


.form__header-item {
    padding: 1rem;
    position: relative;
    width: 60px;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    display: grid;
    place-items: center;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background-color: $brandBlue;
        border-radius: 100px;
        transition: all 0.3s ease-in-out;
    }

    &--active {
        width: 175px;

        @include mq(lg) {
            width: 250px;
        }
    }


    @include mq(lg) {
        width: 100px;
    }

    &--active::after {
        width: 100%;
    }
}

.form__block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 95%;
    margin: 0 auto;
    padding-block: 2rem;

    @include mq(lg) {
        width: 50%;
    }

    h3 {
        font-size: 1.5rem;
    }
}

.form__block-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
}

.form-enter-active {
    transition: transform 0.3s linear, opacity 0.4s linear;
}

.form-leave-active {
    transition: transform 0.3s linear, opacity 0.2s linear;
}

.form-enter-from {
    transform: translateX(20%);
    opacity: 0;
}

.form-leave-to {
    transform: translateX(-20%);
    opacity: 0;
}

.form-enter-to {
    transform: translateX(0rem);
    opacity: 1;
}

.form-leave-from {
    transform: translateX(0rem);
    opacity: 1;
}
</style>