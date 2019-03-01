import 'babel-polyfill'
import 'common/js/hack'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'
import { SET_PLAY_HISTORY, SET_FAVORITE_LIST } from './store/mutation-types'
import { loadPlay, loadFavorite } from 'common/js/cache'
import { processSongsUrl } from 'common/js/song'
import VueI18n from 'vue-i18n'
import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)
Vue.use(VueI18n);
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
const i18n = new VueI18n({
  locale: 'ch',
  message: {
    'ch': require('./language/ch'),
    'en': require('./language/en')
  }
})
const historySongs = loadPlay()
processSongsUrl(historySongs).then((songs) => {
  store.commit(SET_PLAY_HISTORY, songs)
})

const favoriteSongs = loadFavorite()
processSongsUrl(favoriteSongs).then((songs) => {
  store.commit(SET_FAVORITE_LIST, songs)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
