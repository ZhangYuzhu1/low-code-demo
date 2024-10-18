<script setup lang="ts">
import { PropType } from 'vue'
import { option } from './config'

defineProps({
  optionData: {
    type: Object as PropType<typeof option>,
    required: true,
  },
})
</script>

<template>
  <div flex="~ col gap-2">
      <q-input
        v-model="optionData.dataset"
        label="路径"
      />
      <q-input
        v-model.number="optionData.borderRadius"
        type="number"
        label="圆角"
      />
  </div>
</template>
