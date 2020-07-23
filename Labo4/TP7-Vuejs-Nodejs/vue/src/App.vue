<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home";
import DondeEstamos from "./views/DondeEstamos";
import Productos from "./views/Productos";
import List from "./views/List";

export default {
  /* eslint-disable */
  name: "app",
  components: {
    Home,
    DondeEstamos,
    Productos,
    List
  }
};
</script>

<style>
body {
  font-family: Dosis, sans-serif;
  font-size: 15px;
}
</style>