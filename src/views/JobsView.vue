<template>
  <list-item></list-item>
  <!-- <div>
    <ul class="jobs-list">
      <li v-for="item in fetchedJobs" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        
        <div>
          <p class="jobs-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div> -->

</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: { 
    ListItem, 
  },
  
}
</script>

<style>

</style>