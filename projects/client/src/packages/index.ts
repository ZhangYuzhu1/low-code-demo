import { PhotosList } from './components/Photos/index'
import { PackagesCategoryEnum } from './enum'
import { type ConfigType, FetchComFlagType, type PackagesType } from './index.d'

const configModules: Record<string, { default: string }> = import.meta.glob('./components/**/config.vue', {
  eager: true,
})
const indexModules: Record<string, { default: string }> = import.meta.glob('./components/**/index.vue', {
  eager: true,
})
const imagesModules: Record<string, { default: string }> = import.meta.glob('../assets/images/chart/**', {
  eager: true,
})

/** 所有图表 */
export const packagesList: PackagesType = {
  [PackagesCategoryEnum.PHOTOS]: PhotosList,
}

/** 组件缓存，提升组件加载速度 */
const componentCacheMap = new Map<string, any>()
/**
 * 加载组件配置
 * @param packageName 包名
 * @param categoryName 分类名称
 * @param keyName key名
 */
export function loadConfig(packageName: string, categoryName: string, keyName: string) {
  const key = packageName + categoryName + keyName
  if (!componentCacheMap.has(key))
    componentCacheMap.set(key, import(`./components/${packageName}/${categoryName}/${keyName}/config.ts`))
  return componentCacheMap.get(key)
}

/**
 * 获取指定组件配置信息
 */
export async function createComponent(targetData: ConfigType) {
  const { category, key } = targetData
  // redirectComponent 是给图片组件库和图标组件库使用的
  // if (redirectComponent) {
  //   const [packageName, categoryName, keyName] = redirectComponent.split('/')
  //   const redirectChart = await loadConfig(packageName, categoryName, keyName)
  //   return new redirectChart.default()
  // }
  const chart = await loadConfig(targetData.package, category, key)
  // eslint-disable-next-line new-cap
  return new chart.default()
}

/**
 * * 获取组件
 * @param {string} chartName 名称
 * @param {FetchComFlagType} flag 标识 0为展示组件, 1为配置组件
 */
function fetchComponent(chartName: string, flag: FetchComFlagType) {
  const module = flag === FetchComFlagType.VIEW ? indexModules : configModules
  for (const key in module) {
    const urlSplit = key.split('/')
    if (urlSplit[urlSplit.length - 2] === chartName)
      return module[key]
  }
}

/**
 * * 获取展示组件
 * @param {ConfigType} dropData 配置项
 */
export function fetchChartComponent(dropData: ConfigType) {
  const { key } = dropData
  return fetchComponent(key, FetchComFlagType.VIEW)?.default
}

/**
 * * 获取配置组件
 * @param {ConfigType} dropData 配置项
 */
export function fetchConfigComponent(dropData: ConfigType) {
  const { key } = dropData
  return fetchComponent(key, FetchComFlagType.CONFIG)?.default
}
