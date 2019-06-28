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
      plus.nativeUI.toast("该页面需要横屏查看"); // 友好的提示一下
      plus.screen.lockOrientation("landscape"); // 把屏幕方向改变成横屏
      vm.bindBack();//android物理返回键监听
      plus.navigator.setFullscreen(true);//页面全屏显示
      
    }, 1000);
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
              this.$route.name == "index"
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
