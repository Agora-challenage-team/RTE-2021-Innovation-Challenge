<template>
  <el-card class="user_el_card">
    <h1 style="font-size: 50px">
      <b>账号信息</b>
    </h1>
    <div class="user_msg">
      <div class="avactor">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="modified_avactor">修改个人头像</div>
      <ul class="base_msg">
        <li>基本信息</li>
        <li>
          <el-form
            class="el_form"
            :label-position="labelPosition"
            label-width="150px"
            :model="formLabelAlign"
          >
            <el-form-item label="用户名">
              <el-input v-model="formLabelAlign.name" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_username_block">
                <input
                  v-model="formLabelAlign.name"
                  placeholder="请输入用户名"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="formLabelAlign.birth" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_time_block">
                <input
                  v-model="formLabelAlign.birth"
                  placeholder="请输入出生年月"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
            <el-form-item label="地区">
              <el-input v-model="formLabelAlign.origin" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_origin_block">
                <input
                  v-model="formLabelAlign.origin"
                  placeholder="请输入地区"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
            <el-form-item label="爱好">
              <el-input
                v-model="formLabelAlign.hobbies"
                :disabled="isdisabled"
              ></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_hobbies_block">
                <input
                  v-model="formLabelAlign.hobbies"
                  placeholder="请输入爱好"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
          </el-form>
        </li>
      </ul>

      <ul class="base_msg">
        <li>账号绑定</li>
        <li>
          <el-form
            class="el_form"
            :label-position="labelPosition"
            label-width="150px"
            :model="formLabelAlign"
          >
            <el-form-item label="邮箱绑定">
              <el-input v-model="formLabelAlign.email" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_email_block">
                <input
                  v-model="formLabelAlign.email"
                  placeholder="请输入邮箱号"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
            <el-form-item label="手机号绑定">
              <el-input v-model="formLabelAlign.phone" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_phone_block">
                <input
                  v-model="formLabelAlign.phone"
                  placeholder="请输入手机号"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
            <el-form-item label="微信绑定">
              <el-input v-model="formLabelAlign.wechat" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_wechat_block">
                <input
                  v-model="formLabelAlign.wechat"
                  placeholder="请输入微信号"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
            <el-form-item label="QQ绑定">
              <el-input v-model="formLabelAlign.QQ" :disabled="isdisabled"></el-input>
              <div class="modified_base" @click="modified">修改</div>
              <div class="modi_block modi_QQ_block">
                <input
                  v-model="formLabelAlign.QQ"
                  placeholder="请输入QQ号"
                  class="modi_input"
                />
                <div class="confirm" @click="confirm_modi">确定</div>
              </div>
            </el-form-item>
          </el-form>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "userMsg",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "ckx",
        birth: "2000/02/05",
        origin: "广东江门",
        hobbies: "唱歌，打羽毛球",
        email: "2902716634@qq.com",
        phone: "15917803619",
        wechat: "15917803619",
        QQ: "2902716634",
      },
      isdisabled: true,
      birth_value: "",
      modi_msg: "",
    };
  },
  methods: {
    modified(e) {
      this.ele = e.currentTarget.nextElementSibling;
      this.ele.style.visibility = "hidden";
      this.ele.style.visibility = "visible";
      this.ele.style.transition = "1s";
    },
    confirm_modi(e) {
      this.ele = e.currentTarget.parentElement;
      // console.log(this.ele);
      if (this.ele.classList.contains("modi_time_block")) {
        this.modi_msg = "确认修改出生年月？";
      } else if (this.ele.classList.contains("modi_username_block")) {
        this.modi_msg = "确认修改用户名？";
      } else if (this.ele.classList.contains("modi_origin_block")) {
        this.modi_msg = "确认修改地区名？";
      } else if (this.ele.classList.contains("modi_hobbies_block")) {
        this.modi_msg = "确认修改爱好？";
      } else if (this.ele.classList.contains("modi_email_block")) {
        this.modi_msg = "确认修改邮箱号？";
      } else if (this.ele.classList.contains("modi_phone_block")) {
        this.modi_msg = "确认修改手机号？";
      } else if (this.ele.classList.contains("modi_wechat_block")) {
        this.modi_msg = "确认修改微信号？";
      } else if (this.ele.classList.contains("modi_QQ_block")) {
        this.modi_msg = "确认修改QQ号？";
      }
      this.open();
      setTimeout(() => {
        this.ele.style.visibility = "hidden";
      }, 500);
    },
    open() {
      this.$confirm(this.modi_msg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-top: 10px;
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

.user_el_card {
  width: 1200px;
  height: 605px;
  margin-left: 50px;
  overflow: auto;
}

.user_el_card::-webkit-scrollbar {
  width: 8px;
}

.user_el_card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.user_el_card::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #ddd;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
}

.user_msg {
  width: 100%;
}

.avactor {
  width: 120px;
  height: 120px;
  border: 1px solid #000;
  margin: 10px auto;
  border-radius: 50%;
  position: relative;
  margin-bottom: 80px;
  overflow: hidden;
}

.avactor img {
  width: 100%;
  height: 100%;
}

.modified_avactor {
  width: 100px;
  height: 30px;
  border: 1px solid rgb(99, 99, 221);
  padding: 5px;
  border-radius: 10px;
  line-height: 30px;
  cursor: pointer;
  margin: auto;
  position: relative;
  top: -60px;
}

.modified_avactor:hover {
  background: rgb(99, 99, 221);
  color: #fff;
}

.base_msg {
  display: flex;
  flex-direction: column;
  margin-top: -5px;
  margin-left: -280px;
}

.base_msg li {
  margin-top: 10px;
}

.base_msg li:first-child {
  text-align: left;
  font-size: 25px;
  font-weight: 800;
  padding-left: 400px;
}

.base_msg li:last-child {
  margin-top: 20px;
  padding-left: 450px;
}

.el_form {
  width: 500px;
}

.el_form .el_form_item {
  position: relative;
}

.el_form .el-form-item .modified_base {
  position: absolute;
  right: -35px;
  top: 0;
  cursor: pointer;
  width: 45px;
  background: rgb(142, 142, 216);
  border-radius: 10px;
}

.el_form .el-form-item .modified_base:hover {
  background: rgb(99, 99, 221);
  color: #fff;
}

.el-input.is-disabled /deep/ .el-input__inner {
  color: #000;
}

.modi_block {
  position: absolute;
  right: -270px;
  top: 0;
  visibility: hidden;
}

.modi_input {
  width: 178px;
  height: 38px;
  outline: none;
  border: 1px solid rgb(220, 223, 230);
  padding: 0 30px;
  padding-left: 10px;
}

.confirm {
  position: absolute;
  right: -50px;
  top: 0;
  width: 50px;
  background: rgb(149, 149, 231);
  font-weight: 800;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.confirm:hover {
  color: #fff;
}
</style>
