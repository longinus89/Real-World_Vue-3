<template>
  <div>
    <h2 v-if="user?.user">Events for {{ user?.user.name }}</h2>
    <div class="events">
      <EventCard v-for="event in event?.events" :key="event.id" :event="event" />
      <div class="pagination">
        <router-link
          v-if="page != 1"
          id="page-prev"
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
        >
          &#60; Previous
        </router-link>

        <router-link
          v-if="hasNextPage"
          id="page-next"
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
        >
          Next &#62;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { eventPageSize } from '@/store/constants'
import { mapState } from 'vuex'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: ['page'],
  data() {
    return {}
  },
  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.event.tot / eventPageSize)
      return this.page < totalPages
    },
    ...mapState(['event', 'user'])
  },
  created() {
    watchEffect(() => {
      this.events = null
      this.$store.dispatch('event/fetchEvents', { pageNumber: this.page })
    })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
