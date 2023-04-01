import PanelBar from './src/main';

/* istanbul ignore next */
PanelBar.install = function(Vue) {
  Vue.component(PanelBar.name, PanelBar);
};

export default PanelBar;
