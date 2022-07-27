/**
 * 懒加载的方式引入路由组件
 * @param file 文件在views下的地址
 */
export function _import(file) {
  return () => import('@/views/' + file + '.vue');
}
