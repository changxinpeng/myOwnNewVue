<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    components: {
      
    },
    props: {
      link: {
        type: String,
        required: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        return this.isActive ? {"color": "red"} : {}
      }
    },
    methods: {
      itemClick() {
        console.log(this);
        // this.$router.replace(this.link)
      }
    },
  };
</script>

<style scoped>

</style>