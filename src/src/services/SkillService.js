export async function getAllSkills() {
  const response = await fetch('http://192.168.178.100:3000/v2/de_DE/skills');
  return await response.json();
}