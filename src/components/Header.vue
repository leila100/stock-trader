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
          <a href="#" class="nav-link">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
.navbar {
  margin-bottom: 30px;
}
</style>
