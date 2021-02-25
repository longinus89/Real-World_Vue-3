<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <Cards></Cards>
    <div class="cards">
      <Drawer></Drawer>
    </div>
    <div class="bars">
      <BarDiagram :backgroundColor="'#ff0000'"></BarDiagram>
      <BarDiagram :backgroundColor="'#00ff00'"></BarDiagram>
      <BarDiagram :backgroundColor="'#00ffff'"></BarDiagram>
      <BarDiagram></BarDiagram>
    </div>
    <div class="doughnut">
      <Doughnut :borderColor="'#ff0000'"></Doughnut>
    </div>
  </div>
</template>

<script>
import BarDiagram from '@/components/BarDiagram'
import Cards from '@/components/Cards'
import Drawer from '@/components/Drawer'
export default {
  components: { BarDiagram, Cards, Drawer },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style scoped>
.bars {
  display: flex;
  align-items: flex-end;
  height: 8rem;
  width: 10rem;
}
.cards,
.bars,
.doughnut {
  margin: 1rem auto;
}
</style>
