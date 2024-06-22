import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},t=e(`<h1 id="全量同步的使用流程" tabindex="-1"><a class="header-anchor" href="#全量同步的使用流程" aria-hidden="true">#</a> 全量同步的使用流程</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建源表</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function i(l,o){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","全量同步的使用流程.html.vue"]]);export{k as default};
