import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},t=e(`<h1 id="forall-批量插入" tabindex="-1"><a class="header-anchor" href="#forall-批量插入" aria-hidden="true">#</a> FORALL_批量插入</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 建表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_TEST_1 <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> EMPNO
      <span class="token punctuation">,</span>ENAME
      <span class="token punctuation">,</span>HIREDATE
<span class="token keyword">FROM</span> EMP
<span class="token keyword">WHERE</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">-- 进行批量插入</span>
<span class="token keyword">DECLARE</span>
  <span class="token keyword">CURSOR</span> EMP_CUR
  <span class="token operator">IS</span>
  <span class="token keyword">SELECT</span> EMPNO
        <span class="token punctuation">,</span>ENAME
        <span class="token punctuation">,</span>HIREDATE
  <span class="token keyword">FROM</span> EMP<span class="token punctuation">;</span>

  <span class="token keyword">TYPE</span> EMP_REC_TYPE <span class="token operator">IS</span> RECORD<span class="token punctuation">(</span>
                              EMPNO    EMP<span class="token punctuation">.</span>EMPNO<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">,</span>
                              ENAME    EMP<span class="token punctuation">.</span>ENAME<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">,</span>
                              HIREDATE EMP<span class="token punctuation">.</span>HIREDATE<span class="token operator">%</span><span class="token keyword">TYPE</span>
                             <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">-- 定义基于记录的嵌套表</span>
  <span class="token keyword">TYPE</span> NESTED_EMP_TYPE <span class="token operator">IS</span> <span class="token keyword">TABLE</span> <span class="token keyword">OF</span> EMP_REC_TYPE<span class="token punctuation">;</span>
  
  <span class="token comment">-- 声明集合变量</span>
  EMP_TAB NESTED_EMP_TYPE<span class="token punctuation">;</span>
  
  <span class="token comment">-- 定义了一个变量来作为 LIMIT 的值</span>
  V_LIMIT PLS_INTEGER :<span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

  <span class="token comment">-- 定义变量来记录FETCH次数</span>
  V_COUNTER PLS_INTEGER :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">OPEN</span> EMP_CUR<span class="token punctuation">;</span>
  <span class="token keyword">LOOP</span>
    <span class="token comment">-- FETCH 时使用了 BULK COLLECT 子句</span>
    <span class="token comment">-- 一次性取游标里的 5 条数据出来</span>
    <span class="token keyword">FETCH</span> EMP_CUR <span class="token keyword">BULK</span> COLLECT
      <span class="token keyword">INTO</span> EMP_TAB <span class="token keyword">LIMIT</span> V_LIMIT<span class="token punctuation">;</span>  <span class="token comment">-- 使用 LIMIT 子句限制提取数据量</span>

    <span class="token comment">-- 注意此时游标退出使用了 EMP_TAB.COUNT，而不是 EMP_CUR%NOTFOUND</span>
    <span class="token keyword">EXIT</span> <span class="token keyword">WHEN</span> EMP_TAB<span class="token punctuation">.</span>COUNT <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">-- 记录使用 LIMIT 之后 FETCH 的次数</span>
    V_COUNTER :<span class="token operator">=</span> V_COUNTER <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">-- 一次性将 5 条记录往表里插入</span>
    FORALL J <span class="token operator">IN</span> EMP_TAB<span class="token punctuation">.</span><span class="token keyword">FIRST</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> EMP_TAB<span class="token punctuation">.</span><span class="token keyword">LAST</span>  
      <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> EMP_TEST_1 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>
                                     EMP_TAB<span class="token punctuation">(</span>J<span class="token punctuation">)</span><span class="token punctuation">.</span>EMPNO
                                    <span class="token punctuation">,</span>EMP_TAB<span class="token punctuation">(</span>J<span class="token punctuation">)</span><span class="token punctuation">.</span>ENAME
                                    <span class="token punctuation">,</span>EMP_TAB<span class="token punctuation">(</span>J<span class="token punctuation">)</span><span class="token punctuation">.</span>HIREDATE
                                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

  <span class="token keyword">CLOSE</span> EMP_CUR<span class="token punctuation">;</span>

  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;总共获取次数为：&#39;</span> <span class="token operator">||</span> V_COUNTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","20_FORALL_批量插入.html.vue"]]);export{r as default};
