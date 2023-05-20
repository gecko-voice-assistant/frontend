<script>
export default {
    name: "NavbarItem",
    props: ["name", "page"]
};
</script>

<template>
    <RouterLink :to="{ name: name }" class="w-48 p-1.5 rounded-xl text-xl text-center">
        {{ $t("navigation." + name.toLowerCase()) }}
    </RouterLink>
</template>

<style scoped></style>
