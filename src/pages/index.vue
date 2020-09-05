<template>
  <div style="align-items: center;justify-content: center">
    <text>{{currentSong.url}}</text>
    <text class="res">{{currentSongIndex}}</text>
    <text class="button" @click="play(currentSong.url)">播放（{{currentSong.url}}）</text>
    <text class="button" @click="start">恢复播放</text>
    <text class="button" @click="pause">暂停</text>
    <text class="button" @click="stop">停止</text>
    <text class="button" @click="nextSong">下一曲</text>
    <text class="button" @click="prevSong">上一曲</text>
    <text class="button" @click="seek">指定进度</text>
    <text class="button" @click="loop">{{isloop?'取消循环':'循环'}}</text>
    <text class="button" @click="duration">获取时长</text>
  </div>
</template>
<script>
import songList from "../json/songList";
import { debounce } from "../utils/common.js";
const navigationBar = app.requireModule("navigationBar");
const audio = app.requireModule("audio");
const eeui = app.requireModule("eeui");

export default {
  data() {
    return {
      res: "",
      songList,
      currentSongIndex: 0,
      isloop: false
    };
  },
  mounted() {
    eeui.scanFile(result => {
      if (result && result.state === "success") {
        const list = result.fileList.map(e => {
          return {
            title: e.fileName,
            url: e.path
          };
        });
        this.songList = list
      }
      if (result.status === "error") {
        eeui.alert(
          {
            title: "提示!",
            message: "请确认是否授权获取本地文件"
          },
          function() {}
        );
      }
    }); //扫描本地文件
    audio.setCallback(res => {
      if (res.status == "error" || res.status == "compelete") {
        this.nextSong();
      }
      this.res = res;
    });
  },
  computed: {
    currentSong() {
      const { currentSongIndex, songList } = this;
      return songList[currentSongIndex];
    }
  },
  beforeDestroy: function() {
    this.stop();
  },
  methods: {
    nextSong: debounce(function() {
      const { currentSongIndex, songList } = this;
      if (currentSongIndex == songList.length - 1) {
        this.currentSongIndex = 0;
      } else {
        this.currentSongIndex = currentSongIndex + 1;
      }
      setTimeout(() => {
        this.play(this.currentSong.url);
      }, 0);
    }, 1000),
    prevSong: debounce(function() {
      const { currentSongIndex, songList } = this;
      if (currentSongIndex == 0) {
        this.currentSongIndex = songList.length - 1;
      } else {
        this.currentSongIndex--;
      }
      setTimeout(() => {
        this.play(this.currentSong.url);
      }, 0);
    }),

    start() {
      audio.start();
    },
    play(url) {
      audio.play(url);
    },
    pause() {
      audio.pause();
    },
    stop() {
      audio.stop();
    },
    seek() {
      audio.seek(20000);
    },
    loop() {
      this.isloop = !this.isloop;
      audio.loop(this.isloop);
    },
    duration() {
      audio.getDuration(this.currentSong.url, res => {
        this.res = res;
      });
    }
  }
};
</script>
<style scoped>
.res {
  color: #000000;
  font-size: 24px;
}
.button {
  width: 230px;
  height: 80px;
  line-height: 80px;
  margin-top: 24px;
  text-align: center;
  color: #ffffff;
  background-color: #3eb4ff;
  font-size: 26px;
}
</style>