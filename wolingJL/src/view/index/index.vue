<template>
  <div class="web-index-bigbox">
    <div class="web-index-topBj">
      <div class="web-index-userInfo">
        <router-link to="/userinfo" tag="div" class="userinfo-head-box">
          <div class="userinfo-bg"></div>
          <div class="userinfo-head">
              <img :src="picture" alt="">
              
          </div>
        </router-link>
        <div class="userinfo-name">{{username}}</div>
      </div>
      <div class="web-index-iphone">
        <div><img src="../../assets/img/email.png" alt=""></div>
        <div><img src="../../assets/img/wifi.png" alt=""></div>
        <div style="width:.55rem"><span><i :style="{'width': setelectricity, 'background-color': setelectricityColr}"></i></span></div>
      </div>
    </div>
      <!--    页面主题-->
    <div class="web-index-menu">
      <div class="web-index-content">
         <div class="singIn" v-if="isSign" @click="setSingIn">
           <img src="../../assets/img/singIn.png" alt="">
         </div>
        <div class="web-index-Assessment">
          <div class="web-index-AsseImage">
            <img src="../../assets/img/zc.png" alt="">
          </div>
          <div class="web-index-words">
            综测
          </div>
        </div>
      </div>
    </div>
<!--    底部-->
    <div class="web-index-footerBox">
      <div class="web-index-footer">
        <ul>
          <li>
            <router-link to="/actively">
              <div class="web-footer-image">
                <img src="../../assets/img/huodong.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>活动</p>
                <span>ACTIVITY</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/student">
              <div class="web-footer-image">
                <img src="../../assets/img/student.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>学员</p>
                <span>STUDENT</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/timeBar">
              <div class="web-footer-image">
                <img src="../../assets/img/schedule.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>课表</p>
                <span>SCHEDULE</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/gradeIndex">
              <div class="web-footer-image">
                <img src="../../assets/img/score.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>评分</p>
                <span>SCORE</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/evaluationIndex">
              <div class="web-footer-image">
                <img src="../../assets/img/evalu.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>自评</p>
                <span>EVALUATION</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/assessAll">
              <div class="web-footer-image">
                <img src="../../assets/img/assess.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>考核</p>
                <span>ASSESS</span>
              </div>
            </router-link>
          </li>
          <li>
            <a >
              <div class="web-footer-image">
                <img src="../../assets/img/event.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>赛事</p>
                <span>EVENT</span>
              </div>
            </a>
          </li>
          <li>
            <router-link to="/exercise">
              <div class="web-footer-image">
                <img src="../../assets/img/proactive.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>练习</p>
                <span>PRACTICE</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          a:'',
          isSign: false,
          username:'',
          picture:'',
          getelectricity: '',//电量
          isElectricity:false  ,//充电状态
          networkStatus:'',//网络状态
        }
      },
      computed:{
        //电量--andriod
        setelectricity(){
          if(this.getelectricity > 70 ){
            return `calc( ${this.getelectricity}% - 0.13rem)`;
          }else if(this.getelectricity > 50 ){
            return `calc( ${this.getelectricity}% - 0.08rem)`;
          }else if(this.getelectricity > 10){
            return `calc( ${this.getelectricity}% - 0.03rem)`;
          }else{
            return `calc( ${this.getelectricity}%)`
          }
        },
        //电池状态颜色--andriod--ios
        setelectricityColr(){
          if(this.isElectricity){
            return 'yellowgreen'
          }else{
            if(this.getelectricity < 40){
              return 'red'
            }else if(this.getelectricity > 80){
              return '#fff'
            }
          }
          
        },
        //获取网络状态--andriod
        getNetworkStatus(){
           switch(this.networkStatus){
             case 'CONNECTION_UNKNOW':
              return '网络连接状态未知'
              break;
              case 'CONNECTION_NONE':
              return '未连接网络'
              break;
              case 'CONNECTION_WIFI':
              return '无线WIFI网络'
              break;
              case 'CONNECTION_CELL2G':
              return '蜂窝移动2G网络'
              break;
              case 'CONNECTION_CELL3G':
              return '蜂窝移动3G网络'
              break;
              case 'CONNECTION_CELL4G':
              return '蜂窝移动4G网络'
              break;
           }
        }
      },
      methods:{
        //判断是否可以签到
        getsingIn(){
          this.$http.get(this.$conf.env.isSingIn).then( res =>{
            this.isSign = res.data.sign
          console.log(res)
          }).catch(err =>{

          })
        },
        //签到
        setSingIn(){
           this.$loading('');
          this.$http.post(this.$conf.env.singIn).then( res =>{
            this.$loading.close()
            if(res.status == '201'){
              this.$toast.center('签到成功');
            }
          }).catch(err =>{
            this.$loading.close()
            if(err.response.status == '400'){
              this.$toast.center('您已经签到了');
            }else{
              this.$toast.center('网络错误，稍后再试');
            }
          })
        },
        getUserInfo(){
          this.$http.get(this.$conf.env.getUserInfo).then( res =>{
          console.log(res)
            this.username = res.data.name
            this.picture= res.data.picture
            this.$loading.close()
          }).catch(err =>{
            this.$loading.close()
            this.$toast.center('服务器错误');
          })
        }
      },
      mounted() {
          this.$loading('');
          this.getsingIn()
          this.getUserInfo()
              var vm = this
          setTimeout(()=>{
                console.log("网络状态：" + window.navigator.onLine)
              window.addEventListener("offline", function (e) {
                console.log("offline")
              });

              window.addEventListener("online", function (e) {
                console.log("online")
              });
              var u = navigator.userAgent, app = navigator.appVersion;
              var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
              var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
              if(isAndroid){
                plus.nativeUI.toast("安卓");
                //判断电量  充电状态   IOS不支持
                  navigator.getBattery().then(function(battery) {
                    
                    vm.getelectricity =  battery.level * 100 ;//电量 --首次赋值
                    vm.isElectricity = battery.charging;// 是否正在充电/true-充电 --首次赋值
                    //充电状态发生变化时触发
                    battery.addEventListener("chargingchange", function() {
                      vm.isElectricity = battery.charging
                    });
                    //电池电量发生变化时触发
                    battery.addEventListener("levelchange", function() {
                      vm.getelectricity =  battery.level * 100 ;
                    });
                  });
              }
              if(isIOS){
                plus.nativeUI.toast("IOS");
                var UIDevice = plus.ios.import("UIDevice"); //ios设备电量信息
                  var dev = UIDevice.currentDevice(); 
                  if (!dev.isBatteryMonitoringEnabled()) { 
                      dev.setBatteryMonitoringEnabled(true); 
                  } 
                  dev.batteryMonitoringEnabled = true
                  console.log('dev:',dev)
                  console.log('dev.batteryState:',dev.batteryState())
                  vm.isElectricity = dev.batteryState() =='2' ?  true  : false
                  var level =dev.batteryLevel();
                   vm.getelectricity =  level * 100 ;//电量 --首次赋值
                  console.log('level',level)
                  //--电量监听
                  // UIDeviceBatteryLevelDidChangeNotification
                  // console.log('电池电量发生变化')
                  //电池电量发生变化时触发
                  // UIDeviceBatteryStateDidChangeNotification
                  // console.log('电池状态发生变化')
                  //电池状态发生变化是触发
                  // console.log(dev.UIDeviceBatteryStateDidChangeNotification）
                  dev.addEventListener('UIDeviceBatteryLevelDidChangeNotification', ()=>{
                    vm.getelectricity =  dev.batteryLevel() * 100 ;
                    console.log('-----监听')
                  })
                  dev.addObserver('batteryStateChanged', ()=>{
                    console.log('电池状态发生变化-----监听')
                  })
                }
              
                var types = {};
                types[plus.networkinfo.CONNECTION_UNKNOW] = "CONNECTION_UNKNOW";
                types[plus.networkinfo.CONNECTION_NONE] = "CONNECTION_NONE";
                types[plus.networkinfo.CONNECTION_ETHERNET] = "CONNECTION_ETHERNET";
                types[plus.networkinfo.CONNECTION_WIFI] = "CONNECTION_WIFI";
                types[plus.networkinfo.CONNECTION_CELL2G] = "CONNECTION_CELL2G";
                types[plus.networkinfo.CONNECTION_CELL3G] = "CONNECTION_CELL3G";
                types[plus.networkinfo.CONNECTION_CELL4G] = "CONNECTION_CELL4G";
                vm.networkStatus =  types[plus.networkinfo.getCurrentType()]
          },100)
      
        }
    }
