<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-panel-bar type="style2" style="width: 800px; height: 290px;">
      这是标题123
    </el-panel-bar>
    <el-panel-bar type="style3" :reverse="true" style="width: 500px; height: 290px;">
      这是标题123
    </el-panel-bar>
    <el-panel-bar type="style4" :reverse="true" style="width: 500px; height: 290px;">
      这是标题123
    </el-panel-bar>
    <div style="min-width: 1024px;height: 190px">
      <el-header-bar type="style2" style="width: 100%; height: 100%;">
        这是标题123
      </el-header-bar>
    </div>
    <svg viewBox="0 0 1919.03 116" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1">
      <path
          d="M1451,88l239-12,12-12,217-9"
          fill="none"
          class="cls-13"
          stroke-width="2"
          stroke-linecap="round"
          mask="url(#movePoint)"
          style="
            stroke: red;
            animation: 4s linear 0s infinite normal none running rangeDash;
          "
      />
      <defs>
        <filter id="gaussianBlurFilter">
          <feGaussianBlur
              in="SourceGraphic"
              result="gaussianBlur"
              stdDeviation="20"
          />
        </filter>

        <!-- 通过渐变形成尾流 -->
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>

        <!-- 可移动的点 -->
        <mask id="movePoint">
          <circle cx="0" cy="0" r="80" fill="url(#gradient)">
            <!-- 移动路径要和线的路径保持一致 -->
            <animateMotion
                path="M1451,88l239-12,12-12,217-9"
                dur="4s"
                repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <!--          S492.736,17.845,578.81,31.632c18.323,2.935,46.076,45.312,64.857,47.615,91.075,11.168,242.005,16.721,250.214,17.017a0.89,0.89,0,0,0,.619-0.221l11.432-9.892a5.438,5.438,0,0,1,3.607-1.325L960,85.277l50.47-.451a5.441,5.441,0,0,1,3.6,1.318l11.48,9.9a0.887,0.887,0,0,0,.62.22c8.18-.3,158.61-5.829,249.43-16.927,19.03-2.325,47.03-44.732,65.59-47.7,86.07-13.787,193.76-27.717,193.76-27.717H960Z-->
      <path
          d="M385.045,3.915S492.736,17.845,578.81,31.632c18.323,2.935,46.076,45.312,64.857,47.615,91.075,11.168,242.005,16.721,250.214,17.017a0.89,0.89,0,0,0,.619-0.221l11.432-9.892a5.438,5.438,0,0,1,3.607-1.325L960,85.277l50.47-.451a5.441,5.441,0,0,1,3.6,1.318l11.48,9.9a0.887,0.887,0,0,0,.62.22c8.18-.3,158.61-5.829,249.43-16.927,19.03-2.325,47.03-44.732,65.59-47.7,86.07-13.787,193.76-27.717,193.76-27.717"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          style="
            stroke: blue;
            animation: 4s linear 0s infinite normal none running rangeDash;
          "
      />
      <path
          d="M385.045,3.915S492.736,17.845,578.81,31.632c18.323,2.935,46.076,45.312,64.857,47.615,91.075,11.168,242.005,16.721,250.214,17.017a0.89,0.89,0,0,0,.619-0.221l11.432-9.892a5.438,5.438,0,0,1,3.607-1.325L960,85.277l50.47-.451a5.441,5.441,0,0,1,3.6,1.318l11.48,9.9a0.887,0.887,0,0,0,.62.22c8.18-.3,158.61-5.829,249.43-16.927,19.03-2.325,47.03-44.732,65.59-47.7,86.07-13.787,193.76-27.717,193.76-27.717"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          style="
            stroke: red;
            animation: 4s linear 0s infinite normal none running rangeDash;
          "
          mask="url(#movePoint2)"
      />
      <defs>
        <filter id="gaussianBlurFilter">
          <feGaussianBlur
              in="SourceGraphic"
              result="gaussianBlur"
              stdDeviation="20"
          />
        </filter>

        <!-- 通过渐变形成尾流 -->
        <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>

        <!-- 可移动的点 -->
        <mask id="movePoint2">
          <circle cx="0" cy="0" r="80" fill="url(#gradient2)">
            <!-- 移动路径要和线的路径保持一致 -->
            <animateMotion
                path="M385.045,3.915S492.736,17.845,578.81,31.632c18.323,2.935,46.076,45.312,64.857,47.615,91.075,11.168,242.005,16.721,250.214,17.017a0.89,0.89,0,0,0,.619-0.221l11.432-9.892a5.438,5.438,0,0,1,3.607-1.325L960,85.277l50.47-.451a5.441,5.441,0,0,1,3.6,1.318l11.48,9.9a0.887,0.887,0,0,0,.62.22c8.18-.3,158.61-5.829,249.43-16.927,19.03-2.325,47.03-44.732,65.59-47.7,86.07-13.787,193.76-27.717,193.76-27.717"
                dur="8s"
                repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    let that = this;
    return {
      date2: "",
      input: 'Hello Element UI!',
      pickerOptions: {
        cellClassName: (time) => {

          if (that.badgeDate.includes(this.parseTime(time, '{y}-{m}'))) {
            return 'badge'
          }
        }
      },
      pickerOptions2: {
        cellClassName: (time) => {
          if (that.badgeDate2.includes(this.parseTime2(time, '{y}-{m}-{d}'))) {
            return 'badge'
          }
        }
      },
      date: '',
      badgeDate: ['2023-03', '2023-04', '2023-05'],
      badgeDate2: ['2023-03-01', '2023-03-05'],
    };
  },
  mounted() {
    // this.parse();
  },
  methods: {
    animationDashArray(rootPath) {
      const animationKeyForm = `@keyframes rangeDash {0% {stroke-dasharray: 0, ${rootPath.getTotalLength() + 1};}100% {stroke-dasharray: ${rootPath.getTotalLength() + 1}, 0;}}`;

      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = animationKeyForm;

      document.head.append(style);

      rootPath.style.animation = 'rangeDash 4s linear infinite';
    },

    // parse() {
    //   const defaultSlot = this.$slots.default[0];
    //
    //   if (!defaultSlot) return;
    //
    //   const newElement = defaultSlot.elm.cloneNode();
    //   newElement.style.stroke = '#4fd2dd';
    //   newElement.setAttribute('mask', 'url(#movePoint)');
    //
    //   this.$el.append(newElement);
    //
    //   this.animationDashArray(newElement);
    // }
  }
};
</script>

<style lang="scss">
</style>
