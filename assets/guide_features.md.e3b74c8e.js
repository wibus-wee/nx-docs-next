import{d as v,r as p,b,e as g,u as x,f as y,g as $,o as _,c as r,h as e,n as c,i as S,j as k,k as w,_ as I,l as a,w as n,m as s,p as L,q as z}from"./app.2cae8797.js";const B=e("div",{"i-carbon:circle-dash":"","animate-spin":"","animate-2s":"","text-yellow4":""},null,-1),M=[B],N=e("div",{"i-carbon:checkmark-outline":"",class:"text-$vp-c-brand"},null,-1),V=[N],C=e("div",{"i-carbon:close-outline":"","text-red4":""},null,-1),E=[C],i=v({__name:"ListItem",setup(o){const l=p(),t=p(0);function d(){t.value=0,setTimeout(()=>{t.value=Math.random()>.9?2:1,t.value===2&&setTimeout(d,1e3)},Math.round(Math.random()*3e3)+400)}const h=b(()=>({"--vp-c-brand":t.value===1?"#66ba1c":t.value===2?"rgba(248, 113, 113)":"rgba(250, 204, 21)"})),u=g(),f=u.run(()=>x(l));return y(async()=>{await $(f).toBe(!0),u.stop(),d()}),(m,Q)=>(_(),r("li",{style:k(w(h))},[e("div",{ref_key:"el",ref:l,relative:"",m:"ya r-1","w-5":"","h-5":"","flex-none":"","align-mid":""},[e("div",{absolute:"",transition:"","duration-300":"",class:c(t.value?"flip":"")},M,2),e("div",{absolute:"",transition:"","duration-300":"",class:c(t.value===1?"":"flip")},V,2),e("div",{absolute:"",transition:"","duration-300":"",class:c(t.value===2?"":"flip")},E,2)],512),e("div",null,[S(m.$slots,"default")])],4))}});const F=o=>(L("data-v-c0ec9f22"),o=o(),z(),o),O={class:"features-list",dir:"auto",flex:"~ col gap2 md:gap-3"},T=s("\u670D\u52A1\u7AEF\u4F7F\u7528\u5FAE\u670D\u52A1\u67B6\u6784\uFF0C\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u3001\u5E76\u53D1\u5904\u7406\u3001\u6570\u636E\u7F13\u5B58\u3002"),j=s("\u5B98\u65B9\u524D\u7AEF "),q=F(()=>e("a",{target:"_blank",href:"https://zh.m.wikipedia.org/zh-hans/\u670D\u52A1\u5668\u7AEF\u6E32\u67D3",rel:"noopener noreferrer"},"SSR",-1)),D=s(" \u652F\u6301\uFF0C\u4E3A SEO \u548C\u9AD8\u6027\u80FD\u63D0\u4F9B\u652F\u6301"),J=s("\u4E3B\u9898\u591A\u79CD\u5F00\u53D1\u65B9\u5F0F\uFF0C\u652F\u6301\u4F7F\u7528\u6A21\u677F\u5F15\u64CE\u8026\u5408\u5F0F\u5F00\u53D1\u6216\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1\uFF0C\u63D0\u4F9B\u66F4\u591A\u7684\u4E3B\u9898\u9009\u62E9\u3002"),P=s("\u4F7F\u7528\u63D2\u4EF6\u5BF9\u535A\u5BA2\u529F\u80FD\u81EA\u5B9A\u4E49\u6269\u5C55\uFF0C\u6253\u9020\u66F4\u52A0\u5F3A\u5927\u7684\u535A\u5BA2\u7A7A\u95F4\u3002"),R=s("\u63D0\u4F9B\u5373\u65F6\u8BC4\u8BBA\u6A21\u5757\uFF0C\u66F4\u52A0\u5FEB\u901F\u6784\u5EFA\u524D\u7AEF\u9879\u76EE"),U=s("\u793E\u533A\u89C4\u5219\u7684\u89C4\u8303\u5236\u5B9A\uFF0C\u4F7F\u5F97\u5F00\u53D1\u3001\u4EA4\u6D41\u7B49\u5185\u5BB9\u9075\u7167\u4E00\u5B9A\u7684\u89C4\u5219\uFF0C\u786E\u4FDD\u5F00\u53D1\u7684\u4E00\u81F4\u6027\u548C\u4EA4\u6D41\u7684\u7EDF \u4E00\u6027\u3002"),A={__name:"FeaturesList",setup(o){return(l,t)=>(_(),r("ul",O,[a(i,null,{default:n(()=>[T]),_:1}),a(i,null,{default:n(()=>[j,q,D]),_:1}),a(i,null,{default:n(()=>[J]),_:1}),a(i,null,{default:n(()=>[P]),_:1}),a(i,null,{default:n(()=>[R]),_:1}),a(i,null,{default:n(()=>[U]),_:1})]))}},G=I(A,[["__scopeId","data-v-c0ec9f22"]]),H=e("h1",{id:"\u4E3B\u8981\u529F\u80FD",tabindex:"-1"},[s("\u4E3B\u8981\u529F\u80FD "),e("a",{class:"header-anchor",href:"#\u4E3B\u8981\u529F\u80FD","aria-hidden":"true"},"#")],-1),X=JSON.parse('{"title":"\u4E3B\u8981\u529F\u80FD | \u5FEB\u901F\u8D77\u6B65","description":"","frontmatter":{"title":"\u4E3B\u8981\u529F\u80FD | \u5FEB\u901F\u8D77\u6B65","outline":"deep"},"headers":[],"relativePath":"guide/features.md","lastUpdated":1663800828000}'),K={name:"guide/features.md"},Y=Object.assign(K,{setup(o){return(l,t)=>(_(),r("div",null,[H,a(G,{class:"!gap-1 text-lg"})]))}});export{X as __pageData,Y as default};