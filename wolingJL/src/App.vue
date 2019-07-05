<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
import store from "./store/index";
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  mounted() {
    var vm = this
    setTimeout(function() {
      // // if(window.plus){
      // plus.nativeUI.toast("该页面需要横屏查看"); // 友好的提示一下
      plus.screen.lockOrientation("landscape"); // 把屏幕方向改变成横屏
      vm.bindBack();//android物理返回键监听
      plus.navigator.setFullscreen(true);//页面全屏显示
      // setTimeout(()=>{
       (function(doc, win) {
                var docEl = doc.documentElement,
                  isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                  dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
                  dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
                  dpr = 1,
                  scale = 1 / dpr,
                  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
              docEl.dataset.dpr = dpr;
              var metaEl = doc.createElement('meta');
              metaEl.name = 'viewport';
              metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
              docEl.firstElementChild.appendChild(metaEl);
              var recalc = function() {
                  let clientHeight = docEl.clientHeight;
                  let clientWidth = docEl.clientWidth;
                    doc.getElementsByTagName("html")[0].style.fontSize = 16*clientWidth*6.25/1334 +'px';
                    clientWidth = 1334 * dpr;
                  docEl.style.fontSize = 50 * (clientWidth / 1334) + 'px';
              };
              recalc()
              if (!doc.addEventListener) return;
              win.addEventListener(resizeEvt, recalc, false);
              doc.addEventListener('DOMContentLoaded', recalc, false);
            
        })(document, window);
      // },1000)
    }, 100);
      // }
  },
  created() {
      // 获取当前可视区域的高度
      const height = document.documentElement.clientHeight;
      // 在页面整体加载完毕时
      window.onload = function () {
        // 把获取到的高度赋值给根div
        document.getElementById('app').style.height = `${height}px`;
      };
    },
  watch: {
    $route(to, from) {
      let isBack = this.$store.state.routerState.isBack;
      if (isBack) {
        this.transitionName = "slide-right";
        this.$loading.close()
      } else {
        this.transitionName = "slide-left";
      }
      store.commit("changeIsBack",false)
    }
  },
  methods:{
      bindBack() {
        let vm = this;
        let first = null;
        plus.key.addEventListener("backbutton", () => {
            if (
              this.$route.name == "index" ||
              this.$route.name == "loging"
            ) {
              if (!first) {
                first = new Date().getTime(); //记录第一次按下回退键的时间
                plus.nativeUI.toast("再按一次退出应用");
                setTimeout(function() {
                  //1s中后清除
                  first = null;
                }, 2000);
              } else {
                if (new Date().getTime() - first < 2000) {
                  //如果两次按下的时间小于1s，
                  plus.runtime.quit(); //那么就退出app
                }
              }
            }else{
              this.$store.commit("changeImPage", true);
              this.$router.routerBack(-1);
            }
          
        });
      },
    }
};
</script>

<style>
body,
html,
#app {
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  width: 100%;
  height: 100%;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
