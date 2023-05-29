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
import { activateSkill, deleteSkill, getSkillDetails } from "@/services/APIService";
import LoadingBar from "@/components/LoadingBar.vue";

export default {
    name: "SkillPage",
    components: { LoadingBar },
    data() {
        return {
            skillName: this.$route.params["skill"],
            description: "",
            version: "1.0",
            active: false,
            options: {},
            loading: false
        };
    },
    methods: {
        loadPage() {
            getSkillDetails(this.skillName)
                .then((response) => {
                    this.description = response["description"];
                    this.version = response["version"];
                    this.options = response["options"];
                    this.active = response["active"];
                })
                .catch(alert);
        },
        activateSkill() {
            this.loading = true;
            activateSkill(this.skillName, !this.active).then(() => {
                this.loading = false;
                this.loadPage();
            });
        },
        deleteSkill() {
            this.loading = true;
            deleteSkill(this.skillName).finally(() => this.$router.replace({ path: "/skill" }));
        }
    },
    mounted() {
        this.loadPage();
    }
};
</script>

<template>
    <div class="flex flex-col items-center gap-5 ">
        <LoadingBar
            :showing="loading"
            :title="$t('skillPage.' + (active ? 'deactivating' : 'activating'))"
        ></LoadingBar>

        <h1 class="text-4xl w-1/2 text-center">{{ skillName }}</h1>
        <h2 class="text-2xl w-1/2 text-center">{{ version }}</h2>
        <h3 class="text-xl w-1/2 text-center" v-html="description"></h3>



        <div v-if="Object.keys(options).length !== 0" class="w-1/2 border-b-2 border-b-main-medium"></div>

        <div v-if="Object.keys(options).length !== 0" class="w-1/2 flex flex-col gap-3">
            <h2 class="text-2xl">{{$t('skillPage.options')}}</h2>
            <form class="flex flex-col gap-1">
                <div v-for="(option, name) in options" v-bind:key="name">
                    <label>
                        {{ name }}
                    </label>
                    <input v-model="option['value']" class="default-input" />
                </div>
            </form>

            <button class="default-button">{{ $t("settingsPage.save") }}</button>
        </div>

        <div class="w-1/2 border-b-2 border-b-main-medium"></div>


        <div class="flex gap-5">
            <button @click="activateSkill">{{ $t("skillPage." + (active ? "deactivate" : "activate")) }}</button>
            <button @click="deleteSkill">{{ $t("skillPage.delete") }}</button>
        </div>




    </div>
</template>

<style scoped></style>
