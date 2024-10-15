import cloneDeep from 'lodash/cloneDeep'
import { CreateComponentType } from '~/packages/index.d'

import cover from './cover.png'
import { ImageConfig } from '.'
import { PublicConfigClass } from '~/packages/public/publicConfig'

export const option = {
  // 图片路径
  dataset: cover,
  // 圆角
  borderRadius: 10
}


export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = ImageConfig.key
  public chartConfig = cloneDeep(ImageConfig)
  public option = cloneDeep(option)
}
