import { defineAppSetup } from '@slidev/types'
import { Sandpack } from 'sandpack-vue3'
import GithubLink from '../components/GithubLink.vue'
import InfoCard from '../components/InfoCard.vue'
import ProcessFlow from '../components/ProcessFlow.vue'
import { THEME_CONFIG } from '../theme/config'
import CardContainer from '../components/CardContainer.vue'
import LiveReact from '../components/LiveReact.vue'
import LiveWeb from '../components/LiveWeb.vue'
import Counter from '../components/Counter.vue'
import HtmlRunner from '../components/HtmlRunner.vue'


export default defineAppSetup(({ app }) => {
  // Register Sandpack as a global component available in all slides
  app.component('Sandpack', Sandpack)
  app.component('GithubLink', GithubLink)
  app.component('InfoCard', InfoCard)
  app.component('ProcessFlow', ProcessFlow)
  app.component('CardContainer', CardContainer)
  app.component('LiveReact', LiveReact)
  app.component('LiveWeb', LiveWeb)
  app.component('Counter', Counter)
  app.component('HtmlRunner', HtmlRunner)

  // Apply global theme configuration
  app.mixin({
    mounted() {
      // Apply theme scheme to the root element
      if (typeof document !== 'undefined') {
        const pageRoot = document.getElementById('page-root')
        if (pageRoot && !pageRoot.classList.contains(THEME_CONFIG.scheme)) {
          pageRoot.classList.add(THEME_CONFIG.scheme)
        }

        // Apply custom CSS variables if any
        if (THEME_CONFIG.customVars && Object.keys(THEME_CONFIG.customVars).length > 0) {
          const root = document.documentElement
          Object.entries(THEME_CONFIG.customVars).forEach(([key, value]) => {
            root.style.setProperty(key, value)
          })
        }
      }
    }
  })

  // Also provide theme config to all components
  app.provide('themeConfig', THEME_CONFIG)
})
