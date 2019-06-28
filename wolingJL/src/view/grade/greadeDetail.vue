<template>
    <div class="grade_Detail">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="scroll">
            <div class="main">
                <form action method="post" id="formData">
                <div class="main_list">
                    
                    <header><img class="oneImg" src="../../assets/img/football.png" />运动能力</header>
                    <div class="main_form">
                        <div>
                            <span>强壮身体:</span>
                            <mu-select label="" color="#182942" v-model="normal.value1" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>速度:</span>
                            <mu-select label="" color="#182942" v-model="normal.value2" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>动作评率:</span>
                            <mu-select label="" color="#182942" v-model="normal.value3" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i ><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        
                        <div>
                            <span>耐力:</span>
                            <mu-select label="" color="#182942" v-model="normal.value4" full-width>
                                <mu-option v-for="(option, index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>爆发力:</span>
                            <mu-select label="" color="#182942" v-model="normal.value5" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.5rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>协调性:</span>
                            <mu-select label="" color="#182942" v-model="normal.value6" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                            
                             <i style="right:.5rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>灵活:</span>
                            <mu-select label="" color="#182942" v-model="normal.value7" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>平衡:</span>
                            <mu-select label="" color="#182942" v-model="normal.value8" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                    </div>
                </div>
                <div class="main_list">
                    <header><img src="../../assets/img/foot.png" />技术能力</header>
                    <div class="main_form">
                        <div>
                            <span>压力控球:</span>
                            <mu-select label="" color="#182942" v-model="normal.value9" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>第一触球:</span>
                            <mu-select label="" color="#182942" v-model="normal.value10" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>短传:</span>
                            <mu-select label="" color="#182942" v-model="normal.value11" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>长传:</span>
                            <mu-select label="" color="#182942" v-model="normal.value12" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>盘带:</span>
                            <mu-select label="" color="#182942" v-model="normal.value13" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>1v1进攻:</span>
                            <mu-select label="" color="#182942" v-model="normal.value14" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: 0.35rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>1v1防守:</span>
                            <mu-select label="" color="#182942" v-model="normal.value15" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: .35rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>铲球上抢:</span>
                            <mu-select label="" color="#182942" v-model="normal.value16" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>头球:</span>
                            <mu-select label="" color="#182942" v-model="normal.value17" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>逆足:</span>
                            <mu-select label="" color="#182942" v-model="normal.value18" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>远射:</span>
                            <mu-select label="" color="#182942" v-model="normal.value19" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>定位球:</span>
                            <mu-select label="" color="#182942" v-model="normal.value20" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: 0.52rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>射门:</span>
                            <mu-select label="" color="#182942" v-model="normal.value21" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>转身技术:</span>
                            <mu-select label="" color="#182942" v-model="normal.value22" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        
                    </div>
                </div>
                <div class="main_list">
                    <header><img src="../../assets/img/medallic.png"/> 战术意识能力</header>
                    <div class="main_form">
                        <div>
                            <span>组织能力:</span>
                            <mu-select label="" color="#182942" v-model="normal.value23" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>位置感:</span>
                            <mu-select label="" color="#182942" v-model="normal.value24" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: 0.52rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>提前观察:</span>
                            <mu-select label="" color="#182942" v-model="normal.value25" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                            
                             <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>视野:</span>
                            <mu-select label="" color="#182942" v-model="normal.value26" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>无球跑动:</span>
                            <mu-select label="" color="#182942" v-model="normal.value27" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>阅读比赛:</span>
                            <mu-select label="" color="#182942" v-model="normal.value28" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>攻守转换:</span>
                            <mu-select label="" color="#182942" v-model="normal.value29" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>盯人:</span>
                            <mu-select label="" color="#182942" v-model="normal.value30" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>补位保护:</span>
                            <mu-select label="" color="#182942" v-model="normal.value31" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>决断:</span>
                            <mu-select label="" color="#182942" v-model="normal.value32" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                            
                             <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        
                    </div>
                </div>
                <div class="main_list">
                    <header><img src="../../assets/img/spirit.png"/>精神属性</header>
                    <div class="main_form">
                        <div>
                            <span>影响力:</span>
                            <mu-select label="" color="#182942" v-model="normal.value33" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: 0.52rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>创造力:</span>
                            <mu-select label="" color="#182942" v-model="normal.value34" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                            
                             <i style="right: 0.52rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>战斗精神:</span>
                            <mu-select label="" color="#182942" v-model="normal.value35" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>压力抵抗:</span>
                            <mu-select label="" color="#182942" v-model="normal.value36" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>团队合作:</span>
                            <mu-select label="" color="#182942" v-model="normal.value37" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>专注度:</span>
                            <mu-select label="" color="#182942" v-model="normal.value38" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: 0.52rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>侵略性:</span>
                            <mu-select label="" color="#182942" v-model="normal.value39" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right:.5rem"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>稳定状态:</span>
                            <mu-select label="" color="#182942" v-model="normal.value40" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>体育精神:</span>
                            <mu-select label="" color="#182942" v-model="normal.value41" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>执行力:</span>
                            <mu-select label="" color="#182942" v-model="normal.value42" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i style="right: 0.52rem;"><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        
                    </div>
                </div>
                <div class="main_list main_list_there">
                    <header><img src="../../assets/img/spirit.png"/>位置与综合评价</header>
                    <div class="main_form">
                        <div>
                            <span>力量:</span>
                            <mu-select label="" color="#182942" v-model="normal.value43" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>速度:</span>
                            <mu-select label="" color="#182942" v-model="normal.value44" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>传球:</span>
                            <mu-select label="" color="#182942" v-model="normal.value45" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>盘带:</span>
                            <mu-select label="" color="#182942" v-model="normal.value46" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>射门:</span>
                            <mu-select label="" color="#182942" v-model="normal.value47" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>防守:</span>
                            <mu-select label="" color="#182942" v-model="normal.value48" full-width>
                                <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>意识:</span>
                            <mu-select label="" color="#182942" v-model="normal.value49" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                            <i><img src="../../assets/img/arrows.png" alt=""></i>
                        </div>
                        <div>
                            <span>精神:</span>
                            <mu-select label="" color="#182942" v-model="normal.value50" full-width>
                                <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>                             
                                <i style="right:.75rem"><img src="../../assets/img/arrows.png" alt=""></i>                            
                        </div>
                        <div class="textData">
                            <span>备注:</span>
                            <textarea name=""  cols="30" rows="10" v-model="normal.value51"></textarea>
                             <span class="submitButton" @click="SetScoreList">确定</span>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        </div>
        
    </div>
