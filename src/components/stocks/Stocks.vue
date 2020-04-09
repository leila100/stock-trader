<template>
  <div class="card-deck">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
  components: {
    Stock,
  },
};
</script>

<style></style>
