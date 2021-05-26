<template>
  <el-card class="chat_el_card">
    <h1>
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

    <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="请输入搜索词" />
    </div>
  </el-card>
</template>

<script>
export default {
  name: "chatMsg",
};
</script>

<style scoped>
.chat_el_card {
  width: 700px;
  height: 605px;
  margin-left: 50px;
  margin-right: -20px;
}

.showMsg {
  width: 100%;
  margin: 0 auto;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
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
}

.showMsg li:hover {
  background: #ccc;
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

.search {
  position: relative;
  width: 100%;
  margin-top: 25px;
}

.search i {
  font-size: 18px;
  position: absolute;
  left: 20px;
  top: 9px;
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
