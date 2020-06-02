<template>
  <div class="container-fluid text-left">
    <Navigation />
    <div class="card mb-3">
      <div class="row no-gutters">
        <b-row no-gutters>
          <b-col class="col-md-6">
            <!-- Columna con Imagen y Descripcion-->
            <b-card-img
              :src="'../assets/images/' + productoEncontrado.imagen"
              alt="Image"
              class="rounded-0 tarjeta-img"
              style="max-width: 50%"
            ></b-card-img>
            <p>Descripcion:</p>
            <b-card-text>{{ productoEncontrado.descripcion }}</b-card-text>
            <button class="btn btn-primary mt-4 mb-4 active">
              <router-link to="/productos">Volver</router-link>
            </button>
          </b-col>
          <b-col class="col-md-6">
            <!-- Columna con vendidos, TItulo, precio, marca, modelo,costoEnvio, Agregar al carrito-->
            <b-card-text>{{ productoEncontrado.cantidadVendida }} vendidos</b-card-text>
            <b-card-title class="titulo">{{ productoEncontrado.instrumento }}</b-card-title>
            <b-card-text class="precio">${{ productoEncontrado.precio }}</b-card-text>
            <b-card-text class="negrita-mayuscula">MARCA:{{ productoEncontrado.marca }}</b-card-text>
            <b-card-text class="negrita-mayuscula">MODELO:{{ productoEncontrado.modelo }}</b-card-text>
            <b-card-text style="font-weight: bold;">Costo de Envio:</b-card-text>
            <b-card-text
              class="camion text-success mt-4"
              v-if="productoEncontrado.costoEnvio === 'G'"
            >Envio Gratis a todo el país</b-card-text>
            <b-card-text
              class="costo-envio"
              v-else
            >Costo de envío interior del país: ${{ productoEncontrado.costoEnvio }}</b-card-text>
            <button class="btn btn-primary mt-4 mb-4 active">
              <router-link to="#">Agregar al Carrito</router-link>
            </button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "DetalleProducto",
  components: {
    Navigation
  },
  mounted() {
    this.findOne();
  },
  data() {
    return {
      productoEncontrado: []
    };
  },
  methods: {
    async findOne() {
      const paramId = this.$route.params.id;
      const res = await fetch("/Datos/instrumentos.json");
      const resJson = await res.json();
      console.log(resJson);
      this.productoEncontrado = await resJson.instrumentos.find(
        instrumento => instrumento.id === paramId
      );
      console.log(this.productoEncontrado);
    }
  }
};
</script>
<style>
/**Boton Volver */
button a {
  text-decoration: none !important;
  text-transform: uppercase !important;
  color: white !important;
  padding: 5px;
}

button:hover,
.active {
  color: #0056b3 !important;
}

/**TITULO INSTRUMENTO */
.titulo {
  text-decoration: none;
  font-weight: bold;
  color: black;
  text-align: left;
}

/**PRECIO  */
.precio {
  font-size: 30px;
  font-weight: bold;
}

/**MARCA  y MODELO*/
.negrita-mayuscula {
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

/**ENVIO */
.camion {
  background-image: url("/assets/images/camion.png");
  background-repeat: no-repeat;
  padding-left: 30px;
}
.costo-envio-gratis {
  color: green;
}
.costo-envio {
  color: orange;
}
</style>
