<template>
  <div class="el-head-bar">
    <headerBarStyle1 v-if="type==='style1'" :class="getClass">
      <slot></slot>
    </headerBarStyle1>
    <headerBarStyle2 v-if="type==='style2'" :class="getClass">
      <slot></slot>
    </headerBarStyle2>
  </div>
</template>

<script>
import headerBarStyle1 from './components/header-bar-style1';
import headerBarStyle2 from './components/header-bar-style2';
export default {
  name: 'ElHeaderBar',
  props: {
    type: {
      type: String
    }
  },
  components: {
    headerBarStyle1,
    headerBarStyle2
  },
  computed: {
    getClass() {
      return 'el-head-bar-' + this.type;
    }
  }
};
</script>
