import axios from 'axios'
import config from '../config/config'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? config.baseUrl.dev
    : config.baseUrl.pro
export default {
  //获取文章
  async get_article(id) {
    return axios.get(baseUrl + '/api/v1/article' + '?id=' + id)
  },
  //获取文章列表
  async get_articlelist(currentPage) {
    return axios.get(
      baseUrl + '/api/v1/article/articles' + '?currentPage=' + currentPage
    )
  }
}
