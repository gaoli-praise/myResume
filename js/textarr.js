let textArr = [{
        name: 'h2',
        class: 'inten',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：高莉'
            }, {
                name: 'div',
                text: '性别：女'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '邮箱：1690235898@qq.com'
            }, {
                name: 'div',
                text: '联系电话：18811747529'
            }]
        }]
    },
    {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'HTML5、CSS3、ES6'
            }]
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Vue组件化开发及由管理器Vue Router、Vuex'
            }]
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Element-UI及vant框架vue基本用法'
            }]
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Web库：Axios、Jquery'
            }]
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: '小程序及小程序云开发流程'
            }]
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'css3动画、过渡'
            }]
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: '前端工具webpack和npm包管理库'
            }]
        }]
    },
    {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
                name: 'ul',
                class: 'ul-list',
                children: [{
                        name: 'li',
                        class: 'project-title',
                        text: '项目一：即时音乐--（小程序云开发）'
                    }, {
                        name: 'li',
                        text: '使用技术栈：',
                        children: [{
                            name: 'span',
                            class: 'tag',
                            text: '小程序云开发、tcb-router、iconfont、css3动画、node.js、vue'
                        }]
                    }, {
                        name: 'li',
                        text: '项目描述：本项目是横跨小程序端、云开发后端、后台管理系统的一站式云开发小程序全栈项目。使用小程序组件化开发打造小程序前端部分，使用小程序云开发打造小程序后端部分，通过后台管理系统访问云开发资源实现对项目中数据及文件的管理'
                    }, {
                        name: 'li',
                        text: '功能实现：'
                    }, {
                        name: 'li',
                        text: `1、小程序端：在云函数内使用tcb-router分管路由，优化逻辑处理,自定义封装歌曲组件、进度条组件、歌词组件、blog组件等,
                调用云数据库存储歌单、用户发布内容、评论内容,调用云存储存放用户发布的相关图片,采用flex、position定位、iconfont来实现小程序页面布局、
                CSS3动画来实现动画效果`
                    }, {
                        name: 'li',
                        text: '2、服务器端：基于node.js平台的koa用于搭建服务器、koa-router搭建路由，不同页面的路由分管在不用的文件中作为模块导出,在uiils文件中封装公用的方法，分别用于获取access-token、操作云存储、作云数据库,引入koa-cors解决跨域问题'
                    },
                    {
                        name: 'li',
                        text: '3、后台系统前端: 采用vue-admin-template框架、使用Element-UI+css实现页面的布局、在api文件夹中封装不同功能的请求'
                    },
                    {
                        name: 'li',
                        text: '查看源码：链接'
                    }
                ]
            }, {
                name: 'ul',
                class: 'ul-list',
                children: [{
                        name: 'li',
                        class: 'project-title',
                        text: '项目二：商品管理系统'
                    }, {
                        name: 'li',
                        text: '使用技术栈：',
                        children: [{
                            name: 'span',
                            class: 'tag',
                            text: 'Vue、Vue-Router、Axios、Less'
                        }, {
                            name: 'span',
                            text: '、Element-ui'
                        }]
                    },
                    {
                        name: 'li',
                        text: '项目描述：管理用户账号（登录，退出，用户管理，权限管理），商品管理（商品分类，分类参数，商品信息，订单），数据统计'
                    },
                    {
                        name: 'li',
                        text: '功能实现：'
                    },
                    {
                        name: 'li',
                        text: '1. Vue-cli脚手架搭建项目'
                    },
                    {
                        name: 'li',
                        text: '2. 使用Vue-Router做应用页面跳转，路由导航守卫权限控制,params、query传参'
                    }, {
                        name: 'li',
                        text: '3. 二次封装axios统一处理常规问题，拦截请求和响应，提前对数据进行处理。'
                    }, {
                        name: 'li',
                        text: '4. 使用CSS预处理器less简化CSS代码编写。'
                    }, {
                        name: 'li',
                        text: '6. 使用Element-UI+css实现页面的布局。'
                    },
                    {
                        name: 'li',
                        text: '查看源码：链接'
                    }
                ],

            },
            {
                name: 'ul',
                class: 'ul-list',
                children: [{
                        name: 'li',
                        class: 'project-title',
                        text: '项目三：简历生成器'
                    }, {
                        name: 'li',
                        text: '使用技术栈：',
                        children: [{
                            name: 'span',
                            class: 'tag',
                            text: '原生js、html、css、定时器'
                        }]
                    }, {
                        name: 'li',
                        text: '项目描述：用原生js实现在线生成简历，css3实现过渡、动画'
                    },
                    {
                        name: 'li',
                        text: '查看源码：https://gitee.com/a_refined_smile/resume.git'
                    },
                    {
                        name: 'li',
                        text: '点击预览：链接'
                    }
                ]
            },
            {
                name: 'ul',
                class: 'ul-list',
                children: [{
                        name: 'li',
                        class: 'project-title',
                        text: '项目四：基于canvas的画板'
                    }, {
                        name: 'li',
                        text: '使用技术栈：',
                        children: [{
                            name: 'span',
                            class: 'tag',
                            text: 'Jquery、HTML5、Canvas、ES6、JavaScript'
                        }]
                    }, {
                        name: 'li',
                        text: '项目描述：使用HTML5的canvas及其相关API，可实现画图、擦除、清空、剪切、复制等功能'
                    },
                    {
                        name: 'li',
                        text: '查看源码：链接'
                    },
                    {
                        name: 'li',
                        text: '点击预览：链接'
                    }
                ]
            }
        ]
    },
    {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：南阳理工学院'
        }, {
            name: 'span',
            text: '毕业时间：2017年'
        }]
    },
]
let balloon = `
    <div class="balloon-wrap">
        <img src="images/balloon.png" id="bg-balloon-small">
        <img src="images/balloon.png" id="bg-balloon-large">
        <img src="images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`