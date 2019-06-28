<template>
    <div class="evaluation_timetable">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <mianList @goDetail='goevaluationDetail' :loading='loading' :tableList='tableList' :refreshing='refreshing'  :isLoaded='isLoaded'/>
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
import mianList from '../../components/mainList';
import store from "../../store/index";
export default {
    components:{headerTitle, mianList},
    data(){
        return{
            headerTitle: '自评',

            tableList: [],//数据列表
            loading: false,//全屏Loading
            isLoaded: true,//下拉加载
            refreshing: false,//上拉刷新
        } 
    },
    methods: {
        goevaluationDetail(data){
            this.$store.commit("changeclassSelfData",data)
            this.$router.push({name:'evaluationDetail'})
        },
        /**@name自评列表 */
        getClassSelfList(){
           this.$http.get(this.$conf.env.getClassSelfList).then( res =>{
            this.$loading.close()
            console.log(res)
            this.tableList = res.data
           }).catch(err =>{
               this.$loading.close()
                this.$toast.center('服务器错误');
           })
        }
    },
    mounted() {
        this.$loading('');
        this.getClassSelfList()
    },
}
</script>
<style lang="scss">
.evaluation_timetable{
    width: 100%;
    height: 100%;
    background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
    .main{
        margin: .18rem;
        height: calc(100% - 1rem);
        width: calc(100% - .36rem);
        background: rgba(35, 65, 101,0.5);
        border-radius: .05rem;
        padding: .16rem .21rem;
        overflow-y: scroll;
        ul{
            li{
                margin-right: .21rem ;
                border-radius: .05rem;
                overflow: hidden;
            }
        }

    }
    .main::-webkit-scrollbar {
        display: none;
    }
}
</style>
