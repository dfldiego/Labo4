<template>
  <div>
    <Navigation />
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4233719076083!2d-68.84002650202063!3d-32.88697286982025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20Las%20Heras%20%26%20Av.%20San%20Mart%C3%ADn%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1587325888318!5m2!1ses-419!2sar" width="100%" height="600" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import Navigation from "../components/Navigation.vue";
export default {
  name: "DondeEstamos",
  components: {
    Navigation,
  },
};
</script>