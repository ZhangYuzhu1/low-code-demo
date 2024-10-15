import { ChatCategoryEnum, ChatCategoryEnumName } from './../../index.d'
import cover from './cover.png'
import type { ConfigType } from '~/packages/index.d'
import { ChartFrameEnum, PackagesCategoryEnum } from '~/packages/enum'

export const ImageConfig: ConfigType = {
  key: 'Image',
  chartKey: 'VImage',
  contentKey: 'VCImage',
  title: '图片',
  category: ChatCategoryEnum.IMAGE,
  categoryName: ChatCategoryEnumName.IMAGE,
  package: PackagesCategoryEnum.PHOTOS,
  chartFrame: ChartFrameEnum.COMMON,
  cover,
}
