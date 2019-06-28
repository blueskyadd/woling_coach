<template>
  <div class="actively_index">
    <headerTitle :title="headerTitle" :isUpload = 'false'/>
    <div class="demo-loadmore-wrap">
      <div class="demo-loadmore-content">

      
    
    <!-- <mu-paper :z-depth="1" class="demo-loadmore-wrap"> -->
      <!-- <mu-container ref="container" class="demo-loadmore-content"> -->
        <!-- <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load"> -->
            <ul>
                <li v-for="item in activelyList" :key="item.id" @click="goDetail(item)">
                    <div class="actively-left">
                        <img :src="item.image" alt="" v-if="item.image">
                        <img src="../../assets/img/activelyLeftbg.jpg" alt="" v-else>
                    </div>
                    <div class="actively-right">
                        <div class="topText">
                            <h3>{{item.name}}</h3>
                            <p>活动时间：{{item.start_time}} - {{item.end_time}}</p>
                        </div>
                        <p>查看详情 ></p>
                    </div>
                </li>
          </ul>
          </div>
        </div>
        <!-- </mu-load-more>
      </mu-container>
    </mu-paper> -->
  </div>
</template>

<script>
import headerTitle from "../../components/header";
import img from "../../assets/img/activelyLeftbg.jpg"
export default {
  components:{headerTitle},
  data() {
    return {
      headerTitle: '活动',
      num: 10,
      refreshing: false,
      loading: false,
      text: "List",
      activelyList: [],
    };
  },
  methods: {
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === "List" ? "Menu" : "List";
        this.num = 10;
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000);
    },
    goDetail(data){
        this.$router.push({name:'activelyDetail', params:{Id: data.id, name: data.name}})
    },
    /**@name获取主推列表 */
    getActivityList(){
      this.$http.get(this.$conf.env.getActivityList).then( res =>{
      this.$loading.close()
      this.activelyList = res.data
      }).catch(err =>{
        this.$loading.close()
      })
    }
  },
  mounted(){
    this.$loading('');
    this.getActivityList()
  }
};
</script>

<style lang="scss">
.actively_index {
    background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
    width: 100%;
    height:100%;
   
  .demo-loadmore-wrap {
    width: 100%;
     padding: .20rem;
    height: calc(100% - 0.64rem);
    padding: .2rem;
    display: flex;
    background: #224064;
    flex-direction: column;
    .mu-appbar {
      width: 100%;
    }
    ul>li{
        background: #271947 url(../../assets/img/actively.png)  0 0 / 100% 100% ;
        height: 2.4rem;
        margin-bottom: .03rem;
        overflow: hidden;
        display: flex;
        .actively-left{
            width: 54.9%;
            height: 100%;
        }
        .actively-right{
            width: 41.3%;
            padding: 0 .5rem .17rem .2rem;
            display: flex;
            justify-content: space-between;
            flex-direction:column;
            div{
               h3{
                font-size: .25rem;
                color: #dcf0f2;
                line-height: .55rem;
                }
                p{
                    color: #7ca1cd;
                    font-size: .18rem;
                    font-size: .21rem;
                } 
            }
        }
        .actively-right > p{
            text-align: right;
            color: #dcf0f2;
        }
        img{
            width: 100%;
        }
    }
  }
  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .demo-loadmore-content::-webkit-scrollbar {
        display: none;
    }
  .container {
      max-width: 100%;
      padding: 0;
    background: none;
  }

}
</style>