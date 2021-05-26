<template>
  <el-container>
    <div class="left">
      <div class="avactor" :class="showStatus ? 'login' : 'logout'">
        <img src="" alt="" />
        <div class="username">taptaq</div>
        <div class="status">
          <span v-show="showStatus">在线</span>
          <span v-show="!showStatus">掉线</span>
        </div>
      </div>

      <div class="left_menu">
        <router-link
          tag="div"
          to="/mainMsg"
          class="mainMsg"
          @mouseenter.native="handleToShow"
          @mouseleave.native="handleToHid"
        >
          <i class="el-icon-house"></i>
          <span class="home">主界面</span>
        </router-link>

        <router-link
          tag="div"
          to="/userMsg"
          class="userMsg"
          @mouseenter.native="handleToShow"
          @mouseleave.native="handleToHid"
        >
          <i class="el-icon-user-solid"></i>
          <span>个人信息</span>
        </router-link>

        <div
          class="chatMsg"
          @mouseenter="handleToShow"
          @mouseleave="handleToHid"
          @click="showChatMsg"
        >
          <i class="el-icon-chat-dot-round"></i>
          <span>聊天消息</span>
        </div>

        <router-link
          tag="div"
          to="/videoMeeting"
          class="video_Meeting"
          @mouseenter.native="handleToShow"
          @mouseleave.native="handleToHid"
        >
          <i class="el-icon-video-camera"></i>
          <span>视频会议</span>
        </router-link>
      </div>
    </div>

    <chatMsg v-show="showChat" />

    <!-- 分隔符  -->
    <router-view />
  </el-container>
</template>

<script>
import chatMsg from "@/components/chatMsg.vue";
export default {
  name: "layout",
  components: {
    chatMsg,
  },
  data() {
    return {
      // msg: "欢迎接入webRTC视频会议",
      height: "", // 浏览器高度
      showStatus: false,
      showChat: false,
    };
  },
  // 初始化函数
  created() {
    this.height = document.documentElement.clientHeight;
    // console.log(this.height)
  },
  methods: {
    handleToShow(e) {
      e.target.children[1].style.visibility = "visible";
    },
    handleToHid(e) {
      e.target.children[1].style.visibility = "hidden";
    },
    showChatMsg() {
      this.showChat = !this.showChat;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*自定义样式*/
.left {
  width: 80px;
  height: auto;
  /*border: 1px solid black*/
}

.avactor {
  position: absolute;
  left: 20px;
  top: 0;
  width: 80px;
  height: 100px;
  background: #fff;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  padding: 10px 0;
}

.avactor.login {
  box-shadow: 0 0 20px rgb(177, 238, 9);
}

.avactor.logout {
  box-shadow: 0 0 20px #000;
}

.avactor img {
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
  overflow: hidden;
}

.avactor .username {
  font-weight: bold;
}

.left_menu {
  position: relative;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 999;
}

.left_menu div {
  width: 3rem;
  height: 3rem;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0 0 0.5rem rgb(58, 54, 54);
  border-radius: 50%;
  margin: 0.625rem 0;
  text-align: center;
  line-height: 3.5rem;
  cursor: pointer;
  position: relative;
}

.left_menu div span {
  display: block;
  position: absolute;
  right: -100px;
  top: 5px;
  background: rgba(0, 0, 0, 0.5);
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  text-align: center;
  line-height: 40px;
  visibility: hidden;
  z-index: 999;
}

.left_menu div .home {
  position: absolute;
  right: -80px;
  top: 5px;
}

.left_menu div i {
  display: inline-block;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
}

.left_menu div:hover {
  background: rgb(99, 99, 221);
  color: #fff;
  font-weight: 800;
  animation: twinkle 1.2s ease-in-out infinite;
}

@keyframes twinkle {
  25% {
    box-shadow: 0 0 1rem rgb(62, 14, 139);
  }
  50% {
    box-shadow: 0 0 1.5rem rgb(197, 173, 173);
  }
  100% {
    box-shadow: 0 0 0.5rem rgb(58, 54, 54);
  }
}

.hide_chat /deep/.el-card_body {
  width: 10%;
}

/*侧边栏样式*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 80px;
  /*min-height: 400px;*/
  min-height: 634px;
  border-radius: 1rem;
}

/*  分割线*/
h1,
h2 {
  font-weight: normal;
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
</style>
