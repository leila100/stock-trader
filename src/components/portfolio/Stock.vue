<template>
  <div class="card border-primary">
    <div class="card-header bg-primary">
      <h4 class="card-title">{{ stock.name }}</h4>
      <div class="card-subtitle">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</div>
    </div>
    <div class="card-body">
      <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
      <button
        href="#"
        class="btn btn-primary"
        @click="sellStock"
        :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
      >
        Sell
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: ["stock"],
  methods: {
    ...mapActions({ sellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.sellOrder(order);
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
