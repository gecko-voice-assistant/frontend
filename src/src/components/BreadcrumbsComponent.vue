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
export default {
    name: "BreadcrumbsComponent",
    data() {
        return {
            breadcrumbList: []
        };
    },
    mounted() {
        this.updateList();
    },
    watch: {
        $route() {
            this.updateList();
        }
    },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link);
        },
        updateList() {
            const breadcrumbs = this.$route.meta.breadcrumb;

            this.breadcrumbList = breadcrumbs;

            const lastBreadCrumb = [...(breadcrumbs || [""]).slice(-1)][0];

            if (lastBreadCrumb){
              const suffix = lastBreadCrumb.name.startsWith(":")
                ? this.$route.params[lastBreadCrumb.name.split(":")[1]]
                : this.$t("navigation." + lastBreadCrumb.name.toLowerCase())

              document.title = `G.E.C.K.O. | ${suffix}`;
            }else {
              document.title = 'G.E.C.K.O.';
            }
        }
    }
};
</script>

<template>
    <div class="py-3 px-5">
        <ul class="flex flex-row text-text-normal gap-1 select-none">
            <li
                v-for="(breadcrumb, idx) in breadcrumbList"
                :key="idx"
                @click="routeTo(idx)"
                class="flex gap-1"
                :class="{ 'text-accent-light cursor-pointer': !!breadcrumb.link }"
            >
                <span>
                    {{
                        breadcrumb.name.startsWith(":")
                            ? $route.params[breadcrumb.name.split(":")[1]]
                            : $t("navigation." + breadcrumb.name.toLowerCase())
                    }}
                </span>
                <span v-if="!!breadcrumb.link">></span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
