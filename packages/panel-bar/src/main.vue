<template>
  <div class="el-panel-bar" style="width: 100%;height: 100%;">
    <panel-bar-style1 v-if="type==='style1'" :class="getClass">
      <slot></slot>
    </panel-bar-style1>
    <panel-bar-style2 v-if="type==='style2'" :class="getClass" :color="color" :backgroundColor="backgroundColor">
      <slot></slot>
    </panel-bar-style2>
    <panel-bar-style3 :reverse="reverse" v-if="type==='style3'" :class="getClass" :color="color" :backgroundColor="backgroundColor">
      <slot></slot>
    </panel-bar-style3>
    <panel-bar-style4 :reverse="reverse" :title="title" v-if="type==='style4'" :class="getClass" :color="color" :backgroundColor="backgroundColor">
      <slot></slot>
    </panel-bar-style4>
    <panel-bar-style5 :reverse="reverse" v-if="type==='style5'" :class="getClass" :color="color" :backgroundColor="backgroundColor">
      <slot></slot>
    </panel-bar-style5>
    <panel-bar-style6 :reverse="reverse" v-if="type==='style6'" :class="getClass" :color="color" :backgroundColor="backgroundColor">
      <slot></slot>
    </panel-bar-style6>
  </div>
</template>

<script>
import panelBarStyle1 from './components/panel-bar-style1';
import panelBarStyle2 from './components/panel-bar-style2';
import panelBarStyle3 from './components/panel-bar-style3';
import panelBarStyle4 from './components/panel-bar-style4';
import panelBarStyle5 from './components/panel-bar-style5';
import panelBarStyle6 from './components/panel-bar-style6';
export default {
  name: 'ElPanelBar',
  props: {
    type: {
      type: String
    },
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    title: {
      type: String,
      default: 'transparent'
    }
  },
  components: {
    panelBarStyle1,
    panelBarStyle2,
    panelBarStyle3,
    panelBarStyle4,
    panelBarStyle5,
    panelBarStyle6
  },
  computed: {
    getClass() {
      return 'el-panel-bar-' + this.type;
    }
  }
};
</script>
