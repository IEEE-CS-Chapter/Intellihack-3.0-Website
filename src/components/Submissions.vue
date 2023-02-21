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
        <AppButton class="submission-link" :is-link="true" href="https://bit.ly/intellihack3-proposal-submission" target="_blank" >
            Submit your application
        </AppButton>
    </section>
</template>

<script setup lang="ts">
import IconExternalLinkFill from "~icons/ri/external-link-fill"
</script>

<style lang="scss" scoped>
#submissions {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 1rem;
}

h2 {
    color: $brandBlue;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    margin-block: 2rem;

    @include mq(sm) {
        font-size: 1.8rem;
        margin-block: 2.2rem;
    }

    @include mq(md) {
        margin-block: 2.5rem;
    }


    @include mq(lg) {
        font-size: 2.5rem;
        margin-block: 3rem;
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
    color: $brandBlue;
    margin: 1rem auto;
    width: max-content;
}

a.submission-link {
    margin: 1.5rem auto;

    @include mq(lg) {
        margin: 2rem auto;
    }

    @include mq(xl) {
        margin: 3rem auto;
    }
}

</style>