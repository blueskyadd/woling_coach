<template>
  <div class="execise_coach">
    <d-player v-if="isPlay" ref='player' playsinline="true"  @play="play"  webkit-playsinline='true' class="storeVideo"  :options="url"></d-player>
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
        },
        autoplay: true
      },
      picUrl:''
    };
  },
  methods:{
      play() {
        console.log('开始播放...')
    },
    /**@name获取视频列表 */
    getuploadvideoList(){
      this.$http.get(this.$conf.env.uploadvideo).then( res =>{
        console.log(res)
        res.data={
            "count": 3,
            "next": "http://10.102.100.23:8080/good/app/coach/video/?p=2",
            "previous": null,
            "results": [
                {
                    "id": 3,
                    "course": "课程01",
                    "file": "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8",
                    "date": "2019-06-29"
                },
                {
                    "id": 4,
                    "course": "课程04",
                    "file": "http://cdn.toxicjohann.com/lostStar.mp4",
                    "date": "2019-06-29"
                }
            ]
        }
        if(res.data && res.data.results){
          var Obj = {}; var arr = [] 
          res.data.results.forEach(value =>{
            Obj = {
                'time': value.date,
                'name': value.course,
                'file':value.file,
                'id':value.id
            }
            arr.push(Obj)
          })
          this.$emit('setVideoNameList', arr)
          this.getVideoListData(res.data.results[this.setVideoIndex])
          this.$loading.close()
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
              pic: this.picUrl
            },
            autoplay: false
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
    this.$loading('');
   
    if(this.$route.params.data){
      this.getVideoListData(this.$route.params.data[0])
    }else{
      this.getuploadvideoList();
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
