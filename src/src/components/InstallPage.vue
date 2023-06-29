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
import { installSkill } from "@/services/APIService";
import LoadingBar from "@/components/LoadingBar.vue";

export default {
    name: "InstallPage",
    components: { LoadingBar },
    data() {
        return {
            loading: false,
            skillName: "",
            versionTag: "",
            validation: {}
        };
    },
    methods: {
        validateForm() {
            this.validation = {
                skillName: !this.skillName.trim().match(/^[a-zA-Z0-9_-]*$/m),
                versionTag: !this.versionTag.trim().match(/^\d{1,4}\.\d{1,4}\.\d{1,4}$/m),
                skillFile: !this.$refs.skillFiles.files.length > 0
            };

            return Object.values(this.validation).filter((value) => value).length === 0;
        },
        install() {
            if (!this.validateForm()) return;
            this.loading = true;

            installSkill(this.skillName, this.versionTag, this.$refs.skillFiles.files[0])
                .then(() => {
                    this.$refs.form.reset();
                    this.skillName = "";
                    this.versionTag = "";
                    this.loading = false;
                })
                .catch(alert);
        }
    }
};
</script>

<template>
    <div class="flex flex-col justify-items-start items-center h-[95%] gap-10">
        <LoadingBar :showing="loading" :title="$t('installPage.installing')"></LoadingBar>
        <h1 class="text-4xl">{{ $t("installPage.heading") }}</h1>
        <h2 class="text-2xl">{{ $t("installPage.subheading") }}</h2>
        <div class="w-1/2 border-b-2 mt-2 border-b-main-medium"></div>

        <form @submit.prevent="install" ref="form" class="w-1/2 flex flex-col items-center gap-3">
            <div class="w-2/3 flex flex-col justify-center items-center">
                <div class="flex justify-between px-4 w-full">
                    <label class="w-1/3">SkillName:</label>
                    <input type="text" v-model="skillName" class="default-input w-2/3" required />
                </div>
                <p v-if="validation['skillName']" class="text-red-700 text-center">
                    {{ $t("installPage.validationHints.skillName") }}
                </p>
            </div>

            <div class="w-2/3 flex flex-col justify-center items-center">
                <div class="flex justify-between px-4 w-full">
                    <label class="w-1/3">VersionTag:</label>
                    <input type="text" v-model="versionTag" class="default-input w-2/3" required />
                </div>
                <p v-if="validation['versionTag']" class="text-red-700 text-center">
                    {{ $t("installPage.validationHints.versionTag") }}
                </p>
            </div>

            <div class="w-2/3 flex flex-col justify-center items-center">
                <div class="flex justify-between px-4 w-full">
                    <label class="w-1/3">Dateien:</label>
                    <input type="file" accept=".zip" ref="skillFiles" class="default-input w-2/3" required />
                </div>
                <p v-if="validation['skillFile']" class="text-red-700 text-center">
                    {{ $t("installPage.validationHints.skillFile") }}
                </p>
            </div>

            <div class="w-full border-b-2 mt-8 border-b-main-medium"></div>

            <div class="flex gap-5">
                <button type="submit">{{ $t("installPage.install") }}</button>
                <button type="reset">{{ $t("installPage.reset") }}</button>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
