<template>
  <div id="app">
    <tool-bar />
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: { 
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.page-enter-active, .page-leave-active {
  transition: all 1s ease;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}

</style>
