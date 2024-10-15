<script setup lang="ts">
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { chartExpand } = useChartConfig()
</script>

<template>
  <div
    flex="~ col" bg-grey-2
    :style="{
      width: chartExpand ? '260px' : '50px',
      transition: 'width 0.3s ease-in-out',
    }"
  >
    <div
      flex="~ items-center"
      b-b="1 grey-3" px-2 h-10
      :style="{
        justifyContent: chartExpand ? 'space-between' : 'center',
      }"
    >
      <div v-if="chartExpand" flex="~ items-center" truncate>
        <div v-text="'组件'" />
        <div i-mingcute:classify-2-line />
      </div>
      <div
        flex="~ center" cursor-pointer
        @click="chartExpand = !chartExpand"
      >
        <div v-if="chartExpand" w-5 h-5 i-mingcute:left-line />
        <div v-else w-5 h-5 i-mingcute:right-line />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
