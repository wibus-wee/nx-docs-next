import{_ as e,c as t,o as a,a as r}from"./app.d762fbba.js";const g=JSON.parse('{"title":"Mog v2 -- Stage 2 (2022.11.02)","description":"","frontmatter":{"title":"Mog v2 -- Stage 2 (2022.11.02)","date":"2022-11-02T00:00:00.000Z","author":"Wibus","avatar":"https://github.com/wibus-wee.png","twitter":"@wibus_wee"},"headers":[{"level":2,"title":"Refactor base service","slug":"refactor-base-service","link":"#refactor-base-service","children":[]},{"level":2,"title":"[Docs] Rewrite the document","slug":"docs-rewrite-the-document","link":"#docs-rewrite-the-document","children":[]},{"level":2,"title":"[Docs] New docs homepage","slug":"docs-new-docs-homepage","link":"#docs-new-docs-homepage","children":[]},{"level":2,"title":"[Core] New README","slug":"core-new-readme","link":"#core-new-readme","children":[]},{"level":2,"title":"[Docs] New docs theme?","slug":"docs-new-docs-theme","link":"#docs-new-docs-theme","children":[]},{"level":2,"title":"[FAQ] How far is v2.0?","slug":"faq-how-far-is-v2-0","link":"#faq-how-far-is-v2-0","children":[]},{"level":2,"title":"\u91CD\u6784\u57FA\u7840\u670D\u52A1","slug":"\u91CD\u6784\u57FA\u7840\u670D\u52A1","link":"#\u91CD\u6784\u57FA\u7840\u670D\u52A1","children":[]},{"level":2,"title":"[Docs] \u6587\u6863\u5185\u5BB9\u91CD\u5199","slug":"docs-\u6587\u6863\u5185\u5BB9\u91CD\u5199","link":"#docs-\u6587\u6863\u5185\u5BB9\u91CD\u5199","children":[]},{"level":2,"title":"[Docs] \u65B0\u7684\u6587\u6863\u9996\u9875","slug":"docs-\u65B0\u7684\u6587\u6863\u9996\u9875","link":"#docs-\u65B0\u7684\u6587\u6863\u9996\u9875","children":[]},{"level":2,"title":"[Core] \u65B0\u7684 README","slug":"core-\u65B0\u7684-readme","link":"#core-\u65B0\u7684-readme","children":[]},{"level":2,"title":"[Docs] \u65B0\u6587\u6863\u4E3B\u9898\uFF1F","slug":"docs-\u65B0\u6587\u6863\u4E3B\u9898","link":"#docs-\u65B0\u6587\u6863\u4E3B\u9898","children":[]},{"level":2,"title":"[FAQ] \u8DDD\u79BB v2.0 \u8FD8\u6709\u591A\u8FDC\uFF1F","slug":"faq-\u8DDD\u79BB-v2-0-\u8FD8\u6709\u591A\u8FDC","link":"#faq-\u8DDD\u79BB-v2-0-\u8FD8\u6709\u591A\u8FDC","children":[]}],"relativePath":"posts/mog-v2-stage-2.md"}'),o={name:"posts/mog-v2-stage-2.md"},i=r('<p>We have made a real complete transformation in many places in the past days.</p><p>\u6211\u4EEC\u5728\u8FC7\u53BB\u7684\u65E5\u5B50\u5BF9\u8BB8\u591A\u5730\u65B9\u8FDB\u884C\u4E86\u771F\u6B63\u7684\u5B8C\u5168\u6539\u9020\u3002</p><hr><h2 id="refactor-base-service" tabindex="-1">Refactor base service <a class="header-anchor" href="#refactor-base-service" aria-hidden="true">#</a></h2><p>In the first stage, we mainly planned the path, and in the subsequent stages, we will speed up the reconstruction of the basic services. When all the basic services are completed, we will release an Alpha document. The basic services we have completed so far are:</p><ul><li>Database \uFF08<a href="https://github.com/mogland/core/pull/309" target="_blank" rel="noreferrer">mogland/core#309</a>\uFF09</li><li>Auth \uFF08 <a href="https://github.com/mogland/core/pull/309" target="_blank" rel="noreferrer">mogland/core#309</a> \uFF09</li><li>Config \uFF08 <a href="https://github.com/mogland/core/pull/336" target="_blank" rel="noreferrer">mogland/core#336</a> \uFF09</li><li>UserService \uFF08 <a href="https://github.com/mogland/core/pull/348" target="_blank" rel="noreferrer">mogland/core#348</a> \uFF09</li><li>Library \uFF08 <a href="https://github.com/mogland/core/pull/363" target="_blank" rel="noreferrer">mogland/core#363</a> \uFF09</li><li>Aggregate \uFF08 <a href="https://github.com/mogland/core/pull/396" target="_blank" rel="noreferrer">mogland/core#396</a> \uFF09</li></ul><p>The remaining service modules will be further accelerated in the next stage. Before that, we need to write RFC for some modules.</p><h2 id="docs-rewrite-the-document" tabindex="-1">[Docs] Rewrite the document <a class="header-anchor" href="#docs-rewrite-the-document" aria-hidden="true">#</a></h2><p>We have rewritten the documentation content to improve the reading experience. We have added some new content, such as: <strong>Introduction, Quick Start, Main Features, Comparison, About</strong>, etc., and we have separated many advanced content into the &quot;Advanced Installation&quot; category, and we have added a &quot;Ecosystem&quot; at the top where you can quickly reach the repository of a project.</p><p>We have improved the FAQ, version release, and contributor covenant code of conduct, and these updates all need to thank the documentation of Vue.js and Vitest. Our documentation is based on their documentation structure.</p><h2 id="docs-new-docs-homepage" tabindex="-1">[Docs] New docs homepage <a class="header-anchor" href="#docs-new-docs-homepage" aria-hidden="true">#</a></h2><p>We rewrote the docs homepage, which is actually a Fork from <a href="//CodeEdit.app">CodeEdit.app</a>, we made some modifications and added some descriptions in some core content.</p><h2 id="core-new-readme" tabindex="-1">[Core] New README <a class="header-anchor" href="#core-new-readme" aria-hidden="true">#</a></h2><p>We rewrote the README, the structure of the README is based on <a href="https://github.com/CodeEditApp/CodeEdit" target="_blank" rel="noreferrer">CodeEdit</a> and we made some modifications, and we use English as the default README language, the supported languages are: Simplified Chinese (machine translation), English. We only made some improvements to the description of the project, and the other content remains unchanged.</p><h2 id="docs-new-docs-theme" tabindex="-1">[Docs] New docs theme? <a class="header-anchor" href="#docs-new-docs-theme" aria-hidden="true">#</a></h2><p>We are considering rewriting the documentation theme in the future, and we will refer to Apple Documentation in terms of style. This repository is still in the Private stage. It will be completed by two developers, and we will open it when it is completed.</p><p>But it is inevitable that in some code we need to write Hard Code, we will try to avoid this situation, but in some cases, we will add comments to the Hard Code to facilitate maintenance and user customization in the future.</p><h2 id="faq-how-far-is-v2-0" tabindex="-1">[FAQ] How far is v2.0? <a class="header-anchor" href="#faq-how-far-is-v2-0" aria-hidden="true">#</a></h2><blockquote><p>It&#39;s close, but also far away</p></blockquote><p>We are working hard on it, but we need some time to finish it. We will finish the development of v2.0 before the Spring Festival in 2022, but we will not release it at this time. We will release v2.0 after the Spring Festival in 2022. We will conduct some tests before the release to ensure the stability of v2.0.</p><p>The difficulties we are currently facing include but are not limited to: <em>lack of manpower, architecture considerations, insufficient planning</em></p><p><strong>We really hope more people can join us.</strong></p><h2 id="\u91CD\u6784\u57FA\u7840\u670D\u52A1" tabindex="-1">\u91CD\u6784\u57FA\u7840\u670D\u52A1 <a class="header-anchor" href="#\u91CD\u6784\u57FA\u7840\u670D\u52A1" aria-hidden="true">#</a></h2><p>\u7B2C\u4E00\u9636\u6BB5\uFF0C\u6211\u4EEC\u5C45\u591A\u662F\u8FDB\u884C\u8DEF\u5F84\u89C4\u5212\uFF0C\u540E\u7EED\u9636\u6BB5\uFF0C\u6211\u4EEC\u4F1A\u52A0\u7D27\u8FDB\u884C\u57FA\u7840\u670D\u52A1\u7684\u91CD\u6784\uFF0C\u5728\u5B8C\u6210\u6240\u6709\u57FA\u7840\u670D\u52A1\u7684\u65F6\u5019\u6211\u4EEC\u5C06\u4F1A\u53D1\u5E03\u4E00\u6B21 Alpha \u6587\u6863\u3002\u6211\u4EEC\u76EE\u524D\u5DF2\u5B8C\u6210\u91CD\u6784\u7684\u57FA\u7840\u670D\u52A1\u6709\uFF1A</p><ul><li>\u6570\u636E\u5E93\u6A21\u5757 \uFF08<a href="https://github.com/mogland/core/pull/309" target="_blank" rel="noreferrer">mogland/core#309</a>\uFF09</li><li>\u6388\u6743\u6A21\u5757 \uFF08 <a href="https://github.com/mogland/core/pull/309" target="_blank" rel="noreferrer">mogland/core#309</a> \uFF09</li><li>\u914D\u7F6E\u6A21\u5757 \uFF08 <a href="https://github.com/mogland/core/pull/336" target="_blank" rel="noreferrer">mogland/core#336</a> \uFF09</li><li>\u7528\u6237\u670D\u52A1\u6A21\u5757 \uFF08 <a href="https://github.com/mogland/core/pull/348" target="_blank" rel="noreferrer">mogland/core#348</a> \uFF09</li><li>\u6587\u5E93\u6A21\u5757 \uFF08 <a href="https://github.com/mogland/core/pull/363" target="_blank" rel="noreferrer">mogland/core#363</a> \uFF09</li><li>\u6570\u636E\u805A\u5408\u6A21\u5757 \uFF08 <a href="https://github.com/mogland/core/pull/396" target="_blank" rel="noreferrer">mogland/core#396</a> \uFF09</li></ul><p>\u4F59\u4E0B\u7684\u670D\u52A1\u6A21\u5757\u6211\u4EEC\u5C06\u4F1A\u5728\u4E0B\u4E00\u9636\u6BB5\u7EE7\u7EED\u52A0\u7D27\u91CD\u6784\uFF0C\u5728\u6B64\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u67D0\u4E9B\u6A21\u5757\u64B0\u5199 RFC\u3002</p><h2 id="docs-\u6587\u6863\u5185\u5BB9\u91CD\u5199" tabindex="-1">[Docs] \u6587\u6863\u5185\u5BB9\u91CD\u5199 <a class="header-anchor" href="#docs-\u6587\u6863\u5185\u5BB9\u91CD\u5199" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5BF9\u6587\u6863\u5185\u5BB9\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u4EE5\u4FBF\u4E8E\u66F4\u597D\u7684\u9605\u8BFB\u4F53\u9A8C\u3002\u6211\u4EEC\u52A0\u5165\u4E86\u4E00\u4E9B\u65B0\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\uFF1A<strong>\u7B80\u4ECB\u3001\u5FEB\u901F\u5F00\u59CB\u3001\u4E3B\u8981\u529F\u80FD\u3001\u5BF9\u6BD4\u3001\u5173\u4E8E</strong>\u7B49\u7B49\uFF0C\u5BF9\u5F88\u591A\u8FDB\u9636\u7684\u5185\u5BB9\u8FDB\u884C\u4E86\u5206\u79BB\uFF0C\u5206\u7C7B\u5230\u300C\u8FDB\u9636\u5B89\u88C5\u300D\u7684\u5206\u7C7B\uFF0C\u5E76\u4E14\u6211\u4EEC\u5728\u9876\u90E8\u52A0\u5165\u4E86\u300CEcosystem\u300D\u4F60\u53EF\u4EE5\u4ECE\u6B64\u5904\u5FEB\u901F\u5230\u8FBE\u67D0\u4E00\u9879\u76EE\u7684\u4ED3\u5E93\u3002</p><p>\u6211\u4EEC\u5B8C\u5584\u4E86\u5E38\u89C1\u95EE\u9898\u3001\u7248\u672C\u53D1\u5E03\u3001\u8D21\u732E\u8005\u5951\u7EA6\u884C\u4E3A\u51C6\u5219\uFF0C\u8FD9\u4E9B\u66F4\u65B0\u90FD\u9700\u8981\u611F\u8C22\u6765\u81EA Vue.js \u548C Vitest \u7684\u6587\u6863\uFF0C\u6211\u4EEC\u6587\u6863\u90FD\u662F\u57FA\u4E8E\u4ED6\u4EEC\u7684\u6587\u6863\u7ED3\u6784\u3002</p><p>\u6211\u4EEC\u5C06\u4F1A\u5728\u4E0B\u4E00\u9636\u6BB5\u5BF9\u6587\u6863\u5185\u5BB9\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u8865\u5145\uFF0C\u76EE\u524D\u6211\u4EEC\u5DF2\u7ECF\u5B8C\u6210\u4E86\u4E00\u90E8\u5206\u7684\u91CD\u5199\u5DE5\u4F5C\u3002</p><h2 id="docs-\u65B0\u7684\u6587\u6863\u9996\u9875" tabindex="-1">[Docs] \u65B0\u7684\u6587\u6863\u9996\u9875 <a class="header-anchor" href="#docs-\u65B0\u7684\u6587\u6863\u9996\u9875" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5BF9\u6587\u6863\u9996\u9875\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u662F\u6765\u81EA <a href="//CodeEdit.app">CodeEdit.app</a> \u7684 Fork\uFF0C\u6211\u4EEC\u5BF9\u5176\u8FDB\u884C\u4E86\u4E00\u4E9B\u4FEE\u6539\uFF0C\u5728\u67D0\u4E9B\u6838\u5FC3\u5185\u5BB9\u4E2D\u52A0\u4E0A\u4E86\u63CF\u8FF0\u56FE\u7247\u3002</p><h2 id="core-\u65B0\u7684-readme" tabindex="-1">[Core] \u65B0\u7684 README <a class="header-anchor" href="#core-\u65B0\u7684-readme" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5BF9 README \u8FDB\u884C\u4E86\u91CD\u5199\uFF0CREADME \u7684\u7ED3\u6784\u53C2\u8003\u81EA <a href="https://github.com/CodeEditApp/CodeEdit" target="_blank" rel="noreferrer">CodeEdit</a>\uFF0C\u6211\u4EEC\u5BF9\u5176\u8FDB\u884C\u4E86\u4E00\u4E9B\u4FEE\u6539\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86\u82F1\u6587\u4F5C\u4E3A\u9ED8\u8BA4 README \u8BED\u8A00\uFF0C\u76EE\u524D\u652F\u6301\u7684\u8BED\u8A00\u6709\uFF1A\u7B80\u4F53\u4E2D\u6587\uFF08\u673A\u7FFB\uFF09\u3001\u82F1\u6587\u3002\u6211\u4EEC\u4EC5\u5BF9\u9879\u76EE\u7684\u63CF\u8FF0\u505A\u51FA\u4E86\u6539\u8FDB\uFF0C\u5176\u4ED6\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8\u3002</p><h2 id="docs-\u65B0\u6587\u6863\u4E3B\u9898" tabindex="-1">[Docs] \u65B0\u6587\u6863\u4E3B\u9898\uFF1F <a class="header-anchor" href="#docs-\u65B0\u6587\u6863\u4E3B\u9898" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u540E\u7EED\u8003\u8651\u5BF9\u6587\u6863\u4E3B\u9898\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u5728\u6837\u5F0F\u4E0A\u6211\u4EEC\u5C06\u53C2\u8003 Apple Documentation\uFF0C\u6B64\u4ED3\u5E93\u76EE\u524D\u4ECD\u5728 Private \u9636\u6BB5\u3002\u5B83\u5C06\u7531\u4E24\u540D\u5F00\u53D1\u8005\u5B8C\u6210\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5728\u5B8C\u6210\u540E\u516C\u5F00\u3002</p><p>\u4F46\u4E0D\u53EF\u907F\u514D\u7684\u662F\uFF0C\u5728\u67D0\u4E9B\u4EE3\u7801\u6211\u4EEC\u9700\u8981\u64B0\u5199 Hard Code\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u91CF\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F7F\u7528 Hard Code \u4E5F\u4F1A\u52A0\u4E0A\u6CE8\u91CA\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u7EED\u7684\u7EF4\u62A4\u548C\u7528\u6237\u7684\u81EA\u5B9A\u4E49\u4FEE\u6539\u3002</p><h2 id="faq-\u8DDD\u79BB-v2-0-\u8FD8\u6709\u591A\u8FDC" tabindex="-1">[FAQ] \u8DDD\u79BB v2.0 \u8FD8\u6709\u591A\u8FDC\uFF1F <a class="header-anchor" href="#faq-\u8DDD\u79BB-v2-0-\u8FD8\u6709\u591A\u8FDC" aria-hidden="true">#</a></h2><blockquote><p>\u5F88\u63A5\u8FD1\uFF0C\u4F46\u4E5F\u5F88\u9065\u8FDC</p></blockquote><p>\u6211\u4EEC\u5DF2\u7ECF\u5728\u5168\u529B\u5F00\u53D1\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\u6765\u5B8C\u6210\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5728 2022 \u6625\u8282\u524D\u5B8C\u6210 v2.0 \u7684\u5F00\u53D1\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u4F1A\u5728\u8FD9\u4E2A\u65F6\u95F4\u70B9\u53D1\u5E03\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5728 2022 \u6625\u8282\u540E\u53D1\u5E03 v2.0\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5728\u53D1\u5E03\u524D\u8FDB\u884C\u4E00\u4E9B\u6D4B\u8BD5\uFF0C\u4EE5\u786E\u4FDD v2.0 \u7684\u7A33\u5B9A\u6027\u3002</p><p>\u6211\u4EEC\u76EE\u524D\u9047\u5230\u7684\u56F0\u96BE\u5305\u62EC\u4E14\u4E0D\u9650\u4E8E\uFF1A<em>\u4EBA\u624B\u4E0D\u8DB3\u3001\u67B6\u6784\u8003\u8651\u3001\u89C4\u5212\u4E0D\u8DB3</em></p><p><strong>\u6211\u4EEC\u771F\u7684\u5F88\u5E0C\u671B\u6709\u66F4\u591A\u7684\u4EBA\u80FD\u591F\u52A0\u5165\u6211\u4EEC\u3002</strong></p>',42),n=[i];function l(s,d,c,h,p,m){return a(),t("div",null,n)}const f=e(o,[["render",l]]);export{g as __pageData,f as default};
