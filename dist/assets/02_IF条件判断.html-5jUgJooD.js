import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},t=e(`<h1 id="if-条件判断" tabindex="-1"><a class="header-anchor" href="#if-条件判断" aria-hidden="true">#</a> IF 条件判断</h1><h2 id="if-条件判断-1" tabindex="-1"><a class="header-anchor" href="#if-条件判断-1" aria-hidden="true">#</a> IF 条件判断</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">IF</span> 条件<span class="token number">1</span> <span class="token keyword">THEN</span>
   执行的逻辑<span class="token number">1</span><span class="token punctuation">;</span>
ELSIF 条件<span class="token number">2</span> <span class="token keyword">THEN</span>
   执行的逻辑<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">ELSE</span>
   执行的逻辑<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token keyword">DECLARE</span>
  V_NO NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_NO :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> V_NO <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">THEN</span>
     DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;GO HERE IF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ELSIF V_NO <span class="token operator">=</span> <span class="token number">2</span>  <span class="token keyword">THEN</span>
     DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;GO HERE ELSIF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
     DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;GO HERE ELSE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;结束啦&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if-条件判断的嵌套" tabindex="-1"><a class="header-anchor" href="#if-条件判断的嵌套" aria-hidden="true">#</a> IF 条件判断的嵌套</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>
  V_NO1 NUMBER<span class="token punctuation">;</span>
  V_NO2 NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_NO1 :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  V_NO2 :<span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> V_NO1 <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">THEN</span> 
    DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;GOGOGOG&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">IF</span> V_NO2 <span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">THEN</span> 
       DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;TTTTT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;GOGOGOG12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","02_IF条件判断.html.vue"]]);export{r as default};
