<template>
  <div>
    <Navigation />
    <b-card no-body class="mt-2 container text-left">
        <b-row no-gutters>
          <b-col md="4">
            <!-- Columna con Imagen y Descripcion-->
            <b-card-img :src="'http://localhost:3000/images/' + productoEncontrado.imagen" alt="Image" class="rounded-0 tarjeta-img imagenMinimo"></b-card-img>
            <p>Descripcion:</p>
            <b-card-text>{{ productoEncontrado.descripcion }}</b-card-text>
            <button class="btn btn-primary mt-4 mb-4 active">
              <router-link to="/productos">Volver</router-link>
            </button>
          </b-col>
          <b-col md="8" style="padding-left: 30px;">
            <b-card-body ml="5">
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
            </b-card-body>
          </b-col>
        </b-row>
    </b-card>
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
      const res = await fetch("http://localhost:3000/instrumento/" + paramId);
      const resJson = await res.json();
      console.log(resJson.data);
     this.productoEncontrado = resJson.data;
      console.log("this.productoEncontrado" + this.productoEncontrado);
    }
  }
};
</script>

<style>
/**IMAGEN */
.imagenMinimo {
  min-width: 250px;
  min-height: 250px;
}
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