import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const t={},e=p(`<h1 id="增量同步的使用流程" tabindex="-1"><a class="header-anchor" href="#增量同步的使用流程" aria-hidden="true">#</a> 增量同步的使用流程</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 准备数据</span>
<span class="token comment">-- 创建 BOOK 表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> BOOK<span class="token punctuation">(</span>
                  BNO    VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 图书编号</span>
                  BNAME  VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 图书名称</span>
                  AID    <span class="token keyword">INT</span><span class="token punctuation">,</span>           <span class="token comment">-- 作者</span>
                  PID    <span class="token keyword">INT</span><span class="token punctuation">,</span>           <span class="token comment">-- 出版社</span>
                  TID    VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 种类</span>
                  BUY    <span class="token keyword">DATE</span><span class="token punctuation">,</span>          <span class="token comment">-- 进货日期</span>
                  PRICE  NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">-- 价格</span>
                  BUYNUM <span class="token keyword">INT</span>            <span class="token comment">-- 数量</span>
                 <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 向表中添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;J0001&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;计算机基础&#39;</span><span class="token punctuation">,</span> <span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;J001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-1-5&#39;</span><span class="token punctuation">,</span> <span class="token number">12.5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;J0002&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;oracle从入门到精通&#39;</span><span class="token punctuation">,</span> <span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">1004</span><span class="token punctuation">,</span> <span class="token string">&#39;J001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-8-8&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;Y0001&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;常见病例及用药&#39;</span><span class="token punctuation">,</span> <span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">,</span> <span class="token string">&#39;Y001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-2-4&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;W0001&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;平凡的世界&#39;</span><span class="token punctuation">,</span> <span class="token number">2006</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">,</span> <span class="token string">&#39;W001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-5-15&#39;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;W0002&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;悲惨世界&#39;</span><span class="token punctuation">,</span> <span class="token number">2007</span><span class="token punctuation">,</span> <span class="token number">1004</span><span class="token punctuation">,</span> <span class="token string">&#39;W001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-4-9&#39;</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;J0003&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SQL入门&#39;</span><span class="token punctuation">,</span> <span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">1004</span><span class="token punctuation">,</span> <span class="token string">&#39;J001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-2-15&#39;</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;J0004&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SQL基础课程&#39;</span><span class="token punctuation">,</span> <span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;J001&#39;</span><span class="token punctuation">,</span> <span class="token keyword">DATE</span> <span class="token string">&#39;2016-6-6&#39;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> BOOK<span class="token punctuation">;</span>

<span class="token comment">-- 创建源表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> BOOK_SOURCE
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
       <span class="token comment">-- 假如昨天写入的这些数据</span>
      <span class="token punctuation">,</span>SYSDATE <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">AS</span> CREATE_DATE
      <span class="token punctuation">,</span>SYSDATE <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">AS</span> LAST_UPDATE_DATE
<span class="token keyword">FROM</span> BOOK T<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> BOOK_SOURCE<span class="token punctuation">;</span>

<span class="token comment">-- 创建目标表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> BOOK_TARGET<span class="token punctuation">(</span>
                         BNO      VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 图书编号</span>
                         BNAME    VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 图书名称</span>
                         AID      <span class="token keyword">INT</span><span class="token punctuation">,</span>           <span class="token comment">-- 作者</span>
                         PID      <span class="token keyword">INT</span><span class="token punctuation">,</span>           <span class="token comment">-- 出版社</span>
                         TID      VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 种类</span>
                         BUY      <span class="token keyword">DATE</span><span class="token punctuation">,</span>          <span class="token comment">-- 进货日期</span>
                         PRICE    NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">-- 价格</span>
                         BUYNUM   <span class="token keyword">INT</span><span class="token punctuation">,</span>           <span class="token comment">-- 数量</span>
                         ETL_DATE <span class="token keyword">DATE</span>           <span class="token comment">-- 同步时间</span>
                        <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> BOOK_TARGET<span class="token punctuation">;</span>

<span class="token comment">/*要求：开发一个增量同步数据的存储过程按天同步，将 BOOK_SOURCE 的数据同步到 BOOK_TARGET。
第一次调用数据同步了昨天的数据之后，将 BOOK_SOURCE 修改一下，改成今天的数据，再调用
存储过程同步一次今天的数据*/</span>
<span class="token comment">-- 创建增量同步的存储过程</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">PROCEDURE</span> SP_MERGE_BOOK_TARGET<span class="token punctuation">(</span>
                                                 P_BEGIN_DATE <span class="token operator">IN</span> <span class="token keyword">DATE</span>
                                                <span class="token punctuation">,</span>P_END_DATE   <span class="token operator">IN</span> <span class="token keyword">DATE</span>
                                                <span class="token punctuation">)</span>
<span class="token operator">IS</span>

<span class="token keyword">BEGIN</span>
  <span class="token keyword">MERGE</span> <span class="token keyword">INTO</span> BOOK_TARGET T1
  <span class="token keyword">USING</span><span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>BNO
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>BNAME
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>AID
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>PID
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>TID
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>BUY
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>PRICE
              <span class="token punctuation">,</span>T<span class="token punctuation">.</span>BUYNUM
        <span class="token keyword">FROM</span> BOOK_SOURCE T
        <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>LAST_UPDATE_DATE <span class="token operator">BETWEEN</span> P_BEGIN_DATE <span class="token operator">AND</span> P_END_DATE
       <span class="token punctuation">)</span> T2  <span class="token comment">-- 子查询，查询源表的增量结果集</span>
  <span class="token keyword">ON</span> <span class="token punctuation">(</span>T1<span class="token punctuation">.</span>BNO <span class="token operator">=</span> T2<span class="token punctuation">.</span>BNO<span class="token punctuation">)</span>
  <span class="token keyword">WHEN</span> <span class="token keyword">MATCHED</span> <span class="token keyword">THEN</span>
    <span class="token comment">-- 不能更新 ON 后面的匹配字段</span>
    <span class="token keyword">UPDATE</span> <span class="token keyword">SET</span> T1<span class="token punctuation">.</span>BNAME    <span class="token operator">=</span> T2<span class="token punctuation">.</span>BNAME
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>AID      <span class="token operator">=</span> T2<span class="token punctuation">.</span>AID
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>PID      <span class="token operator">=</span> T2<span class="token punctuation">.</span>PID
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>TID      <span class="token operator">=</span> T2<span class="token punctuation">.</span>TID
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>BUY      <span class="token operator">=</span> T2<span class="token punctuation">.</span>BUY
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>PRICE    <span class="token operator">=</span> T2<span class="token punctuation">.</span>PRICE
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>BUYNUM   <span class="token operator">=</span> T2<span class="token punctuation">.</span>BUYNUM
              <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>ETL_DATE <span class="token operator">=</span> SYSDATE
  <span class="token keyword">WHEN</span> <span class="token operator">NOT</span> <span class="token keyword">MATCHED</span> <span class="token keyword">THEN</span>
    <span class="token keyword">INSERT</span> <span class="token punctuation">(</span>
            T1<span class="token punctuation">.</span>BNO
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>BNAME
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>AID
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>PID
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>TID
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>BUY
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>PRICE
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>BUYNUM
           <span class="token punctuation">,</span>T1<span class="token punctuation">.</span>ETL_DATE
           <span class="token punctuation">)</span>
    <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>
            T2<span class="token punctuation">.</span>BNO
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>BNAME
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>AID
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>PID
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>TID
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>BUY
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>PRICE
           <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>BUYNUM
           <span class="token punctuation">,</span>SYSDATE
           <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
    <span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">END</span> SP_MERGE_BOOK_TARGET<span class="token punctuation">;</span>

<span class="token comment">-- 调用存储过程</span>
<span class="token keyword">BEGIN</span>
  SP_MERGE_BOOK_TARGET<span class="token punctuation">(</span>
                       P_BEGIN_DATE <span class="token operator">=</span><span class="token operator">&gt;</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20220824&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYYMMDD&#39;</span><span class="token punctuation">)</span>
                      <span class="token punctuation">,</span>P_END_DATE <span class="token operator">=</span><span class="token operator">&gt;</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;20220825&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYYMMDD&#39;</span><span class="token punctuation">)</span>
                      <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 验证数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> BOOK_SOURCE<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> BOOK_TARGET<span class="token punctuation">;</span>

<span class="token comment">-- 再次修改数据</span>
<span class="token keyword">UPDATE</span> BOOK_SOURCE T <span class="token keyword">SET</span> T<span class="token punctuation">.</span>BUYNUM <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span> T<span class="token punctuation">.</span>LAST_UPDATE_DATE <span class="token operator">=</span> SYSDATE <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>BNO <span class="token operator">=</span> <span class="token string">&#39;J0001&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> BOOK_SOURCE <span class="token punctuation">(</span>BNO<span class="token punctuation">,</span> BNAME<span class="token punctuation">,</span> CREATE_DATE<span class="token punctuation">,</span> LAST_UPDATE_DATE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;X007&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;这是一个书名&#39;</span><span class="token punctuation">,</span> SYSDATE<span class="token punctuation">,</span> SYSDATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","增量同步的使用流程.html.vue"]]);export{r as default};
