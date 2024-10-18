<script setup lang="ts">
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { componentsList, selectIdArr } = useChartConfig()

const config = computed(() => {
  return componentsList.value.find(v => v.id === selectIdArr.value[0])
})
</script>

<template>
  <div v-if="config" flex="~ col gap-4" p-2>
    <header h-12 bg-grey-2 flex="~ center gap-1">
      <div v-text="'定制'" />
      <div icon i-mingcute:tool-line />
    </header>
    <component :is="config?.chartConfig.contentKey" :option-data="config.option" />
  </div>
</template>
