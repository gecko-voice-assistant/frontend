<!--
This file is part of G.E.C.K.O.
Copyright (C) 2023  Finn Wehn

G.E.C.K.O. is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<script>
import { downloadSkill, getAllDownloadableSkills } from "@/services/APIService";

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
            downloadSkill(skillName, versionTag)
                .then(() => this.loadDownloadableSkills())
                .catch(alert);
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
                        :disabled="version === skill['installed']"
                        :selected="version === skill['latest']"
                    >
                        {{ version }}
                    </option>
                </select>
                <button
                    class="default-button"
                    @click="downloadSkill(skill['name'], skill['selected'])"
                    :disabled="skill['selected'] === skill['installed']"
                >
                    {{ $t("downloadPage.download") }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
