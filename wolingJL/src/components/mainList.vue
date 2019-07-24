<template>
    <mu-paper :z-depth="1" class="demo-loadmore-wrap list">
        <mu-container ref="container" class="demo-loadmore-content">
            <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" :loaded-all='isLoaded'>
                <ul class="listMain">
                    <li v-for="item in tableList" :key="item.id"  @click="goDetail(item)"><img :src="item.front_image" alt=""><span>{{item.name}}</span></li>
                </ul>
            </mu-load-more> 
        </mu-container>
    </mu-paper>
</template>
<script>
export default {
    props:{
        tableList:{
            type: Array,
            required: true
        },
        loading:{
            type: Boolean,
            required: true,
        },
        isLoaded:{
            type: Boolean,
            required: true
        },
        refreshing:{
            type: Boolean,
            required: true
        }
    },
    data(){
        return{
            num: 10,
            text: "List",
            number: 1,
        }
    },
    methods: {
        goDetail(item){
            this.$emit('goDetail',item)
        },
        refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;
            this.$emit('getClassList', 1 )
        },
        load() {
            this.number += 1
            this.loading = true;
            this.$emit('getClassList', this.number )
        },

    },
}
</script>
<style lang="scss" >
@media (min-width: 1200px){
    .container {
        max-width: initial;
    }
}
@media (min-width:  992px){
    .container {
        max-width: initial;
    }
}
@media (min-width:  768px){
    .container {
        max-width: initial;
    }
}
@media (min-width: 576px){
    .container {
        max-width: initial;
    }
}
.mu-paper{
        background: none !important;
        box-shadow: none !important;
    }
.list{
    .container{
        margin: 0;
        padding: 0;
    }
    .mu-circle-wrapper.active{
        width: .3rem !important;
        height: .3rem !important;
    }
    .mu-infinite-scroll-text{
        font-size: .2rem;
        height: .35rem;
    }
    .listMain{
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        li{
            width: 1.88rem;
            height: 2.85rem;
            margin-bottom: .38rem;
            position: relative;
            margin-right: .325rem;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                font-size: .18rem;
                color: #fefefe;
                position: absolute;
                bottom: .42rem;
                z-index: 1;
                width: 100%;
                left: 0;
                text-align: center;

            }
        }
    }
}

</style>
