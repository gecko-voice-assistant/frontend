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
import { defineComponent } from "vue";

export default defineComponent({
    name: "LoadingBar",
    props: {
        showing: {
            required: true,
            type: Boolean
        },
        title: {
            required: true,
            type: String
        }
    }
});
</script>

<template>
    <div
        v-if="showing"
        class="absolute top-0 left-0 w-screen h-screen bg-opacity-70 bg-main-dark flex items-center justify-center z-50"
    >
        <div class="w-96 h-36 m-auto bg-main-medium flex flex-col rounded-xl">
            <div class="h-14 bg-accent-light rounded-t-xl flex items-center pl-2">
                <h1 class="text-main-medium">{{ title }}</h1>
            </div>
            <div class="flex items-center justify-center h-full gap-3">
                <div
                    v-for="i in 7"
                    :key="i"
                    class="w-5 h-5 rounded-full animate-pulse bg-accent-light"
                    :style="`animation-delay: ${-2000 + (2000 / 7) * i}ms`"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