</script>

<style scoped lang="scss">
    /*横屏*/
    .web-index-bigbox {
      width: 100%;
      height:100%;
      background: url("../../assets/img/bj.jpg") no-repeat;
      background-size: cover;
      .web-index-topBj{
        width: 100%;
        height:.88rem;
        background: url("../../assets/img/topbg.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        .web-index-userInfo{
          height: 100%;
          display: flex;
          // align-items: center;
          .userinfo-head-box{
            width: .83rem;
            height:.83rem;
            position: relative;
            margin: .07rem .07rem 0 .1rem;
            .userinfo-bg{
              width: 100%;
              height:100%;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 999;
              background: url("../../assets/img/headk.png") no-repeat;
              background-size: cover;
            }
            .userinfo-head{
              width: 100%;
              height:100%;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 666;
              img{
                display: block;
                width: 78%;
                height: 78%;
                margin: auto;
              }
            }
          }
          .userinfo-name{
            font-family:SimHei;
            font-size:.2rem;
            padding-top: .15rem;
            color:rgba(255,255,255,1);
          }
        }
        .web-index-iphone{
            width: 1.65rem;
            display: flex;
            height: 75%;
            align-items: center;
            margin-right: .14rem;
            justify-content: space-between;
            div{
              height: .26rem;
              span{
                padding: .065rem 0 0 .09rem;
                height: 100%;
                width: 90%;
                margin: 0 auto;
                display: block;
                background: url(../../assets/img/electricity.png)  0 0 / 100% 100%;
                i{
                  display: block;
                  height: 60%;
                  background: #fff;
                }
              }
              img{
                height: 100%;
              }
            }
        }
      }
      /*页面主体*/
      .web-index-menu{
        width: 100%;
        height: 5.3rem;
        .web-index-content{
          width: 100%;
          height:100%;
          position: relative;
          .singIn{
            width: 1rem;
            float: right;
            margin-right: .31rem;
            height: 1rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .web-index-ListBox{
            width: .31rem;
            height:1.38rem;
            position: absolute;
            left: 0;
            top:.05rem;
            background: #091A39;
            overflow: hidden;
            .web-index-listTop{
              width: 100%;
              height:.12rem;
              background: #183162;
              display: flex;
              align-items: center;
              justify-content: center;
              img{
                width: 0.06rem;
                height:0.06rem;
                display: block;
              }
            }
            .web-index-listWord{
              width: 100%;
              height:.1rem;
              background: #040E23;
              span{
                font-size:.05rem;
                color:rgba(130,160,204,1);
                line-height:.1rem;
                display: block;
                text-align: center;
              }
            }
            .web-index-ListBoxs{
              width: 100%;
              height: 1.23rem;
              box-sizing: border-box;
              padding:4px 8px;
              .web-index-list{
                width: 100%;
                height:100%;
                overflow: hidden;
                .football-pro-list{
                  width: 100%;
                  height:auto;
                  ul{
                    li{
                      width: .22rem;
                      height:.21rem;
                      position: relative;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin-bottom: .05rem;
                      .web-index-headerbg{
                        width: 100%;
                        height:100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 999;
                        background: url("../../assets/img/headk.png") no-repeat;
                        background-size: cover;
                      }
                      .web-index-head{
                        width: .18rem;
                        height:.19rem;
                        position: absolute;
                        left: 3.4px;
                        top: 1.5px;
                        z-index: 666;
                        img{
                          width: 100%;
                          height:100%;
                          display: block;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .web-index-Assessment{
            width: .72rem;
            height: .8rem;
            position: absolute;
            right: .1rem;
            bottom: .05rem;
            .web-index-AsseImage{
              width: .72rem;
              height: .72rem;
              position: absolute;
              z-index: 10;
              left: 0;
              top: 0;
              img{
                display: block;
                width: 100%;
                height:100%;
              }
            }
            .web-index-words{
              width: 100%;
              height: .04rem;
              font-size:.2rem;
              font-family:SimHei;
              color:rgba(201,235,247,1);
              line-height:.04rem;
              text-stroke:1px undefined;
              text-align: center;
              position: absolute;
              left: 0;
              bottom: 0;
              z-index: 30;
            }
          }
        }
      }
      .web-index-footerBox{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height:.84rem;
        padding: 0 .4rem;
        box-sizing: border-box;
        background:linear-gradient(0deg,rgba(5,20,40,1) 0%,rgba(46,79,131,1) 100%);
        box-shadow:0px -3px 11px 1px rgba(0, 0, 0, 0.46);
        opacity:0.95;
        .web-index-footer{
          width: 100%;
          height:100%;
          display: flex;
          justify-content: space-between;
          ul{
            width: 100%;
            height:100%;
            display: flex;
            justify-content: space-around;
            li{
              height:100%;
              a{
                width: 100%;
                height:100%;
                display: flex;
                align-items: center;
                justify-content: left;
                .web-footer-image{
                    width: .4rem;
                    height: .4rem;
                    margin-right: .1rem;
                  img{
                    width: 100%;
                    height:100%;
                    display: block;
                  }
                }
                .web-footer-words{
                  display: flex;
                  margin-top: .15rem;
                  flex-direction: column;
                  p{
                    font-size:.2rem;
                    color:rgba(179,204,231,1);
                    line-height: .1rem;
                  }
                  span{
                    font-size:.1rem;
                    color:rgba(51,85,138,1);
                    font-family:SimHei;
                  }
                }
              }
            }
          }
        }
      }
    }
</style>
