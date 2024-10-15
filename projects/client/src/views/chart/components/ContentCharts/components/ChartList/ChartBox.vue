<script setup lang="ts">
import type { ConfigType } from '~/packages/index.d'

defineProps({
  menuOptions: {
    type: Array as PropType<ConfigType[]>,
    default: () => [],
  },
})

/**
 * 双击事件
 * @param v
 */
function dblclickHandle(v: ConfigType) {
  console.log(v)
}

function dragStartHandle(e: DragEvent, val: ConfigType) {
  console.log(e)
}
</script>

<template>
  <div flex="1" p-1>
    <div
      v-for="v in menuOptions"
      :key="v.chartKey"
      flex="~ col center" p-2 b-rd-2 bg="grey-1"
      cursor-pointer select-none
      @dblclick="dblclickHandle(v)"
      @dragstart="dragStartHandle($event, v)"
    >
      <div v-text="v.title" />
      <div class="move">
        <img :src="v.cover" alt="">
      </div>
    </div>
  </div>
</template>
