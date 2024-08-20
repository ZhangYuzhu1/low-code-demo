import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async (to, _, next) => {
      // const { path, name, meta } = to
      // const toPath = path.toLowerCase()
      // if (toPath !== path)
      //   return next(toPath)

      // 加载页面配置
      // const { isLoaded, pages, getPages } = usePages()
      // if (!isLoaded.value)
      //   await getPages()

      // 加载数据中心菜单
      // const { dataPlaty, getDataPlaty } = useData()
      // if (!dataPlaty.value)
      //   await getDataPlaty()

      // 前往配置页面，判断是否存在
      // if (name === 'all') {
      //   const [_, key, id, other] = path.split('/')
      //   if (!key || !id || other || !pages.value[key as CmsId]?.find(v => v.id === id))
      //     return next('/')
      // }

      // 前往数据中心，判断是否存在
      // if (name === 'data-all') {
      //   const [_, _key, id, other] = path.split('/')
      //   if (!id || other || !dataPlaty.value?.find(v => v.nameEn.toLowerCase() === id))
      //     return next('/')
      // }

      // 未登录用户 前往 需登录访问页面，重定向到首页
      // const { isLogin } = useUser()
      // if (!isLogin.value && meta.login)
      //   return next('/')

      next()
    })
  }
}
