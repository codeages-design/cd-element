# Codeages Design Vue

a Web Design Language Based on the Vue and Element version 

### how to use ?

about element component, The same use method as element.

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
  VSubmenu
} from 'cd-element';

Vue.component('cd-v-menu', VMenu);
Vue.component('cd-v-submenu', VSubmenu);
```