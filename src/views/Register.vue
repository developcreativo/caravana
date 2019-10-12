<template>
  <div id="register-view">
    <div class="background-register">
      <div class="cover-register"></div>

      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        
        <router-link class="navbar-brand" to="/home">
          <img src="~@/assets/img/logo_grupocaravana.png" alt style="width: 130px;" />
        </router-link>
        <button type="button" class="btn collapse-btn">
          <i class="fas fa-bars"></i>
        </button>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="collapse-navbar">
          <ul class="navbar-nav ml-auto">
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
            <li class="nav-item">
              <router-link class="nav-link login-btn" to="/login">
                INICIAR SESIÓN
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

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
      }
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
