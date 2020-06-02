<template>
  <div>
    <Navigation />
    <b-container fluid="md">
      <b-card-group deck>
        <div v-for="producto in productosData" :key="producto.id">
          <Producto :productoParam="producto" />
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import Navigation from "../components/Navigation.vue";
import Producto from "../components/Producto.vue";

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
      const res = await fetch("Datos/instrumentos.json");
      const resJson = await res.json();
      console.log(resJson);
      //resJson.instrumento para que me traiga los objetos del instrumentos.json
      this.productosData = resJson.instrumentos;
    },
  },
};
</script>
