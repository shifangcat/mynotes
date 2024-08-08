import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const e={},t=p(`<h1 id="分区表" tabindex="-1"><a class="header-anchor" href="#分区表" aria-hidden="true">#</a> 分区表</h1><h2 id="分区表介绍" tabindex="-1"><a class="header-anchor" href="#分区表介绍" aria-hidden="true">#</a> 分区表介绍</h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3><p>大型企业中（银行，电信，医疗等资源垄断行业），他们的数据量是非常大，包括现在我们随着企业信息化，数据量成倍增加，这时我们后台系统统计分析的数据量通常可以达到几百 G 到 T 级别的数据量，为了让我们能对这些大量的数据做处理（读写，查询）操作速度更快，oracle提供了对表进行分区的技术，用来改善我们对大数据查询的性能问题</p><h3 id="表分区的具体作用" tabindex="-1"><a class="header-anchor" href="#表分区的具体作用" aria-hidden="true">#</a> 表分区的具体作用</h3><p><em><strong>1&gt;</strong></em> Oracle的表分区功能通过改善可管理性、性能和可用性，从而为各式应用程序带来了极大的好处。通常，分区可以使某些查询以及维护操作的性能大大提高。此外，分区还可以极大简化常见的管理任务，分区是构建千兆字节数据系统或超高可用性系统的关键工具。</p><p><em><strong>2&gt;</strong></em> 分区功能能够将表、索引或索引组织表进一步细分为段，这些数据库对象的段叫做分区。</p><p><em><strong>3&gt;</strong></em> 每个分区有自己的名称，还可以选择自己的存储特性。</p><p><em><strong>4&gt;</strong></em> 从数据库管理员的角度来看，一个分区后的对象具有多个段，这些段既可进行集体管理，也可单独管理，这就使数据库管理员在管理分区后的对象时有相当大的灵活性。但是，从应用程序的角度来看，分区后的表与非分区表完全相同，使用 DML 命令访问分区后的表时，无需任何修改。</p><h3 id="什么时候使用分区表" tabindex="-1"><a class="header-anchor" href="#什么时候使用分区表" aria-hidden="true">#</a> 什么时候使用分区表</h3><ul><li>表的数据量特别大</li><li>表中包含历史数据，新的数据被增加到新的分区中</li></ul><h3 id="分区表的优点" tabindex="-1"><a class="header-anchor" href="#分区表的优点" aria-hidden="true">#</a> 分区表的优点</h3><ul><li><em><strong>改善查询性能</strong></em>：对分区对象的查询可以仅搜索自己关心的分区，提高检索速度</li><li><em><strong>增强可用性</strong></em>：如果表的某个分区出现故障，表在其他分区的数据仍然可用</li><li><em><strong>维护方便</strong></em>：如果表的某个分区出现故障，需要修复数据，只修复该分区即可</li><li><em><strong>均衡 I/O</strong></em>：可以把不同的分区映射到磁盘以平衡 I/O，改善整个系统性能</li></ul><h3 id="分区表的缺点" tabindex="-1"><a class="header-anchor" href="#分区表的缺点" aria-hidden="true">#</a> 分区表的缺点</h3><ul><li>已经存在的表没有方法可以直接转化为分区表</li><li>需要维护</li></ul><h3 id="分区表的类型" tabindex="-1"><a class="header-anchor" href="#分区表的类型" aria-hidden="true">#</a> 分区表的类型</h3><ul><li>范围分区：RANGE</li><li>列表分区：LIST</li><li>组合分区：分区之中套分区，就是一个分区里边还套着一个分区</li></ul><h2 id="范围分区" tabindex="-1"><a class="header-anchor" href="#范围分区" aria-hidden="true">#</a> 范围分区</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名
<span class="token punctuation">(</span>
 字段名<span class="token number">1</span> 数据类型
<span class="token punctuation">,</span>字段名<span class="token number">2</span> 数据类型
<span class="token punctuation">,</span>字段名<span class="token number">3</span> 数据类型
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span>  <span class="token comment">-- 不要加分号，分号表示语句结束，语句结束说明建表成功，建好了的表不能再建分区</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE <span class="token punctuation">(</span>作为分区字段的字段名称<span class="token punctuation">)</span>
<span class="token punctuation">(</span>
 <span class="token keyword">PARTITION</span> 分区名<span class="token number">1</span> <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>分区字段具体的一个上限值<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 分区的上限值不能比下一个分区的上限值高</span>
 <span class="token keyword">PARTITION</span> 分区名<span class="token number">2</span> <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>分区字段具体的一个上限值<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">-- 分区名不能重复</span>
 <span class="token keyword">PARTITION</span> 分区名<span class="token number">3</span> <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>分区字段具体的一个上限值<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PARTITION</span> 分区名<span class="token number">4</span> <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>MAXVALUE<span class="token punctuation">)</span>  <span class="token comment">-- 最大值，空值会插入到这个分区中</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">/*
创建一个 EMP 的分区表：EMP_RANGE_SAL，按照工资做范围分区
小于 1500 的为第一个分区
1500 到 2500 的为第二个分区
大于2500 的为第三个分区
*/</span>
<span class="token comment">-- 创建分区表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_RANGE_SAL
<span class="token punctuation">(</span>
EMPNO    NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
ENAME    VARCHAR2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
JOB      VARCHAR2<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
MGR      NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
HIREDATE <span class="token keyword">DATE</span><span class="token punctuation">,</span>
SAL      NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        
COMM     NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
DEPTNO   NUMBER<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE <span class="token punctuation">(</span>SAL<span class="token punctuation">)</span>
<span class="token punctuation">(</span>
<span class="token keyword">PARTITION</span> RANGE_SAL_1500 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PARTITION</span> RANGE_SAL_2500 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PARTITION</span> RANGE_SAL_MAX <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>MAXVALUE<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 向分区表中添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> EMP_RANGE_SAL <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP<span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token comment">-- 从分区表中查询数据</span>
<span class="token comment">-- 查询整张表的数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE_SAL<span class="token punctuation">;</span>
<span class="token comment">-- 查询指定分区的数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>分区的名称<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE_SAL <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>RANGE_SAL_1500<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE_SAL <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>RANGE_SAL_2500<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE_SAL <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>RANGE_SAL_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：当分区字段作为查询条件时，只要查询的范围条件没有跨越分区就会进入到对应的分区中来，当跨越了两个或者多个分区，就会从整张表查</p><h2 id="列表分区" tabindex="-1"><a class="header-anchor" href="#列表分区" aria-hidden="true">#</a> 列表分区</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_LIST
<span class="token punctuation">(</span>
 字段  字段对应的数据类型
<span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> LIST <span class="token punctuation">(</span>判断数据放到哪个分区的字段<span class="token punctuation">)</span>
<span class="token punctuation">(</span>
 <span class="token keyword">PARTITION</span> 分区名称<span class="token number">1</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>具体的值<span class="token punctuation">)</span>
<span class="token punctuation">,</span><span class="token keyword">PARTITION</span> 分区名称<span class="token number">2</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>具体的值<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">/*
创建一个列表分区，按照工作进行分区
ANALYST CLERK 放在同一个分区
MANAGER PRESIDENT 放在同一个分区
SALESMAN 放在一个分区;
*/</span>
<span class="token comment">-- 创建分区表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_LIST_JOB
<span class="token punctuation">(</span>
EMPNO    NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
ENAME    VARCHAR2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
JOB      VARCHAR2<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
MGR      NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
HIREDATE <span class="token keyword">DATE</span><span class="token punctuation">,</span>
SAL      NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        
COMM     NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
DEPTNO   NUMBER<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> LIST<span class="token punctuation">(</span>JOB<span class="token punctuation">)</span>
<span class="token punctuation">(</span>
<span class="token keyword">PARTITION</span> LIST_JOB_ANALYST_CLERK <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;ANALYST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PARTITION</span> LIST_JOB_MANAGER_PRESIDENT <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PRESIDENT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PARTITION</span> LIST_JOB_SALESMAN <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">-- 可以定义一个空值对应的分区</span>
<span class="token keyword">PARTITION</span> LIST_JOB_NULL <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> EMP_LIST_JOB <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP<span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_LIST_JOB<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_LIST_JOB <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>LIST_JOB_ANALYST_CLERK<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_LIST_JOB <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>LIST_JOB_MANAGER_PRESIDENT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_LIST_JOB <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>LIST_JOB_SALESMAN<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合分区" tabindex="-1"><a class="header-anchor" href="#组合分区" aria-hidden="true">#</a> 组合分区</h2><p>组合分区就是分区之中套分区，一个分区里边还套着一个分区</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名
<span class="token punctuation">(</span>
 字段名称 字段数据类型
<span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE <span class="token punctuation">(</span>主分区字段<span class="token punctuation">)</span>  <span class="token comment">-- 主分区</span>
SUBPARTITION <span class="token keyword">BY</span> LIST <span class="token punctuation">(</span>子分区字段<span class="token punctuation">)</span>  <span class="token comment">-- 子分区</span>
<span class="token punctuation">(</span>
 <span class="token keyword">PARTITION</span> 主分区名<span class="token number">1</span> <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>主分区的分区上限<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>  <span class="token comment">-- 对子分区的定义</span>
   SUBPARTITION 子分区名<span class="token number">1</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>子分区的判断值<span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION 子分区名<span class="token number">2</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>子分区的判断值<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PARTITION</span> 主分区名<span class="token number">2</span> <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>主分区的分区上限<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>
   SUBPARTITION 子分区名<span class="token number">1</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>子分区的判断值<span class="token punctuation">)</span> <span class="token punctuation">,</span>
   SUBPARTITION 子分区名<span class="token number">2</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>子分区的判断值<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 创建分区表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> EMP_RANGE_LIST
<span class="token punctuation">(</span>
  EMPNO    NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>     <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
  ENAME    VARCHAR2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  JOB      VARCHAR2<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  MGR      NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  HIREDATE <span class="token keyword">DATE</span><span class="token punctuation">,</span>
  SAL      NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  COMM     NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  DEPTNO   NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE <span class="token punctuation">(</span>HIREDATE<span class="token punctuation">)</span>  <span class="token comment">-- 主分区</span>
SUBPARTITION <span class="token keyword">BY</span> LIST <span class="token punctuation">(</span>DEPTNO<span class="token punctuation">)</span>  <span class="token comment">-- 子分区</span>
<span class="token punctuation">(</span>
 <span class="token keyword">PARTITION</span> P2 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;1982-01-01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>
   SUBPARTITION P2A <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P2B <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P2C <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P2D <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PARTITION</span> P3 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;1983-01-01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>
   SUBPARTITION P3A <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P3B <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P3C <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P3D <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PARTITION</span> P4 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>MAXVALUE<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>
   SUBPARTITION P4A <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
   SUBPARTITION P4B <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P4C <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SUBPARTITION P4D <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 向表中添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> EMP_RANGE_LIST <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP<span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token comment">-- 查主分区</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE_LIST <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>P2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 查子分区</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE_LIST SUBPARTITION <span class="token punctuation">(</span>P2A<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哈希分区" tabindex="-1"><a class="header-anchor" href="#哈希分区" aria-hidden="true">#</a> 哈希分区</h2><p>哈希分区，又称散列分区，对要插入到表中的做哈希值的计算，使得每个分区的数据量均匀一致，大概相等</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 示例</span>
<span class="token comment">-- 创建分区表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> HASH_EMP
<span class="token punctuation">(</span>
  EMPNO    NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  ENAME    VARCHAR2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  JOB      VARCHAR2<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  MGR      NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  HIREDATE <span class="token keyword">DATE</span><span class="token punctuation">,</span>
  SAL      NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  COMM     NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  DEPTNO   NUMBER<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> <span class="token keyword">HASH</span> <span class="token punctuation">(</span>SAL<span class="token punctuation">)</span>
<span class="token punctuation">(</span>
 <span class="token keyword">PARTITION</span> PART_01<span class="token punctuation">,</span>
 <span class="token keyword">PARTITION</span> PART_02
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 向表中插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> HASH_EMP <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP<span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> HASH_EMP <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>PART_01<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> HASH_EMP <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>PART_02<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分区表结构的维护" tabindex="-1"><a class="header-anchor" href="#分区表结构的维护" aria-hidden="true">#</a> 分区表结构的维护</h2><h3 id="添加分区" tabindex="-1"><a class="header-anchor" href="#添加分区" aria-hidden="true">#</a> 添加分区</h3><p>要求添加的分区界限应当高于最后一个分区界限</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 向范围分区、列表分区表中添加分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span> <span class="token keyword">PARTITION</span> 分区名 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>上限值<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">-- 添加范围分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span> <span class="token keyword">PARTITION</span> 分区名 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>字段中具体的值<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">-- 添加列表分区</span>

<span class="token comment">-- 向 EMP_RANGE 分区表中添加一个 RANGE_1983 分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> EMP_RANGE <span class="token keyword">ADD</span> <span class="token keyword">PARTITION</span> RANGE_1983 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;19840101&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYYMMDD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP_RANGE <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>RANGE_1983<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">-- 可以用于验证分区是否添加成功</span>

<span class="token comment">-- 向组合分区中添加分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">MODIFY</span> <span class="token keyword">PARTITION</span> 主分区名 <span class="token keyword">ADD</span> SUBPARTITION 子分区名 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>值<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">-- 子分区为列表分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">MODIFY</span> <span class="token keyword">PARTITION</span> 主分区名 <span class="token keyword">ADD</span> SUBPARTITION 子分区名 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>值<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">-- 子分区为范围分区</span>

<span class="token comment">-- 向 EMP_RANGE_LIST 表的 P2 主分区中添加一个 P2E 子分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> EMP_RANGE_LIST <span class="token keyword">MODIFY</span> <span class="token keyword">PARTITION</span> P2 <span class="token keyword">ADD</span> SUBPARTITION P2E <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除分区" tabindex="-1"><a class="header-anchor" href="#删除分区" aria-hidden="true">#</a> 删除分区</h3><p>删除分区表，其中的数据也会被删除</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">DROP</span> <span class="token keyword">PARTITION</span> 分区名称<span class="token punctuation">;</span>      <span class="token comment">-- 删除分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">DROP</span> SUBPARTITION 子分区名称<span class="token punctuation">;</span>  <span class="token comment">-- 删除子分区</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> EMP_RANGE <span class="token keyword">DROP</span> <span class="token keyword">PARTITION</span> RANGE_MAX<span class="token punctuation">;</span>    <span class="token comment">-- 删除分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> EMP_RANGE_LIST <span class="token keyword">DROP</span> SUBPARTITION P2E<span class="token punctuation">;</span>  <span class="token comment">-- 删除子分区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：如果删除的分区是表中唯一的分区，那么此分区将不能被删除，要想删除此分区，必须删除表。</p><h3 id="截断分区" tabindex="-1"><a class="header-anchor" href="#截断分区" aria-hidden="true">#</a> 截断分区</h3><p>截断某个分区是指删除某个分区中的数据，并不会删除分区，也不会删除其它分区中的数据</p><p>当表中即使只有一个分区时，也可以截断该分区</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">TRUNCATE</span> <span class="token keyword">PARTITION</span> 分区名<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> EMP_RANGE <span class="token keyword">TRUNCATE</span> <span class="token keyword">PARTITION</span> RANGE_1981<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">TRUNCATE</span> SUBPARTITION 子分区名<span class="token punctuation">;</span>  <span class="token comment">-- 截断子分区</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> EMP_RANGE_LIST <span class="token keyword">TRUNCATE</span> SUBPARTITION P4B<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分区表改造" tabindex="-1"><a class="header-anchor" href="#分区表改造" aria-hidden="true">#</a> 分区表改造</h3><p><em><strong>1&gt;</strong></em> 先创建一个分区表 <code>EMP_RANGE_SAL</code></p><p><em><strong>2&gt;</strong></em> 将原来那张普通表 <code>EMP</code> 的数据同步到新创建的分区表 <code>EMP_RANGE_SAL</code> 里</p><p><em><strong>3&gt;</strong></em> 将原来的那张 <code>EMP</code> 表重命名为 <code>EMP_OLD</code></p><p><em><strong>4&gt;</strong></em> 将分区表 <code>EMP_RANGE_SAL</code> 重名为 <code>EMP</code></p>`,45),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","14_分区表.html.vue"]]);export{d as default};
