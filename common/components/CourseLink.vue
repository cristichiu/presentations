<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  port: number | string
}>()

const isDev = import.meta.env.DEV

const href = computed(() => {
  if (isDev) {
    // Local: link to the port
    return `http://localhost:${props.port}`
  } else {
    // Production: use relative path to go to the sibling directory in dist/
    // Since each module is at the root of dist (or same level as hub)
    // we use ../module-name/
    return `../${props.to}/`
  }
})
</script>

<template>
  <a :href="href" target="_blank">
    <slot />
  </a>
</template>
