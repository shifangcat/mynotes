import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const e={},t=p(`<h1 id="拉链表的存储过程" tabindex="-1"><a class="header-anchor" href="#拉链表的存储过程" aria-hidden="true">#</a> 拉链表的存储过程</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建存储过程</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">PROCEDURE</span> SP_STU_TAG_LALIAN
<span class="token operator">IS</span>

<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 开链，将最新的数据插入拉链表</span>
  <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> STU_TAG
  <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>SNO
        <span class="token punctuation">,</span>T<span class="token punctuation">.</span>SNAME
        <span class="token punctuation">,</span>T<span class="token punctuation">.</span>SAGE
        <span class="token punctuation">,</span>T<span class="token punctuation">.</span>SSEX
        <span class="token punctuation">,</span>T<span class="token punctuation">.</span>BIRTHDAY
        <span class="token punctuation">,</span>TRUNC<span class="token punctuation">(</span>SYSDATE<span class="token punctuation">,</span> <span class="token string">&#39;DD&#39;</span><span class="token punctuation">)</span>            START_DT
        <span class="token punctuation">,</span>TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;39991231&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYYMMDD&#39;</span><span class="token punctuation">)</span> END_DT
        <span class="token punctuation">,</span><span class="token string">&#39;Y&#39;</span>                             ACTIVE_FLAG
  <span class="token keyword">FROM</span> STU_SRC T
  <span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
                    <span class="token keyword">SELECT</span> <span class="token number">1</span>
                    <span class="token keyword">FROM</span> STU_TAG T1
                    <span class="token keyword">WHERE</span> T1<span class="token punctuation">.</span>ACTIVE_FLAG <span class="token operator">=</span> <span class="token string">&#39;Y&#39;</span>
                      <span class="token operator">AND</span> T1<span class="token punctuation">.</span>SNO      <span class="token operator">=</span> T<span class="token punctuation">.</span>SNO
                      <span class="token operator">AND</span> T1<span class="token punctuation">.</span>SNAME    <span class="token operator">=</span> T<span class="token punctuation">.</span>SNAME
                      <span class="token operator">AND</span> T1<span class="token punctuation">.</span>SAGE     <span class="token operator">=</span> T<span class="token punctuation">.</span>SAGE
                      <span class="token operator">AND</span> T1<span class="token punctuation">.</span>SSEX     <span class="token operator">=</span> T<span class="token punctuation">.</span>SSEX
                      <span class="token operator">AND</span> T1<span class="token punctuation">.</span>BIRTHDAY <span class="token operator">=</span> T<span class="token punctuation">.</span>BIRTHDAY
                   <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">-- 闭链，把历史数据失效掉</span>
  <span class="token keyword">UPDATE</span> STU_TAG T <span class="token keyword">SET</span> T<span class="token punctuation">.</span>END_DT <span class="token operator">=</span> TRUNC<span class="token punctuation">(</span>SYSDATE<span class="token punctuation">,</span> <span class="token string">&#39;DD&#39;</span><span class="token punctuation">)</span>
                      <span class="token punctuation">,</span>T<span class="token punctuation">.</span>ACTIVE_FLAG <span class="token operator">=</span> <span class="token string">&#39;N&#39;</span>
  <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>ACTIVE_FLAG <span class="token operator">=</span> <span class="token string">&#39;Y&#39;</span>
  <span class="token operator">AND</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
              <span class="token keyword">SELECT</span> <span class="token number">1</span>
              <span class="token keyword">FROM</span> STU_SRC T1
              <span class="token keyword">WHERE</span> T1<span class="token punctuation">.</span>SNO <span class="token operator">=</span> T<span class="token punctuation">.</span>SNO
                <span class="token operator">AND</span> <span class="token punctuation">(</span>
                     T1<span class="token punctuation">.</span>SNAME    <span class="token operator">!=</span> T<span class="token punctuation">.</span>SNAME
                  <span class="token operator">OR</span> T1<span class="token punctuation">.</span>SAGE     <span class="token operator">!=</span> T<span class="token punctuation">.</span>SAGE
                  <span class="token operator">OR</span> T1<span class="token punctuation">.</span>SSEX     <span class="token operator">!=</span> T<span class="token punctuation">.</span>SSEX
                  <span class="token operator">OR</span> T1<span class="token punctuation">.</span>BIRTHDAY <span class="token operator">!=</span> T<span class="token punctuation">.</span>BIRTHDAY
                    <span class="token punctuation">)</span>
             <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
  
  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
    <span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> SP_STU_TAG_LALIAN<span class="token punctuation">;</span>

<span class="token comment">-- 调用存储过程</span>
<span class="token keyword">BEGIN</span>
  SP_STU_TAG_LALIAN<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","拉链表的存储过程.html.vue"]]);export{k as default};
