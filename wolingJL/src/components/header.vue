<template>
    <div >
        <header>
            <div class="goBack"  @click="goback()"></div>
            <div class="titleName">{{title}}</div>
            <div v-if="isUpload ? true : false" class="rightButton" @click="showUpdata">上传</div>
        </header>
    </div>
</template>
<script>
import photo from "../components/photo.js";
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        isUpload:{
            type: Boolean,
            required: true
        }
    },
    methods: {
        goback(){
            this.$router.routerBack(-1);
        },
        uploadVideo(){
            var dataparams =''
            var decideparams = ''
            photo.galleryVideo(this, dataparams, decideparams)

        },
        showUpdata(data){
            this.$emit('showUpdata')
        }
    },
    destroyed:{}
}
</script>
<style lang="scss" scoped>
header{
    width: 100%;
    height: .64rem;
    background:linear-gradient(0deg,rgba(45,73,121,1) 0%,rgba(35,51,84,1) 100%);
    box-shadow:0px -1px 7px 1px rgba(0, 0, 0, 0.55);
    .goBack{
        width: 2.07rem;
        height: 100%;
        background: orangered;
        background: url(../assets/img/backbg.png)  0 0 / 100% 100%;
        float: left;
    }
    .titleName{
        font-size: .3rem;
        font-family:SimHei;
        color: #fff;
        line-height: .64rem;
        float: left;
    }
    .rightButton{
        width: 1rem;
        height: .36rem;
        float: right;
        border: 1px solid #5272a0;
        margin: .16rem .67rem 0 0;
        text-align: center;
        line-height: .36rem;
        color:rgba(201,235,247,1);
        font-size: .2rem;
        font-family:SimHei;
        background: url(../assets/img/upload.png) 0 0 / 100% 100%;
        text-shadow: 0 0 .1rem #fff;
        input{
            display:none;
        }
    }
}
</style>
