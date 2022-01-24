<template>
  <div v-for="item in fetchedNews">
      {{ item.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },

  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>

<style>

</style>