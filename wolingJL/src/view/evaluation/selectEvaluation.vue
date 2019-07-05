<template>
  <div class="web-selectevaluation-user-box">

    <div class="web-selectevaluation-box">
      
        <div class="web-selectevaluation-left">
      <form action method="post" id="formData">
          <table>
              <tr>
                <td class="one" >
                  <span>训练主题</span>
                  <input type="text" placeholder="点击输入训练主题">
                </td>
                <td class="two">
                  <div style="justify-content: flex-start;">
                    <span>队员年龄:</span>
                    <input class="rightMA" type="text" placeholder="点击输入队员年龄">
                  </div>
                  <div>
                    <span>参与人数:</span>
                    <input type="text" placeholder="点击输入参与人数">
                  </div>
                  <div style="justify-content: flex-start;"> 
                    <span>训练天气:</span>
                    <input class="rightMA" type="text" placeholder="点击输入训练天气">
                  </div>
                  <div>
                      <span>训练时长:</span>
                      <input type="text" placeholder="点击输入训练时长">
                  </div>
                  
                  
                 
                  
                </td>
                <td class="three">
                  <span>训练目标是否实现:</span>
                  <input type="text">
                </td>
                <td class="three cal">
                  <input type="text" class="wordTwo">
                  <input type="text">
                </td>
                <td class="four">
                  <span class="fl">实践感受:</span>
                  <textarea class="fl" placeholder="点击输入时间感受" v-model="feel"></textarea>
                </td>
                <td class="five">
                  <span class="fl" style="text-indent: .22rem">改进点:</span>
                  <textarea class="fl" placeholder="点击输入改进点" v-model="modified"></textarea>
                </td>
              </tr>
          </table>
    </form>

        </div>
      <div class="web-selectvaluation-rightBox">
        <div class="web-selectvaluation-right">
          <div class="web-selectvaluation-row">
            <div class="row1">
              <div class="cal ">
                <span>组织能力:</span>
                <mu-select label="" color="#182942" v-model="organization" full-width>
                    <mu-option v-for="option in options1" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
              </div>
              <div class="cal cal2 ">
                <span>沟通能力:</span>
                <mu-select label="" color="#182942" v-model="communication" full-width>
                    <mu-option v-for="option in options1" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
            </div>
            <div class="row1">
              <div class="cal">
                <span>激励能力:</span>
                <mu-select label="" color="#182942" v-model="stimulate" full-width>
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
              <div class="cal cal2">
                <span>时间管理:</span>
                <mu-select label="" color="#182942" v-model="time_management" full-width>
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
            </div>
            <div class="row1">
              <div class="cal">
                <span>观察能力:</span>
                <mu-select label="" color="#182942" v-model="observational" full-width>
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
              <div class="cal cal2">
                <span>提问引导:</span>
                <mu-select label="" color="#182942" v-model="probe" full-width>
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
            </div>
            <div class="row1">
              <div class="cal">
                <span>应变能力:</span>
                <mu-select label="" color="#182942" v-model="strain_capacity" full-width>
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
              <div class="cal cal2">
                <span style="margin-left: .23rem;">幽默感:</span>
                <mu-select label="" color="#182942" v-model="humor" full-width>
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> 
              </div>
            </div>
          </div>
          <div class="but_user" @click="setClassDetail">确定</div>
        </div>
      </div>
      
    </div>

  </div>
