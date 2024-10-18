<script setup lang="ts">
import { DragKeyEnum } from '~/enum/editPageEnum'
import { fetchChartComponent, fetchConfigComponent } from '~/packages'
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
  // console.log(v)
}

/**
 * 拖拽开始事件
 * @param e
 * @param val
 */
function dragStartHandle(e: DragEvent, val: ConfigType) {
  if (val.disabled)
    return
  // 动态注册组件
  componentInstall(val.chartKey, fetchChartComponent(val))
  componentInstall(val.contentKey, fetchConfigComponent(val))
  // 将配置项绑定到拖拽属性上
  e.dataTransfer?.setData(DragKeyEnum.DRAG_KEY, JSON.stringify(val))
}
</script>

<template>
  <div flex="1" p-1>
    <div
      v-for="v in menuOptions"
      :key="v.chartKey"
      flex="~ col center" p-2 b-rd-2 bg="grey-1"
      cursor-pointer select-none draggable
      @dragstart="dragStartHandle($event, v)"
      @dblclick="dblclickHandle(v)"
    >
      <div v-text="v.title" />
      <div class="move">
        <img b-rd-1 :src="v.cover" alt="">
      </div>
    </div>
  </div>
</template>
