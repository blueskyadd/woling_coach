
<template>
    <div class="student_Detail">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <sideBar :leftList='leftList' @change="getStudentList" :setIndex='setIndex'/>
            <div class="selete_main" >
                <mianList  :loading='loading' :tableList='tableList' :refreshing='refreshing'  @getClassList = 'getSclassList' :isLoaded='isLoaded'/>
            </div>
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
import sideBar from "../../components/sidebar"
import mianList from '../../components/mainList'
export default {
    components:{headerTitle, sideBar, mianList},
    data(){
        return{
            headerTitle: '学员',
            leftList:[],
            tableList: [],//数据列表
            loading: false,//全屏Loading
            isLoaded: true,//加载完毕
            refreshing: false,//上拉刷新
            setIndex:0
        }
    },
    methods: {
        activeList(data){
            this.headerTitle = data.item.name
            this.setIndex = data.index
        },
        /**@name获取班级名称列表 */
        getSclassList(num){
            this.$http.get(this.$conf.env.getSclassList).then( res =>{
                if(!res.data || res.data.length == 0) {
                 this.$toast.center('暂时没有数据呢'); 
                 this.$loading.close()
                }else{
                    alert('ffas ')
                   res.data.forEach( (Element, index) =>{
                        Element.index = index
                    })

                    this.getStudentList({'item': res.data[0], 'index': res.data[0].index})
                    this.leftList = res.data 
                }
            }).catch(err =>{
                console.log(err)
                this.$loading.close()
                this.$toast.center('服务器错误');
            })
        },
        getStudentList(data){
            this.$loading('');
            this.headerTitle = data.item.name + '学员'
            this.setIndex = data.index
            this.$http.get(this.$conf.env.getStudentList + data.item.id).then( res =>{
            this.$loading.close()
            console.log(res)

            res.data.forEach(element =>{
                element.front_image = element.image
                element.id = element.user_id
                delete element.image
                delete element.user_id
            })
            this.tableList = res.data
            }).catch(err =>{
                this.$loading.close()
            })
        }

    },
    mounted(){
        this.$loading('');
        this.getSclassList(1)
    }
}
</script>
<style lang="scss" >
    .student_Detail{
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
