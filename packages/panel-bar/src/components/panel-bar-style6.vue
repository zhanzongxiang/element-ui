<template>
  <div class="boxFontColor dv-border-box" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <path
          :fill="backgroundColor"
          :stroke="mergedColor[0]"
          :d="`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${width - 20} 10 L ${width - 5} 25
          L ${width - 5} ${height - 5} L 20 ${height - 5}
          L 5 ${height - 20} L 5 20
        `"
      />

      <path
          fill="transparent"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="10, 5"
          :stroke="mergedColor[0]"
          :d="`M 16 9 L 61 9`"
      />

      <path
          fill="transparent"
          :stroke="mergedColor[1]"
          :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`"
      />

      <path
          fill="transparent"
          :stroke="mergedColor[1]"
          :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${height - 5}`"
      />
    </svg>

    <div class="border-box-content slotBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'panel-bar-style5',
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    titleWidth: {
      type: Number,
      default: 250
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    length() {
      const {width, height} = this;

      return (width + height - 5) * 2;
    }
  },
  data() {
    return {
      ref: 'border-box-13',

      width: 0,

      height: 0,

      gradientId: 'border-box-9-gradient',

      maskId: 'border-box-9-mask',

      defaultColor: ['#6586ec', '#2cf7fe'],

      mergedColor: ['#6586ec', '#2cf7fe']
    };
  },
  watch: {
    color() {
      const {mergeColor} = this;

      mergeColor();
    }
  },
  methods: {
    mergeColor() {
      // const {color, defaultColor} = this;

      // this.mergedColor = deepMerge(deepClone(defaultColor, true), color || []);
    },
    init() {
      const {width, height} = this.getBox();
      this.width = width;
      this.height = height;
    },
    getBox() {
      const dom = this.$refs[this.ref];
      return {
        width: dom.offsetWidth,
        height: dom.offsetHeight
      };
    }
  },
  mounted() {
    this.init();
    window.addEventListener('resize', () => {
      this.init();
    });
  }
};
</script>

<style scoped lang="scss"></style>
