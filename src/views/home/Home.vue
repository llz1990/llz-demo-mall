<template>
  <div id="home">
    <!-- 取导航条组件 -->
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 部分展示在scroll 里面:::::::::::::子组件插槽 -->
    <my-scroll ref="scroll" class="content" :probe-type="probeType" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <!-- 轮播图展示 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 提示信息展示 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <!-- 可点击tab -->
      <tab-control class="tab-control" @tabClick="tabClick"></tab-control>
      <!-- 商品列表展示 -->
      <goods-list :goods="showGoodsList"></goods-list>
    </my-scroll>
    <!-- 组件直接监听事件必须用 native -->
    <back-top @click.native="backTop()" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getMultiData, getGoodsData } from "../../network/home";
import HomeSwiper from "../home/childComps/HomeSwiper";
import RecommendView from "../home/childComps/RecommendView";
import FeatureView from "../home/childComps/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";
export default {
  name: "Home",
  components: {
    "nav-bar": NavBar,
    "home-swiper": HomeSwiper,
    "recommend-view": RecommendView,
    "feature-view": FeatureView,
    "tab-control": TabControl,
    "goods-list": GoodsList,
    "my-scroll": Scroll,
    "back-top": BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      probeType: 3, // 默认3
      isShowBackTop: false,
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: "pop" // 初始化的时候是 pop（流行） 栏
    };
  },
  computed: {
    // 计算属性不要写在 data 中
    showGoodsList() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求轮播图数据
    this._getMultiData();

    // 请求商品数据
    this._getGoodsData("pop");
    this._getGoodsData("new");
    this._getGoodsData("sell");
  },
  methods: {
    _getMultiData() {
      getMultiData().then(res => {
        // 函数方法返回的是Promise  因此需要回调
        console.log("result", res);
        // 此处箭头函数的this 是指向 Vue 实例，此处可以用
        this.banners = res.data.banner.list; // 轮播图信息
        this.recommends = res.data.recommend.list; // 提示信息
      });
    },

    _getGoodsData(type) {
      let page = this.goods[type].page; // 获取当前的页码数目
      getGoodsData(type, page).then(res => {
        let listInfo = res.data.list;
        console.log("lisInfo", listInfo);
        this.goods[type].list.push(...listInfo);
        this.goods[type].page += 1;

        // 完成加载数据
        console.log(this.$refs.scroll);
        this.$refs.scroll.finishPullUp();
      });
    },

    // 监听到事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000); // 取到Scroll组件后，直接取滚动方法
    },

    // 监听滚动事件控制 ‘回到顶部’按钮的显示 和 隐藏
    contentScroll(position) {
      this.isShowBackTop = (-position['y']) > 1000 ? true : false;
    },

    loadMore() {
      this._getGoodsData(this.currentType);
    }
  }
};
</script>

<style scoped>
#home {
  /* 视口高度表示 100% */
  height: 100vh;
  position: relative;
}
/* 此处只是当前界面取红色背景 */
.nav-home {
  background-color: #ff5777;
  /* background-color: red; */
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 10;
}
.content {
  height: calc(100% - 94px);
  overflow: hidden;
  /* 把滚动栏设置为绝对定位，就不用 overflow: hidden， #home 为相对定位 */
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>