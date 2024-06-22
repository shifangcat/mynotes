import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},o=e(`<h1 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h1><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> FOR 循环</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">FOR</span> 循环变量 <span class="token operator">IN</span> 循环下限<span class="token punctuation">.</span><span class="token punctuation">.</span>循环上限 <span class="token keyword">LOOP</span>  <span class="token comment">-- 循环变量可以用任意的字母或者单词</span>
    <span class="token comment">-- 循环体（需要重复执行的逻辑）</span>
<span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 计算 1-10 的累加值</span>
<span class="token keyword">DECLARE</span>
  V_SUM NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_SUM :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">FOR</span> I <span class="token operator">IN</span> <span class="token number">1.</span><span class="token number">.10</span> <span class="token keyword">LOOP</span>
      V_SUM :<span class="token operator">=</span> V_SUM <span class="token operator">+</span> I<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_SUM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loop-循环" tabindex="-1"><a class="header-anchor" href="#loop-循环" aria-hidden="true">#</a> LOOP 循环</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">DECLARE</span>
  <span class="token comment">-- 声明变量</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">LOOP</span>
    <span class="token comment">-- 循环体（需要重复执行的逻辑）</span>
    <span class="token keyword">IF</span> 跳出该循环的条件 <span class="token keyword">THEN</span>
       <span class="token keyword">EXIT</span><span class="token punctuation">;</span>  <span class="token comment">-- 强制终止循环</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 计算 1-10 的累加值</span>
<span class="token keyword">DECLARE</span>
  V_SUM NUMBER<span class="token punctuation">;</span>
  V_I   NUMBER<span class="token punctuation">;</span>  <span class="token comment">-- 先声明一个控制循环次数的变量</span>
<span class="token keyword">BEGIN</span>
  V_SUM :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  V_I :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">LOOP</span>
    V_SUM :<span class="token operator">=</span> V_SUM <span class="token operator">+</span> V_I<span class="token punctuation">;</span>
    <span class="token keyword">IF</span> V_I <span class="token operator">=</span> <span class="token number">10</span> <span class="token keyword">THEN</span>
      <span class="token keyword">EXIT</span><span class="token punctuation">;</span>  <span class="token comment">-- 强制终止循环</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
    V_I :<span class="token operator">=</span> V_I <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">-- 每次循环结束的时候，要记得给循环变量加 1</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_SUM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> WHILE 循环</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">DECLARE</span>
  <span class="token comment">-- 声明变量</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">WHILE</span> 进入循环的条件 <span class="token keyword">LOOP</span>
    <span class="token comment">-- 循环体（需要重复执行的逻辑）</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 计算 1-10 的累加值</span>
<span class="token keyword">DECLARE</span>
  V_SUM NUMBER<span class="token punctuation">;</span>
  V_I   NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_SUM :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  V_I :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">WHILE</span> V_I <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token keyword">LOOP</span>
    V_SUM :<span class="token operator">=</span> V_SUM <span class="token operator">+</span> V_I<span class="token punctuation">;</span>
    V_I :<span class="token operator">=</span> V_I <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_SUM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[o];function c(t,i){return s(),a("div",null,l)}const u=n(p,[["render",c],["__file","03_循环.html.vue"]]);export{u as default};
