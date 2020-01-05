<template>
  <div style="margin-top:3rem;">
    <!-- <h1>ninin</h1> -->
    <div class="hot-top">
      <div class="music">
        <img :src="img" alt />
      </div>
      <p>更新日期：</p>
    </div>
    <div class="songlist">
      <ul>
        <li v-for="(item,index) in songlist" :key="item.id">
          <a href="javascript:;">
            <div style="display:flex;">
              <div class="span" :class="[index<3 ?'red':'']">{{index>8 ? index+1 :"0"+(index+1)}}</div>
              <div class="song">
                <p style="font-size:15px;">{{item.songname}}</p>
                <p>{{item.singer}}-{{item.songname}}</p>
              </div>
            </div>
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
      img: "../../../static/images/index_icon_2x.png",
      songlist: [
        {
          id: 1,
          songname: "征服",
          singer: "周深"
        },
        {
          id: 2,
          songname: "童话",
          singer: "周深"
        },
        {
          id: 3,
          songname: "后来",
          singer: "周深"
        },
        {
          id: 4,
          songname: "再见",
          singer: "周深"
        },
        {
          id: 5,
          songname: "吻别",
          singer: "周深"
        },
        {
          id: 6,
          songname: "宝贝",
          singer: "周深"
        },
        {
          id: 7,
          songname: "怎样",
          singer: "周深"
        },
        {
          id: 8,
          songname: "旋木",
          singer: "周深"
        },
        {
          id: 9,
          songname: "掌心",
          singer: "周深"
        },
        {
          id: 10,
          songname: "忐忑",
          singer: "周深"
        },
        {
          id: 11,
          songname: "背叛",
          singer: "周深"
        },
        {
          id: 12,
          songname: "暧昧",
          singer: "周深"
        },
        {
          id: 13,
          songname: "白鸽 ",
          singer: "周深"
        },
        {
          id: 14,
          songname: "念念有词",
          singer: "周深"
        },
        {
          id: 15,
          songname: "念念有词",
          singer: "周深"
        },
        {
          id: 16,
          songname: "左边",
          singer: "周深"
        },
        {
          id: 17,
          songname: "念念有词",
          singer: "周深"
        },
        {
          id: 18,
          songname: "念念有词",
          singer: "周深"
        }
      ]
    };
  }
};
</script>
<style lang="" scoped>
.red {
  color: #d43c33;
}
.hot-top {
  background: url(../../../static/images/hot_music_bg_2x.jpg) no-repeat;
  height: 3.89rem /* 280/72 */;
  width: 100%;
  background-size: 100% 100%;
}
.hot-top .music {
  position: absolute;
  top: 4rem;
  overflow: hidden;
  width: 3.94rem /* 284/72 */;
  height: 1.86rem /* 134/72 */;
}
.hot-top .music img {
  width: 100%;
  margin-top: -0.62rem /* 22/72 */;
  margin-left: -0.22rem /* 8/72 */;
}

.hot-top p {
  position: absolute;
  top: 6rem;
  left: 0.21rem /* 15/72 */;
  color: #fff;
}
.songlist {
  margin: 0 0.14rem /* 10/72 */;
}
.songlist a {
  width: 100%;
  display: inline-block;
  text-decoration: none;
}
.songlist a .span {
  height: 1.53rem /* 110/72 */;
  width: 1.11rem  !important/* 80/72 */;
  line-height: 1.53rem /* 110/72 */;
  font-size: 17px;
  text-align: center;
}
.songlist a .song {
  flex: 1;
  height: 1.53rem /* 110/72 */;
  line-height: 0.76rem /* 55/72 */;
  border-bottom: 1px solid #999;
}
</style>