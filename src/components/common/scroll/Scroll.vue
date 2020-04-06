<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        setTimeout(this._initScroll, 1000)
    },
    methods: {
        // 初始化、创建BetterScroll
        _initScroll() {
            this.scroll = new BScroll(this.$refs['wapper'], {
            })
        },
    }

}
</script>

<style scoped>

</style>