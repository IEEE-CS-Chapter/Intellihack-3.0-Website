<template>
    <section id="prizes">
        <h2>Prizes</h2>
        <div>
            <div class="prize-card">
                <h3>Third Place</h3>
            </div>
            <div class="prize-card">
                <h3>First Place</h3>
            </div>
            <div class="prize-card">
                <h3>Second Place</h3>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#prizes {
    width: 100vw;
    min-height: 100vh;
    background-color: $brandBlack;


    &>div {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        gap: 1.5rem;
        padding: 1rem;

        @include mq(sm) {
            gap: 2rem;
            padding: 2rem;
        }

        @include mq(md) {
            gap: 3rem;
            grid-template-columns: repeat(3, 1fr);
            padding: 3rem;
        }

        @include mq(lg) {
            width: 100%;
            gap: 4rem;
        }

        @include mq(xl) {
            width: 80%;
            gap: 5rem;
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


.prize-card {
    aspect-ratio: 4 / 5;
    background-color: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;


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


        @include mq(md) {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
        }


        @include mq(xl) {
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



        @include mq(md) {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }


        @include mq(md) {
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

        @include mq(md) {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }


        @include mq(xl) {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
        }

        &::before {
            background-image: linear-gradient(180deg, #C0C0C0, #C0C0C0);
        }
    }

    &::after {
        content: '';
        position: absolute;
        background: #07182E;
        inset: 5px;
        border-radius: 15px;
    }

    h3 {
        z-index: 1;
        color: white;
        font-size: 1.8rem;
        text-align: center;
    }


}
</style>