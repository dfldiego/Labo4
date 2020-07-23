<template>
  <div>
    <b-card no-body class="mt-2 container text-left">
      <b-row no-gutters>
        <b-col md="4">
          <router-link :to="'/productos/' + productoParam.id">
            <b-card-img :src="'http://localhost:3000/images/' + productoParam.imagen" alt="Image" class="tarjeta-img"></b-card-img>
          </router-link>
        </b-col>
        <b-col md="8" style="padding-left: 30px;">
          <b-card-body ml="5">
            <!--Titulo Instrumento-Enlace-->
            <b-card-title>
              <router-link :to="'/productos/' + productoParam.id" class="titulo">
                {{productoParam.instrumento}}
              </router-link>
            </b-card-title>

            <!--Precio-->
            <b-card-text class="precio lead">${{ productoParam.precio }}</b-card-text>

            <!--CostoEnvio-->
            <div>
              <b-card-text
                class="camion text-success mt-4"
                v-if="productoParam.costoEnvio === 'G'">
                  Envio Gratis a todo el país
              </b-card-text>

              <b-card-text class="costo-envio mt-4" v-else>
                Costo de envío interior del país: ${{productoParam.costoEnvio}}
              </b-card-text>
            </div>
            <!--CantidadVendida-->
            <b-card-text>{{ productoParam.cantidadVendida }} vendidas</b-card-text>

          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Producto",
  props: ["productoParam"]
};
</script>

<style>
a:link,
a:active,
a:visited,
a:hover {
  color: black;
  text-decoration: none;
}

.tarjeta-img {
  height: 250px;
  width: 250px;
  align-items: center;
  justify-content: center;
}
.costo-envio-gratis {
  color: green;
}
.costo-envio {
  color: orange;
}
.precio {
  font-size: 25px;
  font-weight: bold;
}
.lead {
  font-size: xx-large;
}
.camion {
  background-image: url("/assets/images/camion.png");
  background-repeat: no-repeat;
  padding-left: 30px;
}
.titulo {
  text-decoration: none;
  font-weight: bold;
  color: black;
  text-align: left;
}
</style>