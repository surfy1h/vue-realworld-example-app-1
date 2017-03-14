
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import * as getters from './getters'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  appName: 'conduit',
  appLoaded: false,
  articles: null,
  tags: null,
  tag: null,
  articlesCount: null,
  currentUser: null,
  token: null,
  article: null,
  comments: [],
  profile: {},
  tab: null
};


export default  new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
