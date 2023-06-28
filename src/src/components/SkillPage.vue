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
import { activateSkill, deleteSkill, getSkillDetails, postOptions } from "@/services/APIService";
import LoadingBar from "@/components/LoadingBar.vue";
import SlotComponent from "@/components/SlotComponent.vue";

export default {
    name: "SkillPage",
    components: { SlotComponent, LoadingBar },
    data() {
        return {
            skillName: this.$route.params["skill"],
            description: "",
            version: "1.0",
            sentences: [],
            active: false,
            options: {},
            loading: false,
            loadingMessage: "",
            slots: [],
            slotsValues: []
        };
    },
    methods: {
        loadPage() {
            getSkillDetails(this.skillName)
                .then((response) => {
                    this.description = response["description"];
                    this.version = response["version"];

                    let slotsValues = [];
                    let sentences = [];

                    response["intents"].forEach((intent) => {
                        sentences.push(...intent["sentences"]);
                    });

                    this.sentences = sentences.map((sentence, index) => {
                        slotsValues[index] = [...sentence.matchAll(/\((.*?)\)(?:\{(\b\w*\b)})?/g)];
                        return sentence.replaceAll(/\((.*?)\)(?:\{(\b\w*\b)})?/g, "#");
                    });

                    this.slotsValues = slotsValues;
                    this.slots = response["slots"];

                    this.options = response["options"];
                    this.active = response["active"];
                })
                .catch(alert);
        },
        postOptions() {
            this.loading = true;
            this.loadingMessage = "skillPage.saveOptions";
            postOptions(this.skillName, this.options)
                .then(() => (this.loading = false))
                .catch(alert);
        },
        activateSkill() {
            this.loading = true;
            this.loadingMessage = "skillPage." + (this.active ? "deactivating" : "activating");
            activateSkill(this.skillName, !this.active).then(() => {
                this.loading = false;
                this.loadPage();
            });
        },
        deleteSkill() {
            this.loading = true;
            deleteSkill(this.skillName).finally(() => this.$router.replace({ path: "/skill" }));
        },
        getSlot(x, y) {
            const currentSlot = this.slotsValues[x][y];
            const slotValues = currentSlot[1];

            const specialChar = slotValues.replaceAll(/\s+/g, "").match(/.*(\W).*/);

            let type, alternatives;

            switch (specialChar ? specialChar[1] : "") {
                case "|":
                    type = "nameless";
                    alternatives = slotValues.split("|").map((alternative) => alternative.trim());
                    break;

                case ".":
                    type = "range";
                    alternatives = slotValues.split("..");
                    break;

                case "/":
                    type = slotValues.split("$slots/")[1];
                    alternatives = this.slots[type];
                    break;

                default:
                    type = "undefined";
                    alternatives = [];
            }

            return { type: type, alternatives: alternatives };
        }
    },
    mounted() {
        this.loadPage();
    }
};
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <LoadingBar :showing="loading" :title="$t(loadingMessage)"></LoadingBar>

        <h1 class="text-4xl w-1/2 text-center">{{ skillName }}</h1>
        <h2 class="text-2xl w-1/2 text-center">{{ version }}</h2>
        <h3 class="text-xl w-1/2 text-center" v-html="description"></h3>

        <div class="w-1/2 border-b-2 border-b-main-medium"></div>

        <!--        <div>{{ slotsValues }}</div>-->

        <div class="w-1/2 flex flex-col items-center gap-3">
            <h2 class="text-2xl">{{ $t("skillPage.sentences") }}</h2>
            <ul class="w-full">
                <li v-for="(sentence, x) in sentences" v-bind:key="x">
                    <p>
                        ...
                        <template v-for="(text, y) in sentence.split('#')" v-bind:key="y">
                            {{ text }}

                            <SlotComponent
                                v-if="text && y < sentence.split('#').length && slotsValues[x] && slotsValues[x][y]"
                                :slot-data="getSlot(x, y)"
                                :slot-name="slotsValues[x][y][2] ? slotsValues[x][y][2] : ''"
                            ></SlotComponent>
                        </template>
                    </p>
                </li>
            </ul>
        </div>

        <div v-if="Object.keys(options).length !== 0" class="w-1/2 border-b-2 border-b-main-medium"></div>

        <div v-if="Object.keys(options).length !== 0" class="w-1/2 flex flex-col items-center gap-3">
            <h2 class="text-2xl">{{ $t("skillPage.options") }}</h2>
            <div class="flex flex-col gap-2 w-full">
                <div v-for="(option, name) in options" v-bind:key="name" class="flex justify-between px-4">
                    <label class="w-1/3">
                        {{ name }}
                    </label>
                    <input v-model="option['value']" class="default-input w-2/3" />
                </div>
            </div>

            <button @click="postOptions" class="default-button">{{ $t("settingsPage.save") }}</button>
        </div>

        <div class="w-1/2 border-b-2 border-b-main-medium"></div>

        <div class="flex gap-5">
            <button @click="activateSkill">{{ $t("skillPage." + (active ? "deactivate" : "activate")) }}</button>
            <button @click="deleteSkill">{{ $t("skillPage.delete") }}</button>
        </div>
    </div>
</template>

<style scoped></style>
