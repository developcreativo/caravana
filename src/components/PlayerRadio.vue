<template>
  <div>
    <div class="container">
      <div class="row align-items-center full-height">
        <div class="col-12">
          <h1 class="text-center main-text">
            ESCÚCHANOS
            <span class="red-text">EN VIVO</span> AHORA
          </h1>
          <p class="text-center" v-if="type == 'caravana'" v-on:click.prevent="playing = !playing">
            <img
              src="@/assets/webAdminRadio/img/play_RC.png"
              alt
              style="width: 120px;"
              v-if="!playing"
            />

             <img
                v-else
              src="@/assets/webAdminRadio/img/pause_radiocaravana.png"
              alt
              style="width: 120px;"
             
            />
            <audio
              :loop="innerLoop"
              ref="audiofile"
              :src="file"
              preload="auto"
              style="display: none;"
            ></audio>
            
          </p>



          <p class="text-center" v-if="type == 'diblu'" v-on:click.prevent="playing = !playing">
            <img
              src="@/assets/webAdminRadio/img/play_diblu.png"
              alt
              style="width: 120px;"
              v-if="!playing"
            />

             <img
                v-else
              src="@/assets/webAdminRadio/img/pause_diblu.png"
              alt
              style="width: 120px;"
             
            />
            <audio
              :loop="innerLoop"
              ref="audiofile"
              :src="file"
              preload="auto"
              style="display: none;"
            ></audio>
            
          </p>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//Component por Kelly Salazar
export default {
  props: {
    type: {
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