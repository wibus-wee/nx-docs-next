(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9756],{6555:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/migrate/from-third-party",function(){return r(4986)}])},4986:function(n,e,r){"use strict";r.r(e);var d=r(1527),o=r(6908),i=r(6736);r(8823);var s=r(3857);function h(n){let e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ol:"ol",li:"li",code:"code"},(0,i.ah)(),n.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{children:"从其他博客系统迁移"}),"\n",(0,d.jsx)(e.h2,{id:"使用-markdown-迁移",children:"使用 Markdown 迁移"}),"\n",(0,d.jsx)(s.UW,{type:"warning",children:(0,d.jsxs)(e.p,{children:["你的 Markdown 文件必须要携带 YAML Front Matter，并且最好是符合\n",(0,d.jsx)(e.a,{href:"https://commonmark.org/",children:"CommonMark"})," 规范的，否则可能会出现一些问题。"]})}),"\n",(0,d.jsx)(e.p,{children:"如果你的博客系统支持 Markdown，那么你可以直接将你的博客内容导出为 Markdown 文件，然后在 Mog 后台的迁移页面，导入这些 Markdown 文件。"}),"\n",(0,d.jsx)(e.h2,{id:"从-typecho-迁移",children:"从 Typecho 迁移"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["下载 Typecho 数据导出插件 ",(0,d.jsx)(e.a,{href:"https://github.com/mogland-dev/Typecho-Plugin-MogRun",children:"Typecho-Plugin-MogRun"})," 插件，根据 READNE 介绍安装并启用。"]}),"\n",(0,d.jsx)(e.li,{children:"在后台的插件管理页面，点击 MogRun 插件的设置按钮，选择你要导出的内容，点击导出按钮。"}),"\n",(0,d.jsxs)(e.li,{children:["下载导出的 zip 文件，解压后，将其中的 ",(0,d.jsx)(e.code,{children:"data.json"})," 文件放入 Mog 后台的迁移页面，点击导入按钮。"]}),"\n",(0,d.jsx)(e.li,{children:"等待导入完成，即可完成迁移。"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"从-wordpress-迁移",children:"从 WordPress 迁移"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["下载 WordPress 数据导出插件 ",(0,d.jsxs)(e.a,{href:"#wordpress",children:["MogRun-WordPress ",(0,d.jsx)(e.code,{children:"WIP"})]})," 插件，安装并启用。"]}),"\n",(0,d.jsx)(e.li,{children:"在后台的插件管理页面，点击 MogRun 插件的设置按钮，选择你要导出的内容，点击导出按钮。"}),"\n",(0,d.jsxs)(e.li,{children:["下载导出的 zip 文件，解压后，将其中的 ",(0,d.jsx)(e.code,{children:"data.json"})," 文件放入 Mog 后台的迁移页面，点击导入按钮。"]}),"\n",(0,d.jsx)(e.li,{children:"等待导入完成，即可完成迁移。"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"从-ghost-迁移",children:"从 Ghost 迁移"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["下载 Ghost 数据导出插件 ",(0,d.jsxs)(e.a,{href:"#ghost",children:["MogRun-Ghost ",(0,d.jsx)(e.code,{children:"WIP"})]})," 插件，安装并启用。"]}),"\n",(0,d.jsx)(e.li,{children:"在后台的插件管理页面，点击 MogRun 插件的设置按钮，选择你要导出的内容，点击导出按钮。"}),"\n",(0,d.jsxs)(e.li,{children:["下载导出的 zip 文件，解压后，将其中的 ",(0,d.jsx)(e.code,{children:"data.json"})," 文件放入 Mog 后台的迁移页面，点击导入按钮。"]}),"\n",(0,d.jsx)(e.li,{children:"等待导入完成，即可完成迁移。"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"从-hexo-迁移",children:"从 Hexo 迁移"}),"\n",(0,d.jsx)(e.p,{children:"因为 Hexo 为静态博客，其文件使用的是 Markdown + YAML Front Matter 的格式，所以你可以直接将 Hexo 的博客文件导入到 Mog 中。"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"打包 Hexo 的博客文章 Markdown 文件，将其放入 Mog 后台的迁移页面，点击导入按钮。"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"从-jekyll-迁移",children:"从 Jekyll 迁移"}),"\n",(0,d.jsx)(e.p,{children:"因为 Jekyll 为静态博客，其文件使用的是 Markdown + YAML Front Matter 的格式，所以你可以直接将 Jekyll 的博客文件导入到 Mog 中。"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"打包 Jekyll 的博客文章 Markdown 文件，将其放入 Mog 后台的迁移页面，点击导入按钮。"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"从-hugo-迁移",children:"从 Hugo 迁移"}),"\n",(0,d.jsx)(e.p,{children:"因为 Hugo 为静态博客，其文件使用的是 Markdown + YAML Front Matter 的格式，所以你可以直接将 Hugo 的博客文件导入到 Mog 中。"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"打包 Hugo 的博客文章 Markdown 文件，将其放入 Mog 后台的迁移页面，点击导入按钮。"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"其他博客系统",children:"其他博客系统"}),"\n",(0,d.jsx)(e.p,{children:"如果你的博客系统不在上面的列表中，那么你可以尝试将其导出为 Markdown 文件，然后在 Mog 后台的迁移页面，导入这些 Markdown 文件。"}),"\n",(0,d.jsxs)(e.p,{children:["或者根据你的博客系统的数据格式，",(0,d.jsx)(e.a,{href:"/development/migrate-plugin",children:"开发一个数据导出插件"}),"，然后在 Mog 后台的迁移页面，导入这些数据文件。"]})]})}e.default=(0,o.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)},pageOpts:{filePath:"pages/docs/migrate/from-third-party.mdx",route:"/docs/migrate/from-third-party",headings:[{depth:1,value:"从其他博客系统迁移",id:"从其他博客系统迁移"},{depth:2,value:"使用 Markdown 迁移",id:"使用-markdown-迁移"},{depth:2,value:"从 Typecho 迁移",id:"从-typecho-迁移"},{depth:2,value:"从 WordPress 迁移",id:"从-wordpress-迁移"},{depth:2,value:"从 Ghost 迁移",id:"从-ghost-迁移"},{depth:2,value:"从 Hexo 迁移",id:"从-hexo-迁移"},{depth:2,value:"从 Jekyll 迁移",id:"从-jekyll-迁移"},{depth:2,value:"从 Hugo 迁移",id:"从-hugo-迁移"},{depth:2,value:"其他博客系统",id:"其他博客系统"}],title:"从其他博客系统迁移"},pageNextRoute:"/docs/migrate/from-third-party"})}},function(n){n.O(0,[6908,9774,2888,179],function(){return n(n.s=6555)}),_N_E=n.O()}]);