<script setup>

import NavbarItem from "@/components/NavbarItem.vue";
</script>

<template>
  <div class="w-64 bg-grey-900 text-white flex flex-col justify-between items-center p-4">
    <h1 class="text-5xl">G.E.C.K.O</h1>
    <div class="flex flex-col gap-1 items-start">
      <NavbarItem name="Home"></NavbarItem>
      <NavbarItem name="Download"></NavbarItem>
      <NavbarItem name="Install"></NavbarItem>
    </div>
    <NavbarItem name="Settings"></NavbarItem>
  </div>
</template>

<style scoped>

</style>