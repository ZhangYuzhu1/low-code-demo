import { packagesList } from '~/packages'
import { PackagesCategoryEnum, PackagesCategoryName } from '~/packages/enum'
import type { ConfigType } from '~/packages/index.d'

const packages = Object.freeze(packagesList)

export interface MenuType {
  key: string
  icon: string
  label: string
  list: ConfigType[]
}

const packagesListObj = {
  [PackagesCategoryEnum.CHARTS]: {
    icon: 'i-mingcute:chart-line-line',
    label: PackagesCategoryName.Charts,
  },
  [PackagesCategoryEnum.INFORMATIONS]: {
    icon: 'i-mingcute:fan-direction-front-line',
    label: PackagesCategoryName.Informations,
  },
  [PackagesCategoryEnum.TABLES]: {
    icon: 'i-mingcute:table-3-line',
    label: PackagesCategoryName.Tables,
  },
  [PackagesCategoryEnum.DECORATES]: {
    icon: 'i-mingcute:binance-usd-busd-line',
    label: PackagesCategoryName.Decorates,
  },
  [PackagesCategoryEnum.PHOTOS]: {
    icon: 'i-mingcute:photo-album-line',
    label: PackagesCategoryName.Photos,
  },
  [PackagesCategoryEnum.ICONS]: {
    icon: 'i-mingcute:incognito-mode-line',
    label: PackagesCategoryName.Icons,
  },
}

const menulist: MenuType[] = []
export function useAside() {
  function handlePackagesList() {
    for (const val in packages) {
      menulist.push({
        key: val,
        // @ts-expect-error: 类型不匹配，这是预期的
        icon: packagesListObj[val].icon,
        // @ts-expect-error: 类型不匹配，这是预期的
        label: packagesListObj[val].label,
        // @ts-expect-error: 类型不匹配，这是预期的
        list: packages[val],
      })
    }
  }
  handlePackagesList()

  // 记录选中值
  const beforeSelect: string = menulist[0].key
  const selectValue = ref<string>(menulist[0].key)

  // 选中的对象值
  const selectOptions = ref(menulist[0])

  return {
    packages,
    beforeSelect,
    selectValue,
    selectOptions,
    menulist,
  }
}
