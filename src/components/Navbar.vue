<template>
  <div id="navbar">
   

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
        <img :src="logo" alt="" class="full-image logo">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">CONDUCTORES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ENCUESTAS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GRABACIONES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">QUIENES SOMOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTÁCTENOS</a>
          </li>
          <li class="nav-item">
            <img src="@/assets/img/avatar.png" alt style="width: 40px;" />
          </li>
          <li class="nav-item" style="margin-left: -10px;">
            <a class="nav-link" href="#">USUARIO</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Emisoras from "./EmisorasNavBar.vue";
const img = require('@/assets/img/logo_grupocaravana.png')
export default {
  name: "navbar",
  props: {
    logo: {
      type: String,
      default: img
    },
  },
  components: {
    Emisoras
  },
  computed: mapState({
    emisoras: state => state.emisoras.emisoras
  }),
  created() {
    this.$store.dispatch("emisoras/getEmisoras");
  }
};
</script>

<style scoped>
.logo {
  width: 100px;
}
</style>
