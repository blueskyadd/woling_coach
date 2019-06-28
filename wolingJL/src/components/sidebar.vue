<template>
        <div class="left_mian">
            <ul>
                <li v-for="(item, index) in leftList" :key="index" @click="activeList(item, index)" :class="{'active': index==setIndex}"><span>{{item.name}}</span></li>
            </ul>
        </div>
</template>
<script>
export default {
     props:{
        leftList:{
            type: Array,
            required: true
        },
        setIndex:{
            type: Number,
            required: true
        }
    },
    data(){
        return{
        }
    },
    methods: {
        activeList(item, index){
            this.$emit('change',{'item':item,'index':index})
        }
    },
}
</script>
<style lang="scss" scoped>
.left_mian{
    width: 1.4rem;
    background:rgba(29,52,84,1);
    box-shadow:2px 0px 2px 0px rgba(0, 0, 0, 0.26);
    height: 100%;
    float: left;
    ul{
        padding-top: .14rem;
        li{
        font-size: .21rem;
        color: #6f91b4;
        line-height: .8rem;
        
        padding: 0 .23rem;
        span{
            display: block;
            height: 100%;
            border-bottom: 1px solid #2e4564;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        }
        .active{
            background: #607a9f;
            color:#fefefe;
            span{
                border: 0;
            }
        }
    }
    
}
</style>
