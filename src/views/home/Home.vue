<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getMultiData } from "../../network/home";
export default {
  name: "Home",
  components: {
    "nav-bar": NavBar
  },
  data() {
      return {
          banners: [],
          recommends: [],
      }
  },
  created() {
    getMultiData().then(res => {
      console.log("result", res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
}
</script>

<style scoped>
.nav-home {
  background-color: #ff5777;
  color: white;
}
</style>