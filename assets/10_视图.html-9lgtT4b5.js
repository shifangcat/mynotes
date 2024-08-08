import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},l=e(`<h1 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h1><h2 id="视图-1" tabindex="-1"><a class="header-anchor" href="#视图-1" aria-hidden="true">#</a> 视图</h2><p>创建视图需要 SYS 管理员授权</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">TO</span> SCOTT<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">VIEW</span> 视图名称 
<span class="token keyword">AS</span> 
查询的逻辑<span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">VIEW</span> EMP_DEPTNO_V
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>DEPTNO
      <span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>   COUNT_EMPNO  <span class="token comment">-- 函数返回的结果一定要给别名</span>
      <span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> AVG_SAL
<span class="token keyword">FROM</span> EMP T
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">;</span>

<span class="token comment">-- 使用视图</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_DEPTNO_V<span class="token punctuation">;</span>

<span class="token comment">-- 删除视图</span>
<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> EMP_DEPTNO_V<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用视图的注意点" tabindex="-1"><a class="header-anchor" href="#使用视图的注意点" aria-hidden="true">#</a> 使用视图的注意点</h3><ul><li><p>视图的命名一般在视图名称的结尾带 <code>_V</code></p></li><li><p>查询视图就是执行视图里封装的逻辑</p></li><li><p>视图逻辑里用到的表称为基表</p></li><li><p>视图里封装的是一段查询逻辑，当基表的数据发生变化时，查询视图得到的数据也会跟着变化</p></li><li><p>可以通过视图反过来修改基表的数据，但是有限制条件，一般也不会通过视图去修改基表的数据，只会直接去修改基表的数据，而且视图里封装的逻辑比较复杂的时候是不能通过视图修改基表的数据的</p></li><li><p>什么时候要使用视图：对其它系统开放数据的时候，要把敏感数据屏蔽；对于一些公用的逻辑，可以先写一个视图</p></li></ul><h2 id="物化视图" tabindex="-1"><a class="header-anchor" href="#物化视图" aria-hidden="true">#</a> 物化视图</h2><p>创建物化视图的目的是为了提高查询性能</p><p><strong>物化视图</strong>：存储的是真实的数据，查询物化视图的时候就是去查询视图里提前计算好的数据</p><p><strong>普通视图</strong>：存储的是一段逻辑，查询普通视图的时候就是去执行视图里封装的逻辑</p><p>创建物化视图需要 SYS 管理员授权</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> MATERIALIZED <span class="token keyword">VIEW</span> <span class="token keyword">TO</span> SCOTT<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建物化视图" tabindex="-1"><a class="header-anchor" href="#创建物化视图" aria-hidden="true">#</a> 创建物化视图</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建物化视图</span>
<span class="token keyword">CREATE</span> MATERIALIZED <span class="token keyword">VIEW</span> TEST_M_V
BUILD IMMEDIATE  <span class="token comment">-- 什么时候生成数据。IMMEDIATE：创建物化视图的时候生成；DEFERRED：刷新或调用物化视图的时候生成</span>
REFRESH <span class="token keyword">FORCE</span>    <span class="token comment">-- 刷新方式。FAST：增量刷新；COMPLETE：全量刷新；FORCE：自动判断增量刷新还是全量刷新</span>
<span class="token keyword">ON</span> <span class="token keyword">COMMIT</span>        <span class="token comment">-- 什么时候刷新。COMMIT：在基表提交数据的时候刷新；DEMAND：手动刷新</span>
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>EMPNO<span class="token punctuation">,</span> T<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span> T<span class="token punctuation">.</span>JOB
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>

<span class="token comment">-- 使用物化视图</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TEST_M_V<span class="token punctuation">;</span>

<span class="token comment">-- 创建手动刷新的物化视图</span>
<span class="token keyword">CREATE</span> MATERIALIZED <span class="token keyword">VIEW</span> TEST_M_V1
BUILD IMMEDIATE  <span class="token comment">-- 创建视图的时候生成数据</span>
REFRESH <span class="token keyword">FORCE</span>    <span class="token comment">-- 自动判断选择增量或全量刷新</span>
<span class="token keyword">ON</span> DEMAND        <span class="token comment">-- 手动刷新</span>
<span class="token keyword">START</span> <span class="token keyword">WITH</span> SYSDATE  <span class="token comment">-- 第一次刷新时间是当前系统时间点</span>
<span class="token comment">-- 每 2 分钟刷新一次数据</span>
<span class="token keyword">NEXT</span> SYSDATE <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">/</span><span class="token number">1440</span>
<span class="token keyword">AS</span> 
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>EMPNO<span class="token punctuation">,</span> T<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span> T<span class="token punctuation">.</span>JOB
<span class="token keyword">FROM</span> EMP_BAK T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="物化视图日志" tabindex="-1"><a class="header-anchor" href="#物化视图日志" aria-hidden="true">#</a> 物化视图日志</h3><p>物化视图日志的作用是用来快速刷新的</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> MATERIALIZED <span class="token keyword">VIEW</span> LOG <span class="token keyword">ON</span> EMP <span class="token keyword">WITH</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> INCLUDING NEW <span class="token keyword">VALUES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),o=[l];function c(i,t){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","10_视图.html.vue"]]);export{k as default};
