import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const e={},t=p(`<h1 id="日志的使用流程" tabindex="-1"><a class="header-anchor" href="#日志的使用流程" aria-hidden="true">#</a> 日志的使用流程</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 1. 创建日志表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> LOG_TABLE
<span class="token punctuation">(</span>
 LOG_ID         NUMBER         <span class="token comment">-- 日志 ID</span>
<span class="token punctuation">,</span>PROCEDURE_NAME VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>   <span class="token comment">-- 记录的程序名称</span>
<span class="token punctuation">,</span><span class="token keyword">ACTION</span>         VARCHAR2<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment">-- 记录的动作</span>
<span class="token punctuation">,</span>ACTION_DATE    <span class="token keyword">DATE</span>           <span class="token comment">-- 程序执行到这里的时间点</span>
<span class="token punctuation">,</span>PARAMETER1     VARCHAR2<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment">-- 参数 1</span>
<span class="token punctuation">,</span>PARAMETER2     VARCHAR2<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment">-- 参数 2</span>
<span class="token punctuation">,</span><span class="token keyword">STATUS</span>         VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>   <span class="token comment">-- 执行状态</span>
<span class="token punctuation">,</span>ERR_MSG        VARCHAR2<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>  <span class="token comment">-- 报错信息</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 2. 创建生成日志 ID 的序列</span>
<span class="token keyword">CREATE</span> SEQUENCE LOG_SEQUENCE
  <span class="token keyword">START</span> <span class="token keyword">WITH</span> <span class="token number">1</span>
  INCREMENT <span class="token keyword">BY</span> <span class="token number">1</span>
  MAXVALUE <span class="token number">100</span>
  MINVALUE <span class="token number">1</span>
  <span class="token keyword">CYCLE</span>
  CACHE <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">-- 3. 创建存储日志的存储过程</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">PROCEDURE</span> SP_WRITE_LOG<span class="token punctuation">(</span>
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

<span class="token comment">-- 4. 按需创建数据加工的目标表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> DEPT_DETAIL
<span class="token punctuation">(</span>
 DEPTNO       NUMBER
<span class="token punctuation">,</span>DNAME        VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">,</span>COUNT_EMPNO  NUMBER
<span class="token punctuation">,</span>SUM_SAL_COMM NUMBER
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 5. 创建数据加工的存储过程</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">PROCEDURE</span> SP_DEPT_DETAIL<span class="token punctuation">(</span>
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

<span class="token comment">-- 调用数据加工的存储过程</span>
<span class="token keyword">DECLARE</span>

<span class="token keyword">BEGIN</span>
  SP_DEPT_DETAIL<span class="token punctuation">(</span>
                 P_DEPTNO <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">20</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 验证数据</span>
<span class="token comment">-- TRUNCATE TABLE DEPT_DETAIL;</span>
<span class="token comment">-- TRUNCATE TABLE LOG_TABLE;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> DEPT_DETAIL<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> LOG_TABLE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","日志的使用流程.html.vue"]]);export{k as default};
