<template>
  <el-card class="video_el_card">
    <h1 style="font-size: 50px">
      <b>视频会议</b>
    </h1>

    <div class="video_container">
      <div class="create_meeting">
        <i class="el-icon-video-camera"></i>
        <span>创建会议</span>
      </div>
      <div class="add_meeting">
        <i class="el-icon-circle-plus-outline"></i>
        <span>加入会议</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "videoMeeting",
};
</script>

<style scoped>
h1,
h2 {
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

.video_el_card {
  width: 1200px;
  height: 605px;
  margin-left: 50px;
}

.meeting_img {
  height: auto;
  width: 300px;
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
}

.meeting_other_img {
  height: auto;
  width: 300px;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}

.video_container {
  width: 350px;
  height: 200px;
  margin: auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.video_container div {
  background: rgb(99, 99, 221);
  width: 100%;
  height: 50%;
  line-height: 100px;
  margin: 10px;
  cursor: pointer;
  font-size: 25px;
  color: #fff;
  font-weight: 800;
  border-radius: 10px;
  position: relative;
}

.video_container div:hover {
  box-shadow: 0 0 5px rgb(58, 54, 54);
  transform: scale(1.1);
}

.video_container div i {
  font-size: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
}

.video_container div span {
  margin-left: 55px;
}
</style>
