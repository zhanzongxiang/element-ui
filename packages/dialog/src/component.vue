<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      v-show="visible"
      class="el-dialog__wrapper"
      @click.self="handleWrapperClick">
      <div
        role="dialog"
        :key="key"
        aria-modal="true"
        :aria-label="title || 'dialog'"
        :class="['el-dialog', { 'is-fullscreen': fullscreen, 'el-dialog--center': center }, customClass]"
        ref="dialog"
        :style="style">
        <div class="el-dialog__header" @mousedown="handleMousedown" ref="dialogHeader" :style="{ cursor: isDrag ? 'move' : 'auto' }">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="el-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'element-ui/src/utils/popup';
  import Migrating from 'element-ui/src/mixins/migrating';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDialog',

    mixins: [Popup, emitter, Migrating],

    props: {
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      width: String,

      fullscreen: Boolean,

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: ''
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      },

      destroyOnClose: Boolean,

      isDrag: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        closed: false,
        key: 0
      };
    },

    watch: {
      visible(val) {
        if (val) {
          this.closed = false;
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          if (!this.closed) this.$emit('close');
          if (this.destroyOnClose) {
            this.$nextTick(() => {
              this.key++;
            });
          }
        }
      }
    },

    computed: {
      style() {
        let style = {};
        if (!this.fullscreen) {
          style.marginTop = this.top || this.$ELEMENT.dialogTop;
          if (this.width) {
            style.width = this.width;
          }
        }
        return style;
      }
    },

    methods: {
      handleMousedown(e) {
        if (this.isDrag) {
          const dragDom = this.$refs.dialog;
          const dialogHeaderEl = this.$refs.dialogHeader;

          // 鼠标按下，计算当前元素距离可视区的距离
          const disX = e.clientX - dialogHeaderEl.offsetLeft;
          const disY = e.clientY - dialogHeaderEl.offsetTop;

          // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
          const getStyle = (function() {
            if (window.document.currentStyle) {
              return (dom, attr) => dom.currentStyle[attr];
            } else {
              return (dom, attr) => getComputedStyle(dom, false)[attr];
            }
          })();

          // 获取到的值带px 正则匹配替换
          let styL = getStyle(dragDom, 'left');
          let styT = getStyle(dragDom, 'top');

          if (styL.includes('%')) {
            styL = +document.body.clientWidth * (+styL.replace(/%/g, '') / 100);
            styT = +document.body.clientHeight * (+styT.replace(/%/g, '') / 100);
          } else {
            styL = +styL.replace(/\px/g, '');
            styT = +styT.replace(/\px/g, '');
          }

          document.onmousemove = function(e) {
            // 通过事件委托，计算移动的距离
            const left = e.clientX - disX;
            const top = e.clientY - disY;

            // 移动当前元素
            dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;

          };

          document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }
      },
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        };
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
      updatePopper() {
        this.broadcast('ElSelectDropdown', 'updatePopper');
        this.broadcast('ElDropdownMenu', 'updatePopper');
      },
      afterEnter() {
        this.$emit('opened');
      },
      afterLeave() {
        this.$emit('closed');
      }
    },

    mounted() {
      if (this.visible) {
        this.rendered = true;
        this.open();
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },

    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>
