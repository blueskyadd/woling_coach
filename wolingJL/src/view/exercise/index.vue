<template>
  <div class="exercise_router_page">
    <headerTitle :title="headerTitle" @showUpdata="showUpdata" :isUpload="isUpload"/>
    <div class="exprcise_main">
      <div class="exprcise_sidebar" v-if="isGrade">
        <div class="sidebar_title">
          <span @click="goexerciseCoach" :class="{'activeButton': routerIndex == 1}">教练</span>
          <span @click="goexerciseGrade" :class="{'activeButton': routerIndex == 2}">班级</span>
        </div>
        <ul v-if="routerIndex == 1" class="routerIndexOne">
          <li v-for="(item,index) in list " :key="index">
            <div class="list-item" data-type="0">
              <div @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip(item, index)" class="scrollButton">
                <div class="footballImg"><img src="../../assets/img/足球.png"></div>
                <div :class="{'active': index==setVideoIndex}">
                  <div><span>{{item.time}}</span></div>
                  <div><span>{{item.name}}</span></div>
                </div>
              </div>
              <div class="deleteButton"><i><img src="../../assets/img/删除.png" alt></i></div>
            </div>
          </li>
        </ul>
        <ul v-else class="routerIndexTwo">
          <li v-for="(item, index) in leftList" :key="index" @click="activeList(item, index)" :class="{'active': index==setIndex}">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="exprcise_sidebar" v-else>
        <div class="sidebar_title">
          <span @click="goexerciseCoach">{{StudentName}}</span>
        </div>
        <ul class="routerIndexOne">
          <li v-for="(item,index) in list " :key="index">
            <div class="list-item" data-type="0">
              <div @click="changeStatusVideoTitle(item, index)" class="scrollButton">
                <div class="footballImg">
                  <img src="../../assets/img/足球.png">
                </div>
                <div :class="{'active': index==setstudentVideoIndex}">
                  <div><span>{{item.date}}</span></div>
                  <div><span>{{item.name}}</span></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="exercise_rightVideo">
        <router-view :htmlUrl="htmlUrl"
          :setIndex="setIndex"
          :setVideoIndex="setVideoIndex"
          :videoUrl="videoUrl"
          @changeisGrade="changeisGrade"
          @changeStudentVideo="changeStudentVideo"
          ref="childObj"
          @changeTitle="changeTitle"
          @setVideoNameList="setVideoNameList"
        ></router-view>
      </div>
    </div>
    <div class="uploadVideo" v-if="isuploadVideo">
      <header>
        上传练习
        <span>
          <img src="../../assets/img/关闭(1).png" @click="isuploadVideo = false">
        </span>
      </header>
      <div class="upoloadMaian">
        <div>
          <span>练习名称:</span>
          <input placeholder="点击输入练习名称" type="text" v-model="courseName" readonly>
        </div>
        <div class="Time">
          <span>练习时间:</span>
          <mu-col span="12" lg="4" sm="6">
            <mu-date-input value-format format='yyyy—MM-dd' v-model="date" container="bottomSheet" label-float full-width></mu-date-input>
          </mu-col>
        </div>
        <div class="updata">
          <span>练习上传:</span>
          <img src="../../assets/img/上传拷贝.png" alt @click="changefile">
          <input type="file" accept="video/*"  @change="uploadfile" name="fileTrans" ref="file" value  mutiple="mutiple" capture="camera">上传</div>
      </div>
      <span class="submitButton" @click="uploadvideo">确定</span>
    </div>
  </div>
