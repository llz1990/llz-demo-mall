<template>
  <div id="home">
    <!-- 取导航条组件 -->
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图展示 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 提示信息展示 -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- 本周流行 -->
    <feature-view></feature-view>
    <tab-control class="tab-control"></tab-control>
    <goods-list :goods = "showGoodsList"></goods-list>
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
export default {
  name: "Home",
  components: {
    "nav-bar": NavBar,
    "home-swiper": HomeSwiper,
    "recommend-view": RecommendView,
    "feature-view": FeatureView,
    "tab-control": TabControl,
    "goods-list": GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": { page: 1, list: [] },
        "new": { page: 1, list: [] },
        "sell": { page: 1, list: [] }
      },
      currentType: "pop",   // 初始化的时候是 pop（流行） 栏
    };
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求轮播图数据
    this._getMultiData();

    // 请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
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
      let page = this.goods[type].page;  // 获取当前的页码数目
      getGoodsData(type, page).then(res => {
        let listInfo = res.data.list;
        console.log('lisInfo', listInfo);
        this.goods[type].list.push(...listInfo)
        this.goods[type].page += 1
      })
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
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
}
</style>