// 包分类枚举
export enum PackagesCategoryEnum {
  /** 图表 */
  CHARTS = 'Charts',
  /** 表格 */
  TABLES = 'Tables',
  /** 信息 */
  INFORMATIONS = 'Informations',
  /** 图片 */
  PHOTOS = 'Photos',
  /** 图标 */
  ICONS = 'Icons',
  /** 图标 */
  DECORATES = 'Decorates',
}

// 包名称
export const PackagesNameEnum: Record<PackagesCategoryEnum, string> = {
  [PackagesCategoryEnum.CHARTS]: '图表',
  [PackagesCategoryEnum.TABLES]: '表格',
  [PackagesCategoryEnum.INFORMATIONS]: '信息',
  [PackagesCategoryEnum.PHOTOS]: '图片',
  [PackagesCategoryEnum.ICONS]: '图标',
  [PackagesCategoryEnum.DECORATES]: '小组件',
}

export enum ChartFrameEnum {
  // 支持 dataset 的 echarts 框架
  ECHARTS = 'echarts',
  // UI 组件框架
  NAIVE_UI = 'naiveUI',
  // 自定义带数据组件
  COMMON = 'common',
  // 无数据变更
  STATIC = 'static',
}
