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
import { getAllSkills } from "@/services/APIService";

export default {
    name: "HomePage",
    data() {
        return {
            skills: []
        };
    },
    methods: {
        loadSkills() {
            getAllSkills()
                .then((response) => {
                    this.skills = response;
                })
                .catch(console.error);
        }
    },
    mounted() {
        this.loadSkills();
    }
};
</script>

<template>
    <div class="flex flex-col justify-items-start items-center h-[95%] gap-10">
        <h1 class="text-4xl">{{ $t("homePage.heading") }}</h1>
        <div class="text-lg h-full overflow-y-auto flex flex-col justify-items-start items-start px-5">
            <table class="w-full table-fixed m-0">
                <thead class="sticky top-0">
                    <tr class="bg-accent-medium text-accent-light">
                        <th class="w-1/5">{{ $t("homePage.name") }}</th>
                        <th class="w-3/5">{{ $t("homePage.description") }}</th>
                        <th class="w-1/10">{{ $t("homePage.version") }}</th>
                        <th class="w-1/10">{{ $t("homePage.active") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <RouterLink
                        custom
                        v-slot="{ navigate }"
                        v-for="(skill, i) in skills"
                        :to="'skill/' + skill['name']"
                        :key="skill['name']"
                    >
                        <tr
                            @click="navigate"
                            :class="{ 'bg-main-medium': (i % 2) - 1 }"
                            class="hover:bg-accent-light text-text-normal hover:text-main-dark cursor-pointer"
                        >
                            <td>{{ skill["name"] }}</td>
                            <td>{{ skill["description"].toString().replaceAll(/<.*?>/g, "") }}</td>
                            <td>{{ skill["version"] }}</td>
                            <td>{{ $t(skill["active"].toString()) }}</td>
                        </tr>
                    </RouterLink>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
