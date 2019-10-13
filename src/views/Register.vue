<template>
  <div id="register-view">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        
        <router-link class="navbar-brand" to="/home">
           <img class="d-none d-sm-none d-md-block" src="~@/assets/img/logo_grupocaravana.png" alt style="width: 130px;" />
        </router-link>
        
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="collapse-navbar">
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

      <nav class="navbar navbar-light bg-light fixed-top mobile-only">
       <router-link class="navbar-brand" to="/home">
          <img src="~@/assets/img/logo_grupocaravana.png" alt style="width: 60px;" />
      </router-link>
      <i class="fa fa-bars" style="float: right; color: #fff; font-size: 30px; margin-top: 10px; margin-right: 10px; cursor: pointer;"  v-on:click="toggleNavbar"></i>
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

    <div class="background-register">
      <div class="cover-register"></div>

      
      <div class="signup-form">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-white" style="margin-top: 2rem;">NUEVO USUARIO</h1>
            </div>
            <div class="col-md-8 offset-md-2">
              <div class="card signup-card">
                <div class="card-body">
                  <div class="container">
                    <form>
                      <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <input type="text" class="form-control"  v-model="inputs.username" placeholder="Usuario"/>
                          <div class="text-danger" v-if="errors && errors.username" >{{ errors.username[0] }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <input type="password" class="form-control" v-model="inputs.password" placeholder="Contraseña"/>
                           <div class="text-danger" v-if="errors && errors.password" >{{ errors.password[0] }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <input type="password" class="form-control"  v-model="inputs.password2" placeholder="Introduce nuevamente tu contraseña"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <input type="email" class="form-control" v-model="inputs.email" placeholder="Correo electronico"/>
                          <div class="text-danger" v-if="errors && errors.email" >{{ errors.email[0] }}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-12">
                        <p class="text-center">
                          <button class="btn btn-signup" @click="createAccount(inputs)">REGISTRARSE</button>
                        </p>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="text-center">
                <img src="~@/assets/img/logo_grupocaravana.png" alt style="width: 130px;" />
              </p>
            </div>
            <div class="col-12">
              <nav class="navbar navbar-expand-md navbar-dark" style="padding: 0px;">
                <div
                  class="navbar-collapse collapse w-100 order-3 dual-collapse2"
                  id="collapse-navbar"
                >
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">CONDUCTORES</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">ENCUESTAS</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">GRABACIONES</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">QUIENES SOMOS</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">CONTÁCTENOS</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      errors: '',
      inputs: {
             username: "", password: "", email: "", rol: "", cedula: null, imagen: null, first_name: "", last_name: "", fecha_nac: null, is_active: true,
      },
      show: false
    };
  },
  created() {
    
  },
  computed: mapState("signup", [
    "registrationCompleted",
    "registrationError",
    "registrationLoading"
  ]),
  methods: {
    createAccount({ username, password, email, rol, cedula, imagen, first_name, last_name, fecha_nac, is_active }) {
      this.$store
        .dispatch("signup/createAccount",{ username, password, email, rol, cedula, imagen, first_name, last_name, fecha_nac, is_active })
        .then((res) => {
        
          this.$toastr.s("Registro exitoso", "Gracias por su registro"),
          setTimeout(() => {
           this.$router.push("/")
          }, 1000)
        })
        .catch((err) =>{
          if (err.response.status === 400) {
              this.errors = err.response.data || {};
					}
        });

    },
    toggleNavbar () {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.background-register{
    background-image: url('~@/assets/img/539610.jpg');
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

.cover-register{
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

.first-text{
    font-size: 4rem;
    margin-left: 7rem;
    margin-bottom: -28px;
}

.second-text{
    font-size: 5rem;
    margin-bottom: 2rem;
}

.btn-images{
    margin-left: 2rem;
    margin-right: 2rem;
    width: 120px;
}

.collapse-btn{
    display: none;
}


.collapse-btn > i{
    color: #5f4d98;
    font-size: 30px;
}

.signup-form{
    background-color: #444242;
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin-top: 25%;
}

.signup-card{
    border-radius: 10px;
}

.btn-signup{
    background-color: #2c2469;
    color: #fff;
    border-radius: 0px;
    margin-top: 2rem;
    font-size: 12px;
}

.footer{

    width: 100%;
    height: 200px;
    padding-top: 2rem;
    background-color: #0b091a

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

    .footer{
        display: none;
    }

}





</style>
