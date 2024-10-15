<script setup lang="ts">
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { layerExpand } = useChartConfig()
</script>

<template>
  <div
    flex="~ col" bg-grey-2
    :style="{
      width: layerExpand ? '200px' : '50px',
      transition: 'width 0.3s ease-in-out',
    }"
  >
    <div
      flex="~ items-center " h-10 px-2 b-b="1 grey-3"
      :style="{
        justifyContent: layerExpand ? 'space-between' : 'center',
      }"
    >
      <div
        v-if="layerExpand"
        flex="~ items-center"
        truncate
      >
        <div v-text="'图层'" />
        <div w-5 h-5 i-mdi:layers-outline />
      </div>
      <div
        flex="~ center" cursor-pointer
        @click="layerExpand = !layerExpand"
      >
        <div v-if="layerExpand" w-5 h-5 i-mingcute:left-line />
        <div v-else w-5 h-5 i-mingcute:right-line />
      </div>
    </div>
  </div>
</template>
