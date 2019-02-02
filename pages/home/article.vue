<template>
  <div class="home">
    <homepage :name="changename"></homepage>
    <div class="article-right">
      <div v-show="noarticle">没有找到相关内容~~~~~~~</div>
      <div class="article-wrap" v-show="!noarticle">
        <div class="article-right-top">
          <div class="article-title">{{title}}</div>
          <div class="article-other">
            <div class="article-publish-time">{{create_data}}</div>
            <div class="article-readnum">{{count_read}}</div>
          </div>
        </div>
        <div class="article-content" v-html="article_content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import homepage from '../../components/home-index'
import api from '../../api/index'
export default {
  async asyncData({ route }) {
    let id = route.query.id
    const res = await api.get_article(id)
    if (res.data.error === 1) {
      return {
        noarticle: true,
        title: '',
        create_data: '',
        count_read: '',
        article_content: ''
      }
    }
    return {
      noarticle: false,
      title: res.data.article.article_title,
      create_data: res.data.article.create_data,
      count_read: res.data.article.count_read,
      article_content: res.data.article.article_content
    }
  },
  components: {
    homepage
  },
  data() {
    return {
      changename: 'a'
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/my-variable.less';
.article-right {
  width: 70%;
  margin-left: 30%;
  height: 100%;
  overflow-y: auto;
  .article-wrap {
    width: 80%;
    margin: 0 auto;
    overflow-x: hidden;
  }
  &-top {
    padding-top: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    .article-title {
      font-size: 20px;
      font-family: @font-family;
      color: #000;
      margin-bottom: 10px;
    }
    .article-other {
      overflow: hidden;
      clear: both;
    }
  }
  .article-content {
    margin: 10px 0 30px 0;
  }
}

.article-publish-time,
.article-readnum {
  color: #ccc;
  font-size: 14px;
}

.article-publish-time {
  float: left;
}

.article-readnum {
  float: right;
}
</style>
