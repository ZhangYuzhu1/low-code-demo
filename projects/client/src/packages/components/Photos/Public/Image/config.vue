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
  <div >
    <div>属性</div>
    <div>
      <div>路径</div>
      <q-input v-model="optionData.dataset"></q-input>
    </div>
    <div>
      <div>圆角</div>
      <q-input v-model.number="optionData.borderRadius" type="number"></q-input>
    </div>
  </div>
</template>
