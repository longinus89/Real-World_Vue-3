<template>
  <div id="list-demo">
    <div class="flex list-actions">
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <button @click="sortContacts">Sort</button>
    </div>
    <transition-group name="slide-up" tag="p" appear>
      <div v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </div>
    </transition-group>

    <div v-if="items.length === 0">
      No entries.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
    sortContacts() {
      this.items.sort((a, b) => a - b)
    }
  }
}
</script>
<style scoped>
.slide-up-item {
  display: inline-block;
  margin-right: 10px;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.slide-up-move {
  transition: transform 0.5s ease-out;
}
.list-actions {
  padding: 0.5rem;
  justify-content: center;
}
.list-actions button {
  margin-right: 0.2rem;
}
</style>
