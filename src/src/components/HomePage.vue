<script>
import { getAllSkills } from '@/services/SkillService'

export default {
  name: 'HomePage',
  data() {
    return {
      skills: []
    }
  },
  methods: {
    loadSkills() {
      getAllSkills()
        .then((response) => {
          this.skills = response
        })
        .catch(console.error)
    }
  },
  mounted() {
    this.loadSkills()
  }
};
</script>

<template>
  <div class="flex flex-col justify-items-start items-center h-[95%] gap-10">
    <h1 class="text-4xl">Installed Skills</h1>
    <div class="text-lg h-full overflow-y-auto flex flex-col justify-items-start items-start px-5">
      <table class="w-full table-fixed m-0">
        <thead class="sticky top-0">
          <tr class="bg-accent-medium text-accent-light">
            <th class="w-1/5">Name</th>
            <th class="w-3/5">Description</th>
            <th class="w-1/10">Version</th>
            <th class="w-1/10">Active</th>
          </tr>
        </thead>
        <tbody>
          <RouterLink custom v-slot="{ navigate }" v-for="(skill, i) in skills" :to="'skill/' + skill['name']">
            <tr
              @click="navigate"
              :class="{ 'bg-main-medium': (i % 2) - 1 }"
              class="hover:bg-accent-light text-text-normal hover:text-main-dark cursor-pointer"
            >
              <td>{{ skill['name'] }}</td>
              <td>{{ skill['description'] }}</td>
              <td>{{ skill['version'] }}</td>
              <td>{{ skill['active'] }}</td>
            </tr>
          </RouterLink>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
