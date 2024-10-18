import type { App } from 'vue'

// 声明 window 对象的类型扩展
declare global {
  interface Window {
    $vue: App<Element>
  }
}
