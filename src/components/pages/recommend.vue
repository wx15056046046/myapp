<template>
  <div class="rec-con">
    <!-- 推荐歌曲 -->
    <div>
      <div class="rec-song">
        <span></span>
        <h4>推荐歌曲</h4>
      </div>
      <div class="song-list">
        <ul>
          <li v-for="item in list" :key="item.id">
            <a href="javascript:;">
              <img :src="item.img" alt />
              <p>{{item.dec}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 最新音乐 -->
    <div class="new-music">
      <div class="rec-song">
        <span></span>
        <h4>最新音乐</h4>
      </div>
      <ul>
          <li v-for='ite in songlist' :key='ite.id'>
              <a href="javascript:;">
                  <p>{{ite.songname}}</p>
                  <span>{{ite.singer}} -- {{ite.songname}}</span>
              </a>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: "../../../static/images/avatar_1.jpg",
          dec: "考研倒计时：即使单枪匹马 也要奋勇直前"
        },
        {
          id: 2,
          img: "../../../static/images/avatar_2.jpg",
          dec: "考研倒计时：即使单枪匹马 也要奋勇直前"
        },
        {
          id: 3,
          img: "../../../static/images/avatar_3.jpg",
          dec: "考研倒计时：即使单枪匹马 也要奋勇直前"
        },
        {
          id: 4,
          img: "../../../static/images/avatar_1.jpg",
          dec: "考研倒计时：即使单枪匹马 也要奋勇直前"
        },
        {
          id: 5,
          img: "../../../static/images/avatar_2.jpg",
          dec: "考研倒计时：即使单枪匹马 也要奋勇直前"
        },
        {
          id: 6,
          img: "../../../static/images/avatar_3.jpg",
          dec: "考研倒计时：即使单枪匹马 也要奋勇直前"
        }
      ],
      songlist:[
          {
          id: 1,
         songname:'念念有词',
          singer:'周深'},
        {
          id: 2,
          songname:'念念有词',
          singer:'周深'},
        {
          id: 3,
         songname:'念念有词',
          singer:'周深'
        },
        {
          id: 4,
          songname:'念念有词',
          singer:'周深'
        },
        {
          id: 5,
          songname:'念念有词',
          singer:'周深'
        },
        {
          id: 6,
        songname:'念念有词',
          singer:'周深'
        }
      ]
    };
  }
};
</script>
<style lang="">
@import "../../assets/css/rec.css";
</style>