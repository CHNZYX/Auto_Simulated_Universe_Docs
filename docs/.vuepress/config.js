/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:50
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-05-23 22:07:31
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
module.exports = {
    title: '崩坏：星穹铁道小助手文档',
    description: '崩坏：星穹铁道小助手文档',
    base:'/Honkai-Star-Rail-Docs/', // 设置为github仓库地址，用来部署到github pages
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig:{
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "配置", link: "/config/" },
            { 
                text: "反馈",
                items: [
                    { text: "QQ群", link: "https://qm.qq.com/cgi-bin/qm/qr?k=xdCO46fHlVcY7D2L7elXzqcxL3nyTGnW&jump_from=webapi&authKey=uWZooQ2szv+nG/re7luCKn8LW1KibSb0vvi0FycA45Mglm5AGM1GP2iJ+SiWmDwg" },
                    { text: "Telegram Group", link: "https://t.me/+yeQEhnuT9O41NDM1" }
                ]
            },
            { text: "Github", link: "https://github.com/Starry-Wind/SRA" },
        ],
        sidebar: [
            {
                title: "首页",
                path: "/"
            },
            {
                title: "指南",
                path: "/guide/",
            },
            {
                title: "配置",
                path: "/config/"
            }
        ]
    },
}