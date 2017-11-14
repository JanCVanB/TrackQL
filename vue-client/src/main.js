// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../theme/index.css'

import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    batchInterval: 10,
    uri: 'https://api.graph.cool/simple/v1/cj9u9mihwaswj01500pw0x5c4'
  }),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  template: '<App/>',
  components: { App }
})
