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
import { getSettings, postSettings } from "@/services/APIService";
import LoadingBar from "@/components/LoadingBar.vue";

export default {
    name: "SettingsPage",
    components: { LoadingBar },
    data() {
        return {
            loading: false,
            skillmanagerVersion: "",
            settings: {
                skillmanager: {},
                frontend: {
                    language: "de_DE"
                }
            }
        };
    },
    methods: {
        getSettings() {
            getSettings().then((information) => {
                this.settings.skillmanager = information["settings"];
                // this.skillmanagerVersion = information["version"];
            });
        },
        postSettings() {
            this.loading = true;
            postSettings(this.settings.skillmanager)
                .then(() => (this.loading = false))
                .catch(alert);
        }
    },
    mounted() {
        this.getSettings();
    }
};
</script>

<template>
    <div class="flex flex-col justify-items-start items-center h-[95%] gap-40">
        <LoadingBar :showing="loading" :title="$t('settingsPage.saving')"></LoadingBar>

        <h1 class="text-4xl">{{ $t("settingsPage.heading") }}</h1>
        <div class="w-2/5 h-full flex flex-col gap-2">
            <div
                v-for="(value, setting) in settings.skillmanager"
                v-bind:key="setting"
                class="flex justify-between px-4"
            >
                <label class="w-1/3">
                    {{ setting.toUpperCase() }}
                </label>
                <input v-model="settings.skillmanager[setting]" class="default-input w-2/3" />
            </div>
            <button @click="postSettings" class="default-button">{{ $t("settingsPage.save") }}</button>
        </div>
    </div>
</template>

<style scoped></style>