</template>
<script>
    export default {
        name: "selectEvaluation",
        data() {
          return {
            options1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            options: [1,2,3,4,5,6,7,8,9,10],
            feel: '',	// 	实地感受
            modified:	'',//..	改进点
            organization:	'',// 	组织能力
            communication:	'',// 	沟通能力
            stimulate:	'',// 	激励能力
            time_management:	'',// 	时间管理
            observational:'',	// 	观察能力
            probe:	'',// 	提问引导
            strain_capacity:	'',//应变能力
            humor:	'',// 	幽默感
          }
        },
        methods: {
          /**@name获取评论详情 */
          getClassDetail(){
             this.$loading('');
            this.$http.get(this.$conf.env.getClassDetail + this.$route.params.data.status+ '/').then( res =>{
              this.$loading.close()

              this.setElements(res.data.name, 0)//训练主题
              this.setElements(res.data.student_age, 1)// 	队员年龄
              this.setElements(res.data.num, 2);// 	参与人数
              this.setElements(res.data.weather, 3);// 	训练天气
              this.setElements(res.data.practice_time, 4);// 	训练时长
              this.setElements(res.data.realize1, 5);// 	训练目标是否实现1
              this.setElements(res.data.realize2, 6);// 	训练目标是否实现2
              this.setElements(res.data.realize3, 7);//	训练目标是否实现3
              this.feel = res.data.feel; 	// 	实地感受
              this.modified = res.data.modified; //..	改进点
              this.organization = res.data.organization; // 	组织能力
              this.communication = res.data.communication; // 	沟通能力
              this.stimulate = res.data.stimulate; // 	激励能力
              this.time_management = res.data.time_management; // 	时间管理
              this.observational = res.data.observational; // 	观察能力
              this.probe = res.data.probe; // 	提问引导
              this.strain_capacity = res.data.strain_capacity; //应变能力
              this.humor = res.data.humor; // 	幽默感
            }).catch(err =>{
              this.$loading.close()
              this.$toast.center('服务器错误');
            })
          },
          /**@name自评创建 */
          setClassDetail(){
            if(!this.VerificationData()) return
            this.$loading('');
            var params = {
              'course_time': this.$route.params.data.id,	// 	课表id
              'name':	this.getElements('formData')[0],// 	训练主题
              'student_age': this.getElements('formData')[1],	// 	队员年龄
              'num': this.getElements('formData')[2],	// 	参与人数
              'weather':	 this.getElements('formData')[3],// 	训练天气
              'practice_time': this.getElements('formData')[4],	// 	训练时长
              'realize1':	 this.getElements('formData')[5],// 	训练目标是否实现1
              'realize2':	 this.getElements('formData')[6],// 	训练目标是否实现2
              'realize3':	 this.getElements('formData')[7],//	训练目标是否实现3
              'feel': this.feel,	// 	实地感受
              'modified':	this.modified,//..	改进点
              'organization':	 this.organization,// 	组织能力
              'communication':	this.communication,// 	沟通能力
              'stimulate':	this.stimulate,// 	激励能力
              'time_management':	this.time_management,// 	时间管理
              'observational':this.observational,	// 	观察能力
              'probe':	this.probe,// 	提问引导
              'strain_capacity':	this.strain_capacity,//应变能力
              'humor':	this.humor,// 	幽默感
            }
            this.$http.post(this.$conf.env.getClassDetail, params).then( res =>{
              this.$loading.close()
              this.$toast.center('评价成功')
            console.log(res)
            }).catch(err =>{
               this.$loading.close()
               if(err.response.status == '400'){
                  this.$toast.center('您已经评价过了呢')
               }else{
                  this.$toast.center('服务器错误')
               }
            })
          },
          getElements(formId) {    
              var form = document.getElementById(formId);    
              var elements = new Array();    
              var tagElements = form.getElementsByTagName('input');    
              for (var j = 0; j < tagElements.length; j++){ 
                  elements.push(tagElements[j].value);
              }  
              return elements;    
          },
          setElements(data, index){
            var form = document.getElementById('formData');   
            var tagElements = form.getElementsByTagName('input');
            tagElements[index].value = data
          },
          VerificationData(){
            if(!this.feel || !this.modified || !this.organization|| !this.communication|| !this.stimulate|| !this.time_management|| !this.observational|| !this.probe|| !this.strain_capacity||!this.humor){
              this.$toast.center('请完善您的信息')
              return false
            }else{
                if(!this.getElements('formData')[0] || !this.getElements('formData')[1] || !this.getElements('formData')[2] || !this.getElements('formData')[3] || !this.getElements('formData')[4] || !this.getElements('formData')[5] || !this.getElements('formData')[6]|| !this.getElements('formData')[7]){
                  this.$toast.center('请完善您的信息')
                  return false
                }else{
                  return true
                }
            }
            

          }
        },
        mounted() {
          console.log(this.$route.params.data.id)
          this.$route.params.data.status != '未上' ||  this.$route.params.data.status != '未自评'? this.getClassDetail() : ''
        },
    }
