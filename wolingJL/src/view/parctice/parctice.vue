<template>
    <div class="web-parctice-box">
      <div class="web-parctice">
<!--头部-->
        <div class="web-assess-titBox">
          <div class="web-assess-back">
            <div @click="$router.go(-1)">
              <img src="../../assets/img/back.png" alt="">
            </div>
          </div>
          <div class="web-assess-tit"><p>练习</p></div>
          <div class="upload-view">
            <span>上传<input type="file"></span>

          </div>
        </div>
<!--主体内容-->
        <div class="web-parctice-menu">
          <div class="web-parctice-nav">

          </div>
        </div>




      </div>
    </div>
</template>

<script>
    export default {
        name: "parctice"
    }
</script>

<style lang="scss">

  .web-parctice-box{
    width: 100%;
    height:100%;
    .web-parctice{
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: column;
      .web-assess-titBox{
        width: 100%;
        height:.18rem;
        background:linear-gradient(0deg,rgba(45,73,121,1) 0%,rgba(35,51,84,1) 100%);
        overflow: hidden;
        position: relative;
        .web-assess-back{
          height:100%;
          float: left;
          div{
            width: 100%;
            height:100%;
            display: block;
            img{
              display: block;
              width: .52rem;
              height:100%;
            }
          }
        }
        .web-assess-tit{
          float: left;
          p {
            font-size: .085rem;
            font-family: SimHei;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: .18rem;
          }
        }
        .upload-view{
          position: absolute;
          width: .28rem;
          height: .1rem;
          background: #10213b;
          border: 1px solid #5271a0;
          -webkit-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.48);
          box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.48);
          right: .19rem;
          top: .044rem;
          background: url("../../assets/img/upload.png") no-repeat;
          background-size: cover;
          span{
            font-size:.05rem;
            font-family:SimHei;
            color:rgba(201,235,247,1);
            line-height:.1rem;
            display: block;
            text-align: center;
            position: relative;
            input{
              position: absolute;
              left: 0;
              top: 0;
              display: block;
              width: 100%;
              height:100%;
              opacity: 0;
            }
          }
        }
      }
      .web-parctice-menu{
          flex: 1;
          .web-parctice-nav{
            width: .77rem;
            height:100%;
          }
      }
    }

  }
</style>
