<template>
  <div class="card border-success">
    <div class="card-header bg-success">
      <h4 class="card-title">{{ stock.name }}</h4>
      <div class="card-subtitle">(Price: {{ stock.price }})</div>
    </div>
    <div class="card-body">
      <input
        type="number"
        class="form-control"
        :class="{ danger: insufficientFunds }"
        placeholder="Quantity"
        v-model="quantity"
      />
      <div>
        <button
          href="#"
          class="btn btn-success"
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)"
        >
          {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
        </button>
      </div>
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
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price >= this.funds;
    },
  },
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

<style scoped>
.danger {
  border: 1px solid red;
}
.card {
  min-width: 300px;
  max-width: 300px;
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
