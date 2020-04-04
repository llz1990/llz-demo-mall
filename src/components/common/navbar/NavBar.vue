<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
/* 将导航栏的样式确定 */
.nav-bar{
    display: flex;
    /* 每个字间隔高 */
    line-height: 44px;
    /* 行高 */
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.left{
    width: 60px;
}
.right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>