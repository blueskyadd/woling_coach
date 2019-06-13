<template>
  <div class="web-woling-bigbox">
      <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "index",
      created() {

      },
      // mounted() {
      //   var evt = "onorientationchange" in window ? "orientationchange" : "resize";
      //   window.addEventListener(evt, function() {
      //     var width = document.documentElement.clientWidth;
      //     var height =  document.documentElement.clientHeight;
      //     console.log('宽度：'+width)
      //     console.log('高度：'+height)
      //     var parint =  $('.web-woling-bigbox');
      //     if( width > height ){
      //
      //       parint.width(width);
      //       parint.height(height);
      //       parint.css('top',  0 );
      //       parint.css('left',  0 );
      //       parint.css('transform' , 'none');
      //       parint.css('transform-origin' , '50% 50%');
      //       console.log('我是横屏')
      //     }
      //     else{
      //       parint.width(height);
      //       parint.height(width);
      //       parint.css('top',  (height-width)/2 );
      //       parint.css('left',  0-(height-width)/2 );
      //       parint.css('transform' , 'rotate(90deg)');
      //       parint.css('transform-origin' , '50% 50%');
      //       console.log('我是竖屏')
      //     }
      //
      //   }, false);
      // }
    }
</script>

<style scoped lang="scss">


  @media screen and (orientation: portrait) {
    /*竖屏*/
      #app_box{
        position : absolute ;
      }
  }


  @media screen and (orientation: landscape) {
    /*横屏*/
    .web-woling-bigbox {
      width: 100%;
      height:100%;
      position : absolute ;
      top : 0 ;
      left : 0 ;
    }
  }
  .web-woling-bigbox {
    width: 100%;
    height:100%;
    position : absolute ;
    top : 0 ;
    left : 0 ;
  }
</style>
