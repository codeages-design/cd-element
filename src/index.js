import Icon from './components/icon';
import VMenu from './components/v-menu';
import VSubmenu from './components/v-submenu';
import Sidebar from './components/sidebar';
import Panel from './components/panel';
import Badge from './components/badge';
import CollapseTransition from './components/collapse-transition';

// import message from './components/message';

import pkg from '../package.json';

const components = {
  Icon,
  VMenu,
  VSubmenu,
  Sidebar,
  Panel,
  Badge,
  CollapseTransition
};

const install = (Vue, options = {}) => {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
  
  // Vue.prototype.$message = message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = Object.assign({}, {
  version: pkg.version,
  install,
}, components);

export default API;