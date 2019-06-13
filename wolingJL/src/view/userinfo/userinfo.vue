<template>
  <div class="web-userinfo-bigbox">
    <div class="web-userinfo-topBox">
      <div class="web-userinfo-back">
        <router-link to="/index">
          <img src="../../assets/img/back.png" alt="">
        </router-link>
      </div>
      <div class="web-userinfo-tit"><p>个人主页</p></div>
    </div>
    <div class="web-userinfo-menu">
      <div class="web-userinfo-left">
        <div class="userinfo">
          <span>个人主页</span>
        </div>
      </div>
      <div class="web-user-contnet">
        <div class="web-userinfo-words">
          <div class="user-header-box">
            <div class="user-header">
              <div class="user-headerImg-box">
                <div class="user-head-bg"></div>
                <div class="user-head">
                  <img src="../../assets/img/header.jpg" alt="">
                </div>
              </div>
              <div class="userinfo-nama-box">
                <div class="userinfo-name">
                  <span>高教练</span>
                </div>
                <div class="userinfo-iphone-box">
                 <span class="iphone-tit">联系方式：</span>
                  <input type="number" v-model="userIphont"   oninput="if(value.length>11)value=value.slice(0,11)" class="user-iphone">
                  <div class="change-iphone">
                    <img src="../../assets/img/changeIphone.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="web-userinfo-jjBox">
            <div class="web-userinfo-wordsBox">
              <p class="web-userinfo-wordTit">教练简介</p>
              <div class="web-usserinfo-wordContent">
                <p>
                  任教期间，他先后担任过上海申花和杭州绿城等球队主教练。2012年9月担任
                  山东鲁能技术总监、球队代理主教练。2013年不再担任代理主教练、继续担任球队
                  、技术总监，2014年2月辞去在鲁能俱乐部技术总监职务。2017年9月11日，上海绿
                  地申花俱乐部官方宣布主帅波耶特提出辞职，申花方面同意波耶特的辞职申请。由
                  技术总监高嵩出任球队主教练。
                </p>
              </div>
              <div class="show-put">
                <div class="user-sheng">
                  <img src="../../assets/img/daka.png" alt="">
                  <p>生涯</p>
                </div>
                <div class="user-daka">
                  <span>56</span>
                  <p>打卡次数</p>
                </div>
              </div>
            </div>

          </div>
          <div class="fangke-ing">
            <div class="fangke">
              <p>最近访客<span>></span></p>
              <div class="header-box">
                <ul>
                  <li>
                    <img src="../../assets/img/header.jpg" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/header.jpg" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/header.jpg" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--球星展示-->
        <div class="football-prohoto-box">
          <div class="footballStar-prohoto">
            <img src="../../assets/img/football-star.png" alt="">
          </div>
          <div class="change_footballStar">
            <span>换球星</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "userinfo",
      data(){
         return{
           userIphont:16625487452
         }
      }
    }
</script>

