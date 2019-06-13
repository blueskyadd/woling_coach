<template>
    <div class="web-assessAll-box">
      <div class="web-assessAll-session">
        <div class="web-assessAll-titBox">
        <div class="web-assessAll-back">
          <router-link to="/index">
            <img src="../../assets/img/back.png" alt="">
          </router-link>
        </div>
        <div class="web-assessAll-tit"><p>考核</p></div>
      </div>
        <div class="web-assessAll-menu">
          <div class="web-assessAll-aside">
            <div class="assessAll-aside-link">
              <ul>
                <li
                  v-for="(val,index) in classList"
                  :id="val.id"
                  :key="index"
                  :class="val.switch == true?'active':''"
                >
                  <router-link to="/selectFootball" active-class="active">{{val.name}}</router-link>
                </li>

              </ul>
            </div>
          </div>
          <div class="web-assessAll-cont">
            <select-football></select-football>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import SelectFootball from "@/view/assess/selectFootball";
    export default {
        name: "assessAll",
      components: {SelectFootball},
      data(){
          return{
            classList:{}
          }
      },
      created(){
          this.$axios({
            method:'get',
            url:'../../../static/data/class.json',
          }).then(res => {
            res.data[0].switch = true;
            this.classList = res.data
          })
      },
      methods:{
      }
    }
</script>

<style scoped lang="scss">
  .web-assessAll-box{
    width: 100%;
    height: 100%;
    .web-assessAll-session{
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: column;
      .web-assessAll-titBox{
        width: 100%;
        height:.18rem;
        background:linear-gradient(0deg,rgba(45,73,121,1) 0%,rgba(35,51,84,1) 100%);
        overflow: hidden;
        .web-assessAll-back{
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
        .web-assessAll-tit{
          float: left;
          p {
            font-size: .085rem;
            font-family: SimHei;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: .18rem;
          }
        }
      }
      .web-assessAll-menu{
        width: 100%;
        flex: 1;
        display: flex;
        .web-assessAll-aside{
          width: .395rem;
          height: 100%;
          box-sizing: border-box;
          padding-top: 7px;
          background:rgba(29,52,84,1);
          box-shadow:2px 0px 2px 0px rgba(0, 0, 0, 0.26);
          .assessAll-aside-link{
            width: 100%;
            height:100%;
            overflow: auto;
            ul{
              li{
                width: 100%;
                height: .23rem;
                box-sizing: border-box;
                padding: 0 .05rem;
                &.active{
                  background:rgba(96,122,159,1);
                  a{
                    border: 0;
                  }
                }
                a{
                  font-size:.06rem;
                  font-family:SimHei;
                  color:rgba(254,254,254,1);
                  line-height:.23rem;
                  display: block;
                  text-align: center;
                  border-bottom: 1px solid rgba(46,69,100,1);;
                }
              }
            }
          }
        }
        .web-assessAll-cont{
          flex: 1;
          height: 100%;
        }
      }
    }
  }
</style>
