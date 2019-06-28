<template>
    <div class="web-assessAll-box">
      <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="web-assessAll-menu">
          <sideBar :leftList='leftList' @change="getAccessmainList" :setIndex='setIndex'/>
          <div class="web-assessAll-cont">
            <mianList @goDetail='goassessAllDetail' :loading='loading' :tableList='tableList' @getClassList='getAccessList' :refreshing='refreshing'   :isLoaded='isLoaded'/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import sideBar from "../../components/sidebar"
    import mianList from '../../components/mainList'
    import headerTitle from "../../components/header";
    export default {
        name: "assessAll",
      components: {mianList, sideBar, headerTitle},
      data(){
          return{
            classList:{},
            headerTitle:'考核',
            leftList:[],
            tableList: [],//数据列表
            loading: false,//全屏Loading
            isLoaded: true,//加载完毕
            refreshing: false,//上拉刷新
            setIndex:0,
            dataList: [],
            selfClassId: ''
          }
      },
      methods:{
        goassessAllDetail(data){
          this.$router.push({name: 'assess',params:{data:data, selfClassId:this.selfClassId}})
        },
        /**@name 获取考评列表 */
        getAccessList(){
          this.$http.get(this.$conf.env.getAccessList).then( res =>{
             this.$loading.close()
              this.refreshing = false;
              if(!res.data || res.data.length == 0) {
                 this.$toast.center('暂时没有数据呢'); 
                }else{
                  var obj = {}; var arr = []
                  res.data.forEach( (Element, index) =>{
                      Element.index = index
                      obj = {'id': Element.id, 'name': Element.name }
                      arr.push(obj)
                      Element.users.forEach(element =>{
                          element.front_image = element.picture
                          delete element.image
                      })
                  })
                  this.dataList = res.data
                  this.leftList = arr
                  this.selfClassId = res.data[0].id
                  this.getAccessmainList({'item': res.data[0],'index': res.data[0].index})
              }
              console.log(res)
          }).catch(err =>{
            console.log(err)
              this.$toast.center('服务器错误');
              this.refreshing = false;
              this.$loading.close()
          })
        },
        getAccessmainList(data){
            this.headerTitle = data.item.name + '考核'
            this.setIndex = data.index
            this.selfClassId = data.item.id
            this.tableList = this.dataList[data.index].users
        }
      },
      mounted() {
        this.$loading('');
        this.getAccessList()
      },
      
    }
</script>

<style scoped lang="scss">
  .web-assessAll-box{
    width: 100%;
    height:100%;
    
   
      .web-assessAll-menu{
        width: 100%;
        background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
        height: calc( 100% - .64rem);
        flex: 1;
        display: flex;
        .web-assessAll-cont{
            padding: .4rem .4rem .38rem .5rem;
            width: calc(100% -  1.4rem);
            float: left;
            height: 100%;
            overflow-y: scroll;
            
        }
        .web-assessAll-cont::-webkit-scrollbar {
            display: none;
        }
      }
    
  }
</style>
