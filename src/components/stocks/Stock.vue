<template>
  <div class="card border-success">
    <div class="card-header bg-success">
      <h4 class="card-title">{{ stock.name }}</h4>
      <div class="card-subtitle">(Price: {{ stock.price }})</div>
    </div>
    <div class="card-body">
      <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
      <button
        href="#"
        class="btn btn-success"
        @click="buyStock"
        :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: ["stock"],
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
.card {
  margin: 15px 0;
}
.card-body {
  display: flex;
}
input {
  margin-right: 20px;
}
.card-title,
.card-subtitle {
  display: inline;
  margin: 0 5px;
}
</style>
