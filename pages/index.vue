<template>
  <div class="home">
    <div class="home-left" :class="'fade-'+[fadename]">
      <div class="home-index-wrap">
        <div class="home-index-top"></div>
        <div class="home-index-nav-wrap">
          <div class="home-index-nav-main">
            <ul>
              <li class="blog-btn" @click="changeState()">博客</li>
              <li class="person-btm">简历</li>
            </ul>
          </div>
        </div>
        <div class="home-index-myname">
          <div class="home-index-myname-main">
            <ul>
              <li>
                <img class="headPortrait" src="../static/mypersonimg.jpg">
              </li>
              <li class="my-en-name">
                <div class="my-en-name-a">{{ initData.ename }}</div>
                <div class="my-en-name-b">{{ initData.introduce }}</div>
                <div class="my-en-name-c">{{ initData.word }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="home-index-tips">
          <div class="home-index-tips-main">
            <ul>
              <li>
                <i class="fa fa-github fa-lg" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      fadename: 'full',
      initData: {
        ename: '@XIE shi peng',
        introduce: '嗨！我是谢世鹏，一名前端开发者。',
        word: '欢迎交流分享对技术的见解。'
      }
    }
  },
  methods: {
    changeState() {
      this.fadename = 'left'
      const self = this
      setTimeout(function() {
        self.toPage('home/articleList')
      }, 300)
    },
    toPage(_pach) {
      window.location.href = _pach + '?currentPage=1'
    }
  }
}
</script>

<style lang="less">
@import '../assets/style/my-variable.less';
.home {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.home-left {
  position: absolute;
  top: 0;
  height: 100%;
  background: url('~static/jason-leung-479251-unsplash.jpg') no-repeat;
  background-size: cover;
  display: inline-block;
}

.@{home}-wrap {
  width: 100%;
  margin: 0 auto;
}

.@{home}-top {
  height: 140px;
  overflow: hidden;
}

.@{home}-nav-wrap {
  height: 60px;
  overflow: hidden;
  position: relative;
  .@{home}-nav-main {
    width: 320px;
    overflow: hidden;
    clear: both;
    margin: 0 auto;
    ul {
      width: 100%;
      .blog-btn {
        float: left;
      }
      .person-btm {
        float: right;
      }
    }
    ul li {
      font-size: 16px;
      padding: 3px 15px;
      margin: 0 3px;
      display: inline-block;
      border: 2px solid #fff;
      border-radius: 12px;
      cursor: pointer;
      text-align: center;
      color: #fff;
      font-family: @font-family;
    }
  }
}

.@{home}-myname {
  margin: 0 auto;
  .@{home}-myname-main {
    margin: 0 auto;
    width: 320px;
    ul {
      width: 100%;
      .headPortrait {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        display: block;
        margin: 0 auto;
      }
      .my-en-name {
        font-family: @font-family;
        color: #fff;
        text-align: center;
        div {
          margin: 5px 0px;
        }
        .my-en-name-a,
        .my-en-name-c {
          font-size: 20px;
        }
        .my-en-name-b {
          font-size: 14px;
        }
      }
    }
  }
}

.@{home}-tips {
  height: 100px;
  margin: 0 auto;
  .@{home}-tips-main {
    margin: 0 auto;
    ul {
      width: 140px;
      margin: 0 auto;
      li {
        display: inline-block;
        padding: 3px 15px;
        margin: 0 3px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

//滑动动画
.fade-full {
  width: 100%;
}
.fade-a {
  width: 30%;
}
.fade-left {
  animation: left-active 0.3s ease-in-out;
  width: 30%;
}

@keyframes left-active {
  0% {
    width: 100%;
  }
  25% {
    width: 85%;
  }
  50% {
    width: 65%;
  }
  75% {
    width: 35%;
  }
  100% {
    width: 30%;
  }
}
.page-part {
  margin: 10px 0;
}
</style>
