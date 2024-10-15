<script setup lang="ts">
import HeaderEdit from './components/HeaderEdit'
import ContentEdit from './components/ContentEdit'
import ContentCharts from './components/ContentCharts'
import ContentConfig from './components/ContentConfig'
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { width } = useWindowSize()
const { chartExpand, layerExpand, chartCofExpand } = useChartConfig()

watch(
  width,
  (newVal) => {
    chartExpand.value = !(newVal < 1200)
    layerExpand.value = !(newVal < 1200)
    chartCofExpand.value = !(newVal < 1200)
  },
)
</script>

<template>
  <div full flex="~ col">
    <HeaderEdit />
    <div flex="~ 1">
      <ContentCharts />
      <ContentEdit />
      <ContentConfig />
    </div>
  </div>
</template>
