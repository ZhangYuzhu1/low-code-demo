<script setup lang="ts">
import PageConfig from './components/PageConfig'
import ComponentsConfig from './components/ComponentsConfig'

import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { chartCofExpand, selectIdArr } = useChartConfig()
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
      b="1 grey-3" b-r="none" flex="~ center" bg-grey-1
      absolute-y-center left--30px cursor-pointer p-1 z-9
      style="border-radius: 8px 0 0 8px;"
      @click="chartCofExpand = !chartCofExpand"
    >
      <div v-if="chartCofExpand" w-5 h-5 i-mingcute:right-line />
      <div v-else w-5 h-5 i-mingcute:left-line />
    </div>

    <PageConfig v-if="!selectIdArr.length" />
    <ComponentsConfig v-else />
  </div>
</template>
