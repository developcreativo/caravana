<template>
  <div id="home-view">
    <navbar :logo="logo_emisora"></navbar>
    <div id="sidebar">
      <ul>
        <li>
          <a href="#hero" @click="getSegmentosDiblu(13)">
            <img src="@/assets/webAdminRadio/img/boton_diblu.png" class="full-image" alt />
          </a>
        </li>
        <li>
          <a href="#caravana" @click="getSegmentosCaravana(14)">
            <img src="@/assets/webAdminRadio/img/boton_RC.png" class="full-image" alt />
          </a>
        </li>
        <li>
          <a href="#ohconde" @click="getEmisoraSegmentosToday(14, 'oh_conde')">
            <img src="@/assets/webAdminRadio/img/boton_ohconde.png" class="full-image" alt />
          </a>
        </li>
      </ul>
    </div>
    <section id="home">
      <div class="cover-main">
        <div class="container">
          <div class="row align-items-center full-height row-images">
            <div class="mx-auto text-center">
              <div class="text-center main-text mb-4 logo-karavana ml-2 mr-2">
                <img
                  class="img-fluid bg-cover rounded-0 w-100"
                  src="@/assets/webAdminRadio/img/letras_grupocaravana.png"
                  alt
                />
              </div>
              <a href="#hero" @click="getSegmentosDiblu(13)">
                <img class="btn-images" src="@/assets/webAdminRadio/img/boton_diblu.png" alt />
              </a>
              <a href="#caravana" @click="getSegmentosCaravana(16)">
                <img class="btn-images" src="@/assets/webAdminRadio/img/boton_RC.png" alt />
              </a>
              <a href="#ohconde" @click="getEmisoraSegmentosToday(14, 'oh_conde')">
                <img
                  class="btn-images img-fluid"
                  src="@/assets/webAdminRadio/img/boton_ohconde.png"
                  alt
                />
              </a>
            </div>
          </div>
        </div>

        <div class="footer-main">
          <div class="container-fluid">
            <div class="d-flex flex-row-reverse bd-highlight">
              <div class="p-2 bd-highlight ml-5">
                <div class="footer-link">
                  <a href="@/assets/webAdminRadio/files/CodigoDeontologico-RadioCaravanaSA.pdf">
                    <p class="text-center">
                      <img src="@/assets/webAdminRadio/img/codigo_etica.png" alt />
                    </p>
                    <p class="text-center footer-link-text" href>Código de ética</p>
                  </a>
                </div>
              </div>
              <div class="p-2 bd-highlight ml-5">
                <div class="footer-link">
                  <a href="@/assets/webAdminRadio/files/COMPARTICIONDEINFRAESTRUCTURA.pdf">
                    <p class="text-center">
                      <img
                        class="text-center"
                        src="@/assets/webAdminRadio/img/comparticion_de_infraestructura.png"
                        alt
                      />
                    </p>
                    <p class="text-center footer-link-text" href>Compartición de la infraestructura</p>
                  </a>
                </div>
              </div>
              <div class="p-2 bd-highlight ml-2">
                <div class="footer-link">
                  <a href="@/assets/webAdminRadio/files/InformeRendiciondeCuentas.pdf">
                    <p class="text-center">
                      <img
                        class="text-center"
                        src="@/assets/webAdminRadio/img/rendicion_de_cuentas.png"
                        alt
                      />
                    </p>
                    <p href class="text-center footer-link-text">Rendición de cuentas</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <template>
      <section id="hero">
        <div class="cover">
          <player-radio file="http://www.makrodigital.com:8137/radiodiblu" type="diblu"></player-radio>
        </div>
      </section>

      <section id="schedule" v-if="transmisiones_diblu.length > 0">
        <carousel
          :autoplay="true"
          :perPage="5"
          :paginationEnabled="false"
          :navigationEnabled="true"
          navigationNextLabel="▶"
          navigationPrevLabel="◀"
        >
          <slide v-for="(segmento, index) in segmentos_diblu" :key="index">
            <div style="padding:0">
              <div
                :style="{ 'background-image': 'url(' + segmento.imagen + ')' }"
                class="img-fluid bg-image"
              >
                <div class="green-box">
                  <h4 class="text-white" style="font-size: 1.2rem;">{{ segmento.nombre }}</h4>
                </div>
                <div class="blue-box" style="font-size: 12px;">
                  <p
                    class="text-center text-white"
                  >{{ segmento.horarios[0].dia }} de {{ segmento.horarios[0].fecha_inicio }} - {{ segmento.horarios[0].fecha_fin }}</p>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </section>

      <section class="transmissions">
        <div class="container" style="overflow:hidden">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center">Transmisiones</h1>
              <p class="text-center" style="margin-top: 2rem;"></p>
            </div>
          </div>

          <carousel
            
            :autoplay="true"
            :perPage="3"
            :paginationEnabled="false"
            :navigationEnabled="true"
            navigationNextLabel="▶"
            navigationPrevLabel="◀"
          >
            <slide v-for="(transmision, index) in transmisiones_diblu" :key="index">
              <div class="col-md-12 img-fluid bg-image" style="padding:0" :style="{ 'background-image': 'url(' + back_trans + ')' }">
                  <img v-if="transmision.equipo1" :src="getImagenEquipo(transmision.equipo1)" alt="" style="width:70px">
                  <div class="green-box">
                      <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                  </div>
                    <div class="blue-box" style="background-color: #005b90; width: 70%; margin-left: 10px;">
                      <p
                        class="text-center text-white"
                        style="font-size: 12px;"
                      >{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                  </div>
                   <img v-if="transmision.equipo2" :src="getImagenEquipo(transmision.equipo2)" alt="" style="width:70px" class="float-right">
                </div>
            </slide>
          </carousel>

          <carousel
            class="hide-on-lg"
            :autoplay="true"
            :perPage="1"
            :paginationEnabled="false"
            :navigationEnabled="true"
            navigationNextLabel="▶"
            navigationPrevLabel="◀"
          >
            <slide v-for="(transmision, index) in transmisiones_diblu" :key="index">
              <div class="col-md-12 img-fluid bg-image" style="padding:" :style="{ 'background-image': 'url(' + back_trans + ')' }">
                  <img v-if="transmision.equipo1" :src="getImagenEquipo(transmision.equipo1)" alt="" style="width:70px">
                  <div class="green-box">
                      <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                  </div>
                    <div class="blue-box" style="background-color: #005b90; width: 70%; margin-left: 10px;">
                      <p
                        class="text-center text-white"
                        style="font-size: 12px;"
                      >{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                  </div>
                   <img v-if="transmision.equipo2" :src="getImagenEquipo(transmision.equipo2)" alt="" style="width:70px" class="float-right">
                </div>
            </slide>
          </carousel>


        </div>
      </section>

      <section id="follow-us">
        <div class="cover">
          <div class="container">
            <div class="row">
              <div class="col-12" style="margin-top: 8rem; margin-bottom: 4rem;">
                <h1 class="text-center text-white">SÍGUENOS</h1>
              </div>
            </div>

            <div class="row">
              <div
                class="col-2"
                v-for="(social, index) in sociales_diblu"
                :key="index"
                v-bind:class="{  'offset-3 first-child-follow-us-margin' : index == 0, 'last-child-follow-us-margin': index == 2 }"
              >
                <h2
                  class="text-center text-green"
                  style="font-size: 2rem;"
                  v-bind:class="{'push-right': index == 0, 'text-center':index == 1, 'push-left': index == 2}"
                >
                  <a v-if="social.nombre == 'Facebook'" :href="social.link" target="__blank">
                    <i class="fab fa-facebook-square text-green" aria-hidden="true"></i>
                  </a>
                  <a v-if="social.nombre == 'Instagram'" :href="social.link" target="__blank">
                    <i class="fab fa-instagram text-green" aria-hidden="true"></i>
                  </a>
                  <a v-if="social.nombre == 'Twitter'" :href="social.link" target="__blank">
                    <i class="fab fa-twitter text-green" aria-hidden="true"></i>
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center">Redes Sociales</h1>
            </div>
            <div class="col-12">
              <p class="text-center"></p>
            </div>

            <div class="col-md-4 overflow-auto">
                <a
                  class="twitter-timeline"
                  data-width="300"
                  data-height="500"
                  href="https://twitter.com/RadioDibluFM?ref_src=twsrc%5Etfw"
                ></a>
            </div>
            <div class="col-md-4">
              <div class="fb-page" data-href="https://www.facebook.com/Diblu88.9/" data-tabs="timeline" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Diblu88.9/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Diblu88.9/">Diblu 88.9 FM</a></blockquote></div>
            </div>
            <div class="col-md-4">
              <instagram-embed
                  :url="'https://www.instagram.com/p/BrDi2RGH7pM/'"
                  :max-width=500
                />
            </div>
          </div>
        </div>
      </section>
    </template>

    <template>
      <div id="caravana">
        <section class="hero">
          <div class="cover">
            <player-radio file="http://www.makrodigital.com:8006/radiocaravana" type="caravana"></player-radio>
          </div>
        </section>

        <section class="schedule">
          <div class="container-fluid" style="overflow:hidden">
            <div class="row">
              <carousel
                :autoplay="true"
                :perPage="5"
                :paginationEnabled="false"
                :navigationEnabled="true"
                navigationNextLabel="▶"
                navigationPrevLabel="◀"
              >
                <slide v-for="(segmento, index) in segmentos_caravana" :key="index">
                  <div class="col-md-12" style="padding:0; height: 230px;">
                    <div
                      :style="{ 'background-image': 'url(' + segmento.imagen + ')' }"
                      class="img-fluid bg-image"
                    >
                      <div class="green-box">
                        <h4 class="text-white" style="font-size: 1.2rem;">{{ segmento.nombre }}</h4>
                      </div>
                      <div class="blue-box">
                        <p
                          class="text-center text-white"
                          style="font-size: 12px;"
                        >{{ segmento.horarios[0].dia }} de {{ segmento.horarios[0].fecha_inicio }} - {{ segmento.horarios[0].fecha_fin }}</p>
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </section>

        <section class="transmissions">
          <div class="container" style="overflow:hidden">
            <div class="row">
              <div class="col-12">
                <h1 class="text-center">Transmisiones</h1>
                <p class="text-center" style="margin-top: 2rem;"></p>
              </div>
            </div>

            <carousel
              :autoplay="true"
              :perPage="3"
              :paginationEnabled="false"
              :navigationEnabled="true"
              navigationNextLabel="▶"
              navigationPrevLabel="◀"
            >
              <slide v-for="(transmision, index) in transmisiones_caravana" :key="index">
                <div class="col-md-12 img-fluid bg-image" style="padding:0" :style="{ 'background-image': 'url(' + back_trans + ')' }">
                  <img v-if="transmision.equipo1" :src="getImagenEquipo(transmision.equipo1)" alt="" style="width:60px">
                  <div class="green-box">
                      <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                  </div>
                    <div class="blue-box">
                      <p
                        class="text-center text-white"
                        style="font-size: 12px;"
                      >{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                  </div>
                   <img v-if="transmision.equipo2" :src="getImagenEquipo(transmision.equipo2)" alt="" style="width:60px" class="float-right">
                </div>
              </slide>
            </carousel>
          </div>
        </section>

        <section class="follow-us">
          <div class="cover">
            <div class="container">
              <div class="row">
                <div class="col-12" style="margin-top: 8rem; margin-bottom: 4rem;">
                  <h1 class="text-center text-white">SÍGUENOS</h1>
                </div>
                <div
                  class="col-2"
                  v-for="(social, index) in sociales_caravana"
                  :key="index"
                  v-bind:class="{  'offset-3 first-child-follow-us-margin' : index == 0, 'last-child-follow-us-margin': index == 2 }"
                >
                  <h2
                    class="text-center text-green"
                    style="font-size: 2rem;"
                    v-bind:class="{'push-right': index == 0, 'text-center':index == 1, 'push-left': index == 2}"
                  >
                    <a v-if="social.nombre == 'Facebook'" :href="social.link" target="__blank">
                      <i class="fab fa-facebook-square text-green" aria-hidden="true"></i>
                    </a>
                    <a v-if="social.nombre == 'Instagram'" :href="social.link" target="__blank">
                      <i class="fab fa-instagram text-green" aria-hidden="true"></i>
                    </a>
                    <a v-if="social.nombre == 'Twitter'" :href="social.link" target="__blank">
                      <i class="fab fa-twitter text-green" aria-hidden="true"></i>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="social">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="text-center">Redes Sociales</h1>
              </div>
              <div class="col-12">
                <p class="text-center"></p>
              </div>

              <div class="col-md-4 overflow-auto">
                <a
                  class="twitter-timeline"
                  data-width="300"
                  data-height="500"
                  href="https://twitter.com/Caravana750?ref_src=twsrc%5Etfw"
                ></a>
              </div>
              <div class="col-md-4">
                <div class="fb-page" data-href="https://www.facebook.com/RadioCaravana/" data-tabs="timeline" data-width="" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/RadioCaravana/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/RadioCaravana/">Radio Caravana 750 AM</a></blockquote></div>
              </div>
              <div class="col-md-4">
                <instagram-embed
                  :url="'https://www.instagram.com/p/B3m6dj0ng-O/'"
                  :max-width=500
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
    <template>
      <div id="ohconde">
        <section class="hero">
          <div class="cover"></div>
        </section>

        <section class="schedule">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12">
      
                <iframe
                  style="width: 100%; height: 600px; margin-top: -37%;"
                  src="https://www.youtube.com/embed/r-qCzkqEMUM"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12" style="padding: 4rem;">
                <div class="ohconde-class" v-if="videos.length > 0">
                  <slick :options="option_ohconde">
                    <div v-for="(video, index) in videos" :key="index">
                      <div class="row align-items-center item-schedule">
                        <div class="col-4 offset-2">
                          <div class="embed-responsive embed-responsive-21by9">
                            <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/' + video.snippet.resourceId.videoId"></iframe>
                          </div>
                          
                        </div>
                        <div class="col-4 offset-2">
                          <h5 class="text-center text-white">{{ video.snippet.title }}</h5>
                        </div>
                      </div>
                    </div>
                  </slick>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="follow-us">
          <div class="cover">
            <div class="container">
              <div class="row">
                <div class="col-12" style="margin-top: 8rem; margin-bottom: 4rem;">
                  <h1 class="text-center text-white">SÍGUENOS</h1>
                </div>
                <div
                  class="col-2"
                  v-for="(social, index) in sociales_conde"
                  :key="index"
                  v-bind:class="{  'offset-3 first-child-follow-us-margin' : index == 0, 'last-child-follow-us-margin': index == 2 }"
                >
                  <h2
                    class="text-center text-green"
                    style="font-size: 2rem;"
                    v-bind:class="{'push-right': index == 0, 'text-center':index == 1, 'push-left': index == 2}"
                  >
                    <a v-if="social.nombre == 'Youtube'" :href="social.link" target="__blank">
                      <i class="fab fa-youtube text-green" aria-hidden="true"></i>
                    </a>
                    <a v-if="social.nombre == 'Instagram'" :href="social.link" target="__blank">
                      <i class="fab fa-instagram text-green" aria-hidden="true"></i>
                    </a>
                    <a v-if="social.nombre == 'Twitter'" :href="social.link" target="__blank">
                      <i class="fab fa-twitter text-green" aria-hidden="true"></i>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="transmissions">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="text-center">Transmisiones</h1>
                <p class="text-center" style="margin-top: 2rem;"></p>
              </div>
            </div>

            <carousel
              :autoplay="true"
              :perPage="3"
              :paginationEnabled="false"
              :navigationEnabled="true"
              navigationNextLabel="▶"
              navigationPrevLabel="◀"
              style="height: 250px;"
            >
              <slide v-for="(transmision, index) in transmisiones_conde" :key="index" style="padding: 20px; height: 250px;">
                <div class="col-md-12 img-fluid bg-image" style="padding:0" :style="{ 'background-image': 'url(' + back_trans + ')' }">
                  <img v-if="transmision.equipo1" :src="getImagenEquipo(transmision.equipo1)" alt="" style="width:60px">
                  <div class="green-box" style="padding: 10px; margin-top: 10px;">
                      <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                  </div>
                    <div class="blue-box">
                      <p
                        class="text-center text-white"
                        style="font-size: 12px;"
                      >{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                  </div>
                   <img v-if="transmision.equipo2" :src="getImagenEquipo(transmision.equipo2)" alt="" style="width:60px" class="float-right">
                </div>
              </slide>
            </carousel>
          </div>
        </section>
      </div>
    </template>
    <section class="conductores">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">NUESTROS CONDUCTORES</h1>
            <p class="text-center"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div
              class="conductores-carousel h-100 d-none d-sm-none d-md-block"
              v-if="conductores.length > 0"
            >
              <slick :options="option_radio">
                <div v-for="conductor in conductores" :key="conductor.id">

                  <div v-if="conductor.id > 6">
                    <div
                      v-if="conductor.imagen != null"
                      class="background-conductores"
                      :style="{ 'background-image': 'url(' + conductor.imagen + ')' }"
                    >
                      <div class="cover-conductores">
                        <div class="container-fluid" style="height: 100%;">
                          <div class="row align-items-center" style="height: 100% ;">
                            <div class="col-12">
                              <h3
                                class="text-center text-white conductores-title"
                              >{{ conductor.first_name }} {{ conductor.last_name }}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </slick>
            </div>

            <div
              class="conductores-carousel h-100 d-block d-sm-block d-md-none"
              v-if="conductores.length > 0"
            >
              <carousel
                :autoplay="true"
                :perPage="3"
                :paginationEnabled="false"
                :navigationEnabled="true"
                navigationNextLabel="▶"
                navigationPrevLabel="◀"
              >
                <slide v-for="conductor in conductores" :key="conductor.id">
                  <div
                    v-if="conductor.imagen != null"
                    class="background-conductores"
                    :style="{ 'background-image': 'url(' + conductor.imagen + ')' }"
                  >
                    <div class="cover-conductores">
                      <div class="container-fluid" style="height: 100%;">
                        <div class="row align-items-center" style="height: 100%;">
                          <div class="col-12">
                            <h3
                              class="text-center text-white"
                            >{{ conductor.first_name }} {{ conductor.last_name }}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="galeria">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">GALERÍA</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="galeria-carousel h-100" v-if="galerias.length > 0">
              <slick :options="option_galeria">
                <div class="col-md-12" v-for="galeria in galerias" :key="galeria.id">
                  <div
                    class="background-image img-fluid"
                    :style="{'background-image': 'url('+galeria.imagen+')'}"
                  ></div>
                </div>
              </slick>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="encuestas">
      <div class="cover-encuestas">
        <h1 class="text-center">ENCUESTAS</h1>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <!--<div
                class="encuestas-carousel movil"
                v-if="encuestas.length > 0"
                style="margin-top: 3rem; margin-bottom: 2rem;"
              >
                <carousel
                  :autoplay="true"
                  :perPage="1"
                  :paginationEnabled="false"
                  :navigationEnabled="false"
                  navigationNextLabel="▶"
                  navigationPrevLabel="◀"
                >
                  <slide v-for="encuesta in encuestas" :key="encuesta.id">
                    <h3 class="text-center">{{ encuesta.titulo }}</h3>

                    <div class="container" style="margin-top: 2rem;">
                      <div class="row">
                        <div class="col-md-4 offset-md-4">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                              checked
                            />
                            <label class="form-check-label" for="exampleRadios1">Default radio</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                            />
                            <label
                              class="form-check-label"
                              for="exampleRadios2"
                            >Second default radio</label>
                          </div>
                        </div>
                      </div>
                      <div class="offset-md-8 col-md-6">
                        <button
                          class="btn btn-danger"
                          style="margin-bottom: 4rem; padding-left: 25px; padding-right: 25px; border-radius: 0; background-color: #e10713;"
                        >Votar</button>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>-->

              <div
              class="encuestas-carousel h-100 d-none d-sm-none d-md-block"
              v-if="encuestas.length > 0"
              >
                <slick :options="option_encuesta">
                  <div v-for="encuesta in encuestas" :key="encuesta.id">
 
                    <div class="container" style="margin-top: 2rem;">
                      <div class="row">
                        <div class="col-md-4 offset-md-4">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                              checked
                            />
                            <label class="form-check-label" for="exampleRadios1">Default radio</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                            />
                            <label
                              class="form-check-label"
                              for="exampleRadios2"
                            >Second default radio</label>
                          </div>
                        </div>
                      </div>
                      <div class="offset-md-8 col-md-6">
                        <button
                          class="btn btn-danger"
                          style="margin-bottom: 4rem; padding-left: 25px; padding-right: 25px; border-radius: 0; background-color: #e10713;"
                        >Votar</button>
                      </div>
                    </div>
               
                    </div>
                </slick>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grabaciones">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Grabaciones</h1>
            <p class="text-center"></p>
          </div>
          <div class="d-flex justify-content-center">
            <div id="grabaciones-list">
              <div v-for="(podcast, index) in podcasts" :key="index">
                <audio-player
                  :file="podcast.audio"
                  :nombre="podcast.nombre"
                  :descripcion="podcast.descripcion"
                ></audio-player>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="somos">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">QUIENES SOMOS</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p class="text-center">
              <img src="@/assets/webAdminRadio/img/innovacion.png" style="width:120px;" alt />
            </p>
            <h2 class="text-center">INNOVACIÓN</h2>
            <p
              class="text-center"
            >Innovar mostrando destreza y compromiso para variar respecto a las exigencias que plantea las nuevas demandas tecnológicas.</p>
          </div>
          <div class="col-md-4">
            <p class="text-center" style="margin-top: 70px;">
              <img src="@/assets/webAdminRadio/img/compromiso.png" style="width:120px;" alt />
            </p>
            <h2 class="text-center">COMPROMISO</h2>
            <p
              class="text-center"
            >Mantener la interacción con la audiencia y tener sensibilidad para con las necesidades y preocupaciones de las comunidades</p>
          </div>
          <div class="col-md-4">
            <p class="text-center">
              <img src="@/assets/webAdminRadio/img/calidad.png" style="width:120px;" alt />
            </p>
            <h2 class="text-center">CALIDAD</h2>
            <p
              class="text-center"
            >Satisfacer la permanente demanda informativa de nuestra audiencia convirtiéndonos en una marca reconocida en materia deportiva</p>
          </div>
        </div>
        <div class="row" style="margin-top: 40px;">
          <div class="col-md-4">
            <p class="text-center">
              <img src="@/assets/webAdminRadio/img/responsabilidad.png" style="width:120px;" alt />
            </p>
            <h2 class="text-center">RESPONSABILIDAD</h2>
            <p
              class="text-center"
            >Respetar las regulaciones de las leyes que rigen nuestra sociedad, adaptando nuestros objetivos a las normas constituidas sin alterar la calidad de la producción y de la difusión de contenidos.</p>
          </div>
          <div class="col-md-4">
            <p class="text-center">
              <img src="@/assets/webAdminRadio/img/motivacion.png" style="width:120px;" alt />
            </p>
            <h2 class="text-center">MOTIVACIÓN</h2>
            <p
              class="text-center"
            >Innovar mostrando destreza y compromiso para variar respecto a las exigencias que plantea nuevas demandas tecnológicas.</p>
          </div>
          <div class="col-md-4">
            <p class="text-center">
              <img src="@/assets/webAdminRadio/img/proactividad.png" style="width:120px;" alt />
            </p>
            <h2 class="text-center">PROACTIVIDAD</h2>
            <p
              class="text-center"
            >Participar activamente, mediante la práctica de nuestra actividad, en la estimulación de formación de valores de nuestra sociedad.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contactenos">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">CONTÁCTENOS</h1>
          </div>
        </div>
        <div class="row align-items-center">
          <hr class="right-line" />
          <div class="col-md-6">
            <input
              type="text"
              class="form-control custom-form"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nombre"
              v-model="contact.nombre"
            />
            <div class="text-danger" v-if="errors && errors.nombre">{{ errors.nombre[0] }}</div>
            <input
              type="text"
              class="form-control custom-form"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Correo Electrónico"
              v-model="contact.correo"
            />
            <div class="text-danger" v-if="errors && errors.correo">{{ errors.correo[0] }}</div>
            <input
              type="text"
              class="form-control custom-form"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Teléfono"
              v-model="contact.telefono"
            />
            <div class="text-danger" v-if="errors && errors.telefono">{{ errors.telefono[0] }}</div>
            <textarea
              class="form-control custom-form"
              placeholder="Mensaje"
              rows="10"
              v-model="contact.mensaje"
            ></textarea>
            <div class="text-danger" v-if="errors && errors.mensaje">{{ errors.mensaje[0] }}</div>
            <button
              class="btn btn-primary btn-enviar"
              style="float: right;"
              @click="contactanos(contact)"
            >ENVIAR</button>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-12">
                <div style="width: 60px; height: 60px; float: left;">
                  <i class="fas fa-map-marker custom-icon" aria-hidden="true"></i>
                </div>
                <div>
                  Av. Juan Tanca Marengo Km 3
                  <br />junto a las antenas de TVCable.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div style="width: 60px; height: 60px; float: left;">
                  <i class="fas fa-phone custom-icon" aria-hidden="true"></i>
                </div>
                <div>042317182 - 042317183 - 0989266897</div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div style="width: 60px; height: 90px; float: left;">
                  <i class="fas fa-envelope custom-icon" aria-hidden="true"></i>
                </div>
                <div>
                  <p>info@diblu.ec</p>
                  <p>info@radiocaravana.ec</p>
                  <p>info@ohconde.ec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center">
              <img src="@/assets/webAdminRadio/img/grupocaravana4.png" alt style="width: 130px;" />
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
    </section>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import api from "../api/session";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import Slick from "vue-slick";
import Navbar from "@/components/Navbar";
import AudioPlayer from "@/components/AudioPlayer";
import PlayerRadio from "@/components/PlayerRadio";
import InstagramEmbed from 'vue-instagram-embed';
const diblu = require("@/assets/webAdminRadio/img/diblu1.png");
const RC = require("@/assets/webAdminRadio/img/logo_grupocaravana.png");
const ohconde = require("@/assets/webAdminRadio/img/ohconde2.png");
const flecha_conductores = require("@/assets/webAdminRadio/img/flecha_der_conductores.png");
const flecha_galeria = require("@/assets/webAdminRadio/img/flecha_der_galeria.png");
const flecha_diblu = require("@/assets/webAdminRadio/img/flecha_diblu.png");
const fondo_trans = require("@/assets/webAdminRadio/img/estadio-de-futbol-i27310.jpg");
export default {
  name: "home",
  components: {
    carousel: Carousel,
    slide: Slide,
    Navbar,
    Slick,
    AudioPlayer,
    PlayerRadio,
    InstagramEmbed
  },
  data() {
    return {
      option_radio: {
        slidesToShow: 3,
        rows: 2,
        autoplay:true,
        prevArrow:
          "<img class='a-left control-c prev slick-prev' src='" +
          flecha_conductores +
          "'>",
        nextArrow:
          "<img class='a-right control-c next slick-next' src='" +
          flecha_conductores +
          "'>"
      },
      option_encuesta: {
        slidesToShow: 1,
        autoplay:true,
        prevArrow:
          "<img class='a-left control-c prev slick-prev' src='" +
          flecha_conductores +
          "'>",
        nextArrow:
          "<img class='a-right control-c next slick-next' src='" +
          flecha_conductores +
          "'>"
      },
      back_trans: fondo_trans,
      option_ohconde: {
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
         prevArrow:
                "<img class='a-left control-c prev slick-prev' src='" +
                flecha_diblu +
                "'>",
              nextArrow:
                "<img class='a-right control-c next slick-next' src='" +
                flecha_diblu +
                "'>"
      },
      errors: "",
      contact: {
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: ""
      },
      flecha_conductores: flecha_conductores,
      option_encuesta: {
        arrows: false,
        dots: true
      },
      option_galeria: {
        rows: 2,
        slidesToShow: 2,
        prevArrow:
          "<img class='a-left control-c prev slick-prev' src='" +
          flecha_galeria +
          "'>",
        nextArrow:
          "<img class='a-right control-c next slick-next' src='" +
          flecha_galeria +
          "'>"
      },
      logo_emisora: "",
      videos: [],
      reformattedSearchString: "",
      api: {
        baseUrl: "https://www.googleapis.com/youtube/v3/playlistItems?",
        part: "snippet%2CcontentDetails",
        playlistId: "PUPHFkdGpFWAiWi9JrViJ5uw",
        type: "video",
        order: "viewCount",
        maxResults: 12,
        key: "AIzaSyAU-THD4WG8ruNRIYy7cYNsW5Jd2Q8mD9s",
      },
      audio_radiodiblu: {
        id: "radiodiblu",
        name: "RadioDiblu",
        file: new Audio("http://www.makrodigital.com:8137/radiodiblu"),
        isPlaying: false
      },
      audio_radiocaravana: {
        id: "radiocaravana",
        name: "Radio Caravana",
        file: new Audio("http://www.makrodigital.com:8006/radiocaravana"),
        isPlaying: false
      },
      maxWidth: 500,
      url: "https://www.instagram.com/p/B3kHmF9gbsq/",
      hideCaption: false,
      omitScript: true,
      className: "",
      html: "",
      instagram_caravana: `https://www.instagram.com/p/B3kHmF9gbsq/?utm_source=ig_embed&amp;utm_campaign=loading`,
      sociales_diblu: [],
      sociales_caravana: [],
      sociales_conde: [],
      isPlayingPodCasts: false,
      segmentos: [],
      segmentos_caravana: [],
      segmentos_diblu: [],
      segmentos_conde: [],
      transmisiones_diblu: [],
      transmisiones_caravana: [],
      transmisiones_conde: [],
      equipos: [],
      conductores: [],
      encuestas: [],
      transmisiones: [],
      podcasts: [],
      galerias: [],
      landing_caravana: true,
      landing_diblu: true,
      langing_oh_conde: true,
      emisora_id: null,
      type: "caravana",
      inputs: {
        username: "consulta",
        password: "consulta"
      }
    };
  },
  created() {
    this.fetchEmbed();
    this.getConductores();
    this.getAllEquipos();
    this.search();
    this.getEncuestas();
    this.getPodCast();
    this.getGaleria();
    this.getSegmentosDiblu(13);
    this.getSegmentosConde(16);
    this.getSegmentosCaravana(14);
    this.getSocialesDiblu(13);
    this.getSocialesCaravana(14);
    this.getSocialesOhConde(16);
    $(document).scroll(function() {
      if ($(document).scrollTop() > 10) {
        $("#navbar .navbar").addClass("dark-transparent-navbar");
      } else {
        $("#navbar .navbar").removeClass("dark-transparent-navbar");
      }
    });
  },
  mounted() {},

  computed: mapGetters("auth", ["isAuthenticated"]),
  methods: {
    fetchEmbed() {
      const maxWidth = this.maxWidth >= 320 ? this.maxWidth : 320;
      const url = `https://api.instagram.com/oembed?url=${this.url}&maxwidth=${maxWidth}&hidecaption=${this.hideCaption}&omitscript=${this.omitScript}`;
    },
    search() {
      const {
        baseUrl,
        part,
        maxResults,
        key,
        playlistId
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&maxResults=${maxResults}&playlistId=${playlistId}&key=${key}`;

      this.getData(apiUrl);
    },
    login({ username, password }) {
      this.$store
        .dispatch("auth/login", { username, password })
        .then(() => this.$router.push("/"));
    },
    getSocialesDiblu(id) {
      const url = `/emisoras/${id}/redes_sociales?format=json`;
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.sociales_diblu = res.data;
        })
        .catch(err => {});
    },

    getSocialesCaravana(id) {
      const url = `/emisoras/${id}/redes_sociales?format=json`;
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.sociales_caravana = res.data;
        })
        .catch(err => {});
    },

    getSocialesOhConde(id) {
      const url = `/emisoras/${id}/redes_sociales?format=json`;
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.sociales_conde = res.data;
        })
        .catch(err => {});
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
        })
        .catch(error => error);
    },
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    },
    getSegmentosDiblu(id) {
      const url = `/emisoras/${id}/segmentos/today?format=json`;
      this.logo_emisora = diblu;
      api
        .get(url)
        .then(res => {
          this.segmentos_diblu = res.data;
          const url_transmisiones = `/emisora/${id}/transmisiones?format=json`;
          api
            .get(url_transmisiones, { crossdomain: true })
            .then(res => {
              this.transmisiones_diblu = res.data;
            })
            .catch(err => {

            });
        })
        .catch(err => {

        });
    },

    getSegmentosCaravana(id) {
      const url = `/emisoras/${id}/segmentos/today?format=json`;
      this.logo_emisora = RC;
      api
        .get(url)
        .then(res => {
          this.segmentos_caravana = res.data;
          const url_transmisiones = `/emisora/${id}/transmisiones?format=json`;
          api
            .get(url_transmisiones, { crossdomain: true })
            .then(res => {
              this.transmisiones_caravana = res.data;
            })
            .catch(err => {

            });
        })
        .catch(err => {

        });
    },

    getSegmentosConde(id) {
      const url = `/emisoras/${id}/segmentos/today?format=json`;
      this.logo_emisora = RC;
      api
        .get(url)
        .then(res => {
          this.segmentos_conde = res.data;
          const url_transmisiones = `/emisora/${id}/transmisiones?format=json`;
          api
            .get(url_transmisiones, { crossdomain: true })
            .then(res => {
              this.transmisiones_conde = res.data;
            })
            .catch(err => {

            });
        })
        .catch(err => {

        });
    },

    getEmisoraSegmentosToday(id, type) {
      const url = `/emisoras/${id}/segmentos/today?format=json`;
      this.emisora_id = id;
      this.type = type;
      if (type == "diblu") {
        this.logo_emisora = diblu;
        this.landing_diblu = true;
        this.landing_caravana = false;
        this.langing_oh_conde = false;
      }

      if (type == "caravana") {
        this.logo_emisora = RC;
        this.landing_caravana = true;
        this.landing_diblu = false;
        this.langing_oh_conde = false;
      }
      if (type == "oh_conde") {
        this.logo_emisora = ohconde;
        this.langing_oh_conde = true;
        this.landing_caravana = false;
        this.landing_diblu = false;

        const flecha_diblu = require("@/assets/webAdminRadio/img/flecha_diblu.png");
      }
      api
        .get(url)
        .then(res => {
          this.segmentos = res.data;
          const url_transmisiones = `/emisora/${id}/transmisiones?format=json`;
          api
            .get(url_transmisiones, { crossdomain: true })
            .then(res => {
              this.transmisiones = res.data;
            })
            .catch(err => {

            });
        })
        .catch(err => {

        });
    },
    getListenPodCasts(audio) {
      let listen = new Audio(audio);
      this.isPlayingPodCasts = true;
      listen.play();
    },
    playSoundDiBlu() {
      this.audio_radiodiblu.isPlaying = true;
      this.audio_radiodiblu.file.play();

      if (this.type == "diblu") {
        this.audio_radiocaravana.isPlaying = true;
        this.audio_radiocaravana.file.pause();
      }
    },

    playSoundCaravana() {
      this.audio_radiocaravana.isPlaying = true;
      this.audio_radiocaravana.file.play();

      if (this.type == "caravana") {
        this.audio_radiodiblu.isPlaying = true;
        this.audio_radiodiblu.file.pause();
      }
    },

    getAllEquipos() {
      const url = `/equipos?format=json`;
      var config = {
        headers: { "Access-Control-Allow-Origin": "*" }
      };
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.equipos = res.data;
        })
        .catch(err => {

        });
    },

    getEncuestas() {
      const url = `/encuestas?format=json`;
      var config = {
        headers: { "Access-Control-Allow-Origin": "*" }
      };
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.encuestas = res.data;
        })
        .catch(err => {

        });
    },

    contactanos() {
      const url = `/contactenos/?format=json`;
      api
        .post(url, this.contact, { crossdomain: true })
        .then(res => {
          this.$toastr.s(
            "Mensaje enviado",
            "Gracias.. muy pronto te estaremos contactando"
          ),
            setTimeout(() => {
              this.$router.push("/home");
            }, 1000);
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errors = err.response.data || {};
          }
        });
    },

    getPodCast() {
      const url = `/podcasts?format=json`;
      var config = {
        headers: { "Access-Control-Allow-Origin": "*" }
      };
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.podcasts = res.data;
        })
        .catch(err => {

        });
    },

    getGaleria() {
      const url = `/galeria?format=json`;
      var config = {
        headers: { "Access-Control-Allow-Origin": "*" }
      };
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.galerias = res.data;
        })
        .catch(err => {

        });
    },

    getConductores() {
      const url = `/locutores?format=json`;
      api
        .get(url, { crossdomain: true })
        .then(res => {
          this.conductores = res.data;
        })
        .catch(err => {

        });
    },

    getImagenEquipo(equipo1, equipo2) {
      for (const equipo in this.equipos) {
        if (this.equipos.hasOwnProperty(equipo)) {
          const element = this.equipos[equipo];
          if (element.equipo == equipo1) {
            return element.imagen;
          }

          if (element.equipo == equipo2) {
            
            return element.imagen;
          }
        }
      }
    }
  },

  watch: {
    type: function() {}
  }
};
</script>
<style lang="css" scope>
.VueCarousel-slide {
  visibility: visible;
}

.conductores-carousel .bg-image .cover-conductores {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.conductores-carousel .bg-image .background-conductores {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.background-conductores {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  top: 0;
  width: 100%;
  height: 360px;
}
.conductores .slick-prev {
  transform: rotate(180deg);
  margin-top: -10px;
  z-index: 999;
  height: 40px;
  width: 40px;
  margin-top: -20px;
}

.conductores .slick-next {
  height: 40px;
  width: 40px;
}

.background-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  position: unset !important;
}
.conductores-carousel .background-1 {
  background-image: url("~@/assets/webAdminRadio/img/image_3.png");
}

.conductores-carousel .background-2 {
  background-image: url("~@/assets/webAdminRadio/img/image_1.png");
}

.conductores-carousel .background-3 {
  background-image: url("~@/assets/webAdminRadio/img/telefonos.png");
}

.conductores-carousel .background-4 {
  background-image: url("~@/assets/webAdminRadio/img/proactividad.png");
}

.conductores-carousel .background-5 {
  background-image: url("~@/assets/webAdminRadio/img/responsabilidad.png");
}

.conductores-carousel .background-6 {
  background-image: url("~@/assets/webAdminRadio/img/siguenos.png");
}

.conductores-carousel .background-1 {
  background-image: url("~@/assets/webAdminRadio/img/image_3.png");
}

.conductores .slick-slide > div {
  padding: 30px;
}

.galeria-carousel .background-1 {
  background-image: url("~@/assets/webAdminRadio/img/image_3.png");
}

.galeria-carousel .background-2 {
  background-image: url("~@/assets/webAdminRadio/img/image_1.png");
}

.galeria-carousel .background-3 {
  background-image: url("~@/assets/webAdminRadio/img/telefonos.png");
}

.galeria-carousel .background-4 {
  background-image: url("~@/assets/webAdminRadio/img/proactividad.png");
}

.galeria-carousel .background-5 {
  background-image: url("~@/assets/webAdminRadio/img/responsabilidad.png");
}

.galeria-carousel .background-6 {
  background-image: url("~@/assets/webAdminRadio/img/siguenos.png");
}

.galeria .slick-slide > div {
  padding: 30px;
}

.galeria .slick-prev {
  transform: rotate(180deg);
  margin-top: -10px;
  z-index: 999;
  height: 40px;
  width: 40px;
  margin-top: -20px;
}

.galeria .slick-next {
  height: 40px;
  width: 40px;
}

.VueCarousel-navigation-prev {
  background-image: url("~@/assets/webAdminRadio/img/flecha_diblu.png");
  background-size: cover;
  transform: rotate(180deg) !important;
  font-size: 0;
  height: 236px;
  width: 114px;
  margin-top: -120px;
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
}

.VueCarousel-navigation-next {
  background-image: url("~@/assets/webAdminRadio/img/flecha_diblu.png");
  background-size: cover;
  font-size: 0;
  height: 236px;
  width: 114px;
  margin-right: 114px;
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
}

#home {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/539610.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}
.logo-karavana {
  width: 380px;
}

.btn-images {
  margin-left: 2rem;
  margin-right: 2rem;
  width: 120px;
}
.footer {
  width: 100%;
  bottom: 0;
  height: 120px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer-link {
  width: 40px;
}

.footer-link img {
  width: 40px;
}

.footer-link-text {
  margin-top: -15px;
  font-size: 10px;
  color: #5f4d98;
}

.footer-link > a {
  text-decoration: none;
}
#ohconde .slick-prev {
  position: absolute;
  left: 50%;
  transform: rotate(-90deg);
  top: 0;
  margin-top: -20px;
  width: 24px;
  height: 38px;
}

#ohconde .slick-next {
  position: absolute;
  right: 48%;
  bottom: 0;
  margin-top: 17rem;
  margin-left: 24px;
  transform: rotate(90deg);
  width: 24px;
  height: 38px;
}

#ohconde .your-class {
  margin-bottom: 5 rem;
  padding-top: 20px;
  padding-bottom: 6rem;
}

.conductores .slick-slide {
  margin: 0px 40px;
}
/* the parent */
.conductores .slick-list {
  margin: 0px -40px;
}

.galeria .slick-slide {
  margin: 0px 40px;
}
/* the parent */
.galeria .slick-list {
  margin: 0px -40px;
}

.conductores h1 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.conductores h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

.cover-conductores {
  background-color: rgba(95, 77, 152, 0.7);
  height: 100%;
  width: 100%;
  display: none;
}

.background-conductores:hover .cover-conductores {
  display: block;
}

.galeria h1 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.galeria h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

.encuestas {
  margin-top: 6rem;
  background-image: url("~@/assets/webAdminRadio/img/test.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

.encuestas h1 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.encuestas h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

.encuestas .cover-encuestas {
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
}

.encuestas [type="radio"]:checked,
.encuestas [type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.encuestas [type="radio"]:checked + label,
.encuestas [type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
.encuestas [type="radio"]:checked + label:before,
.encuestas [type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
.encuestas [type="radio"]:checked + label:after,
.encuestas [type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #e10713;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.encuestas [type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
.encuestas [type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.encuestas .slick-dots li button {
  background-color: white;
  width: 60px !important;
  border-radius: 20px;
}

.encuestas .slick-dots li button:hover {
  background-color: #e10713;
}

.encuestas .slick-dots .slick-active button {
  background-color: #e10713;
}

.encuestas .slick-dots li button:before {
  width: 60px !important;
  color: transparent !important;
}

.encuestas .slick-dots li {
  width: 60px;
}

.btn-votar {
  margin-bottom: 4rem;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 0;
  background-color: #e10713;
  margin-top: 2rem;
}

.grabaciones h1 {
  margin-top: 6rem;
  margin-bottom: 2rem;
}

.grabaciones h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

.transmissions {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.transmissions .VueCarousel {
  height: 250px;
}

.transmissions .VueCarousel-slide{
  height: 250px;
  padding: 20px;
}

#caravana .transmissions .bg-image{
  height: 250px;
}

.transmissions .bg-image {
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.transmissions .bg-image #grabaciones-list {
  widows: 100%;
  background-color: #f7f7f8;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 6rem;
  padding-right: 6rem;
  height: 600px;
  overflow-y: auto;
  margin-bottom: 3rem;
}

#grabaciones-list .card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}

.somos {
  background-color: #edeef0;
}

.somos h1 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.somos h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

.contactenos h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

.schedule .VueCarousel {
  height: 230px;
}

.contactenos {
  background-color: #edeef0;
  padding-bottom: 6rem;
}

.contactenos h1 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.contactenos p {
  color: #444242;
}

.custom-form {
  border: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 25px;
  border-radius: 10px;
  color: #9a999e;
}

.custom-icon {
  font-size: 50px;
}

.right-line {
  width: 1px;
  height: 70%;
  color: #8c8c8c;
  background-color: #8c8c8c;
  position: absolute;
  left: 50%;
}

.btn-enviar {
  border-radius: 0px;
}

.contactenos .col-md-6 {
  padding-left: 4rem;
  padding-right: 4rem;
}

.footer {
  width: 100%;
  height: 250px;
  padding-top: 2rem;
  background-color: #0b091a;
  padding-bottom: 2rem;
}

.footer-main {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 120px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.cover-main {
  background-color: rgba(11, 9, 26, 0.8);
  top: 0;
  bottom: 0;
  width: 100%;
}

.instagram-media {
  height: 500px;
  overflow-y: auto;
}


#grabaciones-list {
  widows: 100%;
  background-color: #f7f7f8;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 6rem;
  padding-right: 6rem;
  height: 600px;
  overflow-y: auto;
  margin-bottom: 3rem;
}

#grabaciones-list .card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}
#hero {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/4811.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}

.navbar {
  background-color: transparent !important;
}

.navbar a {
  color: #fff !important;
}

.navbar .nav-item {
  margin-right: 1rem;
  margin-left: 1rem;
}

#hero .main-text {
  color: #fff;
}

#hero .green-text {
  color: #a5ce39;
}
#schedule .VueCarousel {
  height: 230px;
}

#schedule .VueCarousel-slide {
  height: 230px;
}

#schedule .bg-image {
  height: 230px;
}

#schedule .green-box,
#transmissions .green-box {
  background-color: #a5ce39;
  width: 70%;
  padding: 10px;
  margin-top: 10px;
}

#schedule .green-box h3,
#transmissions .green-box h3 {
  margin: 0;
}

#schedule .blue-box,
#transmissions .blue-box {
  background-color: #005b90;
  margin-left: 20px;
  width: 70%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

#schedule .blue-box p,
#transmissions .blue-box p {
  margin: 0;
}

#schedule .blue-box > h5 {
  color: #fff;
}

#schedule .bg-image {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#transmissions .bg-image {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#schedule .col-md-3 {
  padding: 0;
}

#schedule {
  height: 230px;
}

#schedule .VueCarousel {
  height: 230px;
}

#transmissions {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

#transmissions h1 {
  margin-bottom: 2rem;
}

#transmissions h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #a5ce39 solid;
  margin-top: 14px;
}

.transmissions h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #a5ce39 solid;
  margin-top: 14px;
}

#transmissions .carousel {
  margin-top: 2rem;
}

#follow-us {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/siguenos.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center 10px;
}

#follow-us h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #394dce solid;
  margin-top: 14px;
}

#social h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #a5ce39 solid;
  margin-top: 14px;
}

#social {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

#social p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#sidebar {
  position: fixed;
  width: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 35%;
  right: 0;
  z-index: 9999;
}

#sidebar li {
  list-style: none;
}

#sidebar ul {
  margin: 0;
  padding: 5px;
}

#caravana .hero {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/caravana-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}

#caravana .follow-us h1 {
  position: relative;
}

#caravana .follow-us h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}
.cover {
  position: static !important;
}
#caravana .cover {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
}

#caravana .main-text {
  color: #fff;
}

#caravana .red-text {
  color: #e10713;
}

#caravana .schedule .VueCarousel {
  height: 230px;
}

#caravana .schedule .VueCarousel-slide {
  height: 230px;
}

#caravana .schedule .green-box,
.transmissions .green-box {
  background-color: #e10713;
  width: 80%;
  padding: 10px;
  margin-top: 10px;
}

#caravana .schedule .green-box h3,
.transmissions .green-box h3 {
  margin: 0;
}

#caravana .schedule .blue-box,
#caravana .transmissions .blue-box {
  background-color: #2c2469;
  margin-left: 20px;
  width: 80%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

#caravana .schedule .blue-box p,
#caravana .transmissions .blue-box p {
  margin: 0;
}

#caravana .schedule .blue-box > h5 {
  color: #fff;
}

#caravana .schedule .col-md-3 {
  padding: 0;
}

#caravana .transmissions {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

#caravana .transmissions h1 {
  margin-bottom: 2rem;
}

#caravana .transmissions h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

#caravana .transmissions .carousel {
  margin-top: 2rem;
}

#caravana .follow-us i {
  color: #e10713;
}

#caravana .follow-us {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/caravana-siguenos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}

#caravana .social {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

#caravana .social h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #e10713 solid;
  margin-top: 14px;
}

#caravana .social p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#ohconde .cover {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
}

#ohconde .hero {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/ohconde-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}

#ohconde .hero .main-text {
  color: #fff;
}

#ohconde .hero .green-text {
  color: #a5ce39;
}

#ohconde .schedule {
  background-color: #0b091a;
}

#ohconde .schedule .item-schedule {
  padding: 20px;
}

#ohconde .transmissions .VueCarousel {
  height: 250px;
}

#ohconde .transmissions .VueCarousel-slide {
  height: 250px;
}

#ohconde .transmissions .bg-image {
  padding-top: 60px;
  padding-bottom: 60px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 250px;
}

#ohconde .social h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #f7b21a solid;
  margin-top: 14px;
}

#ohconde .follow-us h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #f7b21a solid;
  margin-top: 14px;
}

#ohconde .transmissions h1:after {
  left: 50%;
  content: "";
  position: absolute;
  display: inline-block;
  margin-left: -50px;
  height: 1em;
  width: 100px;
  border-bottom: 4px #f7b21a solid;
  margin-top: 14px;
}

#ohconde .transmissions {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

#ohconde .schedule .green-box,
#ohconde .transmissions .green-box {
  background-color: #f7b21a;
  width: 70%;
  padding: 20px;
}

#ohconde .schedule .green-box h3,
#ohconde .transmissions .green-box h3 {
  margin: 0;
}

#ohconde .schedule .blue-box,
#ohconde .transmissions .blue-box {
  background-color: #444242;
  margin-left: 20px;
  width: 80%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}

#ohconde .schedule .blue-box p,
#ohconde .transmissions .blue-box p {
  margin: 0;
}

#ohconde .transmissions .carousel {
  margin-top: 2rem;
}

#ohconde .follow-us {
  height: 100vh;
  background-image: url("~@/assets/webAdminRadio/img/ohconde-siguenos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}

#ohconde .social {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

#ohconde .follow-us i {
  color: #f7b21a;
}

#ohconde .social p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#caravana .schedule .bg-image {
  padding-top: 60px;
  padding-bottom: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 230px;
}

#caravana .transmissions .bg-image {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

.dark-transparent-navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
  padding: 1.5rem;
}

.mobile-only {
  display: none;
}

#sidebar .list-group-item {
  background-color: unset;
  color: #fff;
}

.push-right {
  float: right;
}

.push-left {
  float: left;
}

.first-child-follow-us-margin {
  padding: 0px;
}

.last-child-follow-us-margin {
  padding: 0px;
}

@media (max-width: 991px) {
  .mobile-only {
    display: block;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.7) !important;
  }

  .show-on-lg{
    display: block;
  }

  .footer-main {
    display: none;
  }

}

@media (min-width: 991px) {
  

  .hide-on-lg{
    display: none !important;
  }

}

@media (min-width: 990px){
  .show-on-md{
    display: block;
  }

  .hide-on-md{
    display: none;
  }
}

@media (max-width: 767px) {
  #home .btn-images {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .right-line {
    display: none;
  }
}

@media (max-width: 595px) {
  #home .btn-images {
    width: 80px;
  }
}

@media (max-width: 360px) {
  .logo-karavana {
    width: 340px !important;
  }

  .btn-images {
    width: 45px !important;
  }

  .VueCarousel-navigation-prev {
    width: 80px !important;
    background-size: 30px !important;
  }

  .VueCarousel-navigation-next {
    width: 80px !important;
    background-size: 30px !important;
    margin-right: 114px !important;
  }
  .VueCarousel-slide .sli-p {
    width: 100% !important;
  }
  .right-line {
    display: none;
  }
  #grabaciones-list {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .galeria .slick-slide {
    margin: 0px !important;
    width: 100% !important;
  }
  .slick-track {
    width: 100% !important;
  }
  .movil {
    display: block !important;
  }
  .no-movil {
    display: none !important;
  }
}
</style>