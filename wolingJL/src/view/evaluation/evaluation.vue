<template>
  <div class="web-evaluation-box">
    <div class="web-evaluation-session">
      <div class="web-evaluation-titBox">
        <div class="web-evaluation-back">
          <router-link to="/index">
            <img src="../../assets/img/back.png" alt="">
          </router-link>
        </div>
        <div class="web-evaluation-tit"><p>自评</p></div>
      </div>
      <div class="web-evaluation-menu">
        <div class="web-evaluation-aside">
          <div class="evaluation-aside-link">
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
        <div class="web-evaluation-cont">
          <select-evaluation></select-evaluation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SelectEvaluation from "./selectEvaluation";
    export default {
        name: "evaluation",
      components: {SelectEvaluation},
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
  .web-evaluation-box{
    width: 100%;
    height: 100%;
    .web-evaluation-session{
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: column;
      .web-evaluation-titBox{
        width: 100%;
        height:.18rem;
        background:linear-gradient(0deg,rgba(45,73,121,1) 0%,rgba(35,51,84,1) 100%);
        overflow: hidden;
        .web-evaluation-back{
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
        .web-evaluation-tit{
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
      .web-evaluation-menu{
        width: 100%;
        flex: 1;
        display: flex;
        .web-evaluation-aside{
          width: .395rem;
          height: 100%;
          box-sizing: border-box;
          padding-top: 7px;
          background:rgba(29,52,84,1);
          box-shadow:2px 0px 2px 0px rgba(0, 0, 0, 0.26);
          .evaluation-aside-link{
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
        .web-evaluation-cont{
          /*flex: 1;*/
          width: 3.356rem;
          height: 100%;
          background: url("../../assets/img/bj1.png") no-repeat;
          background-size: cover;
        }
      }
    }
  }
</style>
