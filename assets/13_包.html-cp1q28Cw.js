import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p="/mynotes/assets/包的编辑界面-8y8NViWH.png",t={},o=e(`<h1 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h1><h2 id="包-1" tabindex="-1"><a class="header-anchor" href="#包-1" aria-hidden="true">#</a> 包</h2><h3 id="创建包的语法结构" tabindex="-1"><a class="header-anchor" href="#创建包的语法结构" aria-hidden="true">#</a> 创建包的语法结构</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> PACKAGE 包的名称 <span class="token operator">IS</span>  <span class="token comment">-- 包头</span>
<span class="token comment">-- 声明包里有多少个存储过程</span>
<span class="token comment">-- 存储的是声明存储过程的部分</span>
<span class="token keyword">END</span> 包的名称<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> PACKAGE BODY 包的名称 <span class="token operator">IS</span>  <span class="token comment">-- 包体</span>
<span class="token comment">-- 声明包里有多少个存储过程</span>
<span class="token comment">-- 存储的是声明存储过程的部分和存储过程的执行逻辑</span>
<span class="token keyword">END</span> 包的名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：一定要分开编译包头和包体</p><h3 id="包的使用流程" tabindex="-1"><a class="header-anchor" href="#包的使用流程" aria-hidden="true">#</a> 包的使用流程</h3><p><em><strong>1&gt;</strong></em> 创建包</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建包头</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> PACKAGE PCK_WRITE_LOG <span class="token operator">IS</span>

<span class="token keyword">END</span> PCK_WRITE_LOG<span class="token punctuation">;</span>

<span class="token comment">-- 创建包体</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> PACKAGE BODY PCK_WRITE_LOG <span class="token operator">IS</span>

<span class="token keyword">END</span> PCK_WRITE_LOG<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>2&gt;</strong></em> 向包头中存储声明存储过程的部分：选中包名 -&gt; 右键 -&gt; Edit Spec &amp; Body</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> PACKAGE PCK_WRITE_LOG <span class="token operator">IS</span>
<span class="token comment">-- 定义写日志的存储过程</span>
<span class="token keyword">PROCEDURE</span> SP_WRITE_LOG<span class="token punctuation">(</span>
                       P_LOG_ID         NUMBER
                      <span class="token punctuation">,</span>P_PROCEDURE_NAME VARCHAR2
                      <span class="token punctuation">,</span>P_ACTION         VARCHAR2
                      <span class="token punctuation">,</span>P_ACTION_DATE    <span class="token keyword">DATE</span>
                      <span class="token punctuation">,</span>P_PARAMETER1     VARCHAR2
                      <span class="token punctuation">,</span>P_PARAMETER2     VARCHAR2
                      <span class="token punctuation">,</span>P_STATUS         VARCHAR2
                      <span class="token punctuation">,</span>P_ERR_MSG        VARCHAR2
                      <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 定义数据加工的存储过程</span>
<span class="token keyword">PROCEDURE</span> SP_DEPT_DETAIL<span class="token punctuation">(</span>
                         P_DEPTNO <span class="token operator">IN</span> NUMBER
                        <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> PCK_WRITE_LOG<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>3&gt;</strong></em> 向包体中存储声明存储过程的部分和存储过程的执行逻辑</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> PACKAGE BODY PCK_WRITE_LOG <span class="token operator">IS</span>
<span class="token comment">-- 定义写日志的存储过程</span>
<span class="token keyword">PROCEDURE</span> SP_WRITE_LOG<span class="token punctuation">(</span>
                       P_LOG_ID         NUMBER
                      <span class="token punctuation">,</span>P_PROCEDURE_NAME VARCHAR2
                      <span class="token punctuation">,</span>P_ACTION         VARCHAR2
                      <span class="token punctuation">,</span>P_ACTION_DATE    <span class="token keyword">DATE</span>
                      <span class="token punctuation">,</span>P_PARAMETER1     VARCHAR2
                      <span class="token punctuation">,</span>P_PARAMETER2     VARCHAR2
                      <span class="token punctuation">,</span>P_STATUS         VARCHAR2
                      <span class="token punctuation">,</span>P_ERR_MSG        VARCHAR2
                      <span class="token punctuation">)</span>
<span class="token operator">IS</span>
  PRAGMA AUTONOMOUS_TRANSACTION<span class="token punctuation">;</span>  <span class="token comment">-- 自治事务的命令</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 记得先把日志表 LOG_TABLE 创建好</span>
  <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> LOG_TABLE <span class="token keyword">VALUES</span><span class="token punctuation">(</span>
                               P_LOG_ID
                              <span class="token punctuation">,</span>P_PROCEDURE_NAME
                              <span class="token punctuation">,</span>P_ACTION
                              <span class="token punctuation">,</span>P_ACTION_DATE
                              <span class="token punctuation">,</span>P_PARAMETER1
                              <span class="token punctuation">,</span>P_PARAMETER2
                              <span class="token punctuation">,</span>P_STATUS
                              <span class="token punctuation">,</span>P_ERR_MSG
                              <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
    <span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> SP_WRITE_LOG<span class="token punctuation">;</span>

<span class="token comment">-- 定义数据加工的存储过程</span>
<span class="token keyword">PROCEDURE</span> SP_DEPT_DETAIL<span class="token punctuation">(</span>
                         P_DEPTNO <span class="token operator">IN</span> NUMBER
                        <span class="token punctuation">)</span>
<span class="token operator">IS</span>

<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 数据加工开始时，调用存储日志的存储过程，记录一条开始信息以及时间点</span>
  SP_WRITE_LOG<span class="token punctuation">(</span>
               P_LOG_ID <span class="token operator">=</span><span class="token operator">&gt;</span> LOG_SEQUENCE<span class="token punctuation">.</span>NEXTVAL
              <span class="token punctuation">,</span>P_PROCEDURE_NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;SP_DEPT_DETAIL&#39;</span>
              <span class="token punctuation">,</span>P_ACTION <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;开始加工数据&#39;</span>
              <span class="token punctuation">,</span>P_ACTION_DATE <span class="token operator">=</span><span class="token operator">&gt;</span> SYSDATE
              <span class="token punctuation">,</span>P_PARAMETER1 <span class="token operator">=</span><span class="token operator">&gt;</span> P_DEPTNO
              <span class="token punctuation">,</span>P_PARAMETER2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span>
              <span class="token punctuation">,</span>P_STATUS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;正常&#39;</span>
              <span class="token punctuation">,</span>P_ERR_MSG <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">-- 进行数据加工</span>
  <span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> DEPT_DETAIL T
  <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> P_DEPTNO<span class="token punctuation">;</span>

  <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> DEPT_DETAIL
  <span class="token keyword">SELECT</span> T2<span class="token punctuation">.</span>DEPTNO
        <span class="token punctuation">,</span>T2<span class="token punctuation">.</span>DNAME
        <span class="token punctuation">,</span><span class="token function">COUNT</span><span class="token punctuation">(</span>T1<span class="token punctuation">.</span>EMPNO<span class="token punctuation">)</span>
        <span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>T1<span class="token punctuation">.</span>SAL <span class="token operator">+</span> NVL<span class="token punctuation">(</span>T1<span class="token punctuation">.</span>COMM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">FROM</span> EMP T1
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> DEPT T2
          <span class="token keyword">ON</span> T1<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> T2<span class="token punctuation">.</span>DEPTNO
  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> T2<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">,</span> T2<span class="token punctuation">.</span>DNAME
  <span class="token keyword">HAVING</span> T2<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> P_DEPTNO<span class="token punctuation">;</span>

  <span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

  <span class="token comment">-- 数据加工结束时，调用存储日志的存储过程，记录一条结束信息以及时间点</span>
  SP_WRITE_LOG<span class="token punctuation">(</span>
               P_LOG_ID <span class="token operator">=</span><span class="token operator">&gt;</span> LOG_SEQUENCE<span class="token punctuation">.</span>NEXTVAL
              <span class="token punctuation">,</span>P_PROCEDURE_NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;SP_DEPT_DETAIL&#39;</span>
              <span class="token punctuation">,</span>P_ACTION <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;完成加工数据&#39;</span>
              <span class="token punctuation">,</span>P_ACTION_DATE <span class="token operator">=</span><span class="token operator">&gt;</span> SYSDATE
              <span class="token punctuation">,</span>P_PARAMETER1 <span class="token operator">=</span><span class="token operator">&gt;</span> P_DEPTNO
              <span class="token punctuation">,</span>P_PARAMETER2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span>
              <span class="token punctuation">,</span>P_STATUS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;正常&#39;</span>
              <span class="token punctuation">,</span>P_ERR_MSG <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>

  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
    <span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
    <span class="token comment">-- 发生异常时，调用存储日志的存储过程，记录相关的异常信息</span>
    SP_WRITE_LOG<span class="token punctuation">(</span>
                 P_LOG_ID <span class="token operator">=</span><span class="token operator">&gt;</span> LOG_SEQUENCE<span class="token punctuation">.</span>NEXTVAL
                <span class="token punctuation">,</span>P_PROCEDURE_NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;SP_DEPT_DETAIL&#39;</span>
                <span class="token punctuation">,</span>P_ACTION <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;走到了异常处理&#39;</span>
                <span class="token punctuation">,</span>P_ACTION_DATE <span class="token operator">=</span><span class="token operator">&gt;</span> SYSDATE
                <span class="token punctuation">,</span>P_PARAMETER1 <span class="token operator">=</span><span class="token operator">&gt;</span> P_DEPTNO
                <span class="token punctuation">,</span>P_PARAMETER2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span>
                <span class="token punctuation">,</span>P_STATUS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;异常&#39;</span>
                <span class="token punctuation">,</span>P_ERR_MSG <span class="token operator">=</span><span class="token operator">&gt;</span>  SUBSTRB<span class="token punctuation">(</span>SQLERRM<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>  <span class="token comment">-- 按字节长度截取异常信息</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> SP_DEPT_DETAIL<span class="token punctuation">;</span>
<span class="token keyword">END</span> PCK_WRITE_LOG<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>4&gt;</strong></em> 从包中调用存储过程</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span>
  PCK_WRITE_LOG<span class="token punctuation">.</span>SP_DEPT_DETAIL<span class="token punctuation">(</span>
                               P_DEPTNO <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">10</span>
                              <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用包的注意点" tabindex="-1"><a class="header-anchor" href="#使用包的注意点" aria-hidden="true">#</a> 使用包的注意点</h3><ul><li><p><strong>包的编辑界面</strong></p><figure><img src="`+p+'" alt="包的编辑界面" tabindex="0" loading="lazy"><figcaption>包的编辑界面</figcaption></figure></li><li><p><strong>包的保存</strong></p><p>在包的编辑界面，使用 <code>Ctrl+S</code> 保存包</p></li></ul>',16),l=[o];function i(c,r){return s(),a("div",null,l)}const k=n(t,[["render",i],["__file","13_包.html.vue"]]);export{k as default};
