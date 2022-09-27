<script >
import { getCouterValue, updateCounterValue } from "../services/counterServices";
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      updateCounterValue({
        count: this.count + 1,
        created: Date.now()
      }).then(response => {
        this.count = response.count
      })
    }
  },
  mounted() {
    getCouterValue().then(response => (this.count = response.count))
  }
}
</script>

<template>
  <div class="counterHolder">
    <h1>{{ count }}</h1>
    <button @click="increment()">Increment +</button>
  </div>
</template>
