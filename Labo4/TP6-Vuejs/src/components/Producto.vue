<template>
  <div>
    <div class="container text-left">
      <b-card no-body class="overflow-hidden mt-2" style="min-width: 80%;">
        <b-row no-gutters>
          <b-col md="6">
            <router-link :to="'/productos/' + productoParam.id">
              <b-card-img
                :src="'assets/images/' + productoParam.imagen"
                alt="Image"
                class="rounded-0 tarjeta-img"
                style="max-width: 80%"
              ></b-card-img>
            </router-link>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <router-link :to="'/productos/' + productoParam.id">
                <b-card-title :title="productoParam.instrumento" class="titulo">
                </b-card-title>
              </router-link>

              <b-card-text class="precio">
                ${{ productoParam.precio }}
              </b-card-text>

              <b-card-text
                class=" camion text-success mt-4"
                v-if="productoParam.costoEnvio === 'G'"
              >
                Envio Gratis a todo el país
              </b-card-text>

              <b-card-text class="costo-envio" v-else>
                Costo de envío interior del país: ${{
                  productoParam.costoEnvio
                }}
              </b-card-text>

              <b-card-text>
                {{ productoParam.cantidadVendida }} vendidas
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Producto",
  props: ["productoParam"],
};
</script>
<style>
.producto {
  margin: 15px;
  min-width: 250px !important;
  height: 250px !important;
}
.tarjeta-img {
  align-items: center !important;
  justify-content: center !important;
}
.costo-envio-gratis {
  color: green;
}
.costo-envio {
  color: orange;
}
td {
  padding: 15px;
}
.precio {
  font-size: 25px;
  font-weight: bold;
}
.camion {
  background-image: url("/assets/images/camion.png");
  background-repeat: no-repeat;
  padding-left: 30px;
}
.titulo{
  text-decoration: none;
  font-weight: bold;
  color: black;
  text-align: left;
}
</style>
