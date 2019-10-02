<template>
  <div id="login-view">
    <div class="background-image">
      <div class="cover"></div>

      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <a class="navbar-brand" href="#">
          <img src="~@/assets/img/logo_grupocaravana.png" alt style="width: 130px;" />
        </a>
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
              <a class="nav-link login-btn" href="#">INICIAR SESIÓN</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container">
        <div class="row" style="margin-top: 8rem;">
          <div class="offset-md-3 col-md-6">
            <div class="card login-card">
              <form @submit.prevent="submit">
                <div class="card-body">
                  <p class="text-center">
                    <img src="~@/assets/img/logo_grupocaravana.png" style="width: 90px;" alt />
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
        username: "consulta",
        password: "consulta"
      }
    };
  },
  mounted() {
    this.login(this.inputs);
  },
  methods: {
    login({ username, password }) {
      this.$store
        .dispatch("auth/login", { username, password })
        .then(() => this.$router.push("/"));
    }
  }
};
</script>

<style>
.background-image{
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
