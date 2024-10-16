<script setup lang="ts">
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { chartCofExpand } = useChartConfig()
</script>

<template>
  <div
    b-l="1 grey-3" relative
    :style="{
      width: chartCofExpand ? '360px' : '0',
      transition: 'width 0.3s ease-in-out',
    }"
  >
    <div
      b="1 grey-3" b-r="none" flex="~ center"
      absolute-y-center left--30px cursor-pointer p-1 z-9
      style="border-radius: 8px 0 0 8px;"
      @click="chartCofExpand = !chartCofExpand"
    >
      <div v-if="chartCofExpand" w-5 h-5 i-mingcute:right-line />
      <div v-else w-5 h-5 i-mingcute:left-line />
    </div>
  </div>
</template>
