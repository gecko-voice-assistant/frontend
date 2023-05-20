<script setup>
import Navbar from "@/components/Navbar.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
    <div class="h-screen bg-main-dark flex w-full">
        <Navbar></Navbar>
        <div class="flex flex-col w-full h-full">
            <Breadcrumbs></Breadcrumbs>
            <RouterView class="text-text-normal"></RouterView>
        </div>
    </div>
</template>

<style scoped></style>
