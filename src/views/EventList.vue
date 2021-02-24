<template>
  <h2 v-if="user?.user">Events for {{ user?.user.name }}</h2>
  <div class="events">
    <EventCard v-for="event in event?.events" :key="event.id" :event="event" />
    <div class="d-flex">
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          >Prev Page</router-link
        >|</template
      >
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
        >Next Page</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {}
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['event', 'user']),
  },
  created() {
    this.$store.dispatch('event/fetchEvents', { pageNumber: this.page })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
