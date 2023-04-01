import FooterBar from './src/main';

/* istanbul ignore next */
FooterBar.install = function(Vue) {
  Vue.component(FooterBar.name, FooterBar);
};

export default FooterBar;
