import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const e={},l=t(`<h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1><h2 id="异常处理-1" tabindex="-1"><a class="header-anchor" href="#异常处理-1" aria-hidden="true">#</a> 异常处理</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">DECLARE</span>
  <span class="token comment">-- 声明变量</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 函数主体</span>
  
  <span class="token comment">-- 当代码执行的过程中发生异常的时候，代码就会跳转到 EXCEPTION 后面的逻辑</span>
  <span class="token comment">-- 从异常出现的地方，一直到 EXCEPTION 之间的代码将不会被执行</span>
  <span class="token comment">-- 如果代码是正常执行的话，就不会跳转到 EXCEPTION</span>
  EXCEPTION <span class="token keyword">WHEN</span> 异常名称<span class="token number">1</span> <span class="token keyword">THEN</span>
                 <span class="token comment">-- 发生此异常时执行的逻辑</span>
            <span class="token keyword">WHEN</span> 异常名称<span class="token number">2</span> <span class="token keyword">THEN</span>
                 <span class="token comment">-- 发生此异常时执行的逻辑</span>
            <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>  <span class="token comment">-- OTHERS 可以捕获任何异常</span>
                 <span class="token comment">-- 发生此异常时执行的逻辑</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token keyword">DECLARE</span>
  V_SAL NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>SAL
  <span class="token keyword">INTO</span> V_SAL
  <span class="token keyword">FROM</span> EMP T
  <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>EMPNO <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">7369</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;这里被执行了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  EXCEPTION <span class="token keyword">WHEN</span> TOO_MANY_ROWS <span class="token keyword">THEN</span>
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;返回多行记录&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">WHEN</span> NO_DATA_FOUND <span class="token keyword">THEN</span>
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;这个员工不存在&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;捕获到了其它的异常&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见的异常" tabindex="-1"><a class="header-anchor" href="#常见的异常" aria-hidden="true">#</a> 常见的异常</h2><p>为了 Oracle 开发和维护的方便，在 Oracle 异常中，为常见的异常码定义了对应的异常名称，称为预定义异常，常见的预定义异常有：</p><table><thead><tr><th style="text-align:left;"><strong>异常名称</strong></th><th style="text-align:left;"><strong>异常码</strong></th><th style="text-align:left;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:left;">DUP_VAL_ON_INDEX</td><td style="text-align:left;">ORA-00001</td><td style="text-align:left;">试图向唯一索引列插入重复值</td></tr><tr><td style="text-align:left;">INVALID_CURSOR</td><td style="text-align:left;">ORA-01001</td><td style="text-align:left;">试图进行非法游标操作</td></tr><tr><td style="text-align:left;">INVALID_NUMBER</td><td style="text-align:left;">ORA-01722</td><td style="text-align:left;">试图将字符串转换为数字</td></tr><tr><td style="text-align:left;">NO_DATA_FOUND</td><td style="text-align:left;">ORA-01403</td><td style="text-align:left;">SELECT INTO语句中没有返回任何记录</td></tr><tr><td style="text-align:left;">TOO_MANY_ROWS</td><td style="text-align:left;">ORA-01422</td><td style="text-align:left;">SELECT INTO语句中返回多于1条记录</td></tr><tr><td style="text-align:left;">ZERO_DIVIDE</td><td style="text-align:left;">ORA-01476</td><td style="text-align:left;">试图用0作为除数</td></tr><tr><td style="text-align:left;">CURSOR_ALREADY_OPEN</td><td style="text-align:left;">ORA-06511</td><td style="text-align:left;">试图打开一个已经打开的游标</td></tr></tbody></table><h2 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h2><p>自定义异常指的是，当满足某一个条件的时候，故意让程序走到异常处理</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>
  <span class="token comment">-- 声明一个异常类型的变量，变量的类型一定要是 EXCEPTION</span>
  V_EXCEPTION EXCEPTION<span class="token punctuation">;</span>
  V_SAL NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;代码开始执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">THEN</span> 
     <span class="token comment">-- RAISE 的作用是让程序跳转到异常处理</span>
     RAISE V_EXCEPTION<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
  
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;正常执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  EXCEPTION <span class="token keyword">WHEN</span> V_EXCEPTION <span class="token keyword">THEN</span> 
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;走到了异常处理这里&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span> 
                 DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[l];function i(c,o){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","05_异常处理.html.vue"]]);export{r as default};
