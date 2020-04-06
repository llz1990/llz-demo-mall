<template>
  <!-- 通过绑定 ref 可以获取组件对象; 不单单用于子组件传参 -->
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType, // 此处取传过来的值，决定是实时监听还是动态监听
        pullUpLoad: this.pullUpLoad,
      });

      // 挂载完之后必须返回到顶部
      this.scroll.scrollTo(0, 0);

      // 监听滚动事件:
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });

      // 监听上拉j加载事件：
      this.scroll.on("pullingUp", () => {
        console.log('上拉加载......')
        this.$emit("pullingUp");
      })
    });
  },
  methods: {
    // 封装滚到顶部的方法：
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    // 完成上拉加载
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  }
};
</script>

<style scoped>
</style>