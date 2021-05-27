<template>
  <el-container>
    <el-card class="main_el_card">
      <div id="fancyClock" ref="fancy">
        <div class="clock">
          <div class="display" id="hours">{{ hour }}</div>
        </div>
        <p class="clock_dot1">:</p>
        <div class="clock">
          <div class="display" id="minuts">{{ min }}</div>
        </div>
        <p class="clock_dot2">:</p>
        <div class="clock">
          <div class="display" id="seconds">{{ sec }}</div>
        </div>

        <div class="time_tag" ref="timeTag"></div>
        <span class="tagMsg">{{ tagMsg }}</span>
      </div>

      <img style="height: auto; width: 300px" src="../assets/vide-call.svg" />
      <img
        style="height: auto; width: 300px; margin-top: 100px"
        src="../assets/video-share.svg"
      />
    </el-card>
  </el-container>
</template>

<script>
export default {
  name: "mainMsg",
  data() {
    return {
      hour: "",
      min: "",
      sec: "",
      tagMsg: "加油，今天也是美好的一天~",
    };
  },
  mounted() {
    this.ui();
  },
  methods: {
    zero(n, top) {
      if (top === 59) {
        top = "00";
      }
      (n = parseInt(n, 10)), (top = top || "00");
      if (n > 0) {
        if (n <= 9) {
          n = "0" + n;
        }
        return String(n);
      } else {
        return top.toString();
      }
    },

    ui() {
      this.mytime = new Date();
      this.h = this.mytime.getHours();
      this.m = this.mytime.getMinutes();
      this.s = this.mytime.getSeconds();
      this.hour = this.zero(this.h);
      this.min = this.zero(this.m, 59);
      this.sec = this.zero(this.s, 59);
      // 日出
      if (this.h >= 5 && this.h <= 7) {
        this.$refs.timeTag.style.backgroundImage =
          "url(" + require("../assets/sunrise.svg") + ")";
        this.$refs.fancy.style.backgroundImage = "linear-gradient(#e64c10, #c7e61b)";
        this.tagMsg = "日出啦，早点起床看看这绝美的日出，开始新的一天吧~";
      }
      // 早上
      if (this.h > 7 && this.h <= 11) {
        this.$refs.timeTag.style.backgroundImage =
          "url(" + require("../assets/sun.svg") + ")";
        this.$refs.fancy.style.backgroundImage = "linear-gradient(#757bce, #4e55a0)";
        this.tagMsg = "早上好，吃完早餐活力满满，就开始今天的工作吧~";
      }
      // 下午
      if (this.h > 11 && this.h <= 17) {
        this.$refs.timeTag.style.backgroundImage =
          "url(" + require("../assets/afternoon.svg") + ")";
        this.$refs.timeTag.style.width = 200 + "px";
        this.$refs.timeTag.style.height = 200 + "px";
        this.$refs.fancy.style.backgroundImage = "linear-gradient(#757bce, #c7e61b)";
        this.tagMsg = "下午好，好好睡个午觉，下午继续完成工作吧~";
      }
      // 晚上
      if (this.h > 17) {
        this.$refs.timeTag.style.backgroundImage =
          "url(" + require("../assets/moon.svg") + ")";
        this.$refs.timeTag.style.transform = "scale(0.6)";
        this.$refs.timeTag.style.width = 200 + "px";
        this.$refs.timeTag.style.height = 200 + "px";
        this.$refs.fancy.style.backgroundImage = "linear-gradient(#0918f5, #242855)";
        this.tagMsg = "晚上好，夜已深，别忘了忙活太累了，注意休息哦~";
      }

      setTimeout(() => {
        this.ui();
      }, 1000);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  font-weight: normal;
  margin-top: 5px;
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

.main_el_card {
  width: 1200px;
  height: 605px;
  margin-left: 50px;
}

/*时钟特效*/
#fancyClock {
  margin: auto;
  height: 180px;
  background-color: rgb(168, 168, 219);
  width: 600px;
  border-radius: 20px;
  margin-top: 65px;
  position: relative;
}
.clock {
  /* 时钟div */
  height: 200px;
  width: 200px;
  position: relative;
  overflow: hidden;
  float: left;
}

.clock .display {
  /* 小时，分钟，秒钟的显示 */
  position: absolute;
  width: 200px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  z-index: 20;
  color: #f5f5f5;
  font-size: 60px;
  text-align: center;
  top: 55px;
  left: 0;
  /* CSS3 文字阴影 */
  text-shadow: 4px 4px 5px #333333;
}

.clock_dot1 {
  position: absolute;
  color: #f5f5f5;
  font-size: 60px;
  text-align: center;
  top: 3%;
  left: 30%;
  text-shadow: 4px 4px 5px #333333;
  width: 50px;
  z-index: 999;
}

.clock_dot2 {
  position: absolute;
  color: #f5f5f5;
  font-size: 60px;
  text-align: center;
  text-shadow: 4px 4px 5px #333333;
  width: 50px;
  top: 3%;
  left: 62%;
  z-index: 999;
}

.time_tag {
  position: absolute;
  top: -60%;
  left: -2%;
  height: 180px;
  width: 180px;
  background: url("../assets/moon.svg") no-repeat;
  z-index: 1000;
  transform: scale(0.8);
}

.tagMsg {
  font-weight: 800;
}
</style>
