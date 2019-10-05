<template>

  

  <div id="home-view">
    <navbar v-if="isAuthenticated" :logo="logo_emisora"></navbar>
    <div id="sidebar">
      <ul>
        <li>
          <img
            @click="getEmisoraSegmentosToday(13, 'diblu')"
            src="@/assets/img/boton_diblu.png"
            class="full-image"
            alt
          />
        </li>
        <li>
          <img
            @click="getEmisoraSegmentosToday(16, 'caravana')"
            src="@/assets/img/boton_RC.png"
            class="full-image"
            alt
          />
        </li>
        <li>
          <img
            @click="getEmisoraSegmentosToday(14, 'oh_conde')"
            src="@/assets/img/boton_ohconde.png"
            class="full-image"
            alt
          />
        </li>
        
      </ul>
    </div>
    <section id="home">
      <div class="cover">
        <div class="container">
          
          <div class="row align-items-center full-height">

           
            <div class="mx-auto">
             
            <div class="text-center main-text mb-4">
              <img  class="logo-karavana" src="@/assets/img/letras_grupocaravana.png" alt="">
            </div>
              <a href="#hero" @click="getEmisoraSegmentosToday(13, 'diblu')"><img class="btn-images" src="@/assets/img/boton_diblu.png" alt /></a>
              <a href="#caravana" @click="getEmisoraSegmentosToday(16, 'caravana')">
                <img class="btn-images" src="@/assets/img/boton_RC.png" alt />
              </a>
              <a href="#ohconde"  @click="getEmisoraSegmentosToday(14, 'oh_conde')">
                <img class="btn-images" src="@/assets/img/boton_ohconde.png" alt />
              </a>
            </div>
          </div>
        </div>

        <div class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="offset-md-9 col-md-1 footer-link">
                                <a href="#">
                                    <p class="text-center">
                                        <img src="@/assets/img/codigo_etica.png" alt="">
                                    </p>
                                    <p class="text-center footer-link-text" href="">Código de ética</p>
                                </a>
                            </div>
                            <div class="col-md-1 footer-link">
                                <a href="#">
                                    <p class="text-center">
                                        <img class="text-center" src="@/assets/img/comparticion_de_infraestructura.png" alt="">
                                    </p>
                                    <p class="text-center footer-link-text" href="">Compartición de la infraestructura</p>
                                </a>
                            </div>
                            <div class="col-md-1 footer-link">
                                <a href="#">
                                    <p class="text-center">
                                        <img class="text-center" src="@/assets/img/rendicion_de_cuentas.png" alt="">
                                    </p>
                                    <p href="" class="text-center footer-link-text">Rendición de cuentas</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </section>
    <template v-if="landing_diblu">
      <section id="hero">
      <div class="cover">
        <div class="container">
          <div class="row align-items-center full-height">
            <div class="col-12">
              <h1 class="text-center main-text">
                ESCÚCHANOS
                <span class="green-text">EN VIVO</span> AHORA
              </h1>
              <p class="text-center">
                <img @click.prevent="playSoundDiBlu()" style="width: 120px;" src="@/assets/img/play_diblu.png" alt />
                <!--<audio src="http://www.makrodigital.com:8137/radiodiblu" crossorigin="anonymous" id="audio" controls></audio>-->
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="schedule">
      <!--<div class="container-fluid">-->
        <carousel :autoplay="true" :perPage="5" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="▶" navigationPrevLabel="◀">
            <slide v-for="(segmento, index) in segmentos" :key="index">
              <div class="col-md-12" style="padding:0">
                <div :style="{ 'background-image': 'url(' + segmento.imagen + ')' }" class="bg-image">
                  <div class="green-box">
                    <h4 class="text-white" style="font-size: 1.2rem;">{{ segmento.nombre }}</h4>
                  </div>
                  <div class="blue-box">
                    <p
                        class="text-center text-white"
                      >{{ segmento.horarios[0].dia }} de {{ segmento.horarios[0].fecha_inicio }} - {{ segmento.horarios[0].fecha_fin }}</p>
                  </div>
                </div>
              </div>
               
            </slide>
            
        </carousel>
      <!--</div>-->
    </section>

    <section id="transmissions">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Transmisiones</h1>
            <p class="text-center">Lorem ipsum Lorem ipsum Lorem ipsum </p>
          </div>
        </div>

        <carousel :autoplay="true" :perPage="3" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="▶" navigationPrevLabel="◀">
            <slide v-for="(transmision, index) in transmisiones" :key="index">
              <div class="col-md-12">
              <div v-if="transmision.equipo1" :style="{ 'background-image': 'url(' + getImagenEquipo(transmision.equipo1) + ')' }" class="bg-image">
                <div class="green-box">
                  <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                </div>
              </div>
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
                <div class="col-md-2 offset-md-3">
                  <h2 class="text-center text-green"><i class="fa fa-facebook" aria-hidden="true"></i></h2>
                </div>
                <div class="col-md-2">
                  <h2 class="text-center text-green"><i class="fa fa-instagram" aria-hidden="true"></i></h2>
                </div>
                <div class="col-md-2">
                  <h2 class="text-center text-green"><i class="fa fa-twitter" aria-hidden="true"></i></h2>
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
            <p class="text-center">Lorem ipsum lorem ipsum lorem ipsum</p>
          </div>

          <div class="col-md-4">
            <img src="@/assets/img/image_3.png" class="full-image" alt />
          </div>
          <div class="col-md-4">
            <img src="@/assets/img/image_3.png" class="full-image" alt />
          </div>
          <div class="col-md-4">
            <img src="@/assets/img/image_3.png" class="full-image" alt />
          </div>
        </div>
      </div>
    </section>
    </template>

    <template v-if="landing_caravana">
      <div id="caravana">
      <section class="hero">
        <div class="cover">
          <div class="container">
            <div class="row align-items-center full-height">
              <div class="col-12">
                <h1 class="text-center main-text">
                  ESCÚCHANOS
                  <span class="red-text">EN VIVO</span> AHORA
                </h1>
                <p class="text-center">
                  <img @click.prevent="playSoundCaravana()" style="width: 120px;" src="@/assets/img/play_RC.png" alt />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="schedule">
        <div class="container-fluid">
          <div class="row">
            <!--<div class="col-md-3" v-for="(segmento, index) in segmentos" :key="index">
              <div :style="{ 'background-image': 'url(' + segmento.imagen + ')' }" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">{{ segmento.nombre }}</h3>
                </div>
                <div class="blue-box">
                  <p
                    class="text-center text-white"
                  >{{ segmento.horarios[0].dia }} de {{ segmento.horarios[0].fecha_inicio }} - {{ segmento.horarios[0].fecha_fin }}</p>
                </div>
              </div>
            </div>-->
            <carousel :autoplay="true" :perPage="5" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="▶" navigationPrevLabel="◀">
            <slide v-for="(segmento, index) in segmentos" :key="index">
              <div class="col-md-12" style="padding:0">
                <div :style="{ 'background-image': 'url(' + segmento.imagen + ')' }" class="bg-image">
                  <div class="green-box">
                    <h4 class="text-white" style="font-size: 1.2rem;">{{ segmento.nombre }}</h4>
                  </div>
                  <div class="blue-box">
                    <p
                        class="text-center text-white"
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
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center">Transmisiones</h1>
              <p class="text-center"></p>
            </div>
          </div>

          <carousel :autoplay="true" :perPage="3" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="▶" navigationPrevLabel="◀">
            <slide v-for="(transmision, index) in transmisiones" :key="index">
              <div class="col-md-12">
              <div v-if="transmision.equipo1" :style="{ 'background-image': 'url(' + getImagenEquipo(transmision.equipo1) + ')' }" class="bg-image">
                <div class="green-box">
                  <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                </div>
              </div>
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
                <div class="col-md-2 offset-md-3">
                  <h2 class="text-center text-green"><i class="fa fa-facebook" aria-hidden="true"></i></h2>
                </div>
                <div class="col-md-2">
                  <h2 class="text-center text-green"><i class="fa fa-instagram" aria-hidden="true"></i></h2>
                </div>
                <div class="col-md-2">
                  <h2 class="text-center text-green"><i class="fa fa-twitter" aria-hidden="true"></i></h2>
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

            <div class="col-md-4">
              <img src="@/assets/img/image_3.png" class="full-image" alt />
            </div>
            <div class="col-md-4">
              <img src="@/assets/img/image_3.png" class="full-image" alt />
            </div>
            <div class="col-md-4">
              <img src="@/assets/img/image_3.png" class="full-image" alt />
            </div>
          </div>
        </div>
      </section>

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
              <div class="conductores-carousel h-100">
            <div class="background-image background-1">
              <div class="cover-conductores">
                <div class="container-fluid" style="height: 100%;">
                  <div class="row align-items-center" style="height: 100%;">
                    <div class="col-12">
                      <h3 class="text-center text-white">Lorem ipsum</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="background-image background-2">
              <div class="cover-conductores">
                <div class="container-fluid" style="height: 100%;">
                  <div class="row align-items-center" style="height: 100%;">
                    <div class="col-12">
                      <h3 class="text-center text-white">Lorem ipsum</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="background-image background-3">

            </div>
            <div class="background-image background-4">

            </div>
            <div class="background-image background-5">

            </div>
            <div class="background-image background-6">

            </div>
            <div class="background-image background-1">

            </div>
            <div class="background-image background-2">

            </div>
            <div class="background-image background-3">

            </div>
            <div class="background-image background-4">

            </div>
            <div class="background-image background-5">

            </div>
            <div class="background-image background-6">

            </div>
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
            <div class="col-12">
              <div class="galeria-carousel h-100">
                <div class="background-image background-1">
                </div>
                <div class="background-image background-2">

                </div>
                <div class="background-image background-3">

                </div>
                <div class="background-image background-4">

                </div>
                <div class="background-image background-5">

                </div>
                <div class="background-image background-6">

                </div>
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
                <div class="encuestas-carousel" style="margin-top: 3rem; margin-bottom: 2rem;">
                  
                  <div>
                    <h3 class="text-center">¿Quien ganará la final de la Copa Liberadores?</h3>
                    
                    <div class="container" style="margin-top: 2rem;">
                      <div class="row">
                        <div class="col-md-4 offset-md-4" >
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                              Default radio
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                              Second default radio
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="offset-md-8 col-md-6">
                        <button class="btn btn-danger" style="margin-bottom: 4rem; padding-left: 25px; padding-right: 25px; border-radius: 0; background-color: #e10713;">
                          Votar
                        </button>
                      </div>
                    </div>
                    
                  </div>

                  <div>
                    <h3 class="text-center">¿Quien ganará la final de la Copa Liberadores 2?</h3>
                    <div class="container" style="margin-top: 2rem;">
                      <div class="row">
                        <div class="col-md-4 offset-md-4" >
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                              Default radio
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                              Second default radio
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="offset-md-8 col-md-6">
                        <button class="btn btn-danger btn-votar">
                          Votar
                        </button>
                      </div>
                    </div>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="grabaciones">

        <div class="container">
          <div class="row">

          </div>
        </div>

      </section>

      

    </div>
    </template>

    <template v-if="langing_oh_conde">
      <div id="ohconde">
      <section class="hero">
        <div class="cover"></div>
      </section>

      <section class="schedule">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <!--<img
                src="@/assets/img/2-1400x445.png"
                class="full-image"
                alt
                style="margin-top: -20%; z-index: 99;"
              />-->
              <iframe style="width: 100%; height: 600px; margin-top: -37%;" src="https://www.youtube.com/embed/r-qCzkqEMUM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="your-class h-100">
                <div v-for="(video, index) in videos" :key="index">
                  <div class="row align-items-center item-schedule">
                    <div class="col-4 offset-2">
                      <!--<img :style="{ 'background-image': 'url(' + segmento.imagen + ')' }" class="full-image" alt />-->
                      <img :src="video.snippet.thumbnails.high.url" alt  class="full-image"/>
                    </div>
                    <div class="col-4 offset-2">
                      <h5
                        class="text-center text-white"
                      >{{ video.snippet.title }}</h5>
                    </div>
                  </div>
                </div>
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
                <div class="col-md-2 offset-md-3">
                  <h2 class="text-center text-green"><i class="fa fa-facebook" aria-hidden="true"></i></h2>
                </div>
                <div class="col-md-2">
                  <h2 class="text-center text-green"><i class="fa fa-instagram" aria-hidden="true"></i></h2>
                </div>
                <div class="col-md-2">
                  <h2 class="text-center text-green"><i class="fa fa-twitter" aria-hidden="true"></i></h2>
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
              <p class="text-center"></p>
            </div>
          </div>

          <carousel :autoplay="true" :perPage="3" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="▶" navigationPrevLabel="◀">
            <slide v-for="(transmision, index) in transmisiones" :key="index">
              <div class="col-md-12">
              <div v-if="transmision.equipo1" :style="{ 'background-image': 'url(' + getImagenEquipo(transmision.equipo1) + ')' }" class="bg-image">
                <div class="green-box">
                  <h4 style="font-size: 1.2rem;" class="text-white">{{transmision.evento}}</h4>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">{{transmision.fecha_evento}} - {{transmision.hora_inicio}} - {{transmision.lugar}}</p>
                </div>
              </div>
            </div>
               
            </slide>
            
        </carousel>
        </div>
      </section>

      <section class="social">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center">Redes Sociales</h1>
            </div>
            <div class="col-12">
              <p class="text-center">Lorem ipsum lorem ipsum lorem ipsum</p>
            </div>

            <div class="col-md-4">
              <img src="@/assets/img/image_3.png" class="full-image" alt />
            </div>
            <div class="col-md-4">
              <img src="@/assets/img/image_3.png" class="full-image" alt />
            </div>
            <div class="col-md-4">
              <img src="@/assets/img/image_3.png" class="full-image" alt />
            </div>
          </div>
        </div>
      </section>
    </div>
    </template>
  </div>
