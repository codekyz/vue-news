<template>
  <div v-for="item in fetchedJobs">
      {{ item.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },

  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>

<style>

</style>