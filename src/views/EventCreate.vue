<template>
  <form @submit.prevent="createEvent">
    <BaseSelect
      v-model="event.category"
      :options="categories"
      label="Category"
    />
    <h3>Name & describe your event</h3>
    <BaseInput
      v-model="event.title"
      label="Title"
      type="text"
    />
    <BaseInput
      v-model="event.description"
      label="Description"
      type="text"
    />

    <h3>Where is your event?</h3>
    <BaseInput
      v-model="event.location"
      label="Location"
      type="text"
    />

    <h3>When is your event?</h3>
    <div
      v-if="event.date !== undefined"
      class="field"
    >
      <label>Date</label>
      <datepicker
        v-model="event.date"
        placeholder="Select a date"
      />
    </div>
    <div class="field">
      <label>Select a time</label>
      <select v-model="event.time">
        <option
          v-for="time in times"
          :key="time"
        >
          {{ time }}
        </option>
      </select>
    </div>

    <h3>Are pets allowed?</h3>
    <BaseRadioGroup
      v-model="event.pets"
      name="pets"
      :options="petOptions"
      vertical
    />

    <h3>Extras</h3>
    <div>
      <BaseCheckbox
        v-model="event.extras.catering"
        label="Catering"
      />
    </div>

    <div>
      <BaseCheckbox
        v-model="event.extras.music"
        label="Live music"
      />
    </div>

    <input
      type="submit"
      class="button -fill-gradient"
      value="Submit"
    />
  </form>
</template>

<script>
import { mapState } from 'vuex'
import Datepicker from 'vue3-datepicker'

export default {
  components: {
    Datepicker
  },
  props: {},
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(`${i}:00`)
    }
    return {
      event: this.createFreshEvent(),
      times,
      categories: this.$store.state.categories,
      petOptions: [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event.')
        })
    },
    createFreshEvent() {
      const { user } = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)
      return {
        id,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: new Date(),
        time: '',
        attendees: [],
        pets: false,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
