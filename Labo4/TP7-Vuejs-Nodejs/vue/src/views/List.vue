<template>
  <div>
    <Navigation />
    <b-container fluid="md">
      <h1>ABM de Instrumentos</h1>
      <button class="btn btn-primary mt-4 mb-4 active">
        <router-link to="/create">Agregar Instrumento</router-link>
      </button>

      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Instrumento</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Imagen</th>
            <th scope="col">Precio</th>
            <th scope="col">Costo Envio</th>
            <th scope="col">Cantidad Vendida</th>
            <th scope="col">Descripcion</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in instrumentosData" :key="producto.id">
            <td>{{ producto.id }}</td>
            <td>{{ producto.instrumento }}</td>
            <td>{{ producto.marca }}</td>
            <td>{{ producto.modelo }}</td>
            <td>
              <img :src="'http://localhost:3000/images/' + producto.imagen" alt="Image" />
            </td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.costoEnvio }}</td>
            <td>{{ producto.cantidadVendida }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>
              <button class="btn btn-primary active">
                <router-link :to="'/edit/' + producto.id">Editar</router-link>
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="removeElement(producto.id)">ELIMINAR</button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "List",
  data() {
    return {
      instrumentosData: []
    };
  },
  components: {
    Navigation
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async removeElement(productoID) {
      const res = await fetch(`http://localhost:3000/instrumento/${productoID}`, {
        method: "DELETE"
      });
      const resJson = await res.json();
       console.log(resJson);
      window.location.replace("/list");
    },
    async getAll() {
      const res = await fetch("http://localhost:3000/instrumento/");
      const resJson = await res.json();
      console.log(resJson.data);
      //resJson.instrumento para que me traiga los objetos del instrumentos.json
      this.instrumentosData = resJson.data;
    }
  }
};
</script>

<style>
/**BOTONES */
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
</style>
