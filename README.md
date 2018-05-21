# Codeages Design Vue

a Web Design Language Based on the Vue version and changed the Element theme


### how to use ?

```js
import cdElement from 'cd-element';
import 'cd-element/dist/styles/index.css';

Vue.use(cdElement);
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