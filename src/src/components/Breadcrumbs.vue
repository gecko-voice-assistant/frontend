<script>
export default {
  name: 'Breadcrumbs',
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.updateList()
  },
  watch: {
    $route() {
      this.updateList()
    }
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }
}
</script>

<template>
  <div class='py-3 px-5'>
    <ul class="flex flex-row text-text-normal gap-1 select-none">
      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        class='flex gap-1'
        :class="{ 'text-accent-light cursor-pointer': !!breadcrumb.link }"
      >
        <span>
          {{
            breadcrumb.name.startsWith(':')
              ? $route.params[breadcrumb.name.split(':')[1]]
              : breadcrumb.name
          }}
        </span>
        <span v-if='!!breadcrumb.link'>></span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>