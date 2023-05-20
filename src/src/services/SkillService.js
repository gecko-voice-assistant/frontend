const baseUrl = `${window.location.protocol}//${window.location.hostname}:3000`;

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

export async function activateSkill(skillName, state) {
    const response = await fetch(`${baseUrl}/skill/${skillName}/${state ? "activate" : "deactivate"}`);
    return await response.json();
}
