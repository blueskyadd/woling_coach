<template>
    <div class="actively_Detail">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <img v-for="item in activelyImgList" :key="item.id" :src="item.image" alt="">
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
export default {
     components:{headerTitle},
    data(){
        return{
            headerTitle: this.$route.params.name,
            activelyImgList: [],
        }
    },
    methods:{
        getActivelyDetail(){
            this.$http.get(this.$conf.env.getActivelyDetail + this.$route.params.Id).then( res =>{
                this.$loading.close()
                this.activelyImgList = res.data.images
            console.log(res)
            }).catch(err =>{
                this.$loading.close()
            })
        }
    },
    mounted(){
        this.$loading('');
        this.getActivelyDetail()
    }
}
</script>
<style lang="scss" >
    .actively_Detail{
        background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
        width: 100%;
        height:100%;
        .main{
            overflow: hidden;
            width: 100%;
            height: calc(100% - 0.64rem);
            padding: .20rem;
            overflow-y: scroll;
            img{
                width: 100%;
            }
        }
        .main::-webkit-scrollbar {
            display: none;
        }
    }
</style>
