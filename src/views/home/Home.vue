<template>
    <div id="home">
        <nav-bar class="nav-home">
            <div slot="center">购物车</div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar';
export default {
    name: 'Home',
    components: {
        "nav-bar": NavBar
    }
}
</script>
<style scoped>
.nav-home{
    background-color: #ff5777;
    color: white;
}
</style>