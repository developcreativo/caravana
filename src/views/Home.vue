<template>

  

  <div id="home-view">
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
            @click="getEmisoraSegmentosToday(14, 'oh_conde')"
            src="@/assets/img/boton_ohconde.png"
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
      </ul>
    </div>
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
                  <h1 class="text-center text-green"><i class="fa fa-facebook" aria-hidden="true"></i></h1>
                </div>
                <div class="col-md-2">
                  <h1 class="text-center text-green"><i class="fa fa-instagram" aria-hidden="true"></i></h1>
                </div>
                <div class="col-md-2">
                  <h1 class="text-center text-green"><i class="fa fa-twitter" aria-hidden="true"></i></h1>
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
            <div class="col-md-3" v-for="(segmento, index) in segmentos" :key="index">
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
            </div>
          </div>
        </div>
      </section>

      <section class="transmissions">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center">Transmisiones</h1>
            </div>
          </div>

          <div class="row carousel">
            <div class="col-md-4">
              <div style="background-image: url('img/1.png');" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">Copa América</h3>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">21/06/2019 - 13:00 - Cuencua</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div style="background-image: url('img/1.png');" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">Copa América</h3>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">21/06/2019 - 13:00 - Cuencua</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div style="background-image: url('img/1.png');" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">Copa América</h3>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">21/06/2019 - 13:00 - Cuencua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="follow-us">
        <div class="cover">
          <div class="container">
            <div class="row align-items-center full-height">
              <div class="col-12">
                <h1 class="text-center text-white">SÍGUENOS</h1>
              </div>
              <div class="col-12" style="margin-top: -8rem;">
                <div class="row">
                  <div class="col-md-4">
                    <h3 class="text-center text-green">Facebook</h3>
                  </div>
                  <div class="col-md-4">
                    <h3 class="text-center text-green">Instagram</h3>
                  </div>
                  <div class="col-md-4">
                    <h3 class="text-center text-green">Twitter</h3>
                  </div>
                </div>
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

    <template v-if="langing_oh_conde">
      <div id="ohconde">
      <section class="hero">
        <div class="cover"></div>
      </section>

      <section class="schedule">
        <div class="container">
          <div class="row align-items-center full-height">
            <div class="col-12">
              <img
                src="@/assets/img/2-1400x445.png"
                class="full-image"
                alt
                style="margin-top: -20%; z-index: 99;"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="row align-items-center item-schedule" v-for="(segmento, index) in segmentos" :key="index">
                <div class="col-4">
                  <img :style="{ 'background-image': 'url(' + segmento.imagen + ')' }" class="full-image" alt />
                </div>
                <div class="col-8">
                  <h5
                    class="text-center text-white"
                  >{{ segmento.nombre }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="follow-us">
        <div class="cover">
          <div class="container">
            <div class="row align-items-center full-height">
              <div class="col-12">
                <h1 class="text-center text-white">SÍGUENOS</h1>
              </div>
              <div class="col-12" style="margin-top: -8rem;">
                <div class="row">
                  <div class="col-md-4">
                    <h3 class="text-center text-orange">Facebook</h3>
                  </div>
                  <div class="col-md-4">
                    <h3 class="text-center text-orange">Instagram</h3>
                  </div>
                  <div class="col-md-4">
                    <h3 class="text-center text-orange">Twitter</h3>
                  </div>
                </div>
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
            </div>
          </div>

          <div class="row carousel">
            <div class="col-md-4">
              <div style="background-image: url('img/1.png');" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">Copa América</h3>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">21/06/2019 - 13:00 - Cuencua</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div style="background-image: url('img/1.png');" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">Copa América</h3>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">21/06/2019 - 13:00 - Cuencua</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div style="background-image: url('img/1.png');" class="bg-image">
                <div class="green-box">
                  <h3 class="text-white">Copa América</h3>
                </div>
                <div class="blue-box">
                  <p class="text-center text-white">21/06/2019 - 13:00 - Cuencua</p>
                </div>
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
import { mapActions, mapState } from "vuex";
import api from "../api/session";
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "home",
  components: {
    'carousel': Carousel,
    'slide': Slide
  },
  data() {
    return {
      slickOptions: {
                slidesToShow: 6,
                // Any other options that can be got from plugin documentation
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
      type: 'diblu',
    };
  },
  mounted() {
    this.getEmisoraSegmentosToday(13, this.type);
    this.getAllEquipos()
  },
  methods: {
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
        this.landing_diblu = true
        this.landing_caravana = false
        this.langing_oh_conde = false
      }

       if(type == 'caravana') {
        this.landing_caravana = true
        this.landing_diblu = false
        this.langing_oh_conde = false
      }
      if(type == 'oh_conde') {
        this.langing_oh_conde = true
        this.landing_caravana = false
        this.landing_diblu = false
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
</style>