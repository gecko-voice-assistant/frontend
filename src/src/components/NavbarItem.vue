<script>
export default {
  name: "NavbarItem",
  props: ['name', 'page']
};
</script>

<template>
  <RouterLink :to="{name: name}" class="w-56 p-1.5 rounded-xl text-xl">{{ name }}</RouterLink>
</template>

<style scoped></style>