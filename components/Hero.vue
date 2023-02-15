<template>
    <main class="hero">
        <h1>
            IntelliHack 3.0
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis debitis molestias asperiores ipsa in
            modi et consequatur quibusdam quaerat soluta tenetur necessitatibus sapiente repellat qui, impedit eos,
            maxime deleniti? Fuga quidem cum nobis minus sequi, commodi ea voluptatibus aperiam voluptatum quod eius aut
            tempore quibusdam saepe facilis. Porro ratione itaque facere, necessitatibus reiciendis sapiente repellat
            tempora.
        </p>
        <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"
            filter="blur(20px)" transform="rotate(28)" style="opacity: 1;">
            <path id="blob" fill="url(#gradient)" style="opacity: 1;">
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                    values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;">
                </animate>
            </path>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(52, 119, 254);"></stop>
                    <stop offset="100%" style="stop-color: rgb(0, 8, 250);"></stop>
                </linearGradient>
            </defs>
        </svg> -->
        <a href="/forms.google.com" class="cta">Register</a>
        <img src="~/assets/images/logo.png" alt="Intellihack Logo" class="hero-logo">
        <img src="~/assets/images/Robo-Human-Hybrid-1-Background-Removed.webp" alt="Robo Human Hybrid Woman"
            class="hero-img">
        <ScrollReminder />
    </main>

</template>

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