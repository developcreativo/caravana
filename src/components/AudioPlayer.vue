<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-2">
              <img
                src="@/assets/img/play_grabaciones.png"
                alt
                style="width: 100%;"
                v-on:click.prevent="playing = !playing"
              />
              <audio :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display: none;"></audio>
            </div>
            <div class="col-8">
              <h4>{{ nombre }}</h4>
              <div v-on:click="seek" class="progress" style="height: 2px; margin-bottom: 5px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: this.percentComplete + '%' }"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p style="float: left; margin-top: 5px; margin-bottom: 0">{{ descripcion }}</p>
              <p style="float: right; margin-bottom: 0">{{ this.durationSeconds | convertTimeHHMMSS }} / {{ this.currentSeconds | convertTimeHHMMSS }}</p>
            </div>
            <div class="col-2" style="padding-top: 2rem;">
              <a v-on:click.prevent="download" href="#">
                <i class="fa fa-download"></i>
              </a>
              <!--<a href="#" style="margin-left: 10px;">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
//Component por Kelly Salazar
export default {
  props: {
      nombre: {
            type: String,
            default: null
      },
       descripcion: {
            type: String,
            default: null
      },
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    innerLoop: false,
    loaded: false,
    playing: false,
    previousVolume: 35,
    showVolume: false,
    volume: 100
  }),
  computed: {
    percentComplete() {
      return parseInt((this.currentSeconds / this.durationSeconds) * 100);
    },
    muted() {
      return this.volume / 100 === 0;
    }
  },
  filters: {
    convertTimeHHMMSS(val) {
      let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

      return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
    }
  },
  watch: {
    playing(value) {
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    volume(value) {
      this.showVolume = false;
      this.audio.volume = this.volume / 100;
    }
  },

  methods: {
    download() {
      this.stop();
      window.open(this.file, "download");
    },
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        return (this.playing = this.autoPlay);
      }

      throw new Error("Failed to load sound file.");
    },
    mute() {
      if (this.muted) {
        return (this.volume = this.previousVolume);
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek(e) {
      if (!this.playing || e.target.tagName === "SPAN") {
        return;
      }

      const el = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - el.left) / el.width;

      this.audio.currentTime = parseInt(this.audio.duration * seekPos);
    },
    stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    update(e) {
      this.currentSeconds = parseInt(this.audio.currentTime);
    }
  },
  created() {
    this.innerLoop = this.loop;
  },
  mounted() {
    this.audio = this.$el.querySelectorAll("audio")[0];
    this.audio.addEventListener("timeupdate", this.update);
    this.audio.addEventListener("loadeddata", this.load);
    this.audio.addEventListener("pause", () => {
      this.playing = false;
    });
    this.audio.addEventListener("play", () => {
      this.playing = true;
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");
body {
  font-family: "Nunito", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.player-wrapper {
  align-items: center;
  background-color: #fff;
  background-image: linear-gradient(90deg, #fff 0, #e0e0e0);
  display: flex;
  height: 100vh;
  justify-content: center;
}

.player {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  color: #404040;
  display: inline-block;
  line-height: 1.5625;
}

.player-controls {
  display: flex;
}
.player-controls > div {
  border-right: 1px solid #e0e0e0;
}
.player-controls > div:last-child {
  border-right: none;
}
.player-controls > div a {
  color: #404040;
  display: block;
  line-height: 0;
  padding: 1em;
  text-decoration: none;
}

.player-progress {
  background-color: #e0e0e0;
  cursor: pointer;
  height: 50%;
  min-width: 200px;
  position: relative;
}
.player-progress .player-seeker {
  background-color: #404040;
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
}

.player-time {
  display: flex;
  justify-content: space-between;
}
.player-time .player-time-current {
  font-weight: 700;
  padding-left: 5px;
}
.player-time .player-time-total {
  opacity: 0.5;
  padding-right: 5px;
}
</style>