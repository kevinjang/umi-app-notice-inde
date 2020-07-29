
// ref: https://umijs.org/config/
export default {
  // treeShaking: true,
  antd: {
    dark: false,
    compact: true
  },
  dva: {
    hmr: true
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index'
  },
  title: 'umi-app-notice-inde',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
}
