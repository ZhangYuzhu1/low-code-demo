import { ChartFrameEnum, PackagesCategoryEnum } from "./enum"

export type ConfigType= {
  /** 组件 key */
  key: string
  /** 画布组件key */
  chartKey: string
  /** 设置面板组件 key */
  contentKey: string
  /** 组件名称 */
  title: string
  /** 组件分类 */
  category: string
  /** 分类名称 */
  categoryName: string
  /** 所属包 */
  package: PackagesCategoryEnum
  /** 归类 */
  chartFrame?: ChartFrameEnum
  /** 预览图 */
  cover: string
  // 从指定路径创建创建该组件
  redirectComponent?: string
  // 组件预设的 dataset 值(图片/图标)
  dataset?: any
  // 禁用 拖拽或双击生成组件
  disabled?: boolean
  // 图标
  icon?: string
  // 事件
  configEvents?: { [T: string]: Function }
}
