<template>
    <div class="Gradetail">
        <mianList @goDetail='goGradeDetail'  :loading='loading' :tableList='tableList'  :refreshing='refreshing'   :isLoaded='isLoaded'/>
    </div>
</template>
<script>
import mianList from '../../components/mainList'
export default {
    name: 'exerciseGrade',
     components:{mianList},
       props:{
            setIndex:{
                type: Number,
                required: true 
            },
            htmlUrl:{
                type: String,
                required: true
            }
        },
     data(){
        return{
            headerTitle: '评分',
            leftList:[],
            tableList: [],//数据列表
            loading: false,//全屏Loading
            isLoaded: true,//加载完毕
            refreshing: false,//上拉刷新
            // setIndex:0,
            dataList: [],
            selfClassId: '',
        }
    },
    methods: {
        goGradeDetail(data){
            this.$loading('');
            this.$http.get(this.$conf.env.getVideo_course + data.id + '&video__course=' + this.selfClassId).then( res =>{
                console.log(res)
                this.$loading.close()
                res.data=[
                    {
                            "id": 4,
                            "name": "甜甜",
                            "date": "6月28日",
                            "file": "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8",
                            'image':'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
                    },
                ]
                if(!res.data || res.data .length == 0){
                    this.$toast.center('暂无数据');
                }else{
                    this.leftList = res.data
                    this.$emit('changeStudentVideo', {'data':res.data,'name':data.name} )
                }
            }).catch(err =>{
                this.$loading.close()
                this.$toast.center('服务器错误');
            })

        },
        getExerciseList(){
            
            this.$http.get(this.$conf.env.getExerciseList).then( res =>{
            console.log(res)
             this.$loading.close()
                this.refreshing = false;
                if(!res.data || res.data.length == 0) {
                 this.$toast.center('暂时没有数据呢'); 
                
                }else{
                    console.log('sasdasd');
                    
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
                    this.$emit('changeTitle', this.leftList)
                    this.selfClassId = res.data[0].id
                    this.getExerciseListData({'item': res.data[0],'index': this.setIndex})
                }
            }).catch(err =>{
                console.log(err)
                this.$toast.center('服务器错误');
                this.refreshing = false;
                this.$loading.close()
            })
        },
         getExerciseListData(data){
            this.setIndex = data.index
            this.selfClassId = data.item.id
            this.tableList = this.dataList[data.index].students
        }
    },
    mounted() {
        console.log(this.setIndex)
         this.$loading('');
         this.$emit('changeisGrade',true)
        this.getExerciseList()
    },
}
</script>
<style lang="scss" scoped>
.Gradetail{
    padding: .42rem;
}
</style>
