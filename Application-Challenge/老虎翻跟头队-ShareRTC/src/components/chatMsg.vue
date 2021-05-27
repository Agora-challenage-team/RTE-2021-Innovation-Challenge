<template>
  <el-card class="chat_el_card">
    <h1 class="title">
      <i class="el-icon-s-custom" @click="showCustom"><b>联系人</b></i>
      <b>信息面板</b>
    </h1>

    <div class="showMsg">
      <ul class="todayMsg">
        <li>今天</li>
        <li>
          <img src="" alt="" />
          <div class="chat_box">
            <div class="chat_box_top">
              <div class="chat_name">联系人</div>
              <div class="chat_time">晚上20:46</div>
            </div>
            <div class="chat_content">你好，在吗？</div>
          </div>
        </li>
        <li>
          <img src="" alt="" />
          <div class="chat_box">
            <div class="chat_box_top">
              <div class="chat_name">联系人</div>
              <div class="chat_time">晚上20:46</div>
            </div>
            <div class="chat_content">你好，在吗？</div>
          </div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="chat_box">
            <div class="chat_box_top">
              <div class="chat_name">联系人</div>
              <div class="chat_time">晚上20:46</div>
            </div>
            <div class="chat_content">你好，在吗？</div>
          </div>
        </li>
      </ul>

      <ul class="earlierMsg">
        <li>更早时间</li>
        <li>
          <img src="" alt="" />
          <div class="chat_box">
            <div class="chat_box_top">
              <div class="chat_name">联系人</div>
              <div class="chat_time">晚上20:46</div>
            </div>
            <div class="chat_content">你好，在吗？</div>
          </div>
        </li>
        <li>
          <img src="" alt="" />
          <div class="chat_box">
            <div class="chat_box_top">
              <div class="chat_name">联系人</div>
              <div class="chat_time">晚上20:46</div>
            </div>
            <div class="chat_content">你好，在吗？</div>
          </div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="chat_box">
            <div class="chat_box_top">
              <div class="chat_name">联系人</div>
              <div class="chat_time">晚上20:46</div>
            </div>
            <div class="chat_content">你好，在吗？</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="showFriend" ref="showFriend">
      <div class="hidFriend" @click="hideCustom">收 起</div>
      <p>联系人</p>
      <ul class="friendMsg">
        <li>
          <img src="" alt="" />
          <div class="name">联系人1</div>
        </li>
        <li>
          <img src="" alt="" />
          <div class="name">联系人2</div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="name">联系人3</div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="name">联系人3</div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="name">联系人3</div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="name">联系人3</div>
        </li>

        <li>
          <img src="" alt="" />
          <div class="name">联系人3</div>
        </li>
      </ul>
    </div>

    <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="请输入搜索词" />
    </div>
  </el-card>
</template>

<script>
export default {
  name: "chatMsg",
  methods: {
    showCustom() {
      this.$refs.showFriend.style.left = 5 + "px";
      this.$refs.showFriend.style.transition = "800ms";
    },
    hideCustom() {
      this.$refs.showFriend.style.left = "-" + 100 + "%";
      this.$refs.showFriend.style.transition = "800ms";
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.title {
  margin-top: -5x;
}

.title i {
  position: absolute;
  top: 7%;
  left: 5%;
  cursor: pointer;
  font-size: 30px;
}

.title i:hover {
  color: #757bce;
}

.title i b {
  font-size: 15px;
  vertical-align: 30%;
}

.chat_el_card {
  width: 700px;
  height: 605px;
  margin-left: 50px;
  margin-right: -20px;
  position: relative;
}

.showMsg {
  width: 100%;
  margin: 0 auto;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.showMsg::-webkit-scrollbar {
  width: 8px;
}

.showMsg::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.showMsg::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #ddd;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
}

.showMsg .todayMsg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  padding-left: 0;
}

.showMsg .earlierMsg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
  padding-left: 0;
}

.showMsg li {
  width: 90%;
  margin-bottom: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  cursor: pointer;
  transition: 100ms;
  position: relative;
}

.showMsg li:not(:first-child)::after {
  content: "标记已读";
  width: 20%;
  height: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  line-height: 32px;
  opacity: 0.8;
  background: #757bce;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #fff;
  visibility: hidden;
  font-size: 13px;
}

.showMsg li:hover {
  background: #ccc;
}

.showMsg li:hover::after {
  visibility: visible;
}

.showMsg li img {
  width: 45px;
  height: 45px;
  border: 1px solid #000;
  border-radius: 50%;
  overflow: hidden;
}

.showMsg li .chat_box {
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.showMsg li .chat_box_top {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.showMsg li .chat_box_top .chat_name {
  font-size: 17px;
  font-weight: 1000;
}

.showMsg li .chat_box_top .chat_time {
  color: rgb(121, 117, 117);
}

.showMsg li .chat_box .chat_content {
  text-align: left;
  margin-top: 4px;
  font-size: 15px;
}

.showMsg li:first-child {
  text-align: left;
  font-size: 18px;
  font-weight: 800;
  height: auto;
}

.showMsg li:first-child:hover {
  background: #fff;
}

/*通讯录*/
.showFriend {
  width: 97%;
  height: 505px;
  position: absolute;
  left: -100%;
  top: 40px;
  background: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: rgb(167, 205, 240);
}

.showFriend .hidFriend {
  width: 80px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 12px;
  background: #757bce;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  line-height: 40px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}

.showFriend .hidFriend:hover {
  box-shadow: 2px 2px 8px rgb(248, 238, 238);
}

.showFriend p {
  text-align: center;
  font-weight: 1000;
  font-size: 25px;
  margin-top: 10px;
}

.showFriend .friendMsg {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 82%;
  margin-left: -10%;
}

.friendMsg::-webkit-scrollbar {
  width: 8px;
}

.friendMsg::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.friendMsg::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #ddd;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
}

.showFriend li {
  margin: 10px;
  text-align: left;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 8px rgb(247, 237, 237);
  border-radius: 10px;
  cursor: pointer;
}

.showFriend li:hover {
  background: #757bce;
  color: #fff;
}

.showFriend li img {
  width: 45px;
  height: 45px;
  border: 1px solid #000;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

/*搜索框 */
.search {
  position: relative;
  width: 100%;
  margin-top: 25px;
}

.search i {
  font-size: 18px;
  position: absolute;
  left: 17px;
  top: 8px;
}

.search input {
  outline: none;
  border: 2px solid rgb(90, 83, 83);
  width: 85%;
  padding: 8px;
  padding-left: 30px;
  border-radius: 10px;
}
</style>
