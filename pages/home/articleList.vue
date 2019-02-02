<template>
  <div class="home">
    <homepage :name="changename"></homepage>
    <div class="home-right">
      <div v-show="noarticle">没有找到相关内容~~~~~~~</div>
      <div class="article-list-wrap">
        <div class="article-list" v-for="(item,index) in dataList" :key="index">
          <div class="article-title">{{item.article_title}}</div>
          <div class="article-main">{{item.article_text_content}}</div>
          <div class="article-other">
            <div class="article-other-time">{{item.create_data}}</div>
            <div class="article-other-read" @click="toPage(item.id)">继续阅读</div>
          </div>
        </div>
        <div class="page-part">
          <Page :current_page="p_current_page" :_pages="pagetotal" @_changepage="changepage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homepage from '../../components/home-index'
import Page from '../../components/page'
import api from '../../api/index'
export default {
  async asyncData({ route }) {
    let currentPage = route.query.currentPage
    let res = await api.get_articlelist(currentPage)
    if (res.data.error === 1) {
      return {
        noarticle: true,
        dataList: [],
        pagetotal: 1
      }
    }
    return {
      noarticle: false,
      dataList: res.data.article_list,
      pagetotal: res.data.count
    }
  },
  components: {
    homepage,
    Page
  },
  data() {
    return {
      p_current_page: 1,
      changename: 'a'
    }
  },
  methods: {
    toPage(id) {
      window.location.href = '/home/article?id=' + parseInt(id)
    },
    changepage(val) {
      window.location.href = '/home/articleList?currentPage=' + val
    },
    changepageNum() {
      let num = this.$router.history.current.query.currentPage
      this.p_current_page = parseInt(num)
    }
  },
  mounted() {
    this.changepageNum()
  }
}
</script>

<style lang="less">
@import '../../assets/style/my-variable.less';
//文章列表区域
.home-right {
  width: 70%;
  margin-left: 30%;
  height: 100%;
  overflow-y: auto;
}

.article-list-wrap {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}

.article-list {
  border-bottom: 1px solid #ccc;
  padding: 10px 5px;
  padding-top: 20px;
}

.article-title {
  font-size: 20px;
  font-family: @font-family;
  color: #000;
  .wrap-2line(@n: 2);
}

.article-main {
  font-size: 14px;
  margin: 10px 0;
  color: #404040;
  font-family: @font-family;
  .wrap-2line(@n: 5);
}

.article-other {
  width: 100%;
  overflow: hidden;
  clear: both;
  .article-other-time,
  .article-other-read {
    float: left;
  }
  .article-other-time {
    font-size: 14px;
    color: #404040;
    line-height: 29px;
  }
  .article-other-read {
    margin: 0 10px;
    padding: 4px 6px;
    border: 1px solid #ff4359;
    color: #ff4359;
    border-radius: 14px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
