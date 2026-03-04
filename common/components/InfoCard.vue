<script setup lang="ts">
import { inject } from 'vue'
import type { THEME_CONFIG } from '../theme/config'

const themeConfig = inject<typeof THEME_CONFIG>('themeConfig')

defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="info-card" :class="[themeConfig?.scheme, { 'no-icon': !icon && !$slots.icon }]">
    <div v-if="icon || $slots.icon" class="info-card-icon">
      <slot name="icon">{{ icon }}</slot>
    </div>
    <p v-if="title || $slots.title" class="info-card-title">
      <slot name="title">{{ title }}</slot>
    </p>
    <div v-if="$slots.default" class="info-card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.info-card {
  background-color: var(--neversink-admon-bg-color);
  padding: 25px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--neversink-admon-border-color);
}

.info-card.no-icon {
  justify-content: flex-start;
}

.info-card-icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: var(--neversink-fg-code-color);
  text-align: center;
}

.info-card-title {
  font-size: 1.5em;
  font-weight: 600;
  margin: 0;
  padding-bottom: 10px;
  color: var(--neversink-highlight-color);
  text-align: center;
}

.info-card-content {
  font-size: 1.2em;
  opacity: 0.9;
  color: var(--neversink-admon-text-color);
  width: 100%;
  text-align: center;
}

.info-card-content :deep(strong) {
  color: var(--neversink-fg-color);
  font-weight: 700;
}
</style>
