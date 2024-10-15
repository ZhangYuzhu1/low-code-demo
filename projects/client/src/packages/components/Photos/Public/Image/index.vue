<script setup lang="ts">
import { CreateComponentType } from '~/packages/index.d';

const props = defineProps({
  chartConfig: {
    type: Object as PropType<CreateComponentType>,
    required: true
  }
})

const { w, h } = toRefs(props.chartConfig.attr)
const { dataset, fit, borderRadius } = toRefs(props.chartConfig.option)

const option = shallowReactive({
  dataset: ''
})

const getStyle = (radius: number) => {
  return {
    borderRadius: `${radius}px`,
    overflow: 'hidden'
  }
}

// 编辑更新
watch(
  () => props.chartConfig.option.dataset,
  (newData: any) => {
    option.dataset = newData
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div :style="getStyle(borderRadius)">
    <q-img
      :src="option.dataset"
      :width="w"
      :height="h"
    />
  </div>
</template>
