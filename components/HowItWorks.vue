<template>
    <div id="how-it-works">
        <h2>How It Works</h2>
        <div id="timeline">
            <div id="pipe" ref="pipe">
                <div id="pipe-progress" ref="pipeProgress">

                </div>
            </div>
            <div class="timeline-event" v-for="event in timelineItems" :key="event.title">
                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const timelineItems = [{
    title: "Proposal Submissions Open",
    description: `The proposal submissions for the initial phase will be opened. 
    The initial round will be an ideathon. The problem should be from one of the given domains, 
    or if contestants choose a different domain, they can use the wildcard option. 
    They must submit a proposal describing the machine learning solution to the problem within the selected area.`,
    date: `11-05-2022`
},
{
    title: "Proposal Submissions Close",
    description: `The submissions for the ideathon will be closed. 
    The best ten submissions selected by the evaluation panel will be selected for the final round.`,
    date: `11-05-2022`
},
{
    title: "Intellihack2.0 Master-Registrations Open",
    description: `The registrations for the intellihack2.0 master will be opened. 
    Any individual is able to get the chance to face machine learning-related tasks posted on our social media platforms on a weekly basis. 
    A leaderboard will be maintained throughout the competition.`,
    date: `11-05-2022`
},
{
    title: "Intellihack2.0 Master-Registrations Close",
    description: `The registrations for the intellihack2.0 master will be closed. 
    Winners will be chosen according to the leaderboard and they will be awarded the title of “IntelliHack Master” and valuable prizes.`,
    date: `11-05-2022`
},
{
    title: "Proposal Evaluation Stage",
    description: `The proposals submitted during the initial phase will be evaluated during this period and the finalists will be announced.`,
    date: `11-05-2022`
},
{
    title: "Final Round Start",
    description: `The submissions for the final hackathon will be opened. 
    The submitted proposals will be shortlisted into ten teams. 
    The top ten contestants need to implement the idea that they had proposed in the initial phase. 
    The solution must meet the conditions specified in the submitted proposal.`,
    date: `11-05-2022`
},

{
    title: "Final Presentation And Close Event",
    description: `The submissions for the hackathon will be closed. 
    Submissions of the top ten contestants will be evaluated after this stage.`,
    date: `11-05-2022`
}
]

const pipe = ref<HTMLDivElement>()
const pipeProgress = ref<HTMLDivElement>()
const { y } = useElementBounding(pipe)

watch(y, () => {
    if (pipe && pipe.value && pipeProgress && pipeProgress.value) {
        const rawHeightOfPipe = window.innerHeight - y.value - 100
        const pipeTotalHeight = pipe.value.getBoundingClientRect().height
        const percentageOfPipeShown = (rawHeightOfPipe / pipeTotalHeight) * 100
        console.log(percentageOfPipeShown)
        if (percentageOfPipeShown > 0) {
            pipeProgress.value.style.height = `${percentageOfPipeShown}%`
        }
    }
})
</script>

<style lang="scss" scoped>
#how-it-works {
    width: 100vw;
    min-height: 100vh;
    background-color: $brandBlack;
}

h2 {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    height: 12.5%;
    margin-top: 2rem;

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

#timeline {
    position: relative;
    margin: 2rem auto 2rem auto;
    width: 100vw;
    height: 80vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;


    @include mq(lg) {
        width: 75vw;
    }
}

#pipe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1.5rem;
    transform: translateX(-50%);
    width: 0.2rem;
    background-color: #999;
    border-radius: 100px;

    @include mq(lg) {
        left: 50%;
    }
}

#pipe-progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-radius: 100px;
    box-shadow: 0 0 15px 7.5px $brandBlue;
}

.timeline-event {
    width: 80%;
    min-height: 300px;
    background-color: #fff;
    align-self: flex-end;
    transform: translateX(-1rem);
    padding: 2rem 1.5rem;
    border-radius: 1rem;


    @include mq(lg) {
        width: 50%;
        transform: translateX(-3rem);
        align-self: flex-start;
    }
}

.timeline-event h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.timeline-event:nth-child(even) {
    background-color: red;
    align-self: flex-end;


    @include mq(lg) {
        transform: translateX(3rem);
    }
}
</style>


