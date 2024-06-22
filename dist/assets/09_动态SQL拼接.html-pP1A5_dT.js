import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const o={},p=e(`<h1 id="动态-sql-拼接" tabindex="-1"><a class="header-anchor" href="#动态-sql-拼接" aria-hidden="true">#</a> 动态 SQL 拼接</h1><h2 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h2><p>Oracle 中的单引号是一个特殊字符，在字符串中需要用 2 个单引号来表达一个单引号</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token string">&#39;&#39;&#39;&#39;</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>  <span class="token comment">-- 输出 &#39;</span>
<span class="token comment">-- CHR(39) 也可以表示一个单引号</span>
<span class="token keyword">SELECT</span> CHR<span class="token punctuation">(</span><span class="token number">39</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>  <span class="token comment">-- 输出 &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态-sql" tabindex="-1"><a class="header-anchor" href="#动态-sql" aria-hidden="true">#</a> 动态 SQL</h2><p>动态 SQL 即动态地执行某些语句，可以是正常的查询语句，也可以是 DDL 命令，但是 DDL 命令一定要动态地执行</p><h3 id="oracle-sql-语句分类" tabindex="-1"><a class="header-anchor" href="#oracle-sql-语句分类" aria-hidden="true">#</a> Oracle SQL 语句分类</h3><ul><li><strong>数据定义语言（DDL）</strong>，包括 <code>CREATE</code>（创建）命令、<code>ALTER</code>（修改）命令、<code>DROP</code>（删除）命令等</li><li><strong>数据操纵语言（DML）</strong>，包括 <code>INSERT</code>（插入）命令、<code>UPDATE</code>（更新）命令、<code>DELETE</code>（删除）命令等</li><li><strong>数据查询语言（DQL）</strong>，包括基本查询语句、<code>Order By</code> 子句、<code>Group By</code> 子句等</li><li><strong>事务控制语言（TCL）</strong>，包括 <code>COMMIT</code>（提交）命令、<code>ROLLBACK</code>（回滚）命令</li><li><strong>数据控制语言（DCL）</strong>，<code>GRANT</code>（授权）命令、<code>REVOKE</code>（撤销）命令</li></ul><h3 id="动态-sql-的执行" tabindex="-1"><a class="header-anchor" href="#动态-sql-的执行" aria-hidden="true">#</a> 动态 SQL 的执行</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">EXECUTE</span> IMMEDIATE <span class="token keyword">SQL</span>语句<span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 传入一个岗位名称和一个员工的名字，用字符串拼接的 SQL 将这个员工所在部门编号和工资打印在输出窗口上</span>
<span class="token keyword">DECLARE</span>
  V_SQL    VARCHAR2<span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  V_JOB    VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  V_ENAME  VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  V_DEPTNO NUMBER<span class="token punctuation">;</span>
  V_SAL    NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_JOB :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_JOB<span class="token punctuation">;</span>
  V_ENAME :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_ENAME<span class="token punctuation">;</span>
  
  V_SQL :<span class="token operator">=</span> <span class="token string">&#39;SELECT T.DEPTNO, T.SAL
           FROM EMP T
           WHERE T.JOB = &#39;&#39;&#39;</span> <span class="token operator">||</span> V_JOB <span class="token operator">||</span> <span class="token string">&#39;&#39;&#39;&#39;</span>
           <span class="token operator">||</span> <span class="token string">&#39; AND T.ENAME = &#39;&#39;&#39;</span> <span class="token operator">||</span> V_ENAME <span class="token operator">||</span> <span class="token string">&#39;&#39;&#39;&#39;</span><span class="token punctuation">;</span>
  
  <span class="token keyword">EXECUTE</span> IMMEDIATE V_SQL  <span class="token comment">-- 执行动态 SQL 语句</span>
  <span class="token keyword">INTO</span> V_DEPTNO<span class="token punctuation">,</span> V_SAL<span class="token punctuation">;</span>  <span class="token comment">-- 将动态 SQL 语句查询到的数据赋值给变量</span>
  
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_DEPTNO <span class="token operator">||</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">||</span> V_SAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;查无此人&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 执行 DDL 语句</span>
<span class="token keyword">DECLARE</span>
  V_SQL VARCHAR2<span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
   V_SQL :<span class="token operator">=</span> <span class="token string">&#39;CREATE TABLE EMP_0823 AS SELECT * FROM EMP&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">EXECUTE</span> IMMEDIATE V_SQL<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function t(l,i){return s(),a("div",null,c)}const u=n(o,[["render",t],["__file","09_动态SQL拼接.html.vue"]]);export{u as default};
