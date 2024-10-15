import { cloneDeep } from "lodash"
import { BaseEvent, EventLife } from "~/enum/eventEnum"
import { PublicConfigType, RequestConfigType } from "../index.d"
import { RequestBodyEnum, RequestContentTypeEnum, RequestDataTypeEnum, RequestHttpEnum, RequestHttpIntervalEnum } from "~/enum/httpEnum"

// 请求基础属性
export const requestConfig: RequestConfigType = {
  requestDataType: RequestDataTypeEnum.STATIC,
  requestHttpType: RequestHttpEnum.GET,
  requestUrl: '',
  requestInterval: undefined,
  requestIntervalUnit: RequestHttpIntervalEnum.SECOND,
  requestContentType: RequestContentTypeEnum.DEFAULT,
  requestParamsBodyType: RequestBodyEnum.NONE,
  requestSQLContent: {
    sql: 'select * from  where'
  },
  requestParams: {
    Body: {
      'form-data': {},
      'x-www-form-urlencoded': {},
      json: '',
      xml: ''
    },
    Header: {},
    Params: {}
  }
}

// 图表初始配置(px)
export const chartInitConfig = {
  x: 50,
  y: 50,
  w: 500,
  h: 300,
  // 不建议动 offset
  offsetX: 0,
  offsetY: 0,
}


/**
 * * 生成一个不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 10) => {
  return 'id_' + Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}

// 单实例类
export class PublicConfigClass implements PublicConfigType {
  public id = getUUID()
  public isGroup = false
  // 基本信息
  public attr = { ...chartInitConfig, zIndex: -1 }
  // 基本样式
  public styles = {
    // 使用滤镜
    filterShow: false,
    // 色相
    hueRotate: 0,
    // 饱和度
    saturate: 1,
    // 对比度
    contrast: 1,
    // 亮度
    brightness: 1,
    // 透明
    opacity: 1,

    // 旋转
    rotateZ: 0,
    rotateX: 0,
    rotateY: 0,

    // 倾斜
    skewX: 0,
    skewY: 0,

    // 混合模式
    blendMode: 'normal',

    // 动画
    animations: []
  }
  // 预览
  public preview = {
    overFlowHidden: false
  }
  // 状态
  public status = {
    lock: false,
    hide: false
  }
  // 请求
  public request = cloneDeep(requestConfig)
  // 数据过滤
  public filter = undefined
  // 事件
  public events = {
    baseEvent: {
      [BaseEvent.ON_CLICK]: undefined,
      [BaseEvent.ON_DBL_CLICK]: undefined,
      [BaseEvent.ON_MOUSE_ENTER]: undefined,
      [BaseEvent.ON_MOUSE_LEAVE]: undefined
    },
    advancedEvents: {
      [EventLife.VNODE_MOUNTED]: undefined,
      [EventLife.VNODE_BEFORE_MOUNT]: undefined
    },
    interactEvents: []
  }
}
