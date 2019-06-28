<template>
  <div class="web-evaluation-box">
    <div class="web-evaluation-session">
    <headerTitle :title="headerTitle" :isUpload = 'false'/>
      <div class="web-evaluation-menu">
        <div class="web-evaluation-cont">
          <sideBar :leftList='leftList' @change="activeList" :setIndex='setIndex'/>
          <select-evaluation></select-evaluation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SelectEvaluation from "./selectEvaluation";
    import headerTitle from "../../components/header";
    import sideBar from "../../components/sidebar";
    import store from "../../store/index";
    export default {
        name: "evaluation",
      components: {SelectEvaluation, headerTitle, sideBar},
      data(){
        return{
          headerTitle:'自评',
          classList:{},
          leftList:[
              {
                  name: this.$store.state.evalation.classSelfData.name
              },
          ],
          setIndex:0
        }
      },
      created(){
        // this.$axios({
        //   method:'get',
        //   url:'../../../static/data/class.json',
        // }).then(res => {
        //   res.data[0].switch = true;
        //   this.classList = res.data
        // })
      },
      methods:{
        activeList(data){
            this.headerTitle = data.item.name
            this.setIndex = data.index
        },
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
        height:.64rem;
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
              width:2.08rem;
              height:100%;
            }
          }
        }
        .web-evaluation-tit{
          float: left;
          p {
            font-size: .34rem;
            font-family: SimHei;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: .72rem;
          }
        }
      }
      .web-evaluation-menu{
        width: 100%;
        flex: 1;
        display: flex;
        
        .web-evaluation-cont{
          /*flex: 1;*/
          width: 100%;
          height: 100%;
          background: url("../../assets/img/bj1.png") no-repeat;
          background-size: cover;
        }
      }
    }
  }
</style>
