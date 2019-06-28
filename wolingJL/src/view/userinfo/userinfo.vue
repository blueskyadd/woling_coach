<template>
  <div class="web-userinfo-bigbox">
    <headerTitle :title="headerTitle" :isUpload = 'false'/>
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
                  <img :src="user.picture" alt="">
                </div>
              </div>
              <div class="userinfo-nama-box">
                <div class="userinfo-name">
                  <span>{{user.name}}</span>
                </div>
                <div class="userinfo-iphone-box">
                 <span class="iphone-tit">联系方式：</span>
                  <input type="number" v-model="user.username"   oninput="if(value.length>11)value=value.slice(0,11)" class="user-iphone">
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
                  {{user.intro}}
                </p>
              </div>
              <div class="show-put">
                <div class="user-sheng">
                  <img src="../../assets/img/daka.png" alt="">
                  <p>生涯</p>
                </div>
                <div class="user-daka">
                  <span>{{user.sign}}</span>
                  <p style="    margin-top: -.04rem;">打卡次数</p>
                </div>
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
import headerTitle from "../../components/header";
    export default {
        name: "userinfo",
        components:{headerTitle},
      data(){
         return{
           userIphont:16625487452,
           headerTitle: '个人主页',
           user:{
             name: '',
             intro: '暂无介绍',
             picture: '',
             sign: 0,
             username: '',
           }
         }
      },
      methods: {
        getUserInfo(){
          this.$http.get(this.$conf.env.getUserInfo).then( res =>{
          console.log(res)
          
            this.user = res.data
            this.$loading.close()
          }).catch(err =>{
            this.$loading.close()
            this.$toast.center('服务器错误');
          })
        }
      },
      mounted() {
        this.$loading('');
        this.getUserInfo()
      },
    }
</script>

<style scoped lang="scss">
  .web-userinfo-bigbox{
     background: url(/static/img/bj1.4b1d590.png) 0 0/100% 100%;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .web-userinfo-topBox{
      width: 100%;
      height:.64rem;
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
            width: 2.08rem;
            height:100%;
          }
        }
      }
      .web-userinfo-tit{
        float: left;
        p{
          font-size: .34rem;
          font-family:SimHei;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:.92rem;
        }
      }
    }
    .web-userinfo-menu{
      flex: 1;
      display: flex;
      
      .web-userinfo-left{
        width: 1.4rem;
        height:100%;
        background:rgba(29,52,84,1);
        box-shadow:2px 0px 2px 0px rgba(0, 0, 0, 0.26);
        .userinfo{
          width: 100%;
          height:.8rem;
          background:rgba(96,122,159,1);
          margin-top:.14rem;
          span{
            font-size:.24rem;
            font-family:SimHei;
            color:rgba(254,254,254,1);
            line-height:.8rem;
            display: block;
            text-align: center;
          }
        }
      }
      .web-user-contnet{
        flex: 1;
        background:url("../../assets/img/bj1.png") 0 0 / 100% 100%;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        .web-userinfo-words{
          width:7.4rem;
          height:100%;
          .user-header-box{
            width: 7.24rem;
            height: 2.1rem;
            margin-top:.1rem;
            margin-left:.16rem;
            background:linear-gradient(0deg,rgba(57,110,162,1) 0%,rgba(18,41,72,0) 100%);
            border-radius:4px;
            padding:.62rem 0 .26rem  .08rem;
            box-sizing: border-box;
            .user-header{
              width: 100%;
              height:100%;
              display: flex;
              .user-headerImg-box{
                width: 1.36rem;
                height:1.3rem;
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
                  left:.1rem;
                  top: .04rem;
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
                  margin-bottom: .28rem;
                  span{
                    font-size:.32rem;
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
                    font-size:.2rem;
                    font-family:SimHei;
                    color:rgba(255,255,255,1);
                  }
                  input{
                    font-size:.2rem;
                    font-family:SimHei;
                    color:rgba(255,255,255,1);
                    outline: none;
                    border: 0;
                    background: transparent;
                    display: block;
                    width: 1.6rem;
                  }
                  .change-iphone{
                    width: .2rem;
                    height:.2rem;
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
            width: 6.96rem;
            height: 3.89rem;
            margin-left:.3rem;
            background:linear-gradient(0deg,rgba(11,27,51,1) 0%,rgba(30,61,93,1) 100%);
            opacity:0.8;
            .web-userinfo-wordsBox{
              width: 100%;
              height:100%;
              padding:0 .54rem 0 .26rem;
              box-sizing: border-box;
              .web-userinfo-wordTit{
                font-size:.2rem;
                font-family:SimHei;
                color:rgba(255,255,255,1);
                line-height: .72rem;
              }
              .web-usserinfo-wordContent{
                width: 100%;
                height: 1.44rem;
                padding-bottom: .34rem;
                overflow: hidden;
                background: url(../../assets/img/border.png) repeat-x bottom;
                p{
                  font-size:.16rem;
                  font-family:SimHei;
                  color:rgba(184,207,238,1);
                  line-height:.28rem;
                  text-indent:.28rem ;
                  width: 100%;
                  height: 100%;
                  overflow: auto;
                }
              }
              .show-put{
                width: 100%;
                height:1.5rem;
                display: flex;
                align-items: center;
                padding-left:.34rem;
                box-sizing: border-box;
                .user-sheng{
                  text-align: center;
                  margin-right: .2rem;
                  img{
                    width: .36rem;
                    height:.36rem;
                    display: block;
                    margin:0 auto;
                  }
                  p{
                    margin-top:7px;
                    font-size:.16rem;
                    font-family:SimHei;
                    color:rgba(184,207,238,1);
                  }
                }
                .user-daka{
                  text-align: center;
                }
                span{
                  font-size:.36rem;
                  font-family:SimHei;
                  color:rgba(184,207,238,1);
                  display: block;
                }
                p{
                  margin-top:5px;
                  font-size:.16rem;
                  font-family:SimHei;
                  color:rgba(184,207,238,1);
                }
              }
            }
          }
          .fangke-ing{
            width: 100%;
            height:1rem;
            padding-left:.3rem;
            box-sizing: border-box;
            .fangke{
              width: 100%;
              height: 100%;
              padding-top: .22rem;
              p{
                font-size:.12rem;
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
                    width: .42rem;
                    height:.42rem;
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
          width: 4.49rem;
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
              bottom: .24rem;
            }

          }
          .change_footballStar{
            width: .68rem;
            height:.68rem;
            background: url("../../assets/img/zuqiu.png") no-repeat;
            background-size: cover;
            position: absolute;
            right: .32rem;
            bottom: .4rem;
            span{
              font-size:.22rem;
              font-family:SimHei;
              color:rgba(201,235,247,1);
              text-stroke:1px undefined;
              display: block;
              white-space: nowrap;
              position: absolute;
              bottom: -0.08rem;
            }
          }

        }
      }
    }
  }
</style>
