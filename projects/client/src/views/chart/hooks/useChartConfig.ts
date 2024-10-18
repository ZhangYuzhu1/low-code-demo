import type { CreateComponentType } from '~/packages/index.d'

/** 图表是否展开 */
const chartExpand = ref(true)
/** 图层是否展开 */
const layerExpand = ref(true)
/** 图表配置是否展开  */
const chartCofExpand = ref(true)
/** 组件数组 */
const componentsList = ref<CreateComponentType[]>([])
/** 选中的组件id */
const selectIdArr = ref<string[]>([])
/** hover 的组件id */
const hoverId = ref()
/** 页面配置 */
const editCanvasConfig = ref({
  /** 默认宽度 */
  width: 1920,
  /** 默认高度 */
  height: 1080,
  /** 背景色 */
  background: '#ffffff',
})

export function useChartConfig() {
  return {
    chartExpand,
    layerExpand,
    chartCofExpand,
    componentsList,
    selectIdArr,
    hoverId,
    editCanvasConfig,
  }
}
