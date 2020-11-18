import Vue from 'vue'
import Router from 'vue-router'
import Auther from '@/components/auther'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/'
            name: 'Auther'
            component: Auther
        }
    ]
})
