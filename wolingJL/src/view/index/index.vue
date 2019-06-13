<template>
  <div class="web-index-bigbox">
    <div class="web-index-topBj">
      <div class="web-index-userInfo">
        <router-link to="/userinfo" tag="div" class="userinfo-head-box">
          <div class="userinfo-bg"></div>
          <div class="userinfo-head">
              <img src="../../assets/img/header.jpg" alt="">
          </div>
        </router-link>
        <div class="userinfo-name">吴川芳</div>
      </div>
      <div class="web-index-iphone"></div>
    </div>
      <!--    页面主题-->
    <div class="web-index-menu">
      <div class="web-index-content">
        <div class="web-index-ListBox">
          <div class="web-index-listTop">
            <img src="../../assets/img/isme.png" alt="">
          </div>
          <div class="web-index-listWord">
            <span>教练榜</span>
          </div>
          <div class="web-index-ListBoxs">
            <div class="web-index-list">
              <div class="football-pro-list">
                <ul>
                  <li>
                    <div class="web-index-headerbg"></div>
                    <div class="web-index-head">
                      <img src="../../assets/img/header.jpg" alt="">
                    </div>
                    <div></div>
                  </li>
                  <li>
                    <div class="web-index-headerbg"></div>
                    <div class="web-index-head">
                      <img src="../../assets/img/header.jpg" alt="">
                    </div>
                    <div></div>
                  </li>
                  <li>
                    <div class="web-index-headerbg"></div>
                    <div class="web-index-head">
                      <img src="../../assets/img/header.jpg" alt="">
                    </div>
                    <div></div>
                  </li>
                  <li>
                    <div class="web-index-headerbg"></div>
                    <div class="web-index-head">
                      <img src="../../assets/img/header.jpg" alt="">
                    </div>
                    <div></div>
                  </li>
                  <li>
                    <div class="web-index-headerbg"></div>
                    <div class="web-index-head">
                      <img src="../../assets/img/header.jpg" alt="">
                    </div>
                    <div></div>
                  </li>
                  <li>
                    <div class="web-index-headerbg"></div>
                    <div class="web-index-head">
                      <img src="../../assets/img/header.jpg" alt="">
                    </div>
                    <div></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            <router-link to="/">
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
            <router-link to="/">
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
            <router-link to="/">
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
            <router-link to="/">
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
            <router-link to="/evaluation">
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
            <router-link to="/">
              <div class="web-footer-image">
                <img src="../../assets/img/event.png" alt="">
              </div>
              <div class="web-footer-words">
                <p>赛事</p>
                <span>EVENT</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/parctice">
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
      mounted() {

        // true为连接成功
        console.log("网络状态：" + window.navigator.onLine)
        window.addEventListener("offline", function (e) {
          console.log("offline")
        });

        window.addEventListener("online", function (e) {
          console.log("online")
        });


               //判断电量  充电状态   IOS不支持
        navigator.getBattery().then(function(battery) {
          // 是否正在充电，yes-充电
          console.log(battery)
          console.log("Battery charging? " + (battery.charging ? "yes" : "no"));
          // 当前剩余电量
          console.log("Battery level: " + battery.level * 100 + "%");

          battery.addEventListener("chargingchange", function() {
            console.log("Battery charging? " + (battery.charging ? "yes" : "no"));
          });

          battery.addEventListener("levelchange", function() {
            console.log("Battery level: " + battery.level * 100 + "%");
          });
        });



      }
    }
</script>

<style scoped lang="scss">
    /*横屏*/
    .web-index-bigbox {
      width: 100%;
      height:100%;
      background: url("../../assets/img/bj.png") no-repeat;
      background-size: cover;
      .web-index-topBj{
        width: 100%;
        height:.21rem;
        background: url("../../assets/img/topbg.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .web-index-userInfo{
          height: 100%;
          display: flex;
          align-items: center;
          .userinfo-head-box{
            width: .22rem;
            height:.21rem;
            background: #091A39;
            position: relative;
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
                width: 100%;
                height:100%;
              }
            }
          }
          .userinfo-name{
            font-size:.07rem;
            color:rgba(255,255,255,1);
          }
        }
      }
      /*页面主体*/
      .web-index-menu{
        width: 100%;
        height:1.5rem;
        .web-index-content{
          width: 100%;
          height:100%;
          position: relative;
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
            width:.18rem ;
            height:.2rem;
            position: absolute;
            right: .1rem;
            bottom: .05rem;
            .web-index-AsseImage{
              width: .18rem;
              height:.18rem;
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
              font-size:.05rem;
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
        height:.21rem;
        padding: 0 .08rem;
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
            li{
              width: 12.8%;
              height:100%;
              a{
                width: 100%;
                height:100%;
                display: flex;
                align-items: center;
                justify-content: left;
                .web-footer-image{
                  width: .1rem;
                  height:.1rem;
                  margin-right: .02rem;
                  img{
                    width: 100%;
                    height:100%;
                    display: block;
                  }
                }
                .web-footer-words{
                  display: flex;
                  height:.11rem;
                  flex-direction: column;
                  p{
                    font-size:.06rem;
                    color:rgba(179,204,231,1);
                    line-height: .05rem;
                  }
                  span{
                    font-size:.04rem;
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
