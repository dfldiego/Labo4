<template>
  <div>
    <Navigation />
    <b-container fluid="md">
      <h1>Actualizar instrumentos</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-1" label="Instrumento:" label-for="input-instrumento">
              <b-form-input id="input-instrumento" v-model="form.instrumento" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-2" label="Marca:" label-for="input-marca">
              <b-form-input id="input-marca" v-model="form.marca" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-3" label="Modelo:" label-for="input-modelo">
              <b-form-input id="input-modelo" v-model="form.modelo" type="text"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <br />
            <b-form-group id="input-group-4" label="Imagen:" label-for="input-imagen">
              <b-form-file input type="file" id="imagen" v-model="form.imagen" :placeholder="form.imagen" required></b-form-file>
              <img :src="'http://localhost:3000/images/' + this.form.imagen" alt="" />
            </b-form-group>
            <br />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-5" label="Precio:" label-for="input-precio">
              <b-form-input id="input-precio" v-model="form.precio" type="number" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-6" label="Costo de Envío:" label-for="input-costo-envio">
              <b-form-input id="input-costo-envio" v-model="form.costoEnvio" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group
              id="input-group-7"
              label="Cantidad Vendida:"
              label-for="input-cantidad-vendida"
            >
              <b-form-input
                id="input-cantidad-vendida"
                v-model="form.cantidadVendida"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-7" label="Descripción:" label-for="input-descripcion">
              <b-form-input id="input-descripcion" v-model="form.descripcion" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button type="submit" variant="primary">AGREGAR</b-button>
        <b-button type="reset" variant="danger">RESETEAR</b-button>
      </b-form>
      <b-button variant="dark">
        <router-link to="/list">IR A LISTA INSTRUMENTOS</router-link>
      </b-button>
    </b-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import axios from "axios";

export default {
  props: ["producto"],
  name: "Edit",
  components: {
    Navigation
  },
  mounted() {
    this.getInstrumentoXId();
  },
  data() {
    return {
      form: {
        id: "",
        instrumento: "",
        marca: "",
        modelo: "",
        precio: "",
        costoEnvio: "",
        cantidadVendida: "",
        descripcion: "",
        imagenNombre:"",
        imagen: null
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.updateInstrumentos(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.instrumento = "";
      this.form.marca = "";
      this.form.modelo = null;
      this.form.precio = "";
      this.form.costoEnvio = "";
      this.form.cantidadVendida = "";
      this.form.descripcion = "";
      this.form.imagenNombre = "";
      this.form.imagen = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async getInstrumentoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch("http://localhost:3000/instrumento/" + parametroId)
        .then(res => res.json())
        .then(resJson => (this.form = resJson.data)); //form se llena con datos en json
    },
    async updateInstrumentos(frm) {
      debugger;
      const id = frm.id;
      const instrumento = frm.instrumento;
      const marca = frm.marca;
      const modelo = frm.modelo;
      const precio = frm.precio;
      let costoEnvio = frm.costoEnvio;
      if (costoEnvio === 0 || costoEnvio === "0") {
        costoEnvio = "G";
      }
      const cantidadVendida = frm.cantidadVendida;
      const descripcion = frm.descripcion;
      const imagen = document.getElementById("imagen").files[0].name;

      let h = new Headers();
      h.append("Accept", "application/json");
      var formData = new FormData();
      formData.append("imagen",document.getElementById("imagen").files[0],imagen);

      const data = {
        id,
        instrumento,
        marca,
        modelo,
        precio,
        costoEnvio,
        cantidadVendida,
        descripcion,
        imagen
      };

      const res = await fetch("http://localhost:3000/instrumento/" + this.form.id,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json"
          }
        }
      ); //res

      let req = await fetch("http://localhost:3000/upload", {
        method: "POST",
        header: h,
        body: formData
      });

    } //updateInstrumento
  } //methods
};
</script>