</script>

<style lang="scss">

  .web-selectevaluation-user-box{
    width: calc(100% - 1.4rem);
    height:100%;
    float: left;
    padding:.22rem .2rem .2rem .18rem;
    box-sizing: border-box;
    .web-selectevaluation-box{
      width: 100%;
      height:100%;
      background:linear-gradient(0deg,rgba(11,27,51,1) 0%,rgba(30,61,93,1) 100%);
      opacity:0.8;
      border-radius:3px;
      padding:.3rem .062rem .24rem .34rem;
      box-sizing: border-box;
      display: flex;

      .web-selectevaluation-left{
        width: 57.6%;
        height: 100%;
        table{
          width: 100%;
          height:100%;
          tr{
            td{
              display: flex;
              align-items: center;
              margin-bottom:.17rem;
              span{
                font-size:.2rem;
                font-family:SimHei;
                color:rgba(160,188,223,1);
                margin-right: 1%;
              }
              input{
                height:.4rem;
                font-size:.2rem;
                color:rgba(74,99,129,1);
                line-height:.472rem;
                text-indent: .18rem;
                background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                outline: none;
              }
            }
            .one{
              input{
                flex: 1;
              }
            }
            .two{
              flex-wrap: wrap;
              display: flex;
              justify-content: space-between;
              div{
                width: 50%;
                display: flex;
                justify-content: flex-end;
              }
              input{
                width: 63%;
                background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                margin-bottom: .17rem;
                
              }
              .rightMA{
                width: 58%;
                margin-right: 5%;
              }
            }
            .three{
              input{
                width: 45%;
              }
              .wordTwo{
                margin-right: 9%;
              }
            }
            .four{
              display: flex;
              overflow: hidden;
              justify-content: space-between;
              textarea{
                font-size:.22rem;
                color:rgba(74,99,129,1);
                text-indent: .18rem; background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                outline: none;
                /*width: 1.5rem;*/
                height: 1.2rem;
                width: 81.5%;
              }
            }
            .five{
              display:  flex;
              overflow: hidden;
              justify-content: space-between;
              textarea{
                font-size:.22rem;
                color:rgba(74,99,129,1);
                text-indent: .18rem; background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                outline: none;
                /*width: 1.5rem;*/
                height: 1.392rem;
                width: 81.5%;
              }
            }
          }
        }
      }
      .web-selectvaluation-rightBox{
        flex: 1;
        width: 40%;
        .web-selectvaluation-right{
          height:100%;
          padding:1.076rem 0 0 .424rem;
          box-sizing: border-box;
          display: flex;
          position: relative;
          .mu-input.full-width{
                width: .75                                                                                                                                                                                    rem;
                height: .41rem;
                background: #182942;
                min-height: auto;
                margin: 0;
                padding: 0;
            }
            .mu-select-input{
                font-size: .2rem;
                color: #a0bcdf;
                padding-left: .1rem;
            }
            .mu-select-action{
                display: none;
            }
          .web-selectvaluation-row{
            width: 4.43rem;
            height:2.6rem;
            display: flex;
            flex-wrap: wrap;
            .row1{
              display: flex;
              justify-content: flex-start;
              width: 100%;
              .cal{
                display: flex;
                align-items: center;
                  margin-right: .3rem;

                span{
                  white-space: nowrap;
                  font-size:.22rem;
                  font-family:SimHei;
                  color:rgba(160,188,223,1);
                  margin-right: .1rem;
                }
                input{
                  width: .8rem;
                  height: .44rem;
                  background:rgba(24,41,66,1);
                  border:1px solid rgba(49,83,122,1);
                  border-radius:1px;
                  outline: none;
                }
              }
              .cal2{
                margin-right: 0;
                input{
                  margin-right: 0;
                }
              }
            }
          }
          .but_user{
            position: absolute;
            width:2rem;
            height:.56rem;
            background: red;
            right: 0.72rem;
            bottom: 0;
            background: url("../../assets/img/ok.png") no-repeat;
            background-size: cover;
            font-size:.24rem;
            font-family:SimHei;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height: .56rem;
            text-align: center;
          }
        }
      }
    }
  }

</style>
