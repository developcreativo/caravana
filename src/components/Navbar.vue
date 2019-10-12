<template>
  <div id="navbar">
   

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" to="/home">
          <img :src="logo" alt="" class="logo img-fluid" style="width: 60px;">
      </router-link>
      
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
          <!--<li class="nav-item">
            <img src="@/assets/img/avatar.png" alt style="width: 40px;" />
          </li>
          <li class="nav-item" style="margin-left: -10px;">
            <a class="nav-link" href="#">USUARIO</a>
            
          </li>-->
          <li class="nav-item" style="margin-left: -10px;">
            <router-link class="nav-link" to="/register">
              REGISTRO
            </router-link>
          </li>

          <router-link class="nav-link login-btn" to="/login">
                INICIAR SESIÓN
          </router-link>
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
 
  
};
</script>

<style scoped>
.logo {
  width: 270px;
  margin-bottom: 20px;
}
</style>
