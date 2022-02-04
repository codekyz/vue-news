<template>
  <div>
    <user-profile :info="userInfo"></user-profile>
    <!-- <p>name : {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>created : {{ fetchedUser.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },

  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },

  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style>
</style>