<style scoped lang="scss">
  .web-userinfo-bigbox{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .web-userinfo-topBox{
      width: 100%;
      height:.18rem;
      background:linear-gradient(0deg,rgba(22,37,68,1) 0%,rgba(57,87,139,1) 100%);
      overflow: hidden;

      .web-userinfo-back{
        height:100%;
        float: left;
        a{
          width: 100%;
          height:100%;
          display: block;
          img{
            display: block;
            width: .52rem;
            height:100%;
          }
        }
      }
      .web-userinfo-tit{
        float: left;
        p{
          font-size: .085rem;
          font-family:SimHei;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:.18rem;
        }
      }
    }
    .web-userinfo-menu{
      flex: 1;
      display: flex;
      .web-userinfo-left{
        width: .35rem;
        height:100%;
        background:rgba(29,52,84,1);
        box-shadow:2px 0px 2px 0px rgba(0, 0, 0, 0.26);
        .userinfo{
          width: 100%;
          height:.2rem;
          background:rgba(96,122,159,1);
          margin-top:.035rem;
          span{
            font-size:.06rem;
            font-family:SimHei;
            color:rgba(254,254,254,1);
            line-height:.2rem;
            display: block;
            text-align: center;
          }
        }
      }
      .web-user-contnet{
        flex: 1;
        background:url("../../assets/img/bj1.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        .web-userinfo-words{
          width:1.85rem;
          height:100%;
          .user-header-box{
            width: 1.81rem;
            height: .56rem;
            margin-top:.025rem;
            margin-left:.04rem;
            background:linear-gradient(0deg,rgba(57,110,162,1) 0%,rgba(18,41,72,0) 100%);
            border-radius:4px;
            padding:.155rem 0 .065rem  .02rem;
            box-sizing: border-box;
            .user-header{
              width: 100%;
              height:100%;
              display: flex;
              .user-headerImg-box{
                width: .34rem;
                height:.325rem;
                position: relative;
                .user-head-bg{
                  width: 100%;
                  height:100%;
                  background: url("../../assets/img/headk.png") no-repeat;
                  background-size: cover;
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 999;
                }
                .user-head{
                  width: 86%;
                  height: 90%;
                  position: absolute;
                  left:.025rem;
                  top: .01rem;
                  z-index: 666;
                  img{
                    width: 100%;
                    height:100%;
                    display: block;
                  }
                }
              }
              .userinfo-nama-box{
                display: flex;
                flex-direction: column;
                .userinfo-name{
                  margin-bottom: .07rem;
                  span{
                    font-size:.08rem;
                    font-family:SimHei;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    display: block;
                  }
                }
                .userinfo-iphone-box{
                  display: flex;
                  align-items: center;
                  span{
                    font-size:.05rem;
                    font-family:SimHei;
                    color:rgba(255,255,255,1);
                  }
                  input{
                    font-size:.05rem;
                    font-family:SimHei;
                    color:rgba(255,255,255,1);
                    outline: none;
                    border: 0;
                    background: transparent;
                    display: block;
                    width: .4rem;
                  }
                  .change-iphone{
                    width: .05rem;
                    height:.05rem;
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
          .web-userinfo-jjBox{
            width: 1.715rem;
            height: 1.1rem;
            margin-left:.075rem;
            background:linear-gradient(0deg,rgba(11,27,51,1) 0%,rgba(30,61,93,1) 100%);
            opacity:0.8;
            .web-userinfo-wordsBox{
              width: 100%;
              height:100%;
              padding:0 .135rem 0 .065rem;
              box-sizing: border-box;
              .web-userinfo-wordTit{
                font-size:.05rem;
                font-family:SimHei;
                color:rgba(255,255,255,1);
                line-height: .235rem;
              }
              .web-usserinfo-wordContent{
                width: 100%;
                height: .36rem;
                padding-bottom: .085rem;
                overflow: hidden;
                border-bottom: 1px solid rgba(37,66,96,1);
                p{
                  font-size:.04rem;
                  font-family:SimHei;
                  color:rgba(184,207,238,1);
                  line-height:.07rem;
                  text-indent:.07rem ;
                  width: 100%;
                  height: 100%;
                  overflow: auto;
                }
              }
              .show-put{
                width: 100%;
                height:.375rem;
                display: flex;
                align-items: center;
                padding-left:.085rem;
                box-sizing: border-box;
                .user-sheng{
                  text-align: center;
                  margin-right: .05rem;
                  img{
                    width: .09rem;
                    height:.09rem;
                    display: block;
                    margin:0 auto;
                  }
                  p{
                    margin-top:7px;
                    font-size:.04rem;
                    font-family:SimHei;
                    color:rgba(184,207,238,1);
                  }
                }
                .user-daka{
                  text-align: center;
                }
                span{
                  font-size:.09rem;
                  font-family:SimHei;
                  color:rgba(184,207,238,1);
                  display: block;
                }
                p{
                  margin-top:5px;
                  font-size:.04rem;
                  font-family:SimHei;
                  color:rgba(184,207,238,1);
                }
              }
            }
          }
          .fangke-ing{
            width: 100%;
            height:.25rem;
            padding-left:.075rem;
            box-sizing: border-box;
            .fangke{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              p{
                font-size:.03rem;
                font-family:SimHei;
                color:rgba(184,207,238,1);
                margin-right: 8px;
                span{
                  padding-left: 3px;
                }
              }
              .header-box{
                ul{
                  display: flex;
                  li{
                    width: .105rem;
                    height:.105rem;
                    border-radius: 50%;
                    margin-right: 4px;
                    img{
                      width: 100%;
                      height:100%;
                      display: block;
                      border-radius: 50%;
                    }
                  }
                }
              }
            }
          }
        }
             /*球星展示*/
        .football-prohoto-box{
          width: 1.29rem;
          height:100%;
          .footballStar-prohoto{
            width: 100%;
            height:100%;
            position: relative;
            img{
              width: 100%;
              height:90%;
              display: block;
              position: absolute;
              bottom: .06rem;
            }

          }
          .change_footballStar{
            width: .17rem;
            height:.17rem;
            background: url("../../assets/img/zuqiu.png") no-repeat;
            background-size: cover;
            position: absolute;
            right: .08rem;
            bottom: .1rem;
            span{
              font-size:.055rem;
              font-family:SimHei;
              color:rgba(201,235,247,1);
              text-stroke:1px undefined;
              display: block;
              white-space: nowrap;
              position: absolute;
              bottom: -0.02rem;
            }
          }

        }
      }
    }
  }
</style>
