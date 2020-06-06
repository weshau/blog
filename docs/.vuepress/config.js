module.exports = {
    title: '栀晚鸢乱',
    description: 'Study Programs And Record Life',
    head: [
        ['link',
            { rel: 'icon', href: '/avatar.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    markdown: {
        lineNumbers: true //是否在每个代码块的左侧显示行号
    },
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        author: 'weshau',
        authorAvatar: '/avatar.png',
        logo: '/avatar.png',//导航栏 Logo
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            },
        },
        // 导航
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            {
                text: '联系',
                icon: 'reco-message',
                items: [
                    { text: 'Github', link: 'https://github.com/weshau', icon: 'reco-github' },
                    { text: 'Gmail', link: 'mailto:a1124851454@gmail.com', icon: 'reco-mail' },
                ]
            },

        ],
        sidebar: 'auto',
        sidebarDepth: 2,

        // 评论
        // valineConfig: {
        //     appId: process.env.LEANCLOUD_APP_ID,
        //     appKey: process.env.LEANCLOUD_APP_KEY,
        // },

        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,

        // 备案
        // record: 'ICP 备案文案',
        // recordLink: 'ICP 备案指向链接',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',

        // 项目开始时间，只填写年份
        startYear: '2020',

        // 友好链接
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            {
                title: '前端开发博客',
                desc: '关注Web前端开发技术，移动前端开发，前端资讯等',
                logo: "http://img1.imgtn.bdimg.com/it/u=139864497,1257636616&fm=15&gp=0.jpg",
                link: 'http://caibaojian.com/'
            },
        ],
        locales: {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: '文章', // 默认 文章
                        tag: '标签', // 默认 标签
                        category: '分类', // 默认 分类
                        friendLink: '友链' // 默认 友情链接
                    },
                    pagation: {
                        prev: '上一页',
                        next: '下一页',
                        go: '前往',
                        jump: '跳转至'
                    }
                }
            }
        },
    },
    plugins: [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["blackCat"],
                clean: false,
                messages: {
                    welcome: '我是weshau欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦'
                }
            }
        ],
    ]
}