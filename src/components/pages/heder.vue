<template>
    <div class="myheader">
        <div class="top">
             <img :src="img" alt="">
             <h3>网易云音乐</h3>
        </div>
       

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            // img1:''
           img: require("../../assets/images/logo.png")
        }
    },
}   
</script>
<style>
.myheader{
    width: 100%;
    /* position: fixed;
    top: 0; */
    background: #d43c33;
    height:2.28rem /* 164/72 */;
    overflow: hidden;
}
.myheader img{
   vertical-align: middle;
    width: .94rem /* 68/72 */;

}
.myheader .top{
    /* width: 200px; */
    position: relative;
    left: .266667rem;
    top: 30%;
    
}
.myheader h3{
    display: inline-block;
    color: #fff;
    font-size:.6rem /* 68/72 */;
   vertical-align: middle;

}

</style>