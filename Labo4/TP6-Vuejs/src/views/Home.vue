<template>
  <div>
    <Navigation />
    <b-container fluid="md">
      <h1 class="titulo">Tienda de instrumentos</h1>
      <p class="descripcion">{{ descripcion }}</p>
    </b-container>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  /* eslint-disable */
  name: "Home",
  data() {
    return {
      descripcion:  "Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical."
    };
  },
  components: {
    Navigation,
  },
};
</script>
<style>
.titulo{
  font-family: Dosis, sans-serif;
  font-size:  25px;
  text-align: center;
}
.descripcion{
  font-family: Dosis, sans-serif;
  font-size:  20px;
}
</style>