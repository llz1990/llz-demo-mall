<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  data() {
    return {};
  },
  // 取父组件传过来的值：
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
      required: true
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>