
import EventService from '@/services/EventService.js'
import { eventPageSize } from '../constants'

export default {
  namespaced: true,
  state: {
    events: [],
    tot: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    LOAD_EVENTS(state, { events, tot }) {
      state.events = events
      state.tot = tot
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event).then(() =>
        commit('ADD_EVENT', event))
    },
    fetchEvents({ commit }, { pageNumber }) {
      EventService.getEvents(pageNumber, eventPageSize).then((response) =>
        commit('LOAD_EVENTS', { events: response.data, tot: response.headers['x-total-count'] }))
    }
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    }
  }
};