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
<script setup>
import NavbarItem from "@/components/NavbarItem.vue";
import { supportedLocales as locales } from "@/i18n";
</script>

<template>
    <div
        class="w-56 border-r-2 border-r-main-medium flex flex-col justify-between items-center p-4 text-text-normal select-none"
    >
        <RouterLink class="text-5xl text-accent-light" :to="{ name: 'Home' }" active-class=""
            >{{ $t("appTitle") }}
        </RouterLink>
        <div class="flex flex-col gap-1 items-start">
            <NavbarItem name="Home"></NavbarItem>
            <NavbarItem name="Download"></NavbarItem>
            <!--            <NavbarItem name="Install"></NavbarItem>-->
        </div>
        <div class="flex flex-col gap-3 justify-end">
            <select v-model="$i18n.locale">
                <option v-for="(locale, localeId) in locales" :key="localeId" :value="localeId">
                    {{ locale.name }}
                </option>
            </select>
            <NavbarItem name="Settings"></NavbarItem>
        </div>
    </div>
</template>

<style scoped></style>
