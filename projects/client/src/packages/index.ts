import { PhotosList } from './components/Photos/index'
import { PackagesCategoryEnum } from './enum'
import type { PackagesType } from './index.d'

/** 所有图表 */
export const packagesList: PackagesType = {
  [PackagesCategoryEnum.PHOTOS]: PhotosList,
}
