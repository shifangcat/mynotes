import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const t={},p=e(`<h1 id="代码块-变量" tabindex="-1"><a class="header-anchor" href="#代码块-变量" aria-hidden="true">#</a> 代码块_变量</h1><p>ORACLE PL/SQL：是一门编程语言，可以创建存储过程，函数以及包、代码块</p><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">DECLARE</span>
  <span class="token comment">-- 声明的地方（声明变量、常量、游标等等），可以不写</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 要执行的 SQL 语句，必须写</span>
  EXCEPTION
    <span class="token comment">-- 处理异常的逻辑，可以不写</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token keyword">DECLARE</span>
  V_STR  VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  V_DATE <span class="token keyword">DATE</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 如果赋值的变量是字符串类型，那么在弹出的小窗口上传值的时候，需要使用单引号</span>
  <span class="token comment">-- :=  给变量赋值的符号，可以直接赋值，不用使用 &amp;</span>
  <span class="token comment">-- &amp; 符号可以弹出窗口，其后面的为弹出窗口上的提示信息，可随便写</span>
  V_STR :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_STR<span class="token punctuation">;</span>
  V_STR :<span class="token operator">=</span> <span class="token string">&#39;STRING&#39;</span><span class="token punctuation">;</span>  <span class="token comment">-- 不使用 &amp;，直接给变量赋值</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_STR<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">-- 将 V_STR 打印输出</span>
  
  <span class="token comment">-- 如果赋值的变量是 DATE 类型，那么在弹出的小窗口上传值的时候，要用 TO_DATE 函数转换数据</span>
  <span class="token comment">-- TO_DATE(&#39;20220801&#39;, &#39;YYYYMMDD&#39;)</span>
  V_DATE :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_DATE<span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_DATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>V_DATE<span class="token punctuation">,</span><span class="token string">&#39;YYYYMMDD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select-into" tabindex="-1"><a class="header-anchor" href="#select-into" aria-hidden="true">#</a> SELECT ... INTO ...</h2><p>使用 <code>SELECT ... INTO ...</code> 时需要注意的问题：</p><p><em><strong>1&gt;</strong></em> 查询的结果必须是一行数据，不能是 <code>0</code> 行或者多行</p><p><em><strong>2&gt;</strong></em> <code>INTO</code> 后面接的是变量，用处是将 <code>SELECT</code> 后查询出来的字段/列的数据分别依次放到变量中</p><p><em><strong>3&gt;</strong></em> <code>INTO</code> 后面接的变量的顺序跟个数必须和 <code>SELECT</code> 后接的查询的字段的顺序和个数保持一致</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span> T<span class="token punctuation">.</span>SAL<span class="token punctuation">,</span> T<span class="token punctuation">.</span>HIREDATE
<span class="token keyword">INTO</span> V_ENAME<span class="token punctuation">,</span> V_SAL<span class="token punctuation">,</span> V_HD  <span class="token comment">-- INTO 后面的变量只能接收一个值</span>
<span class="token keyword">FROM</span> EMP T 
<span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>EMPNO <span class="token operator">=</span> V_EMPNO<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="定义变量时注意的事" tabindex="-1"><a class="header-anchor" href="#定义变量时注意的事" aria-hidden="true">#</a> 定义变量时注意的事</h3><p><em><strong>1&gt;</strong></em> 变量命名规则，一般都是以 <code>V_</code> 开头</p><p><em><strong>2&gt;</strong></em> 声明/定义变量的时候，如果定义的变量是字符型的，那么必须要给长度；如果是数字型的，可以给长度，也可以不给；如果是日期型的，就不给长度</p><p><em><strong>3&gt;</strong></em> 定义了变量的长度之后，给这个变量赋值时不能超过该长度</p><p><em><strong>4&gt;</strong></em> 定义了什么类型的变量，赋值的时候就要赋什么类型的值</p><p><em><strong>5&gt;</strong></em> 定义了一个变量，结尾需要分号表示结束</p><h3 id="变量声明类型" tabindex="-1"><a class="header-anchor" href="#变量声明类型" aria-hidden="true">#</a> 变量声明类型</h3><h4 id="使用-type-声明变量类型" tabindex="-1"><a class="header-anchor" href="#使用-type-声明变量类型" aria-hidden="true">#</a> 使用 %TYPE 声明变量类型</h4><p><code>%TYPE</code>：引用数据库中的某张表的某列的数据类型或某个变量的数据类型</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>
  V_ENAME EMP<span class="token punctuation">.</span>ENAME<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">;</span>  <span class="token comment">-- V_ENAME 使用 EMP 表中 ENAME 的数据类型</span>
<span class="token keyword">BEGIN</span>
  V_ENAME :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_ENAME<span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_ENAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-rowtype-声明变量类型" tabindex="-1"><a class="header-anchor" href="#使用-rowtype-声明变量类型" aria-hidden="true">#</a> 使用 %ROWTYPE 声明变量类型</h4><p><code>%ROWTYPE</code>：引用数据库中的一行（所有字段）作为数据类型</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>
  V_EMP EMP<span class="token operator">%</span>ROWTYPE<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_EMP<span class="token punctuation">.</span>ENAME :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_ENAME<span class="token punctuation">;</span>
  DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>V_EMP<span class="token punctuation">.</span>ENAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","01_代码块_变量.html.vue"]]);export{u as default};