</template>
<script>

import { mapActions, mapState, mapGetters } from "vuex";
import api from "../api/session";
import axios from 'axios'
import { Carousel, Slide } from "vue-carousel";
import Navbar from '@/components/Navbar';
const diblu = require('@/assets/img/diblu1.png')
const RC = require('@/assets/img/logo_grupocaravana.png')
const ohconde = require('@/assets/img/ohconde2.png')
export default {
  name: "home",
  components: {
    carousel: Carousel,
    slide: Slide,
    Navbar
  },
  data() {
    return {
      slickOptions: {
                slidesToShow: 6,
                // Any other options that can be got from plugin documentation
            },
            logo_emisora: '',
             videos: [],
      reformattedSearchString: '',
            api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/playlists?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 12,
        channelId: 'UCPHFkdGpFWAiWi9JrViJ5uw',
        q: '',
        key: 'AIzaSyAU-THD4WG8ruNRIYy7cYNsW5Jd2Q8mD9s',
        prevPageToken: '',
        nextPageToken: ''
      },
      audio_radiodiblu: {
          id: 'radiodiblu',
          name: 'RadioDiblu',
          file: new Audio('http://www.makrodigital.com:8137/radiodiblu'),
          isPlaying: false
      },
      audio_radiocaravana: {
        id: 'radiocaravana',
          name: 'Radio Caravana',
          file: new Audio('http://www.makrodigital.com:8006/radiocaravana'),
          isPlaying: false
      },
      segmentos: [],
      equipos: [],
      transmisiones: [],
      landing_caravana: false,
      landing_diblu: true,
      langing_oh_conde: false,
      emisora_id: null,
      type: 'caravana',
    };
  },
  mounted() {
    this.getEmisoraSegmentosToday(13, this.type);
    this.getAllEquipos()
    this.search()
  },
  computed: mapGetters('auth', [
    'isAuthenticated',
  ]),
  methods: {
     search() {
      const { baseUrl, part, type, order, maxResults, q, key, channelId} = this.api;
      const apiUrl = `${baseUrl}part=${part}&channelId=${channelId}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`;
      console.log(apiUrl);
      
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
        })
        .catch(error => console.log(error));
    },
    next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    getEmisoraSegmentosToday(id, type) {
      const url = `/emisoras/${id}/segmentos/today?format=json`;
      this.emisora_id = id;
      this.type = type;
      if(type == 'diblu') {
        this.logo_emisora = diblu
        this.landing_diblu = true
        this.landing_caravana = false
        this.langing_oh_conde = false
      }

       if(type == 'caravana') {
         this.logo_emisora = RC
        this.landing_caravana = true
        this.landing_diblu = false
        this.langing_oh_conde = false

        const flecha_conductores = require('@/assets/img/flecha_der_conductores.png')
        const flecha_galeria = require('@/assets/img/flecha_der_galeria.png')

        $(document).ready(function(){
          $(".conductores-carousel").slick({
            rows:2,
            slidesToShow: 3,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='"+flecha_conductores+"'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='"+flecha_conductores+"'>"
          })
        })

        $(document).ready(function(){
          $(".galeria-carousel").slick({
            rows:2,
            slidesToShow: 2,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='"+flecha_galeria+"'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='"+flecha_galeria+"'>"
          })
        })

        $(document).ready(function(){
          $(".encuestas-carousel").slick({
            arrows:false,
            dots:true
          })
        })

      }
      if(type == 'oh_conde') {
        this.logo_emisora = ohconde
        this.langing_oh_conde = true
        this.landing_caravana = false
        this.landing_diblu = false

        const flecha_diblu = require('@/assets/img/flecha_diblu.png')

        $(document).ready(function(){
          $('.your-class').slick({
            vertical: true, slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='"+flecha_diblu+"'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='"+flecha_diblu+"'>"
          });
        });

      }
      api
        .get(url)
        .then(res => {
          this.segmentos = res.data;
            const url_transmisiones = `/emisora/${id}/transmisiones?format=json`;
          api.get(url_transmisiones)
            .then(res => {
              this.transmisiones = res.data;
            })
            .catch(err => {
              console.error(err);
            });


        })
        .catch(err => {
          console.error(err);
        });
    },

    playSoundDiBlu () {
      this.audio_radiodiblu.isPlaying = true;
      this.audio_radiodiblu.file.play();

      if(this.type == 'diblu') {
        this.audio_radiocaravana.isPlaying = true;
        this.audio_radiocaravana.file.pause();
      }
    },

    playSoundCaravana () {
      this.audio_radiocaravana.isPlaying = true;
      this.audio_radiocaravana.file.play();

      if(this.type == 'caravana') {
        this.audio_radiodiblu.isPlaying = true;
        this.audio_radiodiblu.file.pause();
      }
    },

    getAllEquipos () {
      const url = `/equipos?format=json`;
      api
        .get(url)
        .then(res => {
          this.equipos = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getImagenEquipo (equipo1, equipo2) {
      for (const equipo in this.equipos) {
        if (this.equipos.hasOwnProperty(equipo)) {
          const element = this.equipos[equipo];          
          if(element.equipo == equipo1) {
            console.log(element.imagen);
            return element.imagen;
          }

          if(element.equipo == equipo2) {
            console.log(element.imagen);
            
            return element.imagen;
          }
        }
      }
    }
    
  },

  watch: {
    'type': function () {

    }
  },
};

</script>
<style lang="css" scope>
.VueCarousel-slide {
  visibility: visible;
}

.conductores-carousel .background-image{
  background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
    
}

.conductores .slick-prev{
  transform: rotate(180deg);
  margin-top: -10px;
  z-index: 999;
  height: 40px;
  width: 40px;
}

.conductores .slick-next{
  height: 40px;
  width: 40px;
}

.galeria-carousel .background-image{
  background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
    
}
.conductores-carousel .background-1{
  background-image: url('~@/assets/img/image_3.png')
}

.conductores-carousel .background-2{
  background-image: url('~@/assets/img/image_1.png')
}

.conductores-carousel .background-3{
  background-image: url('~@/assets/img/telefonos.png')
}

.conductores-carousel .background-4{
  background-image: url('~@/assets/img/proactividad.png')
}

.conductores-carousel .background-5{
  background-image: url('~@/assets/img/responsabilidad.png')
}

.conductores-carousel .background-6{
  background-image: url('~@/assets/img/siguenos.png')
}

.conductores-carousel .background-1{
  background-image: url('~@/assets/img/image_3.png')
}

.conductores .slick-slide > div{
  padding: 30px;
}

.galeria-carousel .background-1{
  background-image: url('~@/assets/img/image_3.png')
}

.galeria-carousel .background-2{
  background-image: url('~@/assets/img/image_1.png')
}

.galeria-carousel .background-3{
  background-image: url('~@/assets/img/telefonos.png')
}

.galeria-carousel .background-4{
  background-image: url('~@/assets/img/proactividad.png')
}

.galeria-carousel .background-5{
  background-image: url('~@/assets/img/responsabilidad.png')
}

.galeria-carousel .background-6{
  background-image: url('~@/assets/img/siguenos.png')
}

.galeria .slick-slide > div{
  padding: 30px;
}

.galeria .slick-prev{
  transform: rotate(180deg);
  margin-top: -10px;
  z-index: 999;
  height: 40px;
  width: 40px;
}

.galeria .slick-next{
  height: 40px;
  width: 40px;
}

.VueCarousel-navigation-prev {
    background-image: url('~@/assets/img/flecha_diblu.png');
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
    background-image: url('~@/assets/img/flecha_diblu.png');
    background-size: cover;
    font-size: 0;
    height: 236px;
    width: 114px;
    margin-right: 114px;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
}

#home{
  height: 100vh;
  background-image: url('~@/assets/img/539610.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;  
}
.logo-karavana{
    margin-left: 2rem;
    margin-right: 2rem;
    width: 380px;
}

.btn-images{
    margin-left: 2rem;
    margin-right: 2rem;
    width: 120px;
}
.footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 120px;
    padding-left: 1rem;
    padding-right: 1rem;
}

