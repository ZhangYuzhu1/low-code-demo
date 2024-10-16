<script setup lang="ts">
import SketchRuler from 'vue3-sketch-ruler'
import 'vue3-sketch-ruler/lib/style.css'

const startX = ref(0)
const startY = ref(0)

// 滚动条拖动的宽度
const containerWidth = computed(() => {
  return `${window.innerWidth * 2}px`
})

// 滚动条拖动的高度
const containerHeight = computed(() => {
  return `${1080 * 2}px`
})

const canvasBox = computed(() => {
  const layoutDom = document.getElementById('chart-edit-layout')
  if (layoutDom) {
    // 此处减去滚动条的宽度和高度
    const scrollW = 20
    return {
      height: layoutDom.clientHeight - scrollW,
      width: layoutDom.clientWidth - scrollW,
    }
  }
  return {
    width: 1920,
    height: 1080,
  }
})
function dragHandle(e: DragEvent) {
  console.log(e)
}

function dragoverHandle(e: DragEvent) {
  e.preventDefault()
  e.stopPropagation()

  if (e.dataTransfer)
    e.dataTransfer.dropEffect = 'copy'
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
    <SketchRuler
      :thick="20"
      :scale="1"
      :start-x="startX"
      :start-y="startY"
      :width="canvasBox.width"
      :height="canvasBox.height"
      :lines="{
        h: [],
        v: [],
      }"
    />
    <div absolute full overflow-auto>
      <div
        absolute inset-0
        :style="{ width: containerWidth }"
      >
        123
      </div>
    </div>
  </div>
</template>

<style>
.h-container {
  width: calc(100% - 20px) !important;
}
</style>
