import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '@/components/HomePage.vue'
import DownloadPage from '@/components/DownloadPage.vue'
import InstallPage from '@/components/InstallPage.vue'
import SkillPage from '@/components/SkillPage.vue'

export default createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/skill',
      name: 'Home',
      component: OverviewPage,
      alias: '/',
      meta: {
        breadcrumb: [{ name: 'Home' }]
      }
    },
    {
      path: '/skill/:skill',
      name: 'Skill',
      component: SkillPage,
      meta: {
        breadcrumb: [{ name: 'Home', link: '/skill' }, { name: ':skill'}]
      }
    },
    {
      path: '/download',
      name: 'Download',
      component: DownloadPage,
      meta: {
        breadcrumb: [{ name: 'Download' }]
      }
    },
    {
      path: '/install',
      name: 'Install',
      component: InstallPage,
      meta: {
        breadcrumb: [{ name: 'Install' }]
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: InstallPage,
      meta: {
        breadcrumb: [{ name: 'Settings' }]
      }
    }
  ]
})