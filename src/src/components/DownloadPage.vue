<script>
import { downloadSkill, getAllDownloadableSkills } from "@/services/SkillService";

export default {
    name: "DownloadPage",
    data() {
        return {
            skills: {}
        };
    },
    methods: {
        loadDownloadableSkills() {
            getAllDownloadableSkills()
                .then((response) => {
                    let skills = response["skills"];

                    for (let skillName in skills) {
                        skills[skillName]["selected"] = skills[skillName]["latest"];
                        this.skills[skillName] = skills[skillName];
                    }
                })
                .catch(alert);
        },
        downloadSkill(skillName, versionTag) {
            downloadSkill(skillName, versionTag).catch(alert);
        }
    },
    mounted() {
        this.loadDownloadableSkills();
    }
};
</script>

<template>
    <div class="flex flex-col justify-items-start items-center h-[95%] gap-10">
        <h1 class="text-4xl">{{ $t("downloadPage.heading") }}</h1>
        <div class="flex justify-center items-center gap-3 flex-wrap">
            <div
                v-for="skill in skills"
                :key="skill['name']"
                class="w-56 h-56 bg-main-medium rounded-xl flex flex-col items-center justify-between py-7 gap-2"
            >
                <h1 class="text-accent-light">{{ skill["name"] }}</h1>
                <select class="bg-accent-medium px-2 p-1 rounded-lg" v-model="skill['selected']">
                    <option
                        v-for="(version, index) in skill['versions']"
                        :key="index"
                        :selected="version === skill['latest']"
                    >
                        {{ version }}
                    </option>
                </select>
                <button
                    class="bg-accent-medium px-2 p-1 rounded-lg"
                    @click="downloadSkill(skill['name'], skill['selected'])"
                >
                    {{ $t("downloadPage.download") }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
