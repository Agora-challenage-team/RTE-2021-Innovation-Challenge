<template>
  <el-card class="init_el_card">
    <h1 style="font-size: 50px">
      <div class="word-jump" aria-hidden="true">
        <b class="letter">欢</b>
        <b class="letter">迎</b>
        <b class="letter">体</b>
        <b class="letter">验</b>
        <b class="letter">W</b>
        <b class="letter">E</b>
        <b class="letter">B</b>
        <b class="letter">R</b>
        <b class="letter">T</b>
        <b class="letter">C</b>
        <b class="letter">视</b>
        <b class="letter">频</b>
        <b class="letter">会</b>
        <b class="letter">议</b>
        <div class="dot-container">
          <b class="dot"></b>
        </div>
      </div>
    </h1>

    <div class="logReg" @click="openLog">登录 / 注册</div>
    <p class="tip">还不赶快登陆体验一下吗?</p>
    <div class="img_container">
      <img style="height: auto; width: 300px" src="../assets/vide-call.svg" />
      <img
        style="height: auto; width: 300px; margin-top: 100px"
        src="../assets/video-share.svg"
      />
      <img style="height: auto; width: 300px" src="../assets/video-conference.svg" />
    </div>

    <logReg v-show="isShow" />
  </el-card>
</template>

<script>
import logReg from "@/components/logReg.vue";
export default {
  name: "initMsg",
  components: {
    logReg,
  },
  data() {
    return {
      // msg: "欢迎接入webRTC视频会议",
      isShow: false,
    };
  },
  methods: {
    openLog() {
      this.isShow = true;
    },
    closeLog() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
  font-weight: 800px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.init_el_card {
  width: 1200px;
  height: 605px;
  margin-left: 50px;
  position: relative;
}

.logReg {
  width: 150px;
  height: 60px;
  background: rgb(99, 99, 221);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(58, 54, 54);
}

.logReg:hover {
  box-shadow: 0 0 20px rgb(31, 26, 26);
}

.tip {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  font-size: 15px;
}

.img_container {
  margin-top: 100px;
}

/*文字跳动*/

.word-jump {
  position: relative;
  display: inline-flex;
  justify-content: center;
  padding-bottom: 5px;
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  cursor: default;
}

.letter {
  display: inline-block;
  font-size: 40px;
  color: #1a1a1a;
}

.dot-container {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: translate(102%, -14px);
}

.dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  -webkit-animation: rainbow 2s linear infinite;
  animation: rainbow 2s linear infinite;
}

body:hover .letter {
  -webkit-animation: jump 0.7s cubic-bezier(0.56, 0.01, 0, 1);
  animation: jump 0.7s cubic-bezier(0.56, 0.01, 0, 1);
}
body:hover .dot-container {
  -webkit-animation: punctuation-pan 2s cubic-bezier(0.47, 0, 0.745, 0.715);
  animation: punctuation-pan 2s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.word-jump .letter:nth-child(1) {
  -webkit-animation-delay: 0.075s;
  animation-delay: 0.075s;
}

.word-jump .letter:nth-child(2) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}

.word-jump .letter:nth-child(3) {
  -webkit-animation-delay: 0.225s;
  animation-delay: 0.225s;
}

.word-jump .letter:nth-child(4) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.word-jump .letter:nth-child(5) {
  -webkit-animation-delay: 0.375s;
  animation-delay: 0.375s;
}

.word-jump .letter:nth-child(6) {
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
}

.word-jump .letter:nth-child(7) {
  -webkit-animation-delay: 0.525s;
  animation-delay: 0.525s;
}

.word-jump .letter:nth-child(8) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.word-jump .letter:nth-child(9) {
  -webkit-animation-delay: 0.675s;
  animation-delay: 0.675s;
}

.word-jump .letter:nth-child(10) {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}

.word-jump .letter:nth-child(11) {
  -webkit-animation-delay: 0.825s;
  animation-delay: 0.825s;
}

.word-jump .letter:nth-child(12) {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.word-jump .letter:nth-child(13) {
  -webkit-animation-delay: 0.975s;
  animation-delay: 0.975s;
}

.word-jump .letter:nth-child(14) {
  -webkit-animation-delay: 1.05s;
  animation-delay: 1.05s;
}

@-webkit-keyframes jump {
  50% {
    transform: translateY(-60px) skewX(2deg) skewY(10deg);
    color: #ff66ff;
  }
  100% {
    transform: translateY(0) skewX(0) skewY(0);
    color: #1a1a1a;
  }
}

@keyframes jump {
  50% {
    transform: translateY(-60px) skewX(2deg) skewY(10deg);
    color: #ff66ff;
  }
  100% {
    transform: translateY(0) skewX(0) skewY(0);
    color: #1a1a1a;
  }
}
@-webkit-keyframes punctuation-pan {
  0% {
    transform: translate(0, 0);
  }
  60%,
  70% {
    transform: translate(102%, 0);
  }
  100% {
    transform: translate(102%, -14px);
  }
}
@keyframes punctuation-pan {
  0% {
    transform: translate(0, 0);
  }
  60%,
  70% {
    transform: translate(102%, 0);
  }
  100% {
    transform: translate(102%, -14px);
  }
}
@-webkit-keyframes rainbow {
  100%,
  0% {
    background-color: red;
  }
  8% {
    background-color: #ff7f00;
  }
  16% {
    background-color: yellow;
  }
  25% {
    background-color: chartreuse;
  }
  33% {
    background-color: lime;
  }
  41% {
    background-color: springgreen;
  }
  50% {
    background-color: aqua;
  }
  58% {
    background-color: #007fff;
  }
  66% {
    background-color: blue;
  }
  75% {
    background-color: #7f00ff;
  }
  83% {
    background-color: fuchsia;
  }
  91% {
    background-color: #ff007f;
  }
}
@keyframes rainbow {
  100%,
  0% {
    background-color: red;
  }
  8% {
    background-color: #ff7f00;
  }
  16% {
    background-color: yellow;
  }
  25% {
    background-color: chartreuse;
  }
  33% {
    background-color: lime;
  }
  41% {
    background-color: springgreen;
  }
  50% {
    background-color: aqua;
  }
  58% {
    background-color: #007fff;
  }
  66% {
    background-color: blue;
  }
  75% {
    background-color: #7f00ff;
  }
  83% {
    background-color: fuchsia;
  }
  91% {
    background-color: #ff007f;
  }
}
</style>
