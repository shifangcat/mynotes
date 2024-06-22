import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const t={},o=p(`<h1 id="连续登录" tabindex="-1"><a class="header-anchor" href="#连续登录" aria-hidden="true">#</a> 连续登录</h1><h2 id="连续登录问题" tabindex="-1"><a class="header-anchor" href="#连续登录问题" aria-hidden="true">#</a> 连续登录问题</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_USER_LOGIN
<span class="token punctuation">(</span>
USER_ID     NUMBER
<span class="token punctuation">,</span>LOGIN_DATE <span class="token keyword">DATE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 向表中添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_USER_LOGIN <span class="token punctuation">(</span>USER_ID<span class="token punctuation">,</span> LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20200808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> T_USER_LOGIN<span class="token punctuation">;</span>

<span class="token comment">-- 查询用户连续登录的天数</span>
<span class="token comment">/*
例如：
USER_ID  SERIES_DAY  START_DATE  END_DATE
   1        4         20200805   20200808
   2        3         20200806   20200808
   3        3         20200803   20200805
   4        3         20200806   20200808
*/</span>
<span class="token comment">-- 登录日期是连续的，排名也是连续的，两个连续的数据减出来的差值是相等的</span>
<span class="token comment">-- 如果出现一个不连续的日期，减出来的差值就不相等</span>
<span class="token keyword">SELECT</span> T1<span class="token punctuation">.</span>USER_ID
      <span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> SERIES_DAY
      <span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>T1<span class="token punctuation">.</span>LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> BEGIN_DATE
      <span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>T1<span class="token punctuation">.</span>LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> END_DATE
<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
      <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>USER_ID
            <span class="token punctuation">,</span>T<span class="token punctuation">.</span>LOGIN_DATE
            <span class="token punctuation">,</span>ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>USER_ID <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> RN
            <span class="token punctuation">,</span>T<span class="token punctuation">.</span>LOGIN_DATE <span class="token operator">-</span> ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token keyword">OVER</span><span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>USER_ID <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>LOGIN_DATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> LOGIN_DATE_RN
      <span class="token keyword">FROM</span> T_USER_LOGIN T
     <span class="token punctuation">)</span> T1
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> T1<span class="token punctuation">.</span>USER_ID<span class="token punctuation">,</span> T1<span class="token punctuation">.</span>LOGIN_DATE_RN
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T1<span class="token punctuation">.</span>USER_ID<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function e(u,l){return s(),a("div",null,c)}const r=n(t,[["render",e],["__file","13_连续登录.html.vue"]]);export{r as default};
