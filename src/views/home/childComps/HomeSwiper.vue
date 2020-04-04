<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.list">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper';
export default {
    name: 'HomeSwiper',
    components: {
        "swiper": Swiper,
        "swiper-item": SwiperItem
    },
    props: {
        // 从父组件取值过来
        banners: {
            type: Array,
            default() {
                return []
            },
            required: true
        }
    },
    data() {
        return {

        }
    },

}
</script>