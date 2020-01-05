<template>
  <div style="margin-top:3.5rem;">
    <!-- <h1>这是搜索页面</h1> -->
    <div class="search">
      <input type="text" placeholder="搜索歌曲、歌手、专辑" v-model="msg" />
    </div>
    <div class="hot-s">
      <a class="title" href="javascript:;" v-show="!flag">搜索" {{msg}} "</a>

      <p v-show="flag">热门搜索</p>
      <ul v-show="flag">
        <li v-for="item in reclist" :key="item.id">
          <a href="javascript:;">{{item.name}}</a>
        </li>
        <!-- <li><a href="javascript:;">邓紫棋摩天游乐园</a></li>
        <li><a href="javascript:;">好想爱这个世界阿</a></li>-->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  // msg:'',
  data() {
    return {
      //   flag:flase,
      msg: "",
      reclist: [
        { id: 1, name: "追" },
        { id: 2, name: "邓紫棋摩天游乐园" },
        { id: 3, name: "好想爱这个世界阿" },
        { id: 4, name: "周深念念有词" },
        { id: 5, name: "周杰棍的双杰伦" },
        { id: 6, name: "渣谦的告白" },
        { id: 7, name: "哈哈哈哈哈" }
      ],
      flag: true
    };
  },
  watch: {
    msg(newVal) {
      if (newVal.length > 0) {
        this.flag = false;
      } else {
        this.flag=true
      }
    }
  }
};
</script>
<style lang="" scoped>
.search {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 10px;
}
.search input {
  display: inline-block;
  background: #f4f4f4;
  /* color: #f4f4f4 !important; */
  caret-color: red;
  height: 0.83rem /* 60/72 */;
  width: 80%;
  margin-left: 10%;
  border-radius: 0.69rem /* 50/72 */;
  padding-left: 10px;
  font-size: 13px;
}
.hot-s {
  margin-top: 10px;
  margin-left: 10px;
}
.hot-s .title {
  height: 50px;
  margin-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  line-height: 50px;
  color: #507daf;
  text-decoration: none;
}

.hot-s p {
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
  margin-top: 5px;
}
.hot-s li {
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 32px;
  color: #333;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}
</style>