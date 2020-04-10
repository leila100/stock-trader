<template>
  <div class="card border-primary">
    <div class="card-header bg-primary">
      <h4 class="card-title">{{ stock.name }}</h4>
      <div class="card-subtitle">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</div>
    </div>
    <div class="card-body">
      <input
        type="number"
        class="form-control"
        placeholder="Quantity"
        v-model="quantity"
        :class="{ danger: insufficientQuantity }"
      />
      <button
        href="#"
        class="btn btn-primary"
        @click="sellStock"
        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)"
      >
        {{ insufficientQuantity ? "Insufficient quantity" : "Sell" }}
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
  computed: {
    insufficientQuantity() {
      return +this.quantity > this.stock.quantity;
    },
  },
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
.danger {
  border: 1px solid red;
}
.card {
  min-width: 350px;
  max-width: 350px;
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