.footer-link{
    width: 40px;
}

.footer-link img{
    width: 40px;
}

.footer-link-text{
    margin-top: -15px;
    font-size: 10px;
    color: #5f4d98;
}

.footer-link > a{
    text-decoration: none;
}
#ohconde .slick-prev{
  position: absolute;
  left: 50%;
  transform: rotate(-90deg);
  top: 0;
}

#ohconde .slick-next{
  position: absolute;
  right: 48%;
  bottom: 0;
  margin-top: 16rem;
  margin-left: 24px;
  transform: rotate(90deg);
}

#ohconde .your-class{
  margin-bottom: 5      rem;
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

.conductores h1{
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.conductores h1:after{
  left: 50%;
    content: '';
    position: absolute;
    display: inline-block;
    margin-left: -50px;
    height: 1em;
    width: 100px;
    border-bottom: 4px #e10713 solid;
    margin-top: 14px;
}

.cover-conductores{
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
}

.galeria h1{
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.galeria h1:after{
  left: 50%;
    content: '';
    position: absolute;
    display: inline-block;
    margin-left: -50px;
    height: 1em;
    width: 100px;
    border-bottom: 4px #e10713 solid;
    margin-top: 14px;
}

.encuestas{
  margin-top: 6rem;
  background-image: url('~@/assets/img/test.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

.encuestas h1{
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.encuestas h1:after{
  left: 50%;
    content: '';
    position: absolute;
    display: inline-block;
    margin-left: -50px;
    height: 1em;
    width: 100px;
    border-bottom: 4px #e10713 solid;
    margin-top: 14px;
}

.encuestas .cover-encuestas{
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
.encuestas [type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
.encuestas [type="radio"]:checked + label:before,
.encuestas [type="radio"]:not(:checked) + label:before {
    content: '';
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
    content: '';
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

.encuestas .slick-dots li button{
  background-color: white;
  width: 60px !important;
  border-radius: 20px;
}

.encuestas .slick-dots li button:hover{
  background-color: #e10713;
}

.encuestas .slick-dots .slick-active button{
  background-color: #e10713;
}

.encuestas .slick-dots li button:before{
  width: 60px !important;
  color: transparent !important;
}

.encuestas .slick-dots li{
  width: 60px;
}

.btn-votar{
  margin-bottom: 4rem; padding-left: 25px; padding-right: 25px; border-radius: 0; background-color: #e10713;
}

</style>