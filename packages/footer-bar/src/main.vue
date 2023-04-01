<template>
  <div class="el-footer-bar">
    <footer-bar-style1 v-if="type==='style1'" :class="getClass">
      <slot></slot>
    </footer-bar-style1>
  </div>
</template>

<script>
import footerBarStyle1 from './components/footer-bar-style1';

export default {
  name: 'ElFooterBar',
  props: {
    type: {
      type: String
    }
  },
  components: {
    footerBarStyle1
  },
  computed: {
    getClass() {
      return 'el-footer-bar-' + this.type;
    }
  }
};
</script>
