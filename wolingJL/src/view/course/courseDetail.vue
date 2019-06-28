<template>
    <div class="course_courseDetail">
        <headerTitle :title="headerTitle" :isUpload = 'false'/>
        <div class="main">
            <ul>
                <li>
                    <div   class='mainLeft_img'>
                        <img src="../../assets/img/selfImg.jpg" alt="">
                        <div class="mainRight">
                            <h3>花式足球</h3>
                            <div><span>主教练:</span><p>吴坊</p><span>副教练:</span><p>许嵩</p></div>
                            <div class="classTime"><span>上课时间:</span><p>2019.04.02</p><span>上课时间:</span><p>2019.04.</p></div>
                            <div class="classUp"><span>上课地址:</span><p>打佛诶发件人反而</p></div>
                        </div>
                    </div>
                </li>
                 <li>
                    <div   class='mainLeft_img'>
                        <img src="../../assets/img/selfImg.jpg" alt="">
                        <div class="mainRight">
                            <h3>花式足球</h3>
                            <div><span>主教练:</span><p>吴坊</p><span>副教练:</span><p>许嵩</p></div>
                            <div class="classTime"><span>上课时间:</span><p>2019.04.02</p><span>上课时间:</span><p>2019.04.</p></div>
                            <div class="classUp"><span>上课地址:</span><p>打佛诶发件人反而</p></div>
                        </div>
                    </div>
                </li>
                 <li>
                    <div   class='mainLeft_img'>
                        <img src="../../assets/img/selfImg.jpg" alt="">
                        <div class="mainRight">
                            <h3>花式足球</h3>
                            <div><span>主教练:</span><p>吴坊</p><span>副教练:</span><p>许嵩</p></div>
                            <div class="classTime"><span>上课时间:</span><p>2019.04.02</p><span>上课时间:</span><p>2019.04.</p></div>
                            <div class="classUp"><span>上课地址:</span><p>打佛诶发件人反而</p></div>
                        </div>
                    </div>
                </li>
                 <li>
                    <div   class='mainLeft_img'>
                        <img src="../../assets/img/selfImg.jpg" alt="">
                        <div class="mainRight">
                            <h3>花式足球</h3>
                            <div><span>主教练:</span><p>吴坊</p><span>副教练:</span><p>许嵩</p></div>
                            <div class="classTime"><span>上课时间:</span><p>2019.04.02</p><span>上课时间:</span><p>2019.04.</p></div>
                            <div class="classUp"><span>上课地址:</span><p>打佛诶发件人反而</p></div>
                        </div>
                    </div>
                </li>
                 <li>
                    <div   class='mainLeft_img'>
                        <img src="../../assets/img/selfImg.jpg" alt="">
                        <div class="mainRight">
                            <h3>花式足球</h3>
                            <div><span>主教练:</span><p>吴坊</p><span>副教练:</span><p>许嵩</p></div>
                            <div class="classTime"><span>上课时间:</span><p>2019.04.02</p><span>上课时间:</span><p>2019.04.</p></div>
                            <div class="classUp"><span>上课地址:</span><p>打佛诶发件人反而</p></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import headerTitle from "../../components/header";
import mianList from '../../components/mainList'
export default {
    name:'courseDetail',
    components:{headerTitle, mianList},
    data(){
        return{
            headerTitle: '课表',
        }
    },
}
</script>
<style lang="scss">
.course_courseDetail{
    width: 100%;
    height: 100%;
    background: url(../../assets/img/bj1.png)  0 0 / 100% 100% ;
    .main{
        margin: .18rem;
        height: calc(100% - 1rem);
        width: calc(100% - .36rem);
        background: rgba(35, 65, 101,0.5);
        border-radius: .05rem;
        padding: .13rem .05rem .13rem .19rem;
        overflow-y: scroll;
        ul{
            display: flex; 
            flex-wrap: wrap;
            li{
                width: 6.227rem;
                height: 1.48rem;
                background: orange;
                margin-right: .14rem;
                margin-bottom: .1rem;
                border-radius: .05rem;
                background: #271947 url(../../assets/img/selfBg.png )  0 0 / 100% 100% ;
                padding: .15rem .14rem;
                .mainLeft_img{

                    width: 100%;
                    height: 100%;
                    img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: .04rem;
                        float: left;
                    }
                    .mainRight{
                        height: 100%;
                        float: left;
                        width: calc(100%  - 1.21rem);
                        padding-left:.13rem;
                        h3{
                            font-size: .23rem;
                            color: #dcf0f2;
                            line-height: .4rem;
                            font-family: SimHei;
                            width: 100%;
                            overflow: hidden;
                            height: .36rem;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        div{
                            font-size: .12rem;
                            color: #7da1cd;
                            line-height: .3rem;
                            font-family: SimHei; 
                            span{
                                display: block;
                                float: left;
                                margin-right: .1rem;
                            }
                            p{
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 1.04rem;
                                float: left;
                                overflow: hidden;
                                margin-right: .09rem;
                            }
                        }
                        .classTime{
                            p{
                                width: auto;
                            }
                        }
                        .classUp{
                            p{
                                width: 3.2rem;
                            }
                        }
                        
                    }
                }

            }
        }
        

    }
    .main::-webkit-scrollbar {
        display: none;
    }
}
</style>
