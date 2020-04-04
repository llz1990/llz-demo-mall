<template>
    <div class="goods-list">
        <!-- 有很多个商品信息子组件   将单个商品信息汇总绑定到 goods-item 上传递给子组件-->
        <goods-list-item v-for="(item, index) of goods" :key="index"  :goods-item = "item" class="item"></goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';
export default {
    name: 'GoodsList',
    data() {
        return {

        }
    },
    components: {
        'goods-list-item': GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }

</style>