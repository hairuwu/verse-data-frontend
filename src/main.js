import { createApp } from 'vue'
import App from './App.vue'

/**
 * 脚手架：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create
 * vue3 要搭配element-plus使用：https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E7%94%A8%E6%B3%95
 */

/**
 * cd ./hello-project
 * npm run serve
 * 
 */

/**
 * npm run build 
 * git subtree push --prefix dist origin gh-pages
 */


// 加载 element 组件库
import ElementPlus from 'element-plus'

// 加载 element 组件库的样式
import 'element-plus/dist/index.css'



// 全局注册 element 组件库
// 创建应用，并使用elementui,
// mount 中可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：
// https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors
createApp(App).use(ElementPlus).mount('#app')
