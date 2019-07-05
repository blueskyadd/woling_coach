<template>
  <div class="web-assess-box">
    <div class="web-assess">
<!--      头部-->
      <headerTitle :title="headerTitle" :isUpload = 'false'/>
<!--      页面主体-->
      <div class="web-assess-menu">
        <div class="web-assess-content">
          <div class="web-assess-seccion">
            <section class="web-section">
              <div class="web-one row">
                <p>文件准备</p>
                <div class="cal">
                  <div class="cal-one cal-assess">
                    <span>教学计划：</span>
                      <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="plan" full-width>
                        <mu-option v-for="item in options1" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-two cal-assess">
                    <span>训练总结：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="summary" full-width>
                        <mu-option v-for="item in options" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-three cal-assess">
                    <span>每课教案：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="teaching" full-width>
                        <mu-option v-for="item in options1" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-four cal-assess">
                    <span>学员评价表：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="estimate" full-width>
                        <mu-option v-for="item in options" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                </div>
              </div>
              <div class="web-one row">
                <p>教学</p>
                <div class="cal">
                  <div class="cal-one cal-assess">
                    <span>学员安全：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="safety" full-width>
                        <mu-option v-for="item in options1" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i ><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-two cal-assess">
                    <span>主题明确：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="explicit" full-width>
                        <mu-option v-for="item in options2" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-three cal-assess">
                    <span>强度合理：</span>
                    <!-- 展示-->
                   <mu-select label="" color="#182942" v-model="rational" full-width>
                        <mu-option v-for="item in options1" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i ><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-four cal-assess">
                    <span>整体高效：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="efficient" full-width>
                        <mu-option v-for="item in options1" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                </div>
              </div>
              <div class="web-one row">
                <p>仪表仪态</p>
                <div class="cal">
                  <div class="cal-one cal-assess">
                    <span>全套运动装备：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="equipment" full-width>
                        <mu-option v-for="item in options" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i ><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-two cal-assess">
                    <span>无不文明行文：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="action" full-width>
                        <mu-option v-for="item in options1" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i ><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                  <div class="cal-three cal-assess">
                    <span>不得击打队员：</span>
                    <!-- 展示-->
                    <mu-select label="" color="#182942" v-model="strike" full-width>
                        <mu-option v-for="item in options" :key="item.value" :label="item.id" :value="item.value"></mu-option>
                    </mu-select>                             
                    <i><img src="../../assets/img/arrows.png" alt=""></i>
                  </div>
                </div>
              </div>
              <div class="zongping">
                <div class="web-zong">
                  <span>总评分：</span>
                  <div class="zong-words">{{Score}}</div>
                </div>
                <div class="web-zong-send" @click="submit">
                  确定
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTitle from "../../components/header";
    export default {
        name: "assess",
        
        components:{headerTitle},
      data(){
          return{
            headerTitle: this.$route.params.data.name,
            options: [{value:1,id:'1'},{value:2,id:'2'},{value:3,id:'3'},{value:4,id:'4'},{value:5,id:'5'}],
            options1: [{value:1,id:'1'},{value:2,id:'2'},{value:3,id:'3'},{value:4,id:'4'},{value:5,id:'5'},{value:6,id:'6'},{value:7,id:'7'},{value:8,id:'8'},{value:9,id:'9'},{value:10,id:'10'}],
            options2: [{value:1,id:'1'},{value:2,id:'2'},{value:3,id:'3'},{value:4,id:'4'},{value:5,id:'5'},{value:6,id:'6'},{value:7,id:'7'},{value:8,id:'8'},{value:9,id:'9'},{value:10,id:'10'},
            {value:11,id:'11'},{value:12,id:'12'},{value:13,id:'13'},{value:14,id:'14'},{value:15,id:'15'},{value:16,id:'16'},{value:17,id:'17'},{value:18,id:'18'},{value:19,id:'19'},{value:20,id:'20'}],
            plan: '',	 //教学计划
            summary: '',	 //训练总结
            teaching: '',	 //每课教案
            estimate: '',	 //学员评价表
            safety: '',	 //学员安全
            explicit: '',	 //主题明确
            rational: '',	 //强度合理
            efficient: '',	 //整体高效
            equipment: '',	 //全套运动装备
            action: '',	 //文明行为
            strike: '',	 //不击打队员
            Score: 0
          }
      },
      methods: {
          getCoachassess(){
            this.$loading('');
              this.$http.get(this.$conf.env.getCoachassess + this.$route.params.data.status + '/').then( res =>{
              this.$loading.close();
              this.plan = res.data. plan; //教学计划
              this.summary= res.data.summary;///训练总结
              this.teaching= res.data.teaching;///每课教案
              this.estimate= res.data.estimate;///学员评价表
              this.safety= res.data.safety;//学员安全
              this.explicit= res.data.explicit;///主题明确
              this.rational = res.data.rational;///强度合理
              this.efficient= res.data.efficient;///整体高效
              this.equipment= res.data.equipment;///全套运动装备
              this.action= res.data.action;//文明行为
              this.strike = res.data.strike;//不击打队员
            }).catch(err =>{
              this.$loading.close();
              this.$toast.center('服务器错误');
            })
          },
          submit(){
             if(!this.VerificationData()) return
              this.$loading('');
              var params = {
                'assess': this.$route.params.selfClassId,	 //考评id 22接口
                'user': this.$route.params.data.id,	 //教练id 22接口
                'plan': this.plan,	 //教学计划
                'summary': this.summary,	 //训练总结
                'teaching': this.teaching,	 //每课教案
                'estimate': this.estimate,	 //学员评价表
                'safety': this.safety,	 //学员安全
                'explicit': this.explicit,	 //主题明确
                'rational': this.rational,	 //强度合理
                'efficient': this.efficient,	 //整体高效
                'equipment': this.equipment,	 //全套运动装备
                'action': this.action,	 //文明行为
                'strike': this.strike,	 //不击打队员
              }
              this.$route.params.data.status ?this.updatedCoachassess(params) : this.setCoachassess(params)
          },
          /**@name考评创建 */
          setCoachassess(params){
            this.$http.post(this.$conf.env.getCoachassess, params).then( res =>{
            console.log(res)
              this.$loading.close();
              this.$toast.center('提交成功');

            }).catch(err =>{
              console.log(err)
              this.$loading.close()
              if(err.request.status == '400'){
                console.log(err.request.responseText)
                this.$toast.center(err.response.data[0]?err.response.data[0] :  '提交失败')
              }else{
                this.$toast.center('服务器错误')
              }
            })
          },
          updatedCoachassess(params) {
            this.$http.put(this.$conf.env.getCoachassess + this.$route.params.data.status + '/', params).then( res =>{
            console.log(res)
              this.$loading.close();
              this.$toast.center('修改成功');
              this.$router.routerBack(-1);
            }).catch(err =>{
              console.log(err)
              this.$loading.close()
              if(err.request.status == '400'){
                this.$toast.center('只有当天可以修改')
              }else{
                this.$toast.center('服务器错误')
              }
            })
          },
          VerificationData(){
            if(!this.plan ||!this.summary ||!this.teaching ||!this.estimate ||!this.safety ||!this.explicit ||!this.rational ||!this.efficient ||!this.equipment ||!this.action ||!this.strike ){
              this.$toast.center('请完善您的信息');
              return false
            }else{
              return true
            }
          },
          totalScore(){
            this.Score= this.plan* 1 +this.summary* 1 +this.teaching* 1 +this.estimate* 1 +this.safety* 1 +this.explicit* 1 +this.rational* 1 +this.efficient* 1 +this.equipment* 1 +this.action* 1 +this.strike* 1
          }
        },
        
        mounted() {
          console.log(this.$route.params.data)
          this.$route.params.data.status ? this.getCoachassess(): ''
        },
        watch:{
          plan(newData, oldData){
            this.totalScore()
          },
          summary(newData, oldData){
            this.totalScore()
          },	 //训练总结
          teaching(newData, oldData){
            this.totalScore()
          },	 //每课教案
          estimate(newData, oldData){
            this.totalScore()
          },	 //学员评价表
          safety(newData, oldData){
            this.totalScore()
          },	 //学员安全
          explicit(newData, oldData){
            this.totalScore()
          },	 //主题明确
          rational(newData, oldData){
            this.totalScore()
          },	 //强度合理
          efficient(newData, oldData){
            this.totalScore()
          },	 //整体高效
          equipment(newData, oldData){
            this.totalScore()
          },	 //全套运动装备
          action(newData, oldData){
            this.totalScore()
          },	 //文明行为
          strike(newData, oldData){
            this.totalScore()
          },	 //不击打队员
        }
    }
