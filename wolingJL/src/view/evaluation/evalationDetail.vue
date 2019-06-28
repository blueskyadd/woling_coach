<template>
    <div class="evaluation_evaluationDetail">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <mu-paper :z-depth="1" class="demo-loadmore-wrap list">
                <mu-container ref="container" class="demo-loadmore-content">
                    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" :loaded-all='isLoaded'>
                        <ul>
                            <li  @click="goEditTable(item)" v-for="item in tableList" :key="item.id" v-show="item.status != '未上'">
                                <div   class='mainLeft_img'>
                                    <img src="../../assets/img/selfImg.jpg" alt="">
                                    <div class="mainRight">
                                        <h3>{{$store.state.evalation.classSelfData.name}}</h3>
                                        <div><span>主教练:</span><p>{{item.coach}}</p><span>副教练:</span><p>{{item.assistant_coach}}</p></div>
                                        <div class="classTime"><span>上课时间:</span><p>{{item.start_time}}</p>><p>-{{item.end_time}}</p></div>
                                        <div class="classUp"><span>上课地址:</span><p>{{item.address}}</p></div>
                                    </div>
                                    <span class="textLing" v-if="item.status !=  '未上' ||  item.status !=  '未自评'">已自评</span>
                                </div>
                            </li>
                        </ul>
                    </mu-load-more> 
                </mu-container>
            </mu-paper>
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
import mianList from '../../components/mainList';
import store from "../../store/index";
export default {
    name:'evaluationDetail',
    components:{headerTitle, mianList},
    data(){
        return{
            headerTitle: '自评',
            tableList: [],//数据列表
            loading: false,//全屏Loading
            isLoaded: false,//加载完毕
            refreshing: false,//上拉刷新
            number: '',
        }
    },
    methods: {
        goEditTable(item){
            this.$router.push({name:'evaluation', params:{data: item}})
        },
        /**@name课程列表 */
        getClassTimeList(num){
            this.$http.get(this.$conf.env.getClassTimeList + this.$store.state.evalation.classSelfData.id).then( res =>{
                 this.$loading.close()
                 if(res.data.count > 0 && res.data.results){
                     num == 1 ?  this.tableList = res.data.results : this.tableList = this.tableList.concat(res.data.results)
                 }else{
                   this.isLoaded = true
                    var text = num == 1 ? '暂时没有数据呢':'已加载全部数据'
                    this.$toast.center(text);
                    return
                 }
            }).catch(err =>{
                console.log(err)
                this.isLoaded = true
                this.refreshing = false;
                this.$loading.close()
                this.loading = false
                this.$toast.center('服务器错误');
            })
        },
        refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            },
        load() {
            this.number += 1
            this.loading = true;
            this.getClassTimeList(this.number)
        },
    },
    mounted(){
        this.$loading('');
        this.getClassTimeList()
    }
}
</script>
<style lang="scss">
.evaluation_evaluationDetail{
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
        @media (min-width: 1200px){
            .container {
                max-width: initial;
            }
        }
        @media (min-width:  992px){
            .container {
                max-width: initial;
            }
        }
        @media (min-width:  768px){
            .container {
                max-width: initial;
            }
        }
        @media (min-width: 576px){
            .container {
                max-width: initial;
            }
        }
         .container {
            margin: 0;
            padding: 0;
        }
        .mu-paper{
            background: none !important;
            box-shadow: none !important;
        }
        ul{
            display: flex; 
            flex-wrap: wrap;
            li{
                width: 6.227rem;
                height: 1.48rem;
                margin-right: .14rem;
                margin-bottom: .1rem;
                border-radius: .05rem;
                background: #271947 url(../../assets/img/selfBg.png )  0 0 / 100% 100% ;
                padding: .15rem .14rem;
                position: relative;
                .mainLeft_img{
                    width: 100%;
                    height: 100%;
                    img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: .04rem;
                        float: left;
                    }
                    .textLing{
                        position: absolute;
                        right: .15rem;
                        top: .1rem;
                        font-size: .12rem;
                        padding: 0.03rem .1rem;
                        line-height: .2rem;
                        background: #e60051;
                        font-family: SimHei;
                        border-radius: .04rem;
                        color: #fadfe5;
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
                            font-size: .12rem;
                            color: #7da1cd;
                            line-height: .3rem;
                            font-family: SimHei; 
                            span{
                                display: block;
                                float: left;
                                margin-right: .1rem;
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
                        
                    }
                }

            }
        }
        

    }
    .mu-popover{
        width: 1.5rem !important;
        background-color: #213d60 !important;
        color: #6b84a8 !important;
        .mu-item{
           color: #6b84a8 !important;
        }
    }
    .main::-webkit-scrollbar {
        display: none;
    }
}
</style>
