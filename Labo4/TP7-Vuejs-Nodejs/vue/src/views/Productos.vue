<template>
  <div>
    <Navigation />
    <b-container fluid="md">
        <div v-for="producto in productosData" :key="producto.id">
          <Producto :productoParam="producto" />
        </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import Navigation from "../components/Navigation.vue";
import Producto from "../components/Producto-prueba.vue";

export default {
  name: "Productos",
  components: {
    Navigation,
    Producto,
  },
  data() {
    return {
      productosData: [],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      const res = await fetch("http://localhost:3000/instrumento/");
      const resJson = await res.json();
      console.log(resJson);
      //resJson.instrumento para que me traiga los objetos del  json
      this.productosData = resJson.data;
    },
  },
};
</script>