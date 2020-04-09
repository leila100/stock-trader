<template>
  <div class="home">
    <h1>Trade or view your portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr />
    <p>Your Funds: {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
.home {
  margin-top: 30px;
}
</style>
