<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li" class="nav-item">
          <a class="nav-link" href="#">Porfolio</a>
        </router-link>
        <router-link to="stocks" activeClass="active" tag="li" class="nav-item">
          <a class="nav-link" href="#">Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-nav mr-auto">Funds: {{ funds | currency }}</strong>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link" @click="endDay">End Day</a>
        </li>
        <li>
          <b-dropdown variant="outline-success" id="dropdown-1" text="Save & Load" class="m-md-2">
            <b-dropdown-item @click="saveData">Save data</b-dropdown-item>
            <b-dropdown-item>Load Data</b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropDownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    }
  }
};
</script>

<style>
.navbar {
  margin-bottom: 30px;
}
</style>
