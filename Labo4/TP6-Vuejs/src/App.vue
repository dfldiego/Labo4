<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home";
import DondeEstamos from "./views/DondeEstamos";
import Productos from "./views/Productos";

export default {
  /* eslint-disable */
  name: "app",
  components: {
    Home,
    DondeEstamos,
    Productos,
  },
};
</script>

<style>
body{
  font-family: Dosis, sans-serif;
  font-size:  15px;
}
</style>
