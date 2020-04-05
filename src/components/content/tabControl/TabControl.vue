<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"  class="tab-control-item" :key="index" :class="{active: currentIndex === index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
        currentIndex: 0
    };
  },
  props: {
    titles: {
        type: Array,
        default() {
          return ['流行', '新款', '精选']
        }
    }
  },
  methods: {
      itemClick(index) {
          this.currentIndex = index;    // 点击事件时候，当前currentIndex 的值为点击的序列，此时可以变成红色
          this.$emit("tabClick", index);   // 同时出发 tabClick 事件；
      }
  }
};
</script>

<style  scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: red;
  }

  .tab-control-item.active span {
    border-bottom: 2px solid red;
  }
</style>