/**
 * * 动态注册组件
 */
export function componentInstall<T>(key: string, node: T) {
  if (!window.$vue.component(key) && node)
    window.$vue.component(key, node)
}
