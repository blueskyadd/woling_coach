<template>
    <div class="course_courseDetail">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <ul>
                <li v-for="(val,index) in ClassList" :key="index">
                    <div   class='mainLeft_img'>
                        <img :src="val.weather.day_weather_pic" alt="">
                        <div class="mainRight">
                            <h3>{{val.name}}</h3>
                            <div><span>主教练:</span><p>{{val.coach}}</p><span>副教练:</span><p>{{val.assistant_coach}}</p></div>
                            <div class="classTime"><span>上课时间:</span><p>{{val.start_time}}</p><span>上课时间:</span><p>{{val.end_time}}</p></div>
                            <div class="classUp"><span>上课地址:</span><p>{{val.province}} {{val.city}} {{val.area}} {{val.address}}</p></div>
                            <div class="UpClass" :class="val.status === '正常上课'?'':'active'">
                              <img src="../../assets/img/gre.png" alt="" v-if="val.status === '正常上课'">
                              <img src="../../assets/img/red.png" alt="" v-else>
                              <div>{{val.status}}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
import mianList from '../../components/mainList'
export default {
  name:'courseDetail',
  components:{headerTitle, mianList},
  data(){
      return{
        headerTitle: '课表',
        ClassList:[],
        refreshing:false,
      }
  },
  mounted(){
       this.$loading('');
      console.log(this.$route.params)
   this.GetList(this.$route.params.id,1)
  },
  methods:{
    GetList(id,num){
    
      this.$http.get(this.$conf.env.getClassTime + this.$route.params.id).then( res =>{
        this.$loading.close()
        this.refreshing = false;
        if(!res.data.count || res.data.results.length == 0){
        //   this.isLoaded = true
          var text = num == 1 ? '暂时没有数据呢':'已加载全部数据'
          this.$toast.center(text);
        //   return
        }else{
          num == 1 ?  this.ClassList = res.data.results : this.ClassList = this.ClassList.concat(res.data.results)
          this.ClassList[0].status = "取消上课"
        //   this.$loading = false
          console.log(this.ClassList)
        }

      }).catch(err =>{
        // this.isLoaded = true
        // this.refreshing = false;
        this.$loading.close()
        // this.loading = false
      })


    }
  }

}
</script>
<style lang="scss">
.course_courseDetail{
    width: 100%;
    height: 100%;
    background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
    .main{
        margin: .18rem;
        height: calc(100% - 1rem);
        width: calc(100% - .36rem);
        background: rgba(35, 65, 101,0.5);
        border-radius: .05rem;
        padding: .13rem .05rem .13rem .19rem;
        overflow-y: scroll;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 6.227rem;
                height: 1.48rem;
                background: orange;
                margin-right: .14rem;
                margin-bottom: .1rem;
                border-radius: .05rem;
                background: #271948 url(../../assets/img/selfBg.png )  0 0 / 100% 100% ;
                padding: .15rem .14rem;
                .mainLeft_img{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    img{
                        width: .4rem;
                        height: .4rem;
                        border-radius: .04rem;
                        float: right;
                    }
                    .mainRight{
                        height: 100%;
                        float: left;
                        width: calc(100%  - 1.21rem);
                        padding-left:.13rem;
                        h3{
                            font-size: .23rem;
                            color: #dcf0f2;
                            line-height: .4rem;
                            font-family: SimHei;
                            width: 100%;
                            overflow: hidden;
                            height: .36rem;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        div{
                            font-size: .18rem;
                            color: #7da1cd;
                            line-height: .3rem;
                            font-family: SimHei;
                            display: flex;
                            span{
                              display: block;
                              float: left;
                              margin-right: .1rem;
                              white-space: nowrap;
                            }
                            p{
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 1.04rem;
                                float: left;
                                overflow: hidden;
                                margin-right: .09rem;
                            }
                        }
                        .classTime{
                            p{
                                width: auto;
                            }
                        }
                        .classUp{
                            p{
                                width: 3.2rem;
                            }
                        }
                        .UpClass{
                          display: flex;
                          position: absolute;
                          right: 0;
                          bottom: 0;
                          align-items: center;
                          color:#FC1C36;
                          div{
                            color: #62F875;
                            font-size:.18rem;
                            line-height: .1rem;
                          }
                          img{
                            width: .15rem;
                            height: .15rem;
                            margin-right: .06rem;
                            border-radius: 0;
                          }
                          &.active{
                            div{
                              color:rgba(252,28,54,1);
                            }
                          }
                        }

                    }
                }

            }
        }


    }
    .main::-webkit-scrollbar {
        display: none;
    }
}
</style>
