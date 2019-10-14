<template>
  <div id="login-view">

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" to="/home">
          <img src="~@/assets/webAdminRadio/img/logo_grupocaravana.png" alt style="width: 60px;" />
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
    <div class="background-image">
      <div class="cover"></div>

      

      <div class="container">
        <div class="row" style="margin-top: 8rem;">
          <div class="offset-md-3 col-md-6">
            <div class="card login-card">
              <form @submit.prevent="submit">
                <div class="card-body">
                  <p class="text-center">
                    <img src="~@/assets/webAdminRadio/img/logo_grupocaravana.png" style="width: 90px;" alt />
                  </p>
                  <div class="container" style="margin-top: 2rem;">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <input type="text" id="username" class="form-control" placeholder="Usuario" v-model="inputs.username"/>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input class="form-control" type="password" id="password" v-model="inputs.password" placeholder="......"/>
                        </div>
                        <p class="text-right" style="font-size: 14px;">¿Olvidaste tu contraseña?</p>
                      </div>
                      <div class="col-12">
                        <p class="text-center">
                          <button class="btn btn-login" @click="login(inputs)" id="login-button">INICIAR SESIÓN</button>
                        </p>
                      </div>
                      <div class="col-12">
                        <p class="social-login text-center">Ingresar con</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div class="card-footer">
                <p class="text-center social-login">
                  ¿Usuario nuevo?
                  <b>Registrese Ahora</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        username: "",
        password: ""
      }, 
      show: false
    };
  },
  mounted() {
   // this.login(this.inputs);
  },
  methods: {
    login({ username, password }) {
      this.$store
        .dispatch("auth/login", { username, password })
        .then(() => this.$router.push("/"));
    },
    toggleNavbar () {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.background-image{
    background-image: url('~@/assets/webAdminRadio/img/539610.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    background-position: center;
    top: 0;
    bottom: 0;
    width: 100%;
}

.navbar{
    padding: 2.5rem;
    font-size: 12px;
}

.navbar .nav-link{
    margin-left: .8rem;
    margin-right: .8rem;
}

.cover{
    background-color: rgba(11, 9, 26, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
}

.login-btn{
    border: 1.5px solid;
    border-color: #5f4d98;
    color: #5f4d98 !important;
    margin-left: 2rem;
}

.full-height{
    height: 100vh;
}

.login-card{
    padding: 20px;
    border-radius: 10px;
}

.btn-login{
    background-color: #e10713;
    border-radius: 0px;
    color: #fff;
    font-size: 12px;
    padding: 10px;
    margin-top: .7rem;
}

.social-login{
    color: #5f4d98;
    margin-top: .4rem;
    font-weight: bold;
}

.card-footer{
    border-top: none;
    background-color: #fff;
    padding: 0;
}

.collapse-btn{
    display: none;
}


.collapse-btn > i{
    color: #5f4d98;
    font-size: 30px;
}
.dark-transparent-navbar{
  background-color: rgba(0,0,0,0.7) !important;
  padding: 1.5rem;
}

.mobile-only{
  display: none;
}

#sidebar .list-group-item{
  background-color: unset;
  color: #fff;
}

#sidebar{
    position: fixed;
    width: 80px;
    background-color: rgba(0, 0, 0, 0.7);
    bottom: 35%;
    right: 0;
    z-index: 9999;
}

#sidebar li{
    list-style: none;
}

#sidebar ul{
    margin: 0;
    padding: 5px;
}
.show {
  display: block !important;
}
.bg-light {
  background-color: rgba(0,0,0,0.7) !important;
}
@media (max-width: 991px){
  .mobile-only{
    display: block;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.7) !important;
  }
}

@media (max-width: 1025px) {
    #collapse-navbar {
        display: none !important;
    }

    .collapse-btn{
        display: block;
    }

    .navbar-brand{
        width: 60px;
    }

}
</style>
