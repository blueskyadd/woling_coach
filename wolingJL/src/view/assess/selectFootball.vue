<template>
  <div class="web-selectFootball-Box">
    <div class="web-selectFootball-menu">
      <ul>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
        <router-link to="/assess" >
          <img src="../../assets/img/zhuxi.jpg" alt="">
          <span>主席</span>
        </router-link>
      </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>
        <li>
          <router-link to="/assess" >
            <img src="../../assets/img/zhuxi.jpg" alt="">
            <span>主席</span>
          </router-link>
        </li>




      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "selectFootball"
    }
</script>

<style scoped lang="scss">
  .web-selectFootball-Box{
    width: 100%;
    height:100%;
    background: url("../../assets/img/bj1.png") no-repeat;
    background-size: cover;
    padding: .115rem .208rem .106rem .14rem;
    box-sizing: border-box;
    .web-selectFootball-menu{
      width: 100%;
      height:100%;
      overflow: auto;
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          width: .525rem;
          height: .8rem;
          margin-right:.09rem ;
          margin-bottom:.106rem ;
          position: relative;
          a{
            display: block;
            width: 100%;
            height:100%;
            img{
              width: 100%;
              height:100%;
              display: block;
            }
            span{
              position: absolute;
              font-size:.05rem;
              font-family:SimHei;
              font-weight:bold;
              color:rgba(255,255,255,1);
              left: .208rem;
              bottom: .13rem;
            }
          }
        }
        li:nth-child(5n){
          margin-right: 0;
        }
      }
    }
  }
</style>
