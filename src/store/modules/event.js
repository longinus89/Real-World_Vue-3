
import EventService from '@/services/EventService.js'

const eventPageSize = 1
export default {
  namespaced: true,
  state: {
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    LOAD_EVENTS(state, events) {
      state.events = events
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event).then(() =>
        commit('ADD_EVENT', event))
    },
    fetchEvents({ commit }, { pageNumber }) {
      EventService.getEvents(pageNumber, eventPageSize).then((response) =>
        commit('LOAD_EVENTS', response.data))
    }
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    }
  }
};