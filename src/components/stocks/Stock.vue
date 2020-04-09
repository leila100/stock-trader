<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success">
      <div class="card-header bg-success">
        <h4 class="card-title">Name</h4>
        <div class="card-subtitle">(Price: PRICE)</div>
      </div>
      <div class="card-body">
        <input type="number" class="form-control" placeholder="Quantity" />
        <a href="#" class="btn btn-success">Buy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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