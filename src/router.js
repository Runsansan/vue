const routers = [{
    path: '/',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['./views/login/loginView.vue'], resolve)
},{
    path: '/index',
    meta: {
        title: '主页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[
        {
            path: '/test1',
            meta: {
                title: '练习1'
            },
            component: (resolve) => require(['./views/login/test1.vue'], resolve)
        },
        {
            path: '/test2',
            meta: {
                title: '练习2'
            },
            component: (resolve) => require(['./views/login/test2.vue'], resolve)
        },
    ]
},


];
export default routers;