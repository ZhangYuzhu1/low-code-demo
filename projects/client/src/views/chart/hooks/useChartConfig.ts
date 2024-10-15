/** 图表是否展开 */
const chartExpand = ref(true)
/** 图层是否展开 */
const layerExpand = ref(true)
/** 图表配置是否展开  */
const chartCofExpand = ref(true)

export function useChartConfig() {
  return {
    chartExpand,
    layerExpand,
    chartCofExpand,
  }
}
