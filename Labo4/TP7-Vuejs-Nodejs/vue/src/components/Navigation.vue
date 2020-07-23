<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/">Inicio</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/donde-estamos">Donde Estamos</router-link>
          <router-link to="/productos">Productos</router-link>
          <router-link to="/list">Formulario</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Buscar</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
ul a,
nav a {
  text-decoration: none !important;
  text-transform: uppercase !important;
  color: white !important;
  padding: 5px;
}

ul a:hover,
nav a:hover,
.active {
  color: #0056b3 !important;
}
</style>