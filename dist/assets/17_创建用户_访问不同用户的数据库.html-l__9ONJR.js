import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-VKLC1A-x.js";const p={},o=e(`<h1 id="创建用户-访问不同用户的数据库" tabindex="-1"><a class="header-anchor" href="#创建用户-访问不同用户的数据库" aria-hidden="true">#</a> 创建用户_访问不同用户的数据库</h1><h2 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h2><p>创建用户需要在 SYS 用户上操作，用户名为 SYS，密码为安装数据库时设定的密码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建用户</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> TEST_818    <span class="token comment">-- 设置用户名</span>
IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&quot;123456&quot;</span>  <span class="token comment">-- 设置密码</span>
ACCOUNT <span class="token keyword">UNLOCK</span><span class="token punctuation">;</span>         <span class="token comment">-- 解锁账户</span>

<span class="token comment">-- 授权用户登陆</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CONNECT</span><span class="token punctuation">,</span> RESOURCE <span class="token keyword">TO</span> TEST_818<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问不同用户的数据库" tabindex="-1"><a class="header-anchor" href="#访问不同用户的数据库" aria-hidden="true">#</a> 访问不同用户的数据库</h2><p>可以通过用户授权、创建 DB_LINK、同义词的方式访问不同用户的数据库</p><h3 id="用户授权" tabindex="-1"><a class="header-anchor" href="#用户授权" aria-hidden="true">#</a> 用户授权</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 在 SCOTT 用户上操作，授权 TEST_818 用户可以访问 SCOTT 的表</span>
<span class="token keyword">GRANT</span> 用户权利 <span class="token keyword">ON</span> 表名 <span class="token keyword">TO</span> 用户名<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span><span class="token punctuation">,</span> <span class="token keyword">INSERT</span><span class="token punctuation">,</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> EMP <span class="token keyword">TO</span> TEST_818<span class="token punctuation">;</span>
<span class="token comment">-- SELECT：查询权利</span>
<span class="token comment">-- INSERT：插入权利</span>
<span class="token comment">-- UPDATE：修改权利</span>
<span class="token comment">-- DELETE：删除权利</span>

<span class="token comment">-- 授权完成后，TEST_818 用户即可访问 SCOTT 用户的表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> SCOTT<span class="token punctuation">.</span>EMP<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="db-link" tabindex="-1"><a class="header-anchor" href="#db-link" aria-hidden="true">#</a> DB_LINK</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 1. 授权，需要在 SYS 用户上操作</span>
<span class="token keyword">GRANT</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PUBLIC</span> <span class="token keyword">DATABASE</span> LINK<span class="token punctuation">,</span>  <span class="token comment">-- 创建公共 DB_LINK 的权限</span>
<span class="token keyword">DROP</span> <span class="token keyword">PUBLIC</span> <span class="token keyword">DATABASE</span> LINK     <span class="token comment">-- 删除公共 DB_LINK 的权限</span>
<span class="token keyword">TO</span> TEST_818<span class="token punctuation">;</span>  <span class="token comment">-- 给某个用户授权</span>

<span class="token comment">-- 2. 创建 DB_LINK，需要在 TEST_818 用户上操作</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PUBLIC</span> <span class="token keyword">DATABASE</span> LINK DB_629_TO_SCOTT  <span class="token comment">-- DB_LINK 的名称</span>
<span class="token keyword">CONNECT</span> <span class="token keyword">TO</span> SCOTT  <span class="token comment">-- 连接到某个用户</span>
IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&quot;123456&quot;</span>  <span class="token comment">-- 密码是纯数字的必须加双引号而不是单引号，</span>
                        <span class="token comment">-- 如果密码是字母开头的，则不用加引号</span>
<span class="token keyword">USING</span> <span class="token string">&#39;localhost/ORCL&#39;</span><span class="token punctuation">;</span>  <span class="token comment">-- 使用的 IP 地址和数据库</span>

<span class="token comment">-- 3. TEST_818 用户访问</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP<span class="token variable">@DB_629_TO_SCOTT</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> DEPT<span class="token variable">@DB_629_TO_SCOTT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同义词" tabindex="-1"><a class="header-anchor" href="#同义词" aria-hidden="true">#</a> 同义词</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 需要 SYS 用户授予 SCOTT 用户创建同义词的权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> SYNONYM <span class="token keyword">TO</span> SCOTT<span class="token punctuation">;</span>         <span class="token comment">-- 授予创建私有同义词的权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">PUBLIC</span> SYNONYM <span class="token keyword">TO</span> SCOTT<span class="token punctuation">;</span>  <span class="token comment">-- 授予创建公有同义词的权限</span>

<span class="token comment">-- SCOTT 用户创建同义词</span>
<span class="token comment">-- 创建公有同义词</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">PUBLIC</span> SYNONYM EMP_SY_818 <span class="token keyword">FOR</span> EMP<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_SY_818<span class="token punctuation">;</span>  <span class="token comment">-- 使用公有同义词</span>

<span class="token comment">-- 创建私有同义词</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> SYNONYM DEPT_SY_818 <span class="token keyword">FOR</span> DEPT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> DEPT_SY_818<span class="token punctuation">;</span>  <span class="token comment">-- 使用私有同义词</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>公有同义词和私有同义词的区别</strong></p><p>公有同义词 SCOTT 用户和其他用户都可以访问；私有同义词只有 SCOTT 用户可以访问</p></li></ul>`,13),l=[o];function c(t,i){return n(),a("div",null,l)}const k=s(p,[["render",c],["__file","17_创建用户_访问不同用户的数据库.html.vue"]]);export{k as default};
