<script setup lang="ts">
defineProps({
  layout: {
    type: String as () => 'flex' | 'grid-2' | 'grid-3' | 'centered',
    default: 'flex'
  },
  gap: {
    type: String,
    default: '30px'
  }
})
</script>

<template>
  <div
    class="card-container"
    :class="{
      'layout-flex': layout === 'flex',
      'layout-grid-2': layout === 'grid-2',
      'layout-grid-3': layout === 'grid-3',
      'layout-centered': layout === 'centered'
    }"
    :style="{ gap }"
  >
    <slot />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--neversink-fg-color);
  margin-top: 2rem;
}

.layout-flex {
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}

.layout-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.layout-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.layout-centered {
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
