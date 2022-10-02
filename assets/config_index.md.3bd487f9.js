import{_ as s,c as e,o as a,a as l}from"./app.d94e0e50.js";const g=JSON.parse('{"title":"\u914D\u7F6E\u7D22\u5F15 | \u914D\u7F6E","description":"","frontmatter":{"title":"\u914D\u7F6E\u7D22\u5F15 | \u914D\u7F6E","outline":"deep"},"headers":[{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[{"level":3,"title":"<service_name>.<key>","slug":"service-name-key","link":"#service-name-key","children":[]},{"level":3,"title":"core.port","slug":"core-port","link":"#core-port","children":[]},{"level":3,"title":"core.allow_origins","slug":"core-allow-origins","link":"#core-allow-origins","children":[]},{"level":3,"title":"userService.host","slug":"userservice-host","link":"#userservice-host","children":[]},{"level":3,"title":"userService.port","slug":"userservice-port","link":"#userservice-port","children":[]},{"level":3,"title":"pageService.host","slug":"pageservice-host","link":"#pageservice-host","children":[]},{"level":3,"title":"pageService.port","slug":"pageservice-port","link":"#pageservice-port","children":[]}]},{"level":2,"title":"\u914D\u7F6E\u4E3E\u4F8B","slug":"\u914D\u7F6E\u4E3E\u4F8B","link":"#\u914D\u7F6E\u4E3E\u4F8B","children":[{"level":3,"title":"\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570","slug":"\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570","link":"#\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570","children":[]},{"level":3,"title":"YAML \u914D\u7F6E\u6587\u4EF6","slug":"yaml-\u914D\u7F6E\u6587\u4EF6","link":"#yaml-\u914D\u7F6E\u6587\u4EF6","children":[]}]}],"relativePath":"config/index.md","lastUpdated":1664669230000}'),o={name:"config/index.md"},n=l(`<h1 id="\u914D\u7F6E\u7D22\u5F15" tabindex="-1">\u914D\u7F6E\u7D22\u5F15 <a class="header-anchor" href="#\u914D\u7F6E\u7D22\u5F15" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p><code>Mog Core</code> \u5C06\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u4E24\u4E2A\u5730\u65B9\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\u4EE5\u5339\u914D\u4F60\u7684\u4E0D\u540C\u9700\u6C42\u5E76\u8BBE\u7F6E\u4E3A\u4F60\u7684 Mog \u8FD0\u884C\u65F6\u73AF\u5883\u3002</p><ul><li>\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u4F18\u5148\u7EA7\u6700\u9AD8</li><li>\u83B7\u53D6 YAML \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F18\u5148\u7EA7\u6B21\u4E4B\uFF0C\u5EFA\u8BAE\u653E\u5165 <code>.mog/env</code>\uFF0C\u4F8B\u5982 <code>.mog/env/config.yaml</code></li></ul><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u4F7F\u7528\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570\u65F6\uFF0C\u53C2\u6570\u4F20\u9012\u683C\u5F0F\u4E3A <code>--&lt;ServiceName&gt;_&lt;key&gt;=&lt;value&gt;</code>\uFF0C\u4F8B\u5982 <code>--core_port=8080</code>\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">$ node index.js --core_port=8080</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ node index.js --core_port=8080</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u4F60\u4F7F\u7528 YAML \u914D\u7F6E\u6587\u4EF6\u65F6\uFF0C\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#B8A965;">&lt;service_name&gt;</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">&lt;key&gt;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">&lt;value&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#998418;">&lt;service_name&gt;</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">&lt;key&gt;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&lt;value&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="service-name-key" tabindex="-1">&lt;service_name&gt;.&lt;key&gt; <a class="header-anchor" href="#service-name-key" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>unknown</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>undefined</code></li></ul><p><code>&lt;service_name&gt;</code> \u4E3A <code>Mog Core</code> \u7684\u670D\u52A1\u540D\u79F0\uFF0C<code>&lt;key&gt;</code> \u4E3A\u670D\u52A1\u7684\u914D\u7F6E\u9879\u3002</p><h3 id="core-port" tabindex="-1">core.port <a class="header-anchor" href="#core-port" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>2330</code></li></ul><p>Mog Core \u7F51\u5173\u5C42\u542F\u52A8\u7684\u7AEF\u53E3\u53F7</p><h3 id="core-allow-origins" tabindex="-1">core.allow_origins <a class="header-anchor" href="#core-allow-origins" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>string[]</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>[&#39;localhost:9528&#39;, &#39;localhost:2323&#39;, &#39;localhost:2222&#39;, &#39;127.0.0.1&#39;, &#39;localhost:3000&#39;]</code></li></ul><p>\u5141\u8BB8\u8DE8\u57DF\u7684\u57DF\u540D\u5217\u8868\uFF0C <strong>\u4E0D\u53EF\u4EE5\u4E3A <code>*</code></strong>\uFF0C\u4F7F\u7528 <code>,</code> \u8FDB\u884C\u5206\u9694</p><h3 id="userservice-host" tabindex="-1">userService.host <a class="header-anchor" href="#userservice-host" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>&#39;http://localhost:2331&#39;</code></li></ul><p>\u7528\u6237\u670D\u52A1\u90E8\u7F72\u7684\u4E3B\u673A\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A IP\uFF0C \u4E5F\u53EF\u4EE5\u4E3A\u57DF\u540D</p><h3 id="userservice-port" tabindex="-1">userService.port <a class="header-anchor" href="#userservice-port" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>2331</code></li></ul><p>\u7528\u6237\u670D\u52A1\u90E8\u7F72\u7684\u7AEF\u53E3\u53F7</p><h3 id="pageservice-host" tabindex="-1">pageService.host <a class="header-anchor" href="#pageservice-host" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>&#39;http://localhost:2332&#39;</code></li></ul><p>\u9875\u9762\u670D\u52A1\u90E8\u7F72\u7684\u4E3B\u673A\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A IP\uFF0C \u4E5F\u53EF\u4EE5\u4E3A\u57DF\u540D</p><h3 id="pageservice-port" tabindex="-1">pageService.port <a class="header-anchor" href="#pageservice-port" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>2332</code></li></ul><p>\u9875\u9762\u670D\u52A1\u90E8\u7F72\u7684\u7AEF\u53E3\u53F7</p><h2 id="\u914D\u7F6E\u4E3E\u4F8B" tabindex="-1">\u914D\u7F6E\u4E3E\u4F8B <a class="header-anchor" href="#\u914D\u7F6E\u4E3E\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570" tabindex="-1">\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570 <a class="header-anchor" href="#\u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">$ node index.js --core_port=8080 --core_allow_origins=localhost:9528,localhost:2323,localhost:2222 --userService_host=http://localhost:2331 --userService_port=2331 --pageService_host=http://localhost:2332 --pageService_port=2332</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ node index.js --core_port=8080 --core_allow_origins=localhost:9528,localhost:2323,localhost:2222 --userService_host=http://localhost:2331 --userService_port=2331 --pageService_host=http://localhost:2332 --pageService_port=2332</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u547D\u4EE4\u5C06\u4F1A\u542F\u52A8 <code>Mog Core</code> \u7F51\u5173\u5C42\uFF0C\u7AEF\u53E3\u53F7\u4E3A <code>8080</code>\uFF0C\u5141\u8BB8\u8DE8\u57DF\u7684\u57DF\u540D\u5217\u8868\u4E3A <code>[&#39;localhost:9528&#39;, &#39;localhost:2323&#39;, &#39;localhost:2222&#39;]</code>\uFF0C\u7528\u6237\u670D\u52A1\u90E8\u7F72\u7684\u4E3B\u673A\u5730\u5740\u4E3A <code>http://localhost:2331</code>\uFF0C\u7528\u6237\u670D\u52A1\u90E8\u7F72\u7684\u7AEF\u53E3\u53F7\u4E3A <code>2331</code>\uFF0C\u9875\u9762\u670D\u52A1\u90E8\u7F72\u7684\u4E3B\u673A\u5730\u5740\u4E3A <code>http://localhost:2332</code>\uFF0C\u9875\u9762\u670D\u52A1\u90E8\u7F72\u7684\u7AEF\u53E3\u53F7\u4E3A <code>2332</code></p><h3 id="yaml-\u914D\u7F6E\u6587\u4EF6" tabindex="-1">YAML \u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#yaml-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#B8A965;">core</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">port</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">8080</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">allow_origins</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">localhost:9528</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">localhost:2323</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">localhost:2222</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#B8A965;">userService</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">host</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">http://localhost:2331</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">port</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2331</span></span>
<span class="line"><span style="color:#B8A965;">pageService</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">host</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">http://localhost:2332</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">port</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2332</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#998418;">core</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">port</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">8080</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">allow_origins</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">localhost:9528</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">localhost:2323</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">localhost:2222</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#998418;">userService</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">host</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">http://localhost:2331</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">port</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2331</span></span>
<span class="line"><span style="color:#998418;">pageService</span><span style="color:#999999;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">host</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">http://localhost:2332</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">port</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2332</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u914D\u7F6E\u6587\u4EF6\u5C06\u4F1A\u542F\u52A8 <code>Mog Core</code> \u7F51\u5173\u5C42\uFF0C\u7AEF\u53E3\u53F7\u4E3A <code>8080</code>\uFF0C\u5141\u8BB8\u8DE8\u57DF\u7684\u57DF\u540D\u5217\u8868\u4E3A <code>[&#39;localhost:9528&#39;, &#39;localhost:2323&#39;, &#39;localhost:2222&#39;]</code>\uFF0C\u7528\u6237\u670D\u52A1\u90E8\u7F72\u7684\u4E3B\u673A\u5730\u5740\u4E3A <code>http://localhost:2331</code>\uFF0C\u7528\u6237\u670D\u52A1\u90E8\u7F72\u7684\u7AEF\u53E3\u53F7\u4E3A <code>2331</code>\uFF0C\u9875\u9762\u670D\u52A1\u90E8\u7F72\u7684\u4E3B\u673A\u5730\u5740\u4E3A <code>http://localhost:2332</code>\uFF0C\u9875\u9762\u670D\u52A1\u90E8\u7F72\u7684\u7AEF\u53E3\u53F7\u4E3A <code>2332</code></p>`,37),p=[n];function c(r,t,i,d,h,y){return a(),e("div",null,p)}const u=s(o,[["render",c]]);export{g as __pageData,u as default};