</template>
<script>
import headerTitle from "../../components/header";
import photo from "../../components/photo.js";
import store from "../../store/index";
import html2canvas from "html2canvas";
export default {
  name: "exercise",
  components: { headerTitle, html2canvas },
  data() {
    return {
      headerTitle: "练习",
      isGrade: true,
      date: "",
      videoUrl: "",
      htmlUrl: "",
      course: '',
      routerIndex: 1,
      startX: 0,
      file: '',
      startX: 0,
      endX: 0,
      setIndex: 0,
      setVideoIndex: 0,
      setstudentVideoIndex: 0,
      isuploadVideo: false,
      list: [],
      leftList: [],
      StudentName: "",
      isUpload: true, //是否显示上传按钮
      courseId: '',
      courseName: ''
    };
  },
  methods: {
    /**@name 子页面切换 */
    //不记录当前跳转路由，直接返回父级的上一层
    goexerciseCoach() {
      this.list = [];
      this.routerIndex = 1;
      this.isUpload = true;
      this.$router.replace("/exercise/exerciseCoach");
    },
    goexerciseGrade() {
      this.routerIndex = 2;
      this.isUpload = false;
      this.$router.replace("/exercise/exerciseGrade");
    },
    /**@name教练视频页面左滑删除 */
    //滑动开始
    touchStart(e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX;
    },
    //滑动结束
    touchEnd(e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.restSlide();
        parentElement.dataset.type = 1;
      }
      // 右滑
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this.restSlide();
        parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
    },
    //判断当前是否有滑块处于滑动状态还是点击状态
    skip(item, index) {
      if (this.checkSlide()) {
        this.restSlide();
      } else {
        console.log(item);
        this.setVideoIndex = index;
        this.courseId = item.id
        this.courseName = item.name
        this.$refs.childObj.getVideoListData(item);
      }
    },
    //判断当前是否有滑块处于滑动状态
    checkSlide() {
      let listItems = document.querySelectorAll(".list-item");
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type == 1) {
          return true;
        }
      }
      return false;
    },
    //复位滑动状态
    restSlide() {
      let listItems = document.querySelectorAll(".list-item");
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0;
      }
    },
    /**@name调用第三方plus模块上传视频 */
    //方法为实现，暂留保存
    uploadSuccess() {
      let url = this.updataVideoPic();

      alert(this.videoUrl);

      plus.io.resolveLocalFileSystemURL(
        url,
        function(entry) {
          // 可通过entry对象操作test.html文件
          entry.file(function(file) {
            var fileReader = new plus.io.FileReader();
            this.file = file;
            var blob = new Blob([file]);
            this.videoUrl = window.URL.createObjectURL(blob);
            // this.videoUrl = window.URL.createObjectURL( file);
            alert(this.videoUrl);
            this.toImage(file);
          });
        },
        function(e) {
          alert("Resolve file URL failed: " + e.message);
        }
      );

      photo.galleryVideo(this, dataparams, decideparams);
    },
    updataVideoPic() {
      console.log("开始选择图片");
      plus.gallery.pick(
        function(path) {
          // return path
          alert(path);
          plus.io.resolveLocalFileSystemURL(
            path,
            function(entry) {
              // 可通过entry对象操作test.html文件
              entry.file(function(file) {
                //    var fileReader = new plus.io.FileReader();
                console.log(file);
                // alert("getFile:" + JSON.stringify(file));
                // fileReader.readAsText(file, 'utf-8');
                // alert(fileReader)
                // console.log(fileReader)
                // alert(file.size + '--' + file.name);
              });
            },
            function(e) {
              alert("Resolve file URL failed: " + e.message);
            }
          );
          return path;
        },
        function(e) {
          console.log("取消选择图片");
        },
        { filter: "video" }
      );
    },
    // 视频元素转图片
    toImage(file) {
      html2canvas(file, {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        backgroundColor: null
      }).then(canvas => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url;
        alert("this.htmlUrl", this.htmlUrl); // 把生成的base64位图片上传到服务器,生成在线图片地址
      });
    },
    /**@name使用input上传视频 */
    changefile(){
        this.$refs.file.dispatchEvent(new MouseEvent('click'))
    },
    uploadfile(ev){
        // this.$toast.center("上传成功");
        this.file = ev.target.files[0]
        this.toImage(this.file )
    },
    uploadvideo() {
     if(!this.VerificationData()) return
      this.$loading('');
      let params = new FormData();
      params.append("file", this.file);
      params.append("course", this.courseId);
      params.append("date", '2019-06-12');
      this.$http.post(this.$conf.env.uploadvideo, params, true)
        .then(res => {
        this.$loading.close()
        this.$toast.center("提交成功");
          console.log(res);
        })
        .catch(err => {
            this.$loading.close()
            console.log(err.response.status == '400')
            if(err.response.status == '400'){
                this.$toast.center("课程ID无效");
            }else{
                this.$toast.center("服务器错误");
            }
        });
    },
    //上传数据校验
    VerificationData() {
      if (!this.date || !this.file) {
        this.$toast.center("请完善您的信息");
        return false;
      } else {
        return true;
      }
    },
    showUpdata(data) {
      this.isuploadVideo = true;
    },
    /**@name班级相关 */
    //修改左边标题
    changeTitle(data) {
       
      this.leftList = data;
    },
    //切换班级列表
    activeList(item, index) {
      this.setIndex = index;
      console.log(this.setIndex, item);      
      this.$refs.childObj.getExerciseListData({ item: item, index: index });
    },
    //班级视频详情
    changeStudentVideo(data) {
      this.isGrade = false;
      this.isUpload = false;
      this.list = data.data;
      this.StudentName = data.name;
      this.setstudentVideoIndex = 0;
      this.$router.push({ name: "exerciseCoach", params: { data: data.data } });
    },
    //切换视频详情
    changeStatusVideoTitle(item, index) {
      this.setstudentVideoIndex = index;
     
      this.$refs.childObj.getVideoListData(item);
    },
    /**@name视频相关 */
    setVideoNameList(data) {
      this.courseId = data[0].id
      this.courseName = data[0].name
      this.list = data;
    },
    changeisGrade() {
      this.isGrade = true;
    }
  },

  watch: {
    isUpload(newData, oldData) {
      if (newData) {
      }
    }
  }
};
</script>
<style lang="scss">
.exercise_router_page {
  width: 100%;
  height: 100%;
  position: relative;
  .exprcise_main {
    height: calc(100% - 0.64rem);
    width: 100%;
    background: url(../../assets/img/bj1.png) 0 0 / 100% 100%;
    .exprcise_sidebar {
      background: rgba(29, 52, 84, 1);
      box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.26);
      height: 100%;
      float: left;
      width: 2.73rem;
      padding-top: 0.1rem;
      .sidebar_title {
        height: 0.53rem;
        width: 100%;
        display: flex;
        background: rgba(23, 40, 65, 1);
        span {
          flex: 1;
          text-align: center;
          line-height: 0.53rem;
          font-size: 0.2rem;
          font-family: SimHei;
          font-weight: bold;
          color: #87afd3;
        }
        .activeButton {
          background: linear-gradient(
            0deg,
            rgba(50, 104, 148, 1) 0%,
            rgba(22, 38, 63, 1) 100%
          );
          color: #ffffff;
        }
      }
      .routerIndexOne {
        overflow: hidden;
        padding: 0 0.14rem 0 0.04rem;
        li {
          width: 100%;
          height: 1.05rem;
          background: url(../../assets/img/border.png) repeat-x bottom;
          .scrollButton {
            display: flex;
            align-items: center;
            height: 1.05rem;

            .footballImg {
              width: 0.69rem;
              height: 1.05rem;
              img {
                width: 0.36rem;
                height: 0.34rem;
                margin: 0.15rem auto;
                display: block;
              }
            }
            div {
              span {
                font-family: SimHei;
                color: #fff;
                font-size: 0.24rem;
              }
            }
          }
        }
      }
      .routerIndexTwo {
        padding-top: 0.14rem;
        li {
          font-size: 0.21rem;
          color: #6f91b4;
          line-height: 0.8rem;
          padding: 0 0 0 0.23rem;
          span {
            display: block;
            height: 100%;
            border-bottom: 1px solid #2e4564;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .active {
          background: #607a9f;
          color: #fefefe;
          span {
            border: 0;
          }
        }
      }
      .list-item {
        position: relative;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        .scrollButton {
          /* padding: 0.2rem; */
          margin-left: 0.04rem;
          margin-right: 0.14rem;
          display: flex;
          align-items: center;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          justify-content: flex-start;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .deleteButton {
          width: 0.5rem;
          height: 1.02rem;
          background: rgba(29, 52, 84, 1);
          font-size: 0.373333rem;
          color: #fff;
          text-align: center;
          line-height: 1.02rem;
          position: absolute;
          top: 0;
          right: -0.504rem;
          img {
            height: 0.24rem;
          }
        }
        .active {
          div {
            span {
              color: #5ce6ff !important;
            }
          }
        }
      }
      .list-item[data-type="0"] {
        transform: translate3d(0, 0, 0);
      }
      .list-item[data-type="1"] {
        transform: translate3d(-0.5rem, 0, 0);
      }
    }
    .exercise_rightVideo {
      float: left;
      width: calc(100% - 2.73rem);
      height: 100%;
      padding: 0.16rem 0.11rem;
    }
  }
  .uploadVideo {
    position: absolute;
    width: 8.18rem;
    height: 4.05rem;
    background: url(../../assets/img/tkbj.png) 0 0 / 100% 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    header {
      padding-top: 0.13rem;
      width: 100%;
      text-align: center;
      text-shadow: 0 0 0.1rem #90ffbf;
      color: #90ffbf;
      font-size: 0.26rem;
      font-family: SimHei;
      padding-left: 0.35rem;
      padding-right: 0.14rem;
      span {
        width: 0.4rem;
        height: 0.4rem;
        display: block;
        float: right;
        margin-top: -0.02rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .upoloadMaian {
      font-size: 0.2rem;
      font-family: SimHei;
      margin: 0.52rem 0 0 0.82rem;
      div {
        margin-bottom: 0.13rem;
      }
      .Time {
        overflow: hidden;
        span {
          float: left;
          display: block;
          line-height: 0.55rem;
        }
        div {
          width: 5.08rem;
          height: 0.41rem;
          float: left;
          background: none;
          max-width: fit-content;
          padding: 0;
          margin: 0;
          min-height: auto;
          margin-top: 0.02rem;
        }
      }
      .updata {
        font-size: 0.18rem;
        line-height: 0.42rem;
        color: #2fe2cb;
        span {
          line-height: 0.42rem;
          display: block;
          float: left;
        }
        input{
            display: none;
        }
        img {
          height: 0.42rem;
          width: 0.38rem;
          margin-right: 0.11rem;
          margin-left: 0.13rem;
        }
      }
      span {
        color: #acc2e2;
        margin-right: 0.14rem;
      }
      input {
        background: #1a355c;
        color: #4a6381;
        border: 0;
        border: 1px solid #31537a;
        width: 5.08rem;
        padding-left: 0.14rem;
        height: 0.41rem;
        font-size: 0.2rem;
      }
      input:focus {
        outline: none;
        box-shadow: none;
      }
    }
    .submitButton {
      font-family: SimHei;
      display: block;
      float: none;
      width: 3.11rem;
      height: 0.73rem;
      background: url(../../assets/img/ok.png) 0 0 / 100% 100%;
      font-size: 0.27rem !important;
      color: #ffffff !important;
      text-align: center;
      line-height: 0.73rem;
      border-radius: 0.08rem;
      margin: 0.34rem auto 0;
    }
  }
}
</style>
