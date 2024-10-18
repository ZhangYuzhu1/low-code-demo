<script setup lang="ts">
import { CreateComponentType } from '~/packages/index.d';

const props = defineProps({
  chartConfig: {
    type: Object as PropType<CreateComponentType>,
    required: true
  }
})

const { borderRadius } = toRefs(props.chartConfig.option)


const option = shallowReactive({
  dataset: ''
})

function getStyle(radius: number) {
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
  <div p-2 :style="getStyle(borderRadius)">
    <q-img :src="option.dataset" full/>
  </div>
</template>
