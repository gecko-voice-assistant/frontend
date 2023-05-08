<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>

<template>
  <div>
    <ul class="flex flex-row">
      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{'text-white cursor-pointer': !!breadcrumb.link}">

        {{ breadcrumb.name.startsWith(":") ? ($route.params[breadcrumb.name.split(":")[1]]) : breadcrumb.name }}

      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul > li:not(:last-child)::after {
      content: ' > ';
  }
</style>