<script setup lang="ts">
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { layerExpand, componentsList, selectIdArr } = useChartConfig()
</script>

<template>
  <div
    flex="~ col" bg-grey-2 truncate
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

    <div v-if="layerExpand" flex="~ col gap2">
      <div
        v-for="v in componentsList" :key="v.id"
        :class="selectIdArr.includes(v.id) ? 'is-active' : ''"
        flex="~ items-center gap2" p-2 cursor-pointer
        hover="bg-grey-3" transition-300
      >
        <img w-16 h-10 b-rd-1 :src="v.chartConfig.cover">
        <div v-text="v.chartConfig.title" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.is-active {
  background: #e6f7ff;
}
</style>
