<template>
    <div class="woling_cocalLoging">
        <div class="loging_Main" v-if="isLogin">
            <header class="logo"></header>
            <div class="vue-1px-b"><label for=""><img src="../../assets/img/username.png" alt=""></label><input type="text" placeholder="账号" v-model="userName"></div>
            <div class="vue-1px-b password"><label for=""><img src="../../assets/img/password.png" alt=""></label><input type="password" placeholder="密码" v-model="password"></div>
            <span class="submit" @click="login">登录</span>
            <p @click="setPassword(false)">忘记密码？</p>
        </div>
        <div class="loging_Main edit_password" v-else>
            <header class="back" @click="setPassword(true)"><img src="../../assets/img/loginback.png" alt=""><i>更改密码</i></header>
            <div class="vue-1px-b"><label for=""><img src="../../assets/img/username.png" alt=""></label><input type="text" placeholder="账号" v-model="userName"></div>
            <div class="vue-1px-b yzm"><label for=""><img src="../../assets/img/ygm.png" alt=""></label><input type="text" placeholder="验证码" v-model="verification"><span @click="getVerification()" v-if="isVerification">获取验证码</span><span v-else>{{timeDown}}</span></div>
            <div class="vue-1px-b password"><label for=""><img src="../../assets/img/password.png" alt=""></label><input type="password" placeholder="新密码" v-model="NewPassword"></div>
            <div class="vue-1px-b password"><label for=""><img src="../../assets/img/password.png" alt=""></label><input type="password" placeholder="确认密码" v-model="OKPassword"></div>
            <span class="submit"  @click="change_pwd">确定</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loging',
    data(){
        return{
            password: 'asd123456',//密码
            userName: '17630718188',//账号
            verification: '',//验证码
            NewPassword: '',//新密码
            OKPassword: '',//再次输入
            isVerification: true,//倒计时显示
            timeDown: 60,
            innerHeight: window.innerWidth,
            heightChange:window.innerWidth,
            isLogin: true,
        }
    },
    methods:{
        setPassword(flag){
            this.isLogin = flag
            this.password = ''
        },
        
        //获取验证码
        getVerification(){
            if(!this.VerificationData(3)) return
             this.$loading('');
              var params={
                    username: this.userName.replace(/(^\s*)|(\s*$)/g, "")
                }
             this.$http.post(this.$conf.env.sms_code, params).then( res =>{
             this.$loading.close()
              this.$toast.center('发送成功');
             this.isVerification = false
             this.Countdown()
             console.log(res)
             }).catch(err =>{
                 this.$loading.close()
                 if(err.response.status == '400'){
                    this.$toast.center(err.response.data.username[0]);
                }else{
                    this.$toast.center('网络错误');                    
                }
             })
        },
        Countdown(){
            var that = this
            if(this.timeDown == 0){
                window.clearTimeout()
                that.isVerification = true
                return false
            }
            setTimeout(()=>{
                that.timeDown -=1
                that.Countdown()
            },1000)
        },
        //登录
        login(){
            if(!this.VerificationData(1)) return
            this.$loading('');
            var params={
                username: this.userName.replace(/(^\s*)|(\s*$)/g, ""),
                password: this.password,
            }
            this.$http.post(this.$conf.env.login, params).then(res =>{
                this.$loading.close()
                sessionStorage.setItem('jp_token', res.data.token)
                this.$router.push({name:"index"})
            }).catch(err =>{
                this.$loading.close()
                if(err.response.status == '401'){
                    this.$toast.center('账号或密码错误');
                }
            })
        },
        //修改密码
        change_pwd(){
            if(!this.VerificationData(2)) return 
            this.$loading('');
            var params ={
                username: this.userName,//手机号
                code: this.verification,//验证码
                password: this.NewPassword,//密码
                password1: this.OKPassword,//密码
            }
            this.$http.post(this.$conf.env.change_pwd, params).then( res =>{
                this.$loading.close()
                this.$toast.center('修改成功');
                this.setPassword(true)
            }).catch(err =>{
                this.$toast.center('网络错误');
            })
        },
        VerificationData(flag){
           var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
           if(flag == 1){
             if(!this.userName || !this.password){
                  this.$toast.center('请完善您的信息');
                  return false
              }
           }else if(flag == 2){
             if(!this.userName || !this.NewPassword || !this.OKPassword || !this.verification){
                  this.$toast.center('请完善您的信息');
                  return false
              }else{
                if(this.NewPassword != this.OKPassword){
                  this.$toast.center('两次密码输入不一致');
                  return false
                }
              }
           }else{
               if(!this.userName){
                   this.$toast.center('请输入手机号');
               }
           }
            if (!myreg.test(this.userName.replace(/(^\s*)|(\s*$)/g, ""))) {
                this.$toast.center('请填写正确的手机号');
              return false
            }else{
              return true
            }
        },
    },
    mounted(){
            // window.onresize =()  =>{
            // return (()=>{
            //     this.innerHeight = window.innerWidth
            //     alert(window.innerWidth)
            // })()
        // }
    },
    watch:{
        // innerHeight(newval,oldval){
            // alert(newval)
            // document.getElementsByTagName("html")[0].style.fontSize = 16*this.heightChange*6.25/1334 +'px'
        //   if(this.heightChange != newval){
        //       document.getElementsByTagName("html")[0].style.fontSize = 16*this.heightChange*6.25/1334 +'px'
        //       alert("键盘弹起")

        //     }else{
        //        alert("键盘放下")
        //     }
        // },
    }
}
</script>
<style lang="scss" scoped>
.woling_cocalLoging{
    font-family:SimHei;
    width: 100%;
    height:100%;
    background: url("../../assets/img/bj.jpg")  0 0 / 100% 100%;
    position: relative;
    .loging_Main{
        width: 4.5rem;
        height: 4.6rem;
        background: rgba(255, 255, 255, .7);
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius: .2rem;
        box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.55);
        padding: 0 .65rem 0 .77rem;
        .logo{
            height: 1.81rem;
            width: 100%;
            background: url(../../assets/img/logo.png) 0 0/100% 90%;
        }
        div{
            padding-left: .08rem;
            margin-bottom: .23rem;
            height: .4rem;
            margin-right: .13rem;
            label{
                width: .25rem;
                display: block;
                float: left;
                line-height: .47rem;
                margin-right: .08rem;
                img{
                    width: 100%;
                }
            }
            input{
                background: none;
                border: 0;
                width: 2.2rem;
                font-size: .2rem;
                line-height: .4rem;
            }
            input:focus{
              outline:none;box-shadow: none;
            }
           
        }
        .yzm{
            padding-bottom: .03rem;
            display: flex;
            input{
                width: 1.25rem;
                border-right: 1px solid #005ed7;
            }
             span{
                 font-family:SimHei;
                width: 1.3rem;
                color:#005ed7;
                display: block;
                font-size: .18rem;
                text-align: center;
                line-height: .4rem;
                margin-bottom: .03rem;
            }
        }
        .password{
            label{
                width: .2rem;
            }
            
        }
        .submit{
            margin-top: .46rem;
            width: 3rem;
            background: url(../../assets/img/loging_bg.png)  0 0 / 100% 100%;
            display: block;
            font-size: .26rem;
            color: #fff;
            text-align: center;
            line-height: .53rem;
            height: .53rem;
        }
        p{
            font-size: .16rem;
            color: #0060d9;
            text-align: right;
            line-height: .48rem;
            margin-right: -.21rem;
            width: 1.3rem;
            float: right;
        }
    }
    .edit_password{
        padding: .25rem;
        .back{
            display: flex;
            align-items: center;
            margin-bottom: .29rem;
            width: 1.5rem;
            img{
                height: .3rem;
                width: .3rem;
                margin-right: .12rem;
            }
            i{
                font-size: .18rem;
                color: #005ed7;
                display: block;
                font-style: normal;
            }
        }
        div{
            margin: 0 .53rem .23rem;
        }
        .submit{
            margin-left: .53rem;
        }
    }
    .vue-1px-b {
        height: auto;
        background-image: linear-gradient(top, transparent 50%, #545356 50%);
        background-image: -webkit-linear-gradient(top, transparent 50%, #545356 50%);
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: 100% 1px;
    }

}
</style>