</template>
<script>
import headerTitle from "../../components/header";
export default {
     components:{headerTitle},
    data(){
        return{
            headerTitle: this.$route.params.data.name,
            options: [1,2,3,4,5],
            normal: {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: '',
                value14: '',
                value15: '',
                value16: '',
                value17: '',
                value18: '',
                value19: '',
                value20: '',
                value21: '',
                value22: '',
                value23: '',
                value24: '',
                value25: '',
                value26: '',
                value27: '',
                value28: '',
                value29: '',
                value30: '',
                value31: '',
                value32: '',
                value33: '',
                value34: '',
                value35: '',
                value36: '',
                value37: '',
                value38: '',
                value39: '',
                value40: '',
                value41: '',
                value42: '',
                value43: '',
                value44: '',
                value45: '',
                value46: '',
                value47: '',
                value48: '',
                value49: '',
                value50: '',
                value51: '',

            }
        }
    },
    methods: {
        SetScoreList(){
            if(!this.VerificationData())return 
            this.$loading('');
            var params = {
                    "course_ability":[
                        {
                            "user": this.$route.params.data.id,
                            "strong": this.normal.value1,
                            "speed": this.normal.value2,
                            "hz": this.normal.value3,
                            "endurance": this.normal.value4,
                            "power": this.normal.value5,
                            "harmony": this.normal.value6,
                            "agility": this.normal.value7,
                            "balance": this.normal.value8,
                            //计算技能
                            "trap": this.normal.value9,
                            "first_touch": this.normal.value10,
                            "short_pass":this.normal.value1,
                            "long_pass": this.normal.value12,
                            "taping": this.normal.value13,
                            "shoot": this.normal.value21,//射门
                            "attack": this.normal.value14,
                            "defense": this.normal.value15,
                            "turn_back": this.normal.value22,//转身技术
                            "tackle": this.normal.value16,
                            "header": this.normal.value17,
                            "inverse": this.normal.value18,
                            "long_shot": this.normal.value19,
                            "place_kick": this.normal.value20,
                            "organizing_ability": this.normal.value23,
                            "location": this.normal.value24,
                            "observe": this.normal.value25,
                            "view": this.normal.value26,
                            "running": this.normal.value27,
                            "reading": this.normal.value28,
                            "transition": this.normal.value29,
                            "marking": this.normal.value30,
                            "independent": this.normal.value31,
                            "resolve": this.normal.value32,
                            "influence": this.normal.value33,
                            "creativity": this.normal.value34,
                            "fighting": this.normal.value35,
                            "stress_ability": this.normal.value36,
                            "teamwork": this.normal.value37,
                            "execution": this.normal.value42,//执行力
                            "concentration": this.normal.value38,
                            "aggressive":this.normal.value39,
                            "steady": this.normal.value40, 
                            "sportsmanship":  this.normal.value41,
                            "strength": this.normal.value43,
                            "speed2": this.normal.value44,
                            "pass_boll": this.normal.value45,
                            "taping2": this.normal.value46,
                            "shots": this.normal.value47,
                            "defend": this.normal.value48,
                            "awareness": this.normal.value49,
                            "mind": this.normal.value50,
                            "comment": this.normal.value51,
                            "course": this.$route.params.selfClassId              
                      }
                    ]
                }
            this.$http.put(this.$conf.env.getScoreList + this.$route.params.selfClassId + '/', params).then( res =>{
                console.log(res)
                this.$loading.close()
                this.$toast.center('提交成功'); 
            }).catch(err =>{
                console.log(err)
                this.$loading.close()
                this.$toast.center('服务器错误'); 
            })
        },
        VerificationData(){
            for(let i = 0 ; i < this.getElements('formData').length - 1; i++){
                console.log(this.getElements('formData')[i])
                if(!this.getElements('formData')[i]){
                    this.$toast.center('请完善您的信息'); 
                    return false
                }else{
                    return true
                }
            }
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
    },
    mounted() {
        console.log(this.$route.params.data.id)
        console.log('this.$route.params.selfClassId', this.$route.params.selfClassId);
        
    },
}
</script>
<style lang="scss" >
    .grade_Detail{
        background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
        width: 100%;
        height:100%;
        padding-bottom: .37rem;
        .scroll{
            height: 100%;
            overflow-y: scroll;
            padding-bottom: .27rem;
            .main{
                margin: .18rem;
                height: auto;
                width: calc(100% - .36rem);
                background: rgba(35, 65, 101,0.5);
                border-radius: .05rem;
                padding: .21rem;
                padding-bottom: 0;
                .main_list{
                    width: 100%;
                    height: auto;
                    overflow: hidden;
                    // background: orangered;
                    margin-bottom: .17rem;
                    header{
                        font-size: .21rem;
                        color: #00e4ff;
                        img{
                            // width: .53rem;
                            margin-left: .22rem;
                            height: .38rem;
                            float: left;
                            margin-right: .07rem;
                        }
                        .oneImg{
                            margin-left: 0;
                        }
                    }
                    .main_form{
                        display: flex;
                        flex-wrap: wrap;
                        padding-top: .24rem;
                        float: left;
                        padding-left: .43rem;
                        span{
                            font-size: .2rem;
                            color: #a0bcdf;
                            margin-right: .12rem;
                        }
                        
                    }
                    
                }
                .main_list_there{
                    i{
                        right:.75rem !important; 
                    }
                }
                .main_form>div{
                    width: 2.21rem;
                    margin-right: .2rem;
                    margin-bottom: .17rem;
                    height: .4rem;
                    display: flex;
                    position: relative;
                    // border:1px solid #ccc;
                    i{
                        display: block;
                        width: .21rem;
                        height: .09rem;
                        position: absolute;
                        right: 0.3rem;
                        bottom: 0.35rem;
                        img{
                            width: 100%;
                        }
                    }
                    select{
                        background: #182942;
                        border: 1px solid #182942;
                        width: .71rem;
                        height: .41rem;
                    }
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
                }
                 .textData{
                        width: 100%!important;
                        height: auto!important;
                        textarea{
                            width: 8.63rem;
                            height: 1.25rem;
                            border: 1px solid #31537a;
                            background: #182942;
                            font-size: .2rem;
                            color: #a0bcdf;
                        }
                        .submitButton{
                            display: block;
                            width: 2rem;
                            height: .56rem;
                             background: url(../../assets/img/ok.png)  0 0 / 100% 100% ;
                             font-size: .22rem !important;
                             color:#ffffff !important;
                             text-align: center;
                             line-height: .56rem;
                             border-radius: .08rem;
                             margin-top: .73rem;
                             margin-left: .23rem;
                        }
                    }
            }
        }
        .scroll::-webkit-scrollbar {
            display: none;
        }
        
    }
</style>
