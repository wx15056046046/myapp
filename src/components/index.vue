<template>
    <div>
       
    <div class="my">
       <heder></heder>
      <router-link to="/rec" class="select" activeClass="ac">推荐歌曲</router-link>
      <router-link to="/hot" class="select" activeClass="ac">热门歌曲</router-link>
      <router-link to="/seach" class="select" activeClass="ac">搜索歌曲</router-link>
      <hr/>
    </div>
    
     <router-view></router-view>
    </div>
</template>
<script>
// import heder from "./components/heder";
import heder from './pages/heder'
export default {
    components:{
        heder
    }
}
</script>
<style scoped>
.my {
  position: fixed;
  top:0;
  background: #fff;
  width: 100%;
  z-index: 99;
 
}

.select {

  display: inline-block;
  color: #000;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  width: 30%;
  margin-left: 2%;
  text-align: center;
  padding: 0.133333rem 0;
}
.ac {
  border-bottom: 2px solid #d43c33;
  color: #d43c33;
}
</style>

