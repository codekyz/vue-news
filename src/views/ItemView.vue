<template>
  <div>
    <section class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>

      <div class="user_description">
        <router-link :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <div class="time">
          {{ fetchedItem.time_ago }}
        </div>
      </div>
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <div v-html="fetchedItem.content" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },

  created() {
    const itemId = this.$route.params.itemId;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 10px;
}

.fa-user {
  font-size: 50px;
}

.user_description {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
}

.time {
  font-size: 14px;
}
</style>