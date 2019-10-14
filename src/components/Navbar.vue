<template>
  <div id="navbar">
   

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" to="/home">
          <img :src="logo" alt="" class="logo img-fluid" style="width: 60px;">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-on:click="toggleNavbar">
      <i class="fa fa-bars" style="float: right; color: #fff; font-size: 30px; margin-top: 10px; margin-right: 10px; cursor: pointer;"></i>
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

    
    <div id="sidebar" style="width: 250px; position: fixed; top: 0; height: 100%; background-color: red; left: 0; padding-top: 70px; z-index: 1;background-color: #0b091a; display:none" v-bind:class="{ 'show': show }">

      <ul class="list-group" style="padding: 0px;">
        <li class="list-group-item">
          <a class="nav-link" href="#">CONDUCTORES</a>
        </li>
        <li class="list-group-item">
          <a class="nav-link" href="#">ENCUESTAS</a>
        </li>
        <li class="list-group-item">
          <a class="nav-link" href="#">GRABACIONES</a>
        </li>
        <li class="list-group-item">
          <a class="nav-link" href="#">QUIENES SOMOS</a>
        </li>
        <li class="list-group-item">
          <a class="nav-link" href="#">CONTÁCTENOS</a>
        </li>
        <li class="list-group-item">
          <router-link class="nav-link" to="/register">
              REGISTRO
            </router-link>
        </li>

        <li class="list-group-item">
         <router-link class="nav-link login-btn" to="/login">
                INICIAR SESIÓN
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import Emisoras from "./EmisorasNavBar.vue";
const img = require('@/assets/webAdminRadio/img/logo_grupocaravana.png')
export default {
  name: "navbar",
  props: {
    logo: {
      type: String,
      default: img
    },
  },
 data() {
    return {
      show: false
    }
  },

  methods: {
    toggleNavbar () {
      this.show = !this.show;
    }
  }
 
  
};
</script>

<style scoped>
.logo {
  width: 270px;
  margin-bottom: 20px;
}
.show {
  display: block !important;
}

.bg-light {
  background-color: rgba(0,0,0,0.7) !important;
}
</style>
