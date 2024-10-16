import { packagesList } from '~/packages'
import { PackagesCategoryEnum, PackagesCategoryName } from '~/packages/enum'
import type { ConfigType } from '~/packages/index.d'

const packages = Object.freeze(packagesList)

export interface MenuType {
  key: string
  label: string
  list: ConfigType[]
}

const packagesListObj = {
  [PackagesCategoryEnum.CHARTS]: {
    label: PackagesCategoryName.Charts,
  },
  [PackagesCategoryEnum.INFORMATIONS]: {
    label: PackagesCategoryName.Informations,
  },
  [PackagesCategoryEnum.TABLES]: {
    label: PackagesCategoryName.Tables,
  },
  [PackagesCategoryEnum.DECORATES]: {
    label: PackagesCategoryName.Decorates,
  },
  [PackagesCategoryEnum.PHOTOS]: {
    label: PackagesCategoryName.Photos,
  },
  [PackagesCategoryEnum.ICONS]: {
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
