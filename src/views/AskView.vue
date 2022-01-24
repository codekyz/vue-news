<template>
  <div v-for="item in fetchedAsk">
      {{ item.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])

    // ...mapState({
    //   ask: state => state.ask
    // })

    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>