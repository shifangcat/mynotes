import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as p}from"./app-VKLC1A-x.js";const t={},e=p(`<h1 id="远程连接数据库" tabindex="-1"><a class="header-anchor" href="#远程连接数据库" aria-hidden="true">#</a> 远程连接数据库</h1><h2 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址" aria-hidden="true">#</a> IP 地址</h2><p><strong>查看 IP 地址</strong>：在 cmd 终端中输入 <code>ipconfig</code> 命令后回车</p><p><code>ping IP地址</code>：查看两个 IP 之间是否可以正常通信</p><h2 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接" aria-hidden="true">#</a> 数据库连接</h2><p><strong>查看配置文件路径</strong>：help / 帮助 -&gt; support info / 支持信息 -&gt; TNS File</p><h3 id="添加数据库地址" tabindex="-1"><a class="header-anchor" href="#添加数据库地址" aria-hidden="true">#</a> 添加数据库地址</h3><ul><li><p><strong>方法一</strong></p><p>将数据库地址链接串保存到 TNS File 文件中</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>ORCL_NEW <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> XXX<span class="token punctuation">.</span>XXX<span class="token punctuation">.</span>X<span class="token punctuation">.</span>XX<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVER <span class="token operator">=</span> DEDICATED<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> orcl<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>方法二</strong></p><p>直接将链接串放到一行中，然后放到登录窗口的第三个栏位 Datebase 上</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span><span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> localhost<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span><span class="token punctuation">(</span>SERVER <span class="token operator">=</span> DEDICATED<span class="token punctuation">)</span><span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> orcl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,8),o=[e];function c(l,i){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","16_远程连接数据库.html.vue"]]);export{d as default};
