
<template>
    <div class="grade_index">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <sideBar :leftList='leftList' @change="getScoremainList" :setIndex='setIndex'/>
            <div class="selete_main">
                <mianList @goDetail='goGradeDetail'  :loading='loading' :tableList='tableList' @getClassList='getScoreList' :refreshing='refreshing'   :isLoaded='isLoaded'/>
            </div>
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
import sideBar from "../../components/sidebar"
import mianList from '../../components/mainList'
export default {
    name:'gradeIndex',
    components:{headerTitle, sideBar, mianList},
    data(){
        return{
            headerTitle: '评分',
            leftList:[],
            tableList: [],//数据列表
            loading: false,//全屏Loading
            isLoaded: true,//加载完毕
            refreshing: false,//上拉刷新
            setIndex:0,
            dataList: [],
            selfClassId: '',
        }
    },
    methods:{
        activeList(data){
            
        },
        goGradeDetail(data){
            this.$router.push({name:'gradeDetail',params: {data: data,selfClassId:this.selfClassId}})
        },
        /**@name获取评分班级学生 */
        getScoreList(){
            this.$http.get(this.$conf.env.getScoreList).then( res =>{
                this.$loading.close()
                this.refreshing = false;
                if(!res.data || res.data.length == 0 ) {
                 this.$toast.center('暂时没有数据呢'); 
                
                }else{
                    var obj = {}; var arr = []
                    res.data.forEach( (Element, index) =>{
                        Element.index = index
                        obj = {'id': Element.id, 'name': Element.name }
                        arr.push(obj)
                        Element.students.forEach(element =>{
                            element.front_image = element.image
                            element.id = element.user_id
                            delete element.image
                            delete element.user_id
                        })
                    })
                    this.dataList = res.data
                    this.leftList = arr
                    this.selfClassId = res.data[0].id
                    this.getScoremainList({'item': res.data[0],'index': res.data[0].index})
                }
                
            }).catch(err =>{
                this.$toast.center('服务器错误');
                this.refreshing = false;
                this.$loading.close()
            })
        },
        getScoremainList(data){
            if(this.dataList[data.index].students.length == 0){
                 this.$toast.center('暂时没有数据呢'); 
            }
            this.headerTitle = data.item.name + '评分'
            this.setIndex = data.index
            this.selfClassId = data.item.id
            this.tableList = this.dataList[data.index].students
        }
    },
    mounted(){
        this.$loading('');
        this.getScoreList()
    }
}
</script>
<style lang="scss" >
    .grade_index{
        background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
        width: 100%;
        height:100%;
        
        .main{
            width: 100%;
            height: calc(100% - .64rem);
            overflow: hidden;
           .selete_main{
               padding: .4rem .4rem .38rem .5rem;
               width: calc(100% -  1.4rem);
               float: left;
               height: 100%;
               overflow-y: scroll;
               
           }
           .selete_main::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>
