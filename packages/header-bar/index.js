import HeaderBar from './src/main';

/* istanbul ignore next */
HeaderBar.install = function(Vue) {
  Vue.component(HeaderBar.name, HeaderBar);
};

export default HeaderBar;