</script>

<style lang="scss">

  .web-assess-box{
    width: 100%;
    height:100%;
    .web-assess{
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: column;
      .web-assess-menu{
        width: 100%;
        flex: 1;
        background: url("../../assets/img/bj1.png") no-repeat;
        background-size: cover;
        .web-assess-content{
          width: 100%;
          height:100%;
          padding:.188rem;
          box-sizing: border-box;
          .web-assess-seccion{
            width: 100%;
            height:100%;
            background:linear-gradient(0deg,rgba(11,27,51,1) 0%,rgba(30,61,93,1) 100%);
            opacity:0.8;
            border-radius:3px;
            padding:.3rem .68rem .28rem .66rem;
            box-sizing: border-box;
           section{
             width: 100%;
             height: 100%;
             position: relative;
             .row{
               width: 100%;
               height:1.4rem;
               p{
                 font-size:.24rem;
                 font-family:SimHei;
                 color:rgba(0,228,255,1);
                 line-height: .24rem;
                 width: 100%;
                 margin-bottom: .24rem;
               }
               .cal{
                 display: flex;
                 .cal-assess{
                   display: flex;
                       position: relative;
                   margin-right: .72rem;
                   .mu-input.full-width{
                        width: 1rem;
                        height: .41rem;
                        background: #182942;
                        min-height: auto;
                        padding: 0;
                        border: 1px solid #31537a;
                    }
                    .mu-select-input{
                        font-size: .2rem;
                        color: #a0bcdf;
                        padding-left: .1rem;
                    }
                    .mu-select-action{
                        display: none;
                    }
                     i{
                        display: block;
                        width: .21rem;
                        height: .09rem;
                        position: absolute;
                        right: 0.08rem !important;
                        top: 0rem;
                        img{
                            width: 100%;
                        }
                    }
                   span{
                     font-size:.22rem;
                     font-family:SimHei;
                     color:rgba(160,188,223,1);
                     display: block;
                   }
                   .select-assess-Box{
                     width: .72rem;
                     height:.4rem;
                     position: relative;
                    
                     
                     .select_Box{
                       width: .72rem;
                       height:auto;
                       background:rgba(24,41,66,1);
                       font-size: .24rem;
                       text-align: center;
                       position: absolute;
                       left: 0;
                       top:.4rem;
                       &.hide{
                         display: none;
                       }
                       .select_model{
                         border-bottom: 1px solid #fff;
                       }
                       .select_model:last-child{
                         border: 0;
                       }
                     }
                   }
                 }
               }
             }
             .zongping{
               position: absolute;
               right: 0;
               bottom: 0;
               display: flex;
               .web-zong{
                 display: flex;
                 align-items: center;
                 span{
                   font-size:.24rem;
                   font-family:SimHei;
                   color:rgba(160,188,223,1);
                   display: block;
                   margin-right: 7px;
                 }
                 .zong-words{
                   width:.8rem;
                   height:.48rem;
                   background:rgba(24,41,66,1);
                   border:1px solid rgba(49,83,122,1);
                   border-radius:1px;
                   font-size: .2rem;
                   color: #a0bcdf;
                   font-family:SimHei;
                   text-align: center;
                   line-height: .46rem;
                 }
               }
               .web-zong-send{
                 width: 2.26rem;
                 height:.64rem;
                 background: url("../../assets/img/ok.png") no-repeat;
                 background-size: cover;
                 margin-left: .852rem;
                 font-size:.24rem;
                 font-family:SimHei;
                 font-weight:bold;
                 color:rgba(255,255,255,1);
                 line-height:.64rem;
                 text-align: center;
               }
             }
           }
          }
        }
      }
    }
  }
</style>
