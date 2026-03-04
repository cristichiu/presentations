<script setup lang="ts">
import { inject } from 'vue'
import type { THEME_CONFIG } from '../theme/config'

const themeConfig = inject<typeof THEME_CONFIG>('themeConfig')

defineProps({
  steps: {
    type: Array as () => Array<{ title: string; description: string }>,
    required: true
  },
  direction: {
    type: String as () => 'vertical' | 'horizontal',
    default: 'vertical'
  }
})
</script>

<template>
  <div class="process-flow" :class="[themeConfig?.scheme, direction]">
    <template v-for="(step, index) in steps" :key="index">
      <div v-click class="step-card">
        <div class="step-content">
          <h4 class="step-title">{{ step.title }}</h4>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>

      <div v-if="index < steps.length - 1" v-click class="arrow">
        <svg v-if="direction === 'vertical'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
    </template>
  </div>
</template>

<style scoped>
.process-flow {
  display: flex;
  gap: 0.3rem;
  padding: 0.2rem 0;
}

.process-flow.vertical {
  flex-direction: column;
  align-items: center;
}

.process-flow.horizontal {
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
}

.step-card {
  background-color: var(--neversink-admon-bg-color);
  border: 1px solid var(--neversink-admon-border-color);
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  transition: all 0.3s ease;
  max-width: 100%;
}

.vertical .step-card {
  width: 100%;
}

.horizontal .step-card {
  flex: 1 1 calc(50% - 1rem);
  min-width: 250px;
}

.step-card:hover {
  border-color: var(--neversink-highlight-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.step-number {
  background: linear-gradient(135deg, var(--neversink-highlight-color), var(--neversink-accent-color));
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8em;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  margin: 0 0 0.1rem 0;
  color: var(--neversink-highlight-color);
  font-size: 0.9em;
  font-weight: 600;
}

.step-description {
  margin: 0;
  color: var(--neversink-admon-text-color);
  font-size: 0.75em;
  line-height: 1.25;
  opacity: 0.9;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neversink-highlight-color);
  opacity: 0.5;
}

.vertical .arrow {
  width: 100%;
  height: 0.5rem;
}

.horizontal .arrow {
  width: 0.5rem;
  height: 100%;
}

.arrow svg {
  width: 0.9rem;
  height: 0.9rem;
}
</style>
