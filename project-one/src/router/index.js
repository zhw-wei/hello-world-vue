import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '登陆0',
            hidden: true,
            redirect: '/login4',
            component: () => import('@/components/LoginOne.vue')
        },
        {
            path: '/login',
            name: '登陆1',
            hidden: true,
            component: () => import('@/components/LoginOne.vue')
        },
        {
            path: '/login2',
            name: '登陆2',
            hidden: true,
            component: () => import('@/components/LoginTwo.vue')
        },
        {
            path: '/login3',
            name: '登陆3',
            hidden: true,
            component: () => import('@/components/LoginThree.vue')
        },
        {
            path: '/login4',
            name: '登陆4',
            hidden: true,
            component: () => import('@/components/LoginFour.vue')
        },
        {
            path: '*',
            hidden: true,
            component: () => import('@/components/NotFound')
        },
        {
            path: '/home/dataview',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('@/components/HelloWorld.vue'),
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalisis/DateView.vue')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalisis/MapView.vue')
                },
                {
                    path: '/home/scoremap',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalisis/ScoreMap.vue')
                },
                {
                    path: '/home/travelMap',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalisis/TravelMap.vue')
                }
            ]
        },
        {
            path: '/home',
            name: '学生管理',
            redirect: '/home/student',
            iconClass: 'fa fa-users',
            component: () => import('@/components/HelloWorld.vue'),
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/student/StudentList.vue')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/student/InfoList.vue')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/student/InfoLists.vue')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/components/student/WorkList.vue')
                }
            ]
        },
        {
            path: '/home/userinfo',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/HelloWorld.vue'),
            children: [
                {
                    path: '/home/userinfo',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/user/UserInfo.vue')
                }
            ]
        }
    ],
    mode: 'history'
})