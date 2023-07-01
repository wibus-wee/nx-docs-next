(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1451],{5973:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/build",function(){return n(243)}])},243:function(s,e,n){"use strict";n.r(e);var l=n(1527),i=n(6908),r=n(6736);n(8823);var c=n(3857);function o(s){let e=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",h2:"h2",pre:"pre",code:"code",span:"span",a:"a",ul:"ul",li:"li"},(0,r.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"自主构建"}),"\n",(0,l.jsx)(c.UW,{children:(0,l.jsxs)(e.p,{children:["如果你想要自定义构建过程，或者你想要在不同的平台上运行，那么你需要自主构建。我们在 ",(0,l.jsx)(e.em,{children:"「快速起步」"})," 章节提供的是 ",(0,l.jsx)(e.strong,{children:"Linux + macOS x86"})," 平台的构建包。"]})}),"\n",(0,l.jsx)(e.h2,{id:"直接构建服务",children:"直接构建服务"}),"\n",(0,l.jsx)(e.p,{children:"克隆官方远程 git 仓库"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/mogland/core.git"})]})})}),"\n",(0,l.jsx)(e.p,{children:"使用 pnpm 安装项目依赖（依赖 pnpm 8.x 以上版本）"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"install"})]})})}),"\n",(0,l.jsx)(e.p,{children:"使用 NestJS CLI 命令构建你需要的服务"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"build:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"service-nam"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 比如说"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"build:core"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 你也可以使用"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"build"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 构建所有服务"})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["目前支持的 service-name 可在 ",(0,l.jsx)(e.a,{href:"#%E7%9B%AE%E5%89%8D%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%8D%E5%8A%A1",children:"目前支持的服务"})," 中看到"]}),"\n",(0,l.jsxs)(e.p,{children:["使用 ",(0,l.jsx)(e.code,{children:"node"})," 命令启动你已构建完成的服务"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"dist/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"service-nam"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"main.js"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 比如说"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"dist/core"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"main.js"})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"目前支持的服务",children:"目前支持的服务"}),"\n",(0,l.jsxs)(e.p,{children:["目前支持的 ",(0,l.jsx)(e.strong,{children:"service-name"})," 有："]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"core"})," - 必要网关层 - ",(0,l.jsx)(e.strong,{children:"必须构建"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"user-service"})," - 用户服务模块 - ",(0,l.jsx)(e.strong,{children:"必须构建"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"page-service"})," - 文章页面分类服务模块"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"comments-service"})," - 评论服务模块"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"friends-service"})," - 友情链接服务模块"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"notification-service"})," - 通知服务模块"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"themes-service"})," - 主题服务模块"]}),"\n"]}),"\n",(0,l.jsxs)(e.h2,{id:"拓展使用-vercelncc-重新打包",children:["拓展：使用 ",(0,l.jsx)(e.code,{children:"@vercel/ncc"})," 重新打包"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"@vercel/ncc"})," 是一个可以将 Node.js 项目打包成一个单文件的工具，让你可以在不安装项目依赖（",(0,l.jsx)(e.code,{children:"node_modules"}),"）的情况下运行项目。"]}),"\n",(0,l.jsx)(e.p,{children:"core 中已经写好了相关构建命令，你可以直接使用，但前提是你需要先构建了服务。"}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"bundle:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"service-nam"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 比如说"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"bundle:core"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 你也可以使用"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"bundle"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 构建所有服务"})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["构建完成后，你可以在 ",(0,l.jsx)(e.code,{children:"out/<service-name>"})," 目录下找到打包后的文件夹。请注意，请勿修改打包后的文件夹内的任何文件，否则可能会导致服务无法正常运行。"]}),"\n",(0,l.jsxs)(e.p,{children:["接下来使用 ",(0,l.jsx)(e.code,{children:"node"})," 命令启动你已构建完成的服务"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"out/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"service-nam"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"main.js"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 比如说"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"out/core"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"main.js"})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["关于组件启动时的自定义配置，请前往",(0,l.jsx)(e.a,{href:"../config/",children:"「配置索引」"}),"章节"]}),"\n",(0,l.jsx)(c.UW,{type:"info",emoji:"ℹ️",children:(0,l.jsxs)(e.p,{children:["有关持久化运行，请自行使用搜索引擎探索。这里给几个相关的关键词：",(0,l.jsx)(e.strong,{children:"pm2"}),", ",(0,l.jsx)(e.strong,{children:"screen"}),", ",(0,l.jsx)(e.strong,{children:"docker"}),", ",(0,l.jsx)(e.strong,{children:"docker compose"})]})})]})}e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)},pageOpts:{filePath:"pages/docs/build.mdx",route:"/docs/build",headings:[{depth:1,value:"自主构建",id:"自主构建"},{depth:2,value:"直接构建服务",id:"直接构建服务"},{depth:2,value:"目前支持的服务",id:"目前支持的服务"},{depth:2,value:"拓展：使用 @vercel/ncc 重新打包",id:"拓展使用-vercelncc-重新打包"}],title:"自主构建"},pageNextRoute:"/docs/build"})}},function(s){s.O(0,[6908,9774,2888,179],function(){return s(s.s=5973)}),_N_E=s.O()}]);