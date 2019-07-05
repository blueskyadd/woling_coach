<template>
  <div class="execise_coach">
    <d-player v-if="isPlay" ref='player' controls="controls"  playsinline="true" webkit-playsinline='true'   @play="play" class="storeVideo video-player vjs-custom-skin"  :options="url"></d-player>
  </div>
</template>
<script>
import VueDPlayer from "vue-dplayer";
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
import "vue-dplayer/dist/vue-dplayer.css";
import logoImg from '../../assets/img/logo.png';
import loadMedia from '../../components/load-media'
export default {
  name: "exerciseCoach",
  props:{
      setVideoIndex:{
          type: Number,
          required: true
      },
      htmlUrl:{
          type: String,
          required: true
      },
      videoImge:{
        type: Object,
        required: true
      }
  },
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return {
      isPlay:false,
      url:{
          video: {
          url: '',
          pic:''
        },
         controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        },
        autoplay: true
      },
      picUrl: '',
      videoDetail:[]
    };
  },
  methods:{
      play() {
        console.log('开始播放...')
    },
    /**@name获取视频列表 */
    getuploadvideoList(number){
      this.$loading('');
      this.$http.get(this.$conf.env.uploadvideo+ '?p='+number ).then( res =>{
        console.log(res)
        if(res.data && res.data.results){
          
           var Obj = {}; var arr = [] 
            res.data.results.forEach(value =>{
              Obj = {
                  'time': value.date,
                  'name': value.course,
                  'file':value.file,
                  'id':value.id,
                  'image':value.image
              }
              arr.push(Obj)
            })
            var arrObj = []
            this.videoDetail = number == 1 ? arr : this.videoDetail.concat(arr)
            number == 1? this.getVideoListData(res.data.results[this.setVideoIndex]) : ''
            this.$loading.close()
            if(!res.data.next){
              this.$toast.center('已加载全部数据');
              this.$emit('setVideoNameList', {data:this.videoDetail,flag: false})
            }else{
              this.$emit('setVideoNameList', {data:this.videoDetail,flag: true})
            }
        }
      }).catch(err =>{
        this.$loading.close()
        this.$toast.center('服务器错误');
      })
    },
    getVideoListData(data){
      this.isPlay= false
      this.$loading('');
      var that = this
      
      setTimeout(() => {
        let loadVideo = new loadMedia({
          type: 'video',
          url: data.file,
          callback: this.handleCallback
        })
        that.url = {
          video: {
              url: data.file,
              pic: data.image?  data.image : this.picUrl,
            },
            autoplay: false,
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true  //全屏按钮
            }
        }
        
        that.isPlay= true
          setTimeout(()=>{
          that.$refs.player.dp.pause()
          },1500)
        that.$loading.close()
      }, 100);
    },
    handleCallback(res){
       console.log(res)
       if(res.code === 0){
          this.picUrl = res.media.baseURI
       }
    }
  },
  mounted() {
    if(this.$route.params.data){
       this.$loading('');
      this.getVideoListData(this.$route.params.data[0])
    }else{
      this.getuploadvideoList(1);
    }
    
  }
};
</script>
<style lang="scss">
.execise_coach {
    height: 100%;
    .dplayer-video{
        height: 6.5rem !important;
    }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello {
    width: 750px;
    margin: 0 auto 50px;
  }
  @media only screen and (max-width: 640px) {
    .hello {
      width: 100%;
    }
  }
}
</style>
