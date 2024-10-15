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
export const PackagesCategoryName: Record<PackagesCategoryEnum, string> = {
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

// 滤镜/变换枚举
export enum FilterEnum {
  // 是否启用
  FILTERS_SHOW = 'filterShow',

  // 透明度
  OPACITY = 'opacity',
  // 饱和度
  SATURATE = 'saturate',
  // 对比度
  CONTRAST = 'contrast',
  // 色相
  HUE_ROTATE = 'hueRotate',
  // 亮度
  BRIGHTNESS = 'brightness',

  // 旋转
  ROTATE_Z = 'rotateZ',
  ROTATE_X = 'rotateX',
  ROTATE_Y = 'rotateY',

  // 倾斜
  SKEW_X = 'skewX',
  SKEW_Y = 'skewY',

  // 混合模式
  BLEND_MODE = 'blendMode',
}

export const BlendModeEnumList = [
  { label: '正常', value: 'normal' },
  { label: '正片叠底', value: 'multiply' },
  { label: '叠加', value: 'overlay' },
  { label: '滤色', value: 'screen' },
  { label: '变暗', value: 'darken' },
  { label: '变亮', value: 'lighten' },
  { label: '颜色减淡', value: 'color-dodge' },
  { label: '颜色加深', value: 'color-burn;' },
  { label: '强光', value: 'hard-light' },
  { label: '柔光', value: 'soft-light' },
  { label: '差值', value: 'difference' },
  { label: '排除', value: 'exclusion' },
  { label: '色相', value: 'hue' },
  { label: '饱和度', value: 'saturation' },
  { label: '颜色', value: 'color' },
  { label: '亮度', value: 'luminosity' },
]
