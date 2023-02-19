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

        <div class="form__header">
            <div class="form__header-item" :class="activeFormBlock === 1 ? 'form__header-item--active' : ''">
                Step 1
            </div>
            <div class="form__header-item" :class="activeFormBlock === 2 ? 'form__header-item--active' : ''">
                Step 2
            </div>
            <div class="form__header-item" :class="activeFormBlock === 3 ? 'form__header-item--active' : ''">
                Step 3
            </div>
            <div class="form__header-item" :class="activeFormBlock === 4 ? 'form__header-item--active' : ''">
                Step 4
            </div>
            <div class="form__header-item" :class="activeFormBlock === 5 ? 'form__header-item--active' : ''">
                Step 5
            </div>
        </div>
        <Transition name="form" mode="out-in">
            <KeepAlive>
                <div class="form__block" v-if="activeFormBlock === 1">
                    <h3>Team Details</h3>
                    <BaseInput required label="University / Institute" v-model="formData.universityOrInstitute"
                        label-for="universityOrInstitute" id="universityOrInstitute" />
                    <BaseInput required label="Team Name" v-model="formData.teamName" label-for="teamName"
                        id="teamName" />
                    <BaseTextarea required label="Project Overview" v-model="formData.projectOverview"
                        label-for="projectOverView" id="projectOverView" />
                    <BaseFileInput required label="Upload The Proposal" label-for="proposal" id="proposal"
                        @file-selected="setFile" />
                    <div class="form__block-actions">
                        <LoadingButton :flat="false" @click="activeFormBlock = activeFormBlock + 1">
                            Next
                        </LoadingButton>
                    </div>
                </div>
                <div class="form__block" v-else-if="activeFormBlock === 2">
                    <h3>Team Leader</h3>
                    <BaseInput required label="Name" v-model="formData.teamLeader.name" label-for="teamLeaderName"
                        id="teamLeaderName" />
                    <BaseInput required label="NIC" v-model="formData.teamLeader.NIC" label-for="teamLeaderNIC"
                        id="teamLeaderNIC" />
                    <BaseInput required label="Contact No" v-model="formData.teamLeader.contactNo"
                        label-for="teamLeaderContactNo" id="teamLeaderContactNo" />
                    <BaseSelectInput v-model="formData.teamLeader.tshirtSize" :options="tshirtSizeOptions" />
                    <div class="form__block-actions">
                        <LoadingButton @click="activeFormBlock = activeFormBlock - 1">
                            Prev
                        </LoadingButton>
                        <LoadingButton :flat="false" @click="activeFormBlock = activeFormBlock + 1">
                            Next
                        </LoadingButton>
                    </div>
                </div>
                <div class="form__block" v-else-if="activeFormBlock === 3">
                    <h3>Member 1</h3>
                    <BaseInput required label="Name" v-model="formData.members[1].name" label-for="member1Name"
                        id="member1Name" />
                    <BaseInput required label="NIC" v-model="formData.members[1].NIC" label-for="member1NIC"
                        id="member1NIC" />
                    <BaseInput required label="Contact No" v-model="formData.members[1].contactNo"
                        label-for="member1ContactNo" id="member1ContactNo" />
                    <BaseSelectInput v-model="formData.members[1].tshirtSize" :options="tshirtSizeOptions" />
                    <div class="form__block-actions">
                        <LoadingButton @click="activeFormBlock = activeFormBlock - 1">
                            Prev
                        </LoadingButton>
                        <LoadingButton :flat="false" @click="activeFormBlock = activeFormBlock + 1">
                            Next
                        </LoadingButton>
                    </div>
                </div>
                <div class="form__block" v-else-if="activeFormBlock === 4">
                    <h3>Member 2</h3>
                    <BaseInput required label="Name" v-model="formData.members[2].name" label-for="member2Name"
                        id="member2Name" />
                    <BaseInput required label="NIC" v-model="formData.members[2].NIC" label-for="member2NIC"
                        id="member2NIC" />
                    <BaseInput required label="Contact No" v-model="formData.members[2].contactNo"
                        label-for="member2ContactNo" id="member2ContactNo" />
                    <BaseSelectInput v-model="formData.members[2].tshirtSize" :options="tshirtSizeOptions" />
                    <div class="form__block-actions">
                        <LoadingButton @click="activeFormBlock = activeFormBlock - 1">
                            Prev
                        </LoadingButton>
                        <LoadingButton>
                            Skip & submit
                        </LoadingButton>
                        <LoadingButton :flat="false" @click="activeFormBlock = activeFormBlock + 1">
                            Next
                        </LoadingButton>
                    </div>
                </div>
                <div class="form__block" v-else-if="activeFormBlock === 5">
                    <h4>Member 3</h4>
                    <BaseInput required label="Name" v-model="formData.members[3].name" label-for="member3Name"
                        id="member3Name" />
                    <BaseInput required label="NIC" v-model="formData.members[3].NIC" label-for="member3NIC"
                        id="member3NIC" />
                    <BaseInput required label="Contact No" v-model="formData.members[3].contactNo"
                        label-for="member3ContactNo" id="member3ContactNo" />
                    <BaseSelectInput v-model="formData.members[3].tshirtSize" :options="tshirtSizeOptions" />
                    <div class="form__block-actions">
                        <LoadingButton @click="activeFormBlock = activeFormBlock - 1">
                            Prev
                        </LoadingButton>
                        <LoadingButton>
                            Skip & submit
                        </LoadingButton>
                        <LoadingButton :flat="false" @click="createTeamAndUploadSubmission" :loading="isLoading">
                            Register
                        </LoadingButton>
                    </div>
                </div>
            </KeepAlive>
        </Transition>
    </section>
