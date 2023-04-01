<template>
  <div
      class="pit-box-right"
      ref="pitBoxRight">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="viewBox">
      <defs>
        <filter id="a">
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10" result="b" />
          <feFlood flood-color="#2a88da" flood-opacity="0.702" result="c" />
          <feComposite operator="out" in="SourceGraphic" in2="b" />
          <feComposite operator="in" in="c" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-1531 -80)">
        <g data-type="innerShadowGroup">
          <g class="pit-box-right-a">
            <path class="pit-box-right-e" :d="aPath1" />
            <path :d="aPath1" stroke="#2a88da" />
          </g>
          <g
              class="pit-box-right-g"
              transform="matrix(1, 0, 0, 1, 1531, 82.47)">
            <g class="pit-box-right-b" transform="translate(-1531 -82.47)">
              <path class="pit-box-right-e" :d="aPath1" />
            </g>
          </g>
        </g>
        <path class="pit-box-right-d" :d="rPath">
          <animate
              attributeName="fill"
              :values="`#2a88da;#57b8fc;#57b8fc`"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"></animate>
        </path>
      </g>
    </svg>
    <div class="pit-box-right-warp slotBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel-bar-style1',
  props: {
    title: {
      type: String,
      default: ''
    },
    beforeClose: {
      type: Function
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      viewBox: null,
      aPath1: '',
      aPath2: '',
      rPath: ''
    };
  },
  mounted() {
    this.init();
    window.addEventListener('resize', () => {
      this.init();
    });
  },
  methods: {
    init() {
      const { width, height } = this.getBox();
      this.width = width;
      this.height = height;
      this.viewBox = `0 0 ${width} ${height}`;
      this.svgPath(width, height);
    },
    getBox() {
      const dom = this.$refs.pitBoxRight;
      return {
        width: dom.offsetWidth,
        height: dom.offsetHeight
      };
    },
    svgPath(width, height) {
      this.aPath1 = `
      M ${1531 + width - 11} ${height + 80}
      L 1531 ${height + 80}
      L ${1531 + 2} 162
      L 1563 112
      L ${1531 + width - 10} 112
      L ${1531 + width - 11} 207
      L ${1531 + width - 24} 230
      L ${1531 + width - 25} 425
      L ${1531 + width - 11} 446
      Z`;
      this.rPath = `
      M${1531 + width - 20}.974,
      420.705V380.684l6-15.008v70.036Zm0-69.035,
      6-15.008v21.011l-6,
      15.008Zm0-31.016,
      6-15.008v21.011l-6,
      15.008Zm0-30.016,
      6-15.008v21.01l-6,
      15.008Zm0-60.031,
      6-15.008v51.026l-6,
      15.007Z`;
    }
  }
};
</script>

<style scoped>

</style>
