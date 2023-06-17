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
const baseUrl = `/api`;

export async function getAllSkills() {
    const response = await fetch(`${baseUrl}/skills`);
    return await response.json();
}

export async function getAllDownloadableSkills() {
    const response = await fetch(`${baseUrl}/download/list`);
    return await response.json();
}

export async function downloadSkill(skillName, versionTag) {
    const response = await fetch(`${baseUrl}/download/${skillName}/${versionTag}`);
    return await response.json();
}

export async function getSkillDetails(skillName) {
    const response = await fetch(`${baseUrl}/skill/${skillName}/details`);
    return await response.json();
}

export async function postOptions(skillName, options) {
    const response = await fetch(`${baseUrl}/skill/${skillName}/options`, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export async function activateSkill(skillName, state) {
    const response = await fetch(`${baseUrl}/skill/${skillName}/${state ? "activate" : "deactivate"}`);
    return await response.json();
}

export async function deleteSkill(skillName) {
    const response = await fetch(`${baseUrl}/skill/${skillName}/delete`);
    return await response.json();
}

export async function getSettings() {
    const response = await fetch(`${baseUrl}/settings`);
    return await response.json();
}

export async function postSettings(body = {}) {
    const response = await fetch(`${baseUrl}/settings`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}
