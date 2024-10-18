<script setup lang="ts">
import Drager from 'es-drager'
import 'es-drager/lib/style.css'
import type { DragData } from 'es-drager'

import { useChartConfig } from '../../hooks/useChartConfig'

import { createComponent } from '~/packages'
import { DragKeyEnum } from '~/enum/editPageEnum'
import type { ConfigType, CreateComponentType } from '~/packages/index.d'

const { componentsList, selectIdArr, hoverId, editCanvasConfig } = useChartConfig()

/** 拖拽组件 */
async function dragHandle(e: DragEvent) {
  e.preventDefault()

  try {
    const drayDataString = e.dataTransfer?.getData(DragKeyEnum.DRAG_KEY)
    if (!drayDataString)
      throw new Error('图表不存在')

    const dropData: ConfigType = JSON.parse(drayDataString)

    const newComponent: CreateComponentType = await createComponent(dropData)

    setComponentPosition(newComponent, e.offsetX - newComponent.attr.w / 2, e.offsetY - newComponent.attr.h / 2)

    componentsList.value.unshift(newComponent)
    selectIdArr.value = []
    selectIdArr.value.push(newComponent.id)
  }
  catch (error: any) {
  }
}

function dragoverHandle(e: DragEvent) {
  e.preventDefault()
  e.stopPropagation()

  if (e.dataTransfer)
    e.dataTransfer.dropEffect = 'copy'
}

/** 点击选中 */
function setSelectChart(id: string) {
  if (selectIdArr.value.find(v => v.includes(id)))
    return

  selectIdArr.value = []

  selectIdArr.value.push(id)
}

/** 鼠标移入 */
function mouseenterHandle(e: MouseEvent, item: CreateComponentType) {
  e.stopPropagation()
  if (!selectIdArr.value.find(v => v.includes(item.id)))
    hoverId.value = item.id
}

/** 鼠标移出 */
function mouseleaveHandle(e: MouseEvent, item: CreateComponentType) {
  e.stopPropagation()
  hoverId.value = undefined
}

/** 鼠标按下(包含移动事件) */
function mousedownHandle(e: MouseEvent, item: CreateComponentType) {
  e.stopPropagation()

  const { attr } = item

  const startX = e.clientX
  const startY = e.clientY
  const initialX = attr.x
  const initialY = attr.y

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)

  function onMouseMove(e: MouseEvent) {
    const dx = e.clientX - startX
    const dy = e.clientY - startY
    attr.x = initialX + dx
    attr.y = initialY + dy
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }
}

function onChange(dragData: DragData, item: CreateComponentType) {
}

/** 右键菜单 */
function onContextmenu(e: MouseEvent, item: CreateComponentType) {
  console.log(e)
}
</script>

<template>
  <div
    id="chart-edit-layout"
    flex="~ 1" relative
    overflow-hidden
    @drop="dragHandle"
    @dragover="dragoverHandle"
  >
    <div absolute full overflow-auto p-2>
      <div
        class="es-editor"
        b="1 grey-3"
        :style="{
          width: `${editCanvasConfig.width}px`,
          height: `${editCanvasConfig.height}px`,
          background: editCanvasConfig.background,
        }"
        @click.prevent="selectIdArr = []"
        @dragover.prevent
      >
        {{ selectIdArr }}
        <!-- 拖拽组件库  -->
        <!-- https://github.com/daybrush/moveable -->
        <Drager
          v-for="(item, index) in componentsList" :key="item.id"
          relative cursor-move select-none :rotatable="false"
          resizable markline
          snap-to-grid
          disabled-key-event
          :border="false"
          :grid-x="10"
          :grid-y="10"
          :selected="selectIdArr.includes(item.id)"
          :top="item.attr.y"
          :left="item.attr.x"
          :width="item.attr.w"
          :height="item.attr.h"
          @focus="setSelectChart(item.id)"
          @contextmenu.stop="onContextmenu($event, item)"
        >
          <div
            absolute full :style="{
              zIndex: index + 1,
            }"
          >
            <component
              :is="item.chartConfig.chartKey"
              :chart-config="item"
              full
            />
          </div>
        </Drager>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.isActive {
  border:1px solid var(--primary-1);
  background: rgba(0,104,184,0.3);
}
.isHover {
  border: 1px dashed var(--primary-1);
}
</style>

<style lang="scss">
$width-childs: 2, 6;
$height-childs: 4, 8;

.es-drager {
  .es-drager-dot {
    .es-drager-dot-handle {
      background-color: var(--primary-1);
    }

    // 循环处理需要修改宽度度的元素
    @each $i in $width-childs {
      &:nth-child(#{$i}) {
        .es-drager-dot-handle {
          width: 20px;
          border-radius: 8px;
        }
      }
    }

    // 循环处理需要修改高度的元素
    @each $i in $height-childs {
      &:nth-child(#{$i}) {
        .es-drager-dot-handle {
          height: 20px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
