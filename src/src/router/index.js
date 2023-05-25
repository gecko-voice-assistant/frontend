/*
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
*/
import { createRouter, createWebHistory } from "vue-router";
import OverviewPage from "@/components/HomePage.vue";
import DownloadPage from "@/components/DownloadPage.vue";
import InstallPage from "@/components/InstallPage.vue";
import SkillPage from "@/components/SkillPage.vue";
import SettingsPage from "@/components/SettingsPage.vue";

export default createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/skill",
            name: "Home",
            component: OverviewPage,
            alias: "/",
            meta: {
                breadcrumb: [{ name: "Home" }]
            }
        },
        {
            path: "/skill/:skill",
            name: "Skill",
            component: SkillPage,
            meta: {
                breadcrumb: [{ name: "Home", link: "/skill" }, { name: ":skill" }]
            }
        },
        {
            path: "/download",
            name: "Download",
            component: DownloadPage,
            meta: {
                breadcrumb: [{ name: "Download" }]
            }
        },
        {
            path: "/install",
            name: "Install",
            component: InstallPage,
            meta: {
                breadcrumb: [{ name: "Install" }]
            }
        },
        {
            path: "/settings",
            name: "Settings",
            component: SettingsPage,
            meta: {
                breadcrumb: [{ name: "Settings" }]
            }
        }
    ]
});
