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
import { getSettings } from "@/services/APIService";

export default {
    name: "SettingsPage",
    data() {
        return {
            settings: {
                skillmanager: {},
                frontend: {
                    language: "de_DE",
                    asfdg: "de_DE",
                    sdfghj: "de_DE",
                    ysdafghad: "de_DE"
                }
            }
        };
    },
    methods: {
        getSettings() {
            getSettings().then((settings) => (this.settings.skillmanager = settings));
        }
    },
    mounted() {
        this.getSettings();
    }
};
</script>

<template>
    <div class="flex flex-col justify-items-start items-center h-[95%] gap-10">
        <h1 class="text-4xl">{{ $t("settingsPage.heading") }}</h1>
        <div class="w-1/2 flex flex-col gap-3">
            <h2 class="text-2xl">Frontend</h2>
            <form class="flex flex-col gap-1">
                <div v-for="(value, setting) in settings.frontend" v-bind:key="setting">
                    <label>
                        {{ setting.toUpperCase() }}
                    </label>
                    <input v-model="settings.frontend[setting]" class="default-input" />
                </div>
            </form>

            <button class="default-button">{{ $t("settingsPage.save") }}</button>
        </div>
        <div class="w-1/2 border-b-2 border-b-main-medium"></div>
        <div class="w-1/2 flex flex-col gap-3">
            <h2 class="text-2xl">Skillmanager</h2>
            <div class="flex flex-col gap-1">
                <div v-for="(value, setting) in settings.skillmanager" v-bind:key="setting">
                    <label>
                        {{ setting.toUpperCase() }}
                    </label>
                    <input v-model="settings.skillmanager[setting]" class="default-input" />
                </div>
            </div>

            <button class="default-button">{{ $t("settingsPage.save") }}</button>
        </div>
    </div>
</template>

<style scoped></style>
