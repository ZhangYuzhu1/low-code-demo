import { InteractEvents } from "~/enum/eventEnum"
import { ChartFrameEnum, FilterEnum, PackagesCategoryEnum } from "./enum"

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

// 图表包类型
export type PackagesType = {
  // [PackagesCategoryEnum.CHARTS]: ConfigType[]
  // [PackagesCategoryEnum.INFORMATIONS]: ConfigType[]
  // [PackagesCategoryEnum.TABLES]: ConfigType[]
  [PackagesCategoryEnum.PHOTOS]: ConfigType[]
  // [PackagesCategoryEnum.ICONS]: ConfigType[]
  // [PackagesCategoryEnum.DECORATES]: ConfigType[]
}

// 组件实例类
export interface PublicConfigType {
  id: string
  isGroup: boolean
  attr: { x: number; y: number; w: number; h: number; zIndex: number; offsetX: number; offsetY: number }
  styles: {
    [FilterEnum.FILTERS_SHOW]: boolean
    [FilterEnum.OPACITY]: number
    [FilterEnum.SATURATE]: number
    [FilterEnum.CONTRAST]: number
    [FilterEnum.HUE_ROTATE]: number
    [FilterEnum.BRIGHTNESS]: number

    [FilterEnum.ROTATE_Z]: number
    [FilterEnum.ROTATE_X]: number
    [FilterEnum.ROTATE_Y]: number

    [FilterEnum.SKEW_X]: number
    [FilterEnum.SKEW_Y]: number
    [FilterEnum.BLEND_MODE]: string
    // 动画
    animations: string[]
  }
  preview?: {
    // 预览超出隐藏
    overFlowHidden?: boolean
  }
  filter?: string
  status: StatusType
  interactActions?: InteractActionsType[]
  events: {
    baseEvent: {
      [K in BaseEvent]?: string
    }
    advancedEvents: {
      [K in EventLife]?: string
    }
    interactEvents: {
      [InteractEvents.INTERACT_ON]: InteractEventOn | undefined
      [InteractEvents.INTERACT_COMPONENT_ID]: string | undefined
      [InteractEvents.INTERACT_FN]: { [name: string]: string }
    }[]
  }
}
// 数据请求
interface requestConfig {
  request: RequestConfigType
}

// 请求公共类型
type RequestPublicConfigType = {
  // 时间单位（时分秒）
  requestIntervalUnit: RequestHttpIntervalEnum
  // 请求内容
  requestParams: RequestParams
}

// 单个图表请求配置
export interface RequestConfigType extends RequestPublicConfigType {
  // 所选全局数据池的对应 id
  requestDataPondId?: string
  // 组件定制轮询时间
  requestInterval?: number
  // 获取数据的方式
  requestDataType: RequestDataTypeEnum
  // 请求方式 get/post/del/put/patch
  requestHttpType: RequestHttpEnum
  // 源后续的 url
  requestUrl?: string
  // 请求内容主体方式 普通/sql
  requestContentType: RequestContentTypeEnum
  // 请求体类型
  requestParamsBodyType: RequestBodyEnum
  // SQL 请求对象
  requestSQLContent: {
    sql: string
  }
}

/** 创建组件的类型 */
export interface CreateComponentType extends PublicConfigType , requestConfig {
  key: string
  chartConfig: ConfigType
  option: any
  groupList?: Array<CreateComponentType>
}

// 获取组件
export enum FetchComFlagType {
  VIEW,
  CONFIG
}
