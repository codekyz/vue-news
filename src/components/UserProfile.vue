<template>
  <section class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>

    <div class="user_description">
      <div>{{ info.id }}</div>
      <div class="time">
        {{ info.created }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    info: Object,
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