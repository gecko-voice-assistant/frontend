<script setup>
import NavbarItem from "@/components/NavbarItem.vue";
</script>

<template>
    <div
        class="w-56 border-r-2 border-r-main-medium flex flex-col justify-between items-center p-4 text-text-normal select-none"
    >
        <RouterLink class="text-5xl text-accent-light" :to="{ name: 'Home' }" active-class="">{{
            $t("appTitle")
        }}</RouterLink>
        <div class="flex flex-col gap-1 items-start">
            <!--      <NavbarItem :name="$t('home')"></NavbarItem>-->
            <!--      <NavbarItem :name="$t('download')"></NavbarItem>-->
            <!--      <NavbarItem :name="$t('install')"></NavbarItem>-->
            <NavbarItem name="Home"></NavbarItem>
            <NavbarItem name="Download"></NavbarItem>
            <NavbarItem name="Install"></NavbarItem>
        </div>
        <NavbarItem name="Settings"></NavbarItem>
        <!--    <NavbarItem :name="$t('settings')"></NavbarItem>-->
    </div>
</template>

<style scoped></style>
