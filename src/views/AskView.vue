<template>
  <p v-for="item in fetchedAsk">
      <router-link :to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>
        {{ item.time_ago }}, 
        {{ item.user }}
      </small>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>