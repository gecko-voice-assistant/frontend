<script setup>
import Navbar from "@/components/Navbar.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
  <div class="h-screen bg-green-500 flex">
    <Navbar></Navbar>
    <div class="w-full">
      <Breadcrumbs></Breadcrumbs>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
</style>