</template>

<script setup lang="ts">
import { createTeam } from "@/api/create-proposal-submission"
import { RawTeamFormData, TshirtSize, TshirtSizeOptions } from '@/types'
import { validateCreateTeamBody } from "@/utils/validators";
import IconExternalLinkFill from "~icons/ri/external-link-fill"

const activeFormBlock = ref(1)


const tshirtSizeOptions: TshirtSizeOptions = ['XS', 'S', 'M', 'L', 'XL']

const formData = ref<RawTeamFormData>({
    universityOrInstitute: "",
    teamName: "",
    projectOverview: "",
    proposal: null,
    members: {
        "1": {
            contactNo: "",
            name: "",
            NIC: "",
            tshirtSize: "XS"
        }
        ,
        "2": {
            contactNo: "",
            name: "",
            NIC: "",
            tshirtSize: "XS"
        },
        "3": {
            contactNo: "",
            name: "",
            NIC: "",
            tshirtSize: "XS"
        }
    },
    teamLeader: {
        contactNo: "",
        name: "",
        NIC: "",
        tshirtSize: "XS",
    }
})


const selectedFile = ref<File | null>(null)

function setFile(file: File) {
    selectedFile.value = file
}

const isLoading = ref(false)
async function createTeamAndUploadSubmission() {
    try {

        isLoading.value = true
        const errors = validateCreateTeamBody({ ...(formData.value), proposal: selectedFile.value })
        if (errors.length > 0) {
            throw new Error(errors.join(", "))
        } else {
            await createTeam({
                ...(formData.value), proposal: selectedFile.value as File, members: {
                    1: {
                        ...formData.value.members[1],
                        tshirtSize: formData.value.members[1].tshirtSize as TshirtSize
                    },
                    2: {
                        ...formData.value.members[2],
                        tshirtSize: formData.value.members[2].tshirtSize as TshirtSize
                    },
                    3: {
                        ...formData.value.members[3],
                        tshirtSize: formData.value.members[3].tshirtSize as TshirtSize
                    }
                },
                teamLeader: {
                    ...formData.value.teamLeader,
                    tshirtSize: formData.value.teamLeader.tshirtSize as TshirtSize


                }
            })
        }
    }
    catch (error) {
        alert(error)
    } finally {
        isLoading.value = false
    }
}

</script>

<style lang="scss" scoped>
#submissions {
    min-height: 100vh;
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