<template>
  <div :style="{ height: tweenedNumber + 'px', backgroundColor: backgroundColor }" class="bar">
    <span>{{ number }}</span>
  </div>
</template>
<script>
import gsap from 'gsap'

export default {
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: '#2c3e50'
    }
  },
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, {
        duration: 1,
        ease: 'circ.out',
        tweenedNumber: newValue
      })
    }
  },
  created() {
    setInterval(this.randomNumber, 1500)
  },
  methods: {
    randomNumber() {
      this.number = Math.floor(Math.random() * (100 - 0))
    }
  }
}
</script>

<style scoped>
.bar {
  padding: 5px;
  border: 1px #16c0b0 solid;
  width: 20px;
  min-height: 20px;
}
.bar span {
  color: white;
}
</style>
