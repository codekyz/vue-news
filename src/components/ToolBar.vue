<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
    color: #FFF;
    background-color: #42B883;
    display: flex;
    padding: 8px;
}

.header a {
    color: #FFF;
}

.header .router-link-exact-active {
    color: #35495E;
}

</style>