<template>
  <el-menu 
    default-active="1"
    class="el-menu-vertical-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">分类</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-shopping-cart-2"></i>
      <span slot="title">购物车</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-user-solid"></i>
      <span slot="title">我的</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  // import TabBar from 'common/tabbar/TabBar'
  // import TabBarItem from 'common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      // TabBar, TabBarItem
    },
    props: {
      
    },
    data() {
      return {
        
      };
    },
    methods: {
      handleSelect(key,keyPath) {
        console.log(key,keyPath);
      }
    },
  };
</script>

<style scoped>
  i {
    display: block;

  }
  span {
    /* display: block; */
    margin-bottom: 10px;    
  }
</style>