<template>
  <div class="web-selectevaluation-user-box">
    <div class="web-selectevaluation-box">
      <div class="web-selectevaluation-left">
        <table>
            <tr>
              <td class="one">
                <span>训练主题</span>
                <input type="text" placeholder="点击输入训练主题">
              </td>
              <td class="two">
                <span>队员年龄:</span>
                <input class="rightMA" type="text" placeholder="点击输入队员年龄">
                <span>参与人数:</span>
                <input type="text" placeholder="点击输入参与人数">
                <span>训练天气:</span>
                <input class="rightMA" type="text" placeholder="点击输入训练天气">
                <span>训练时长:</span>
                <input type="text" placeholder="点击输入训练时长">
              </td>
              <td class="three">
                <span>训练目标是否实现:</span>
                <input type="text">
              </td>
              <td class="three cal">
                <input type="text" class="wordTwo">
                <input type="text">
              </td>
              <td class="four">
                <span class="fl">实践感受:</span>
                <textarea class="fl" placeholder="点击输入时间感受"></textarea>
              </td>
              <td class="five">
                <span class="fl" style="text-indent: .055rem">改进点:</span>
                <textarea class="fl" placeholder="点击输入改进点"></textarea>
              </td>
            </tr>
        </table>
      </div>
      <div class="web-selectvaluation-rightBox">
        <div class="web-selectvaluation-right">
          <div class="web-selectvaluation-row">
            <div class="row1">
              <div class="cal">
                <span>组织能力:</span>
                <input type="text">
              </div>
              <div class="cal cal2">
                <span>组织能力:</span>
                <input type="text">
              </div>
            </div>
            <div class="row1">
              <div class="cal">
                <span>激励能力:</span>
                <input type="text">
              </div>
              <div class="cal cal2">
                <span>时间管理:</span>
                <input type="text">
              </div>
            </div>
            <div class="row1">
              <div class="cal">
                <span>观察能力:</span>
                <input type="text">
              </div>
              <div class="cal cal2">
                <span>提问引导:</span>
                <input type="text">
              </div>
            </div>
            <div class="row1">
              <div class="cal">
                <span>应变能力:</span>
                <input type="text">
              </div>
              <div class="cal cal2">
                <span>幽默感:</span>
                <input type="text">
              </div>
            </div>
          </div>
          <div class="but_user">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "selectEvaluation"
    }
</script>

<style lang="scss">

  .web-selectevaluation-user-box{
    width: 100%;
    height:100%;
    padding:.055rem .05rem .05rem .045rem;
    box-sizing: border-box;
    .web-selectevaluation-box{
      width: 100%;
      height:100%;
      background:linear-gradient(0deg,rgba(11,27,51,1) 0%,rgba(30,61,93,1) 100%);
      opacity:0.8;
      border-radius:3px;
      padding:.095rem .155rem .065rem .085rem;
      box-sizing: border-box;
      display: flex;
      .web-selectevaluation-left{
        width: 1.81rem;
        height: 100%;
        table{
          width: 100%;
          height:100%;
          tr{
            td{
              display: flex;
              align-items: center;
              margin-bottom: .056rem;
              span{
                font-size:.055rem;
                font-family:SimHei;
                color:rgba(160,188,223,1);
                margin-right: .0392rem;
              }
              input{
                height:.118rem;
                font-size:.055rem;
                color:rgba(74,99,129,1);
                line-height:.118rem;
                text-indent: .045rem;
                background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                outline: none;
              }
            }
            .one{
              input{
                flex: 1;
              }
            }
            .two{
              flex-wrap: wrap;
              input{
                width: .54rem;
                background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
              }
              .rightMA{
                /*margin-right: .045rem;*/
              }
            }
            .three{
              input{
                width: .83rem;
              }
              .wordTwo{
                margin-right: .118rem;
              }
            }
            .four{
              display: block !important;
              overflow: hidden;
              textarea{
                font-size:.055rem;
                color:rgba(74,99,129,1);
                text-indent: .045rem; background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                outline: none;
                /*width: 1.5rem;*/
                height: .348rem;
                width: 1.45rem;
              }
            }
            .five{
              display: block !important;
              overflow: hidden;
              textarea{
                font-size:.055rem;
                color:rgba(74,99,129,1);
                text-indent: .045rem; background:rgba(24,41,66,1);
                border:1px solid rgba(49,83,122,1);
                border-radius:1px;
                outline: none;
                /*width: 1.5rem;*/
                height: .348rem;
                width: 1.45rem;
              }
            }
          }
        }
      }
      .web-selectvaluation-rightBox{
        height:100%;
        flex: 1;
        .web-selectvaluation-right{
          width: 100%;
          height:100%;
          padding:.269rem 0 0 .106rem;
          box-sizing: border-box;
          display: flex;
          position: relative;
          .web-selectvaluation-row{
            width: 100%;
            height:.65rem;
            display: flex;
            flex-wrap: wrap;
            .row1{
              display: flex;
              justify-content: space-between;
              width: 100%;
              .cal{
                display: flex;
                align-items: center;
                span{
                  white-space: nowrap;
                  font-size:.055rem;
                  font-family:SimHei;
                  color:rgba(160,188,223,1);
                  margin-right: .035rem;
                }
                input{
                  width: .2rem;
                  height: .11rem;
                  background:rgba(24,41,66,1);
                  border:1px solid rgba(49,83,122,1);
                  border-radius:1px;
                  outline: none;
                  margin-right: .105rem;
                }
              }
              .cal2{
                margin-right: 0;
              }
            }
          }
          .but_user{
            position: absolute;
            width:.5rem;
            height:.14rem;
            background: red;
            right: 0rem;
            bottom: 0;
            background: url("../../assets/img/ok.png") no-repeat;
            background-size: cover;
            font-size:.06rem;
            font-family:SimHei;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height: .14rem;
            text-align: center;
          }
        }
      }
    }
  }
</style>
