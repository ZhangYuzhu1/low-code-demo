import type { CreateComponentType } from '~/packages/index.d'

/**
 * 修改元素位置
 * @param target 对象
 * @param x X轴
 * @param y Y轴
 */
export function setComponentPosition(target: CreateComponentType,
  x?: number,
  y?: number) {
  x && (target.attr.x = x)
  y && (target.attr.y = y)
}
