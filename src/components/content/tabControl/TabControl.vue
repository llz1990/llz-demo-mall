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
          this.currentIndex = index;
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