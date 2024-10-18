<script setup lang="ts">
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { editCanvasConfig } = useChartConfig()
</script>

<template>
  <div flex="~ col gap-4" p-2>
    <header h-12 flex="~ center gap-1" bg-grey-2 b-rd-2>
      <div icon i-mingcute:airplay-line />
      <div v-text="'页面配置'" />
    </header>

    <div flex="~ col gap-2">
      <q-input v-model="editCanvasConfig.width" type="number" label="宽度" />
      <q-input v-model="editCanvasConfig.height" type="number" label="高度" />
      <q-input
        v-model="editCanvasConfig.background"
        label="背景色"
      >
        <template #append>
          <div i-mingcute:color-filter-line>
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="editCanvasConfig.background" />
            </q-popup-proxy>
          </div>
        </template>
      </q-input>
    </div>
  </div>
</template>
