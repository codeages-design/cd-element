# Codeages Design Vue

a Web Design Language Based on the Vue and Element version 

### How to use ?

about element component, the same use method as element.

```js
import ElementUI from 'element-ui';
import cdElement from 'cd-element';
import 'cd-element/dist/styles/index.css';

Vue.use(cdElement);
Vue.use(ElementUI);
```

If you want to On-demand use?

```bash
yarn add babel-plugin-import --dev
```

Then edit .babelrc:

```
"plugins": [
  ["import", {
    "libraryName": "cd-element",
    "libraryDirectory": "src/components"
  }]
],
```

Then edit main.js

```js
import {
  VMenu,
  VSubmenu,
  Sidebar,
  Panel
} from 'cd-element';

Vue.component('cd-v-menu', VMenu);
Vue.component('cd-v-submenu', VSubmenu);
Vue.component('cd-sidebar', Sidebar);
Vue.component('cd-panel', Panel);
```

### About cd-element API

##### Menu

##### 一级menu
参数 | 说明 | 类型 | 可选值 | 默认值
---|--- | --- | --- | ---
isCollapse | 是否折叠  | Boolean  | -- | --
currentRouteName | 当前路由 | String | -- | --
data | 菜单配置项（包含一下三项） | Array | -- |  []
title | 菜单标题 | String | -- | --
icon | 菜单图标 | String | -- | --
routeName | 菜单对应路由 | String |  -- | --


##### 二级 submenu
参数 | 说明 | 类型 | 可选值 | 默认值
---|--- | --- | --- | ---
data | 菜单配置项（包含一下三项） | Array | -- |  []
title | 菜单标题 | String | -- | --
icon | 菜单图标 | String | -- | --
routeName | 菜单对应路由 | String |  -- | --

##### sidebar 侧边栏组件
参数 | 说明 | 类型 | 可选值 | 默认值
---|--- | --- | --- | ---
isCollapse | 是否折叠  | Boolean  | -- | --
title | 侧边栏标题 | String | -- | --


##### panel 面板
参数 | 说明 | 类型 | 可选值 | 默认值
---|--- | --- | --- | ---
title | 面板标题 | String | -- | --
size | 面板大小 | String | sm, '' | ''
isShowHeading | 是否展示heading | Boolean | -- | true
isShowAction | 是否展示操作 | Boolean | -- | false

