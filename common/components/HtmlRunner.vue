<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: ''
  }
})

const slotRef = ref(null)
const htmlCode = ref('')

onMounted(() => {
  // If we have a slot, use its content as the initial code
  if (slotRef.value && slotRef.value.textContent) {
    htmlCode.value = slotRef.value.textContent.trim()
  } else if (props.code) {
    htmlCode.value = props.code
  }
})

const preventSubmit = (e) => {
  if (e.target.tagName === 'FORM') {
    e.preventDefault()
    alert('Formular trimis! (Aceasta este o simulare)')
  }
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4 border rounded-lg p-4 bg-gray-50 dark:bg-gray-900 shadow-inner h-90 text-left">
    <!-- Hidden slot to capture initial code -->
    <div ref="slotRef" class="hidden"><slot /></div>

    <div class="flex flex-col h-full overflow-hidden">
      <label class="text-xs font-mono mb-1 opacity-50 block">Editează HTML:</label>
      <textarea 
        v-model="htmlCode" 
        class="flex-1 p-3 font-mono text-sm border rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        spellcheck="false"
      ></textarea>
    </div>
    
    <div class="flex flex-col h-full overflow-hidden">
      <label class="text-xs font-mono mb-1 opacity-50 block">Previzualizare Live:</label>
      <div 
        class="flex-1 p-4 border rounded bg-white text-black overflow-auto shadow-inner"
        v-html="htmlCode"
        @submit.prevent="preventSubmit"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure standard form styling in the preview */
:deep(input), :deep(select), :deep(textarea) {
  border: 1px solid #ccc;
  padding: 6px;
  margin-bottom: 12px;
  display: block;
  width: 100%;
  border-radius: 4px;
}
:deep(input[type="checkbox"]), :deep(input[type="radio"]) {
  width: auto;
  display: inline-block;
  margin-right: 8px;
}
:deep(button) {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
}
:deep(button:hover) {
  background: #2563eb;
}
:deep(label) {
  display: block;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 4px;
  color: #374151;
}
</style>
