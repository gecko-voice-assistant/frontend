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
import NavbarComponent from "@/components/NavbarComponent.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
</script>

<template>
    <div class="h-screen bg-main-dark flex w-full">
        <NavbarComponent></NavbarComponent>
        <div class="flex flex-col w-full h-full">
            <BreadcrumbsComponent></BreadcrumbsComponent>
            <RouterView class="text-text-normal"></RouterView>
        </div>
    </div>
</template>

<style scoped></style>
