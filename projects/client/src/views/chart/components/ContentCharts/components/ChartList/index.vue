<script setup lang="ts">
import { useAside } from '../../hooks/useAside'
import ChartBox from './ChartBox.vue'
import type { ConfigType } from '~/packages/index.d'
import { useChartConfig } from '~/views/chart/hooks/useChartConfig'

const { chartExpand } = useChartConfig()
const { menulist, selectValue, selectOptions } = useAside()

const selectTabVal = ref<string>('all')

const packages = reactive<{
  [T: string]: any
}>({
  // 侧边栏
  menuOptions: [],
  // 当前选择
  selectOptions: {},
  // 分类归档
  categorys: {
    all: [],
  },
  categoryNames: {
    all: '所有',
  },
  // 分类归档数量
  categorysNum: 0,
  // 存储不同类别组件进来的选中值
  saveSelectOptions: {},
})

// 设置初始列表
function setSelectOptions(categorys: any) {
  for (const val in categorys)
    packages.selectOptions = categorys[val]
}

watch(
  () => selectOptions.value,
  (newData: { list: ConfigType[] }) => {
    packages.categorysNum = 0
    if (!newData)
      return
    newData.list.forEach((e: ConfigType) => {
      const value: ConfigType[] = (packages.categorys as any)[e.category]
      packages.categorys[e.category] = value && value.length ? [...value, e] : [e]
      packages.categoryNames[e.category] = e.categoryName
      packages.categorys.all.push(e)
    })
    for (const val in packages.categorys) {
      packages.categorysNum += 1
      packages.menuOptions.push({
        key: val,
        label: packages.categoryNames[val],
      })
    }
    setSelectOptions(packages.categorys)

    // 默认选中处理
    selectTabVal.value = packages.menuOptions[0].key
  },
  {
    immediate: true,
  },
)

function handleItem(key: string) {
  packages.selectOptions = packages.categorys[key]
  selectTabVal.value = key
}
</script>

<template>
  <div
    flex="~ col" bg-grey-2 truncate
    :style="{
      width: chartExpand ? '300px' : '50px',
      transition: 'width 0.3s ease-in-out',
    }"
  >
    <div
      flex="~ items-center"
      b-b="1 grey-3" px-2 h-10
      :style="{
        justifyContent: chartExpand ? 'space-between' : 'center',
      }"
    >
      <div v-if="chartExpand" flex="~ items-center">
        <div v-text="'组件'" />
        <div i-mingcute:classify-2-line />
      </div>
      <div
        flex="~ center" cursor-pointer
        @click="chartExpand = !chartExpand"
      >
        <div v-if="chartExpand" w-5 h-5 i-mingcute:left-line />
        <div v-else w-5 h-5 i-mingcute:right-line />
      </div>
    </div>
    <div v-if="chartExpand" flex="~ 1">
      <div h-full b-r="1 grey-3">
        <div
          v-for="v in menulist" :key="v.key"
          :class="selectValue === v.key ? 'is-active' : ''"
          cursor-pointer
        >
          <div py-2 px-3 v-text="v.label" />
        </div>
      </div>
      <div v-if="selectOptions" flex="~">
        <div h-full p-1 b-r="1 grey-3">
          <div
            v-for="v in packages.menuOptions" :key="v.key"
            cursor-pointer py-1 px-3 b="1 transparent" b-rd-2
            :style="{
              color: selectTabVal === v.key ? 'var(--primary-1)' : '',
            }"
            @click="handleItem(v.key)"
            v-text="v.label"
          />
        </div>
        <ChartBox :menu-options="packages.selectOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.is-active {
  position: relative;
  color: var(--primary-1);

  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 100%;
    background: var(--primary-1);
  }
}

.move {
  img {
    transition: all .3s;
  }
  &:hover img {
    transform: scale(1.05);
  }
}
</style>
