import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const e={},o=p(`<h1 id="分析函数" tabindex="-1"><a class="header-anchor" href="#分析函数" aria-hidden="true">#</a> 分析函数</h1><p>分析函数又叫开窗函数，在 SQL 语句中，很多查询语句需要进行 <code>GROUP BY</code> 分组汇总，但是一旦经过分组，<code>SELECT</code> 返回的记录数就会减少。为了保留所有原始行记录，并且仍可以进行分组数据分析，分析函数应运而生</p><p>分析函数与聚合函数计算方式一样，分析函数也是对行集组进行聚合计算，但是它不像普通聚合函数那样每组只返回一个值分析函数可以为每组返回多个值</p><p>语法：<code>关键字() OVER (PARTITION BY 字段1, 字段2, ... ORDER BY 字段1, 字段2, ...)</code></p><h2 id="over-partition-by" tabindex="-1"><a class="header-anchor" href="#over-partition-by" aria-hidden="true">#</a> OVER (PARTITION BY)</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- AVG(对哪个字段求平均值) OVER (PARTITION BY 分组的字段)</span>
<span class="token comment">-- MAX(对哪个字段求最大值) OVER (PARTITION BY 分组的字段)</span>
<span class="token comment">-- MIN(对哪个字段求最小值) OVER (PARTITION BY 分组的字段)</span>
<span class="token comment">-- SUM(对哪个字段求和) OVER (PARTITION BY 分组的字段)</span>
<span class="token comment">-- COUNT(任意的字段，字段值不能为空) OVER (PARTITION BY 分组的字段)  -- 每一组里有多少条数据</span>
<span class="token comment">-- WM_CONCAT(对哪个字段拼接) OVER (PARTITION BY 分组的字段)  -- 纵向拼接</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> AVG_SAL1  <span class="token comment">-- 全体员工的平均工资</span>
      <span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> AVG_SAL  <span class="token comment">-- 员工所在部门的平均工资</span>
      <span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> MAX_SAL  <span class="token comment">-- 员工所在部门的最高工资</span>
      <span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> MIN_SAL  <span class="token comment">-- 员工所在部门的最低工资</span>
      <span class="token punctuation">,</span>WM_CONCAT<span class="token punctuation">(</span>ENAME<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> NAMES  <span class="token comment">-- 员工所在部门的人员名单</span>
      <span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>EMPNO<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> COUNT_EMPNO  <span class="token comment">-- 员工所在部门的人数</span>
      <span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">MIN</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> MAX_MIN
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：分析函数不能直接用在<code>WHERE</code>后面作过滤条件，需要用子查询的方法，在外层的查询中对子查询里的分析函数的结果列进行过滤</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
            <span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> AVG_SAL
      <span class="token keyword">FROM</span> EMP T<span class="token punctuation">)</span> T1
<span class="token keyword">WHERE</span> T1<span class="token punctuation">.</span>AVG_SAL <span class="token operator">&gt;</span> <span class="token number">2000</span><span class="token punctuation">;</span>

<span class="token comment">-- 分析函数直接用在WHERE后面作为过滤条件会报错</span>
<span class="token comment">-- SELECT * FROM EMPWHERE AVG(SAL) OVER (PARTITION BY DEPTNO) &gt; 2000;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em><strong>分析函数结合聚合函数使用</strong></em> 跟 <em><strong>单独使用聚合函数</strong></em> 的区别： <ul><li>聚合函数分组使用<code>GROUP BY</code>，而分析函数使用<code>OVER (PARTITION BY)</code></li><li>聚合函数的计算结果是汇总后计算出来一个结果，而分析函数会根据表中的行数，每一行返回一个计算结果</li><li>聚合函数是可以作为条件使用（比如在<code>HAVING</code>后面），而分析函数不可以</li></ul></li></ul><h2 id="over-order-by" tabindex="-1"><a class="header-anchor" href="#over-order-by" aria-hidden="true">#</a> OVER (ORDER BY)</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- PARTITION BY 后有 OEDER BY 的时候，就是累计求值</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token comment">-- 先按照 ORDER BY T.HIREDATE 排序，排好顺序后再对每一条数据的 SAL 做累计计算</span>
      <span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> AVG_SAL
      <span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> MAX_SAL
      <span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> MIN_SAL
      <span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> SUM_SAL
      <span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>EMPNO<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> COUNT_SAL
<span class="token keyword">FROM</span> EMP T
<span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> <span class="token number">20</span>
<span class="token comment">-- 这里的 ORDER BY 是对 SELECT 计算出来的结果做的展示顺序的排序，不会影响已经计算出来的结果</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用<code>OVER (ORDER BY)</code>需要注意： <ul><li>不仅有排序的作用，还有累计计算的作用（通过不同的字段进行排序累计会获得不同的结果）</li><li>题目里面没有提到<strong>累计</strong>时慎用分析函数里的<code>ORDER BY</code></li><li>不影响之前学的<code>ORDER BY</code>的排序功能，如果后面还有<code>ORDER BY</code>那么就是对计算出来的结果的展示顺序做的一个调整，并不会影响计算的结果</li></ul></li></ul><h2 id="排序的分析函数" tabindex="-1"><a class="header-anchor" href="#排序的分析函数" aria-hidden="true">#</a> 排序的分析函数</h2><p>排序的分析函数有：<code>RANK()</code>、<code>DENSE_RANK()</code>、<code>ROW_NUMBER()</code>，三者都能为每条记录产生一个从1开始至N的自然数，N的值可能小于等于记录的总数。三者的唯一区别在于当碰到相同数据时的处理策略不同：</p><ul><li><p><code>ROW_NUMBER()</code>：返回一个唯一的值，当碰到相同数据时，排名按照记录集中记录的顺序依次递增，如：<u>1 2 3 4 5 6</u></p></li><li><p><code>DENSE_RANK()</code>：返回一个唯一的值，当碰到相同数据时，此时所有相同数据的排名都是一样的，并且和后面的排名之间不会空出排名，如：<u>1 2 3 3 4 5</u></p></li><li><p><code>RANK()</code>：返回一个唯一的值，当碰到相同数据时，此时所有相同数据的排名都是一样的，同时会和后面的排名之间空出排名，如：<u>1 2 3 3 5 6</u></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span>ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> ROW_NUMBER
      <span class="token punctuation">,</span>DENSE_RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> DENSE_RANK
      <span class="token punctuation">,</span>RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> RANK
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>

<span class="token comment">-- ORDER BY 不能少，且后面可以使用函数获取排序的依据</span>
<span class="token comment">-- PARTITION BY 分组字段，可以省略，但是省略后得到的结果不同</span>
<span class="token comment">-- 使用 PARTITION BY 分组字段 时，得到的排名是在该分组中的排名</span>
<span class="token comment">-- 不使用 PARTITION BY 分组字段 时，得到的排名是在全部的数据中的排名</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span>ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> ROW_NUMBER
      <span class="token punctuation">,</span>DENSE_RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> DENSE_RANK
      <span class="token punctuation">,</span>RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> RANK
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>

<span class="token comment">-- 找出每种工作入职时间最早的前两个员工的工号以及入职日期(不考虑并列情况)</span>
<span class="token keyword">SELECT</span> F<span class="token punctuation">.</span>EMPNO<span class="token punctuation">,</span> F<span class="token punctuation">.</span>HIREDATE
<span class="token keyword">FROM</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> E<span class="token punctuation">.</span><span class="token operator">*</span>
            <span class="token punctuation">,</span>ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>JOB <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> HIRE_RANK
      <span class="token keyword">FROM</span> EMP E<span class="token punctuation">)</span> F
<span class="token keyword">WHERE</span> F<span class="token punctuation">.</span>HIRE_RANK <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="偏移函数-lag-lead" tabindex="-1"><a class="header-anchor" href="#偏移函数-lag-lead" aria-hidden="true">#</a> 偏移函数：LAG/LEAD</h2><p><code>LAG()</code>和<code>LEAD()</code>函数可以在一次查询中取出同一字段的前<code>N</code>行和后<code>N</code>行的数据，这种操作可以使用对相同表的表连接来实现，不过使用<code>LAG()</code>和<code>LEAD()</code>有更高的效率，语法结构如下：</p><p><code>LAG/LEAD(参数1, 参数2, 参数3) OVER (PARTITION BY 分组字段 ORDER BY 排序字段)</code></p><blockquote><p><code>LAG</code>：往上面多少行找，将找到的数据偏移下来，即将指定字段的数据向下移动，其余字段的数据的位置保持不变</p><p><code>LEAD</code>：往下面多少行找，将找到的数据偏移上去，即将指定字段的数据向上移动，其余字段的数据的位置保持不变</p><p>参数1：偏移哪个字段的数据</p><p>参数2：偏移多少行，不写默认偏移一行</p><p>参数3：偏移之后找不到数据，就返回参数3，不写则为空</p><p><code>ORDER BY</code>必须要有</p><p><code>PARTITION BY</code>可以省略，当省略的时候就是对整张表的数据做偏移，不分组；当<code>PARTITION BY</code>存在时，就是在每一个组里面进行偏移</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- LAG向下偏移</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>SAL
      <span class="token punctuation">,</span>LAG<span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> LAG_SAL
      <span class="token comment">-- 找不到就返回本身的值，如下所示</span>
      <span class="token punctuation">,</span>LAG<span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> LAG_SAL
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>

<span class="token comment">-- LEAD向上偏移</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>SAL
      <span class="token punctuation">,</span>LEAD<span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span> <span class="token keyword">AS</span> LEAD_SAL
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="占比-ratio-to-report" tabindex="-1"><a class="header-anchor" href="#占比-ratio-to-report" aria-hidden="true">#</a> 占比：RATIO_TO_REPORT</h2><p><code>RATIO_TO_REPORT(占比的字段) OVER (PARTITION BY 分组字段)</code>，获取指定字段中的数据在分组中的占比，省略<code>PARTITION BY</code>则可以得到在全部数据中的占比</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 求员工的工资占整个部门工资的比例</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>EMPNO
      <span class="token punctuation">,</span>T<span class="token punctuation">.</span>SAL
      <span class="token punctuation">,</span>T<span class="token punctuation">.</span>DEPTNO
      <span class="token punctuation">,</span>RATIO_TO_REPORT<span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">)</span> <span class="token keyword">AS</span> GROUP_RATIO  <span class="token comment">-- 分组占比</span>
      <span class="token punctuation">,</span>RATIO_TO_REPORT<span class="token punctuation">(</span>T<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> ALL_RATIO  <span class="token comment">-- 全部占比</span>
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="first-value、last-value" tabindex="-1"><a class="header-anchor" href="#first-value、last-value" aria-hidden="true">#</a> FIRST_VALUE、LAST_VALUE</h2><p><code>FIRST_VALUE()</code>、<code>LAST_VALUE()</code>是两个分析函数，可以返回结果集中排在第一位和最后一位的某个字段的值。使用<code>LAST_VALUE()</code>要加<code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 取第一个值，FIRST_VALUE()</span>
<span class="token comment">-- 查出每一个员工的所有信息，以及这个员工所在部门里工资最低的那个人的名字</span>
<span class="token keyword">SELECT</span> E<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span>FIRST_VALUE<span class="token punctuation">(</span>E<span class="token punctuation">.</span>ENAME<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span> <span class="token keyword">AS</span> MIN_NAME
<span class="token keyword">FROM</span> EMP E<span class="token punctuation">;</span>

<span class="token comment">-- 取最后一个值，LAST_VALUE()</span>
<span class="token comment">-- 查出每一个员工的所有信息，以及这个员工所在部门里工资最高的那个人的名字</span>
<span class="token keyword">SELECT</span> E<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span>LAST_VALUE<span class="token punctuation">(</span>ENAME<span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>SAL <span class="token keyword">ROWS</span> <span class="token operator">BETWEEN</span> <span class="token keyword">UNBOUNDED</span> <span class="token keyword">PRECEDING</span> <span class="token operator">AND</span> <span class="token keyword">UNBOUNDED</span> <span class="token keyword">FOLLOWING</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> EMP E<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切片ntile" tabindex="-1"><a class="header-anchor" href="#切片ntile" aria-hidden="true">#</a> 切片NTILE</h2><p><code>NTILE(要分为几个等级) OVER (PARTITION BY 分组字段 ORDER BY 排序字段)</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 按部门分组后再分别分为4个等级</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span>NTILE<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>DEPTNO <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">ASC</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>

<span class="token comment">-- 将全部数据一一起分为4个等级</span>
<span class="token keyword">SELECT</span> T<span class="token punctuation">.</span><span class="token operator">*</span>
      <span class="token punctuation">,</span>NTILE<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> T<span class="token punctuation">.</span>SAL <span class="token keyword">ASC</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>总结</strong></p><p><em><strong>1&gt;</strong></em> 分析函数的语法都一样：<code>关键字() OVER (PARTITION BY ... ORDER BY ...)</code></p><p><em><strong>2&gt;</strong></em> 分析函数只能用于 <code>SELECT</code> 之后</p><p><em><strong>3&gt;</strong></em> 分析函数中使用的字段或者函数，都需要能够在本条语句的 <code>SELECT</code> 后面查询出来，换句话说，能够在 <code>SELECT</code> 后面查询出来的字段或函数，都可以在本条语句的分析函数中使用</p></li></ul>`,31),t=[o];function c(l,k){return s(),a("div",null,t)}const d=n(e,[["render",c],["__file","08_分析函数.html.vue"]]);export{d as default};
