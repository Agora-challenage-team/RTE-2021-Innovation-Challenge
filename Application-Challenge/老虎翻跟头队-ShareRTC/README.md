# ShareRTC项目
首先，明确一点：本项目是有两部分项目，
分别是自己构建的vue项目和基于Agora Web Live SDK构建的webRTC的demo项目

分别位于主目录ShareRTC和主目录下的OpenLive-Web子目录下👉

下面我们将对项目依赖进行安装并运行：
## 步骤
#### 一、查看webRTC的演示demo
首先需要接入声网的SDK，也就是配置根目录下的.env文件
```yaml
REACT_APP_AGORA_APP_ID=你的appID
REACT_APP_AGORA_APP_TOKEN=你的app-token
```
试用期是24小时(可以使用我的配置，但不保证我的appID与app-token是否过期)

默认加入的房间号是：`deepisea`

下面运行项目：
``` bash
# 切换到OpenLive-Web目录
cd OpenLive-Web

# 安装依赖
npm install

# 运行
npm run dev
```
运行完成之后，打开 http://localhost:3000 查看运行效果
#### 二、运行本项目 🚀
切换回主目录，进行主项目的安装与运行
```bash
# 切换回根目录
cd ../

# 安装依赖
npm install

# 运行
npm run dev
```
打开浏览器 http://localhost:8080 ，查看运行效果

#### 三、项目开发
项目的框架的构建完毕，可以进行功能模块的开发了。项目的功能<br>
对标Google metting和飞书会议，另外本项目以及安装了 elementUI 框架的包，
需要引入在 App.vue 中全局引入即可.

本项目暂时没有与Java后端对接，目前基于Agora SDK的功能可以不
考虑后端的引入，如果要加的话再配合跨域即可.

#### 四、存在的问题
目前声网的webRTC直播示例项目配置了turn服务，
将项目部署到服务器或内网穿透可以达到直播效果.
但是，示例项目存在移动端适配问题(或浏览器版本兼容问题？)
以及屏幕共享的功能实现有问题.

#### 五、解决问题
通过修改OpenLive-Web目录下Node.js项目的环境变量.env文件，
添加`SKIP_PREFLIGHT_CHECK=true`的配置来禁用React运行前的与检查，
解决了根目录下vue的检查引擎与子目录下react的检查引擎不兼容的问题.
也就是说，可以只开启根目录下的检查引擎，同时保险起见可以在根目录下的
.eslintignore文件中添加忽略的子目录`/OpenLive-Web/`
当然这里是检查引擎的依赖冲突，所以这样操作不解决问题.
因此，通过打开启动设置的`Allow parallel run`(允许并行运行)开关，
可以实现两个项目同时运行.


#### 目前进度
* 目前正在实现左边的侧边栏功能样式
* 接下来就是右边视频会议主题功能，接入声网SDK
* 基本功能确定了一下，分别是：
* 左侧：用户头像、消息、创建会议、加入会议以及注销登录
* 右侧：视频直播主题区域（先登录注册，再进入到视频直播），
直播下方有麦克风、挂断以及打开摄像头的功能.
* 目前急需完成登录注册功能，然后是将直播功能(可用)集成到系统中
* ......
