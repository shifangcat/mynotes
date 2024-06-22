import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const e={},t=p(`<h1 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步" aria-hidden="true">#</a> 数据同步</h1><h2 id="全量同步" tabindex="-1"><a class="header-anchor" href="#全量同步" aria-hidden="true">#</a> 全量同步</h2><p><strong>逻辑</strong>：用源表的数据直接覆盖目标表。在向目标表中插入数据之前，先清空目标表，然后查询源表的全部数据，并插入到目标表中</p><h3 id="全量同步的使用流程" tabindex="-1"><a class="header-anchor" href="#全量同步的使用流程" aria-hidden="true">#</a> 全量同步的使用流程</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建源表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_SOURCE
<span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
       <span class="token comment">-- 员工入职的这一天就是这条数据的生成时间</span>
      <span class="token punctuation">,</span>T<span class="token punctuation">.</span>HIREDATE <span class="token keyword">AS</span> CREATE_DATE
      <span class="token punctuation">,</span>T<span class="token punctuation">.</span>HIREDATE <span class="token keyword">AS</span> LAST_UPDATE_DATE
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>

<span class="token comment">-- 创建数据同步的目标表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_TAG<span class="token punctuation">(</span>
                     EMPNO            NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     ENAME            VARCHAR2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     JOB              VARCHAR2<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     MGR              NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     HIREDATE         <span class="token keyword">DATE</span><span class="token punctuation">,</span>
                     SAL              NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     COMM             NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     DEPTNO           NUMBER<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     ETL_DATE         <span class="token keyword">DATE</span>  <span class="token comment">-- 记录的是数据同步的时间点</span>
                     <span class="token comment">-- CREATE_DATE      DATE,</span>
                     <span class="token comment">-- LAST_UPDATE_DATE DATE</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建全量同步的存储过程</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">PROCEDURE</span> SP_EMP_SOURCE
<span class="token operator">IS</span>

<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 先把目标表的数据清空</span>
  <span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> EMP_TAG<span class="token punctuation">;</span>
  <span class="token comment">-- EXECUTE IMMEDIATE &#39;TRUNCATE TABLE EMP_TAG&#39;;</span>

  <span class="token comment">-- 再把源表的数据全量插入到目标表中</span>
  <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> EMP_TAG
  <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>EMPNO<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>JOB<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>MGR<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>SAL<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>COMM<span class="token punctuation">,</span>
         T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">,</span>
         SYSDATE
  <span class="token keyword">FROM</span> EMP_SOURCE T<span class="token punctuation">;</span>

  <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
    <span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> SP_EMP_SOURCE<span class="token punctuation">;</span>

<span class="token comment">-- 调用全量同步的存储过程</span>
<span class="token keyword">BEGIN</span>
  SP_EMP_SOURCE<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 验证数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_SOURCE<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_TAG<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增量同步" tabindex="-1"><a class="header-anchor" href="#增量同步" aria-hidden="true">#</a> 增量同步</h2><p>增量指的是那一天新增的或者发生修改的数据</p><p><strong>逻辑</strong>：用源表的数据“更新”目标表，如果这条数据在目标表中存在则更新，数据不存在，则插入</p><h3 id="增量同步与全量同步的区别" tabindex="-1"><a class="header-anchor" href="#增量同步与全量同步的区别" aria-hidden="true">#</a> 增量同步与全量同步的区别</h3><ul><li><p>全量同步是同步整张表的数据，增量同步只同步增量数据（比如今天只同步昨天新增的或者修改的数据）</p></li><li><p>全量同步之前要清空目标表的数据，增量同步不用清空表，有则更新，无则插入</p></li></ul><h3 id="增量同步的语法结构" tabindex="-1"><a class="header-anchor" href="#增量同步的语法结构" aria-hidden="true">#</a> 增量同步的语法结构</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">MERGE</span> <span class="token keyword">INTO</span> 目标表
<span class="token keyword">USING</span> <span class="token punctuation">(</span>增量数据的查询结果集<span class="token punctuation">)</span>  <span class="token comment">-- 子查询，查询源表的增量结果集</span>
<span class="token keyword">ON</span> <span class="token punctuation">(</span>匹配字段<span class="token punctuation">)</span>  <span class="token comment">-- 用来判断增量结果集里的数据到底是更新目标表还是插入目标表</span>
<span class="token keyword">WHEN</span> <span class="token keyword">MATCHED</span> <span class="token keyword">THEN</span>  <span class="token comment">-- 当数据匹配到的时候进行更新</span>
  <span class="token keyword">UPDATE</span> <span class="token keyword">SET</span> 字段名 <span class="token operator">=</span> 值  <span class="token comment">-- UPDATE 和 SET 之间不需要加表名</span>
<span class="token keyword">WHEN</span> <span class="token operator">NOT</span> <span class="token keyword">MATCHED</span> <span class="token keyword">THEN</span>  <span class="token comment">-- 数据没有匹配到则进行插入</span>
  <span class="token keyword">INSERT</span> <span class="token punctuation">(</span>字段名<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>值<span class="token punctuation">)</span>  <span class="token comment">-- INSERT 和 VALUES 之间不需要加 INTO 表名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增量同步的使用流程" tabindex="-1"><a class="header-anchor" href="#增量同步的使用流程" aria-hidden="true">#</a> 增量同步的使用流程</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 准备数据</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","12_数据同步.html.vue"]]);export{d as default};
