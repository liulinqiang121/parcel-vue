<template>
    <header>
        <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" active-text-color="#409EFF">
            <el-menu-item index="1">
                <router-link to="/home">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/table">表格</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to="/losePage">404</router-link>
            </el-menu-item>

        </el-menu>
    </header>
</template>
<script>
    export default {
        name: 'headerCM',
        data() {
            return {
                index: '1'
            }
        }
    }
</script>
<style scoped>
.el-menu {
    width: 360px!important;
    margin:0 auto;
}
</style>
