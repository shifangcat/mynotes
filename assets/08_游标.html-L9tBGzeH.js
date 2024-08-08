import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,b as n,d as s,e,f as l}from"./app-VKLC1A-x.js";const i={},d=n("h1",{id:"游标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#游标","aria-hidden":"true"},"#"),s(" 游标")],-1),r=n("h2",{id:"游标-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#游标-1","aria-hidden":"true"},"#"),s(" 游标")],-1),u=n("p",null,"游标是一种用来存储多条查询数据的数据结构（结果集）",-1),k=n("p",null,"它有一个“指针”，从上往下移动（“fetch”），从而能够“遍历每条记录”",-1),v={href:"https://blog.csdn.net/qq_34745941/article/details/81294166",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_44333590/article/details/114264859",target:"_blank",rel:"noopener noreferrer"},b=l(`<h3 id="游标的类型" tabindex="-1"><a class="header-anchor" href="#游标的类型" aria-hidden="true">#</a> 游标的类型</h3><p><strong>隐式游标</strong>：无需手动创建、打开和关闭，名称默认为 <code>sql</code>。如：<code>SELECT ... INTO ...;</code>、DML 语句</p><p><strong>显式游标</strong>：需要手动创建/声明，返回结果可以是 0 行、一行或者多行</p><h3 id="游标的声明和使用" tabindex="-1"><a class="header-anchor" href="#游标的声明和使用" aria-hidden="true">#</a> 游标的声明和使用</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token keyword">DECLARE</span>
  <span class="token keyword">CURSOR</span> 游标名<span class="token punctuation">(</span>参数<span class="token number">1</span> 数据类型<span class="token punctuation">,</span> 参数<span class="token number">2</span> 数据类型<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
  <span class="token operator">IS</span>
  <span class="token keyword">SELECT</span> 语句<span class="token punctuation">;</span>  <span class="token comment">-- 游标所指向的那个查询的结果集</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 打开游标，逻辑体(游标的使用/执行放在这一块)</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 打印出 EMP 表中每个员工的名字、岗位、入职日期</span>
<span class="token keyword">DECLARE</span>
  <span class="token keyword">CURSOR</span> C_EMP
  <span class="token operator">IS</span>
  <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span> T<span class="token punctuation">.</span>JOB<span class="token punctuation">,</span> T<span class="token punctuation">.</span>HIREDATE
  <span class="token keyword">FROM</span> EMP T<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">FOR</span> I <span class="token operator">IN</span> C_EMP <span class="token keyword">LOOP</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>I<span class="token punctuation">.</span>ENAME <span class="token operator">||</span> <span class="token string">&#39; &#39;</span> <span class="token operator">||</span> I<span class="token punctuation">.</span>JOB <span class="token operator">||</span> <span class="token string">&#39; &#39;</span> <span class="token operator">||</span> I<span class="token punctuation">.</span>HIREDATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参数的游标" tabindex="-1"><a class="header-anchor" href="#带参数的游标" aria-hidden="true">#</a> 带参数的游标</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 示例</span>
<span class="token comment">-- 传入一个工作，将这个工作的所有员工的名字都打印出来</span>
<span class="token keyword">DECLARE</span>
  <span class="token keyword">CURSOR</span> C_EMP<span class="token punctuation">(</span>P_JOB VARCHAR2<span class="token punctuation">)</span>
  <span class="token operator">IS</span>
  <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>ENAME
  <span class="token keyword">FROM</span> EMP T
  <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>JOB <span class="token operator">=</span> P_JOB<span class="token punctuation">;</span>
  
  V_JOB VARCHAR2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_JOB :<span class="token operator">=</span> <span class="token operator">&amp;</span>INPUT_JOB<span class="token punctuation">;</span>
  
  <span class="token keyword">FOR</span> I <span class="token operator">IN</span> C_EMP<span class="token punctuation">(</span>V_JOB<span class="token punctuation">)</span> <span class="token keyword">LOOP</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span>I<span class="token punctuation">.</span>ENAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：<em><strong>1&gt;</strong></em> 参数的数据类型不要带长度，只需要定义类型即可</p><p><em><strong>2&gt;</strong></em> 定义了参数，就必须要传参数进去</p><p><em><strong>3&gt;</strong></em> 定义的参数是什么数据类型，传参的时候就必须传该数据类型的值</p><h3 id="游标的属性" tabindex="-1"><a class="header-anchor" href="#游标的属性" aria-hidden="true">#</a> 游标的属性</h3><table><thead><tr><th><strong>属性</strong></th><th><strong>返回值</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>游标名%isopen</td><td>布尔型</td><td>判断游标是否“开启”</td></tr><tr><td>游标名%found</td><td>布尔型</td><td>判断游标是否“获取”到值</td></tr><tr><td>游标名%notfound</td><td>布尔型</td><td>判断游标是否“没有获取”到值（常用于“退出循环”）</td></tr><tr><td>游标名%rowcount</td><td>整型</td><td>“当前”成功执行的数据行数（非“总记录数”）</td></tr></tbody></table><h2 id="游标的不同写法" tabindex="-1"><a class="header-anchor" href="#游标的不同写法" aria-hidden="true">#</a> 游标的不同写法</h2><h3 id="游标的简便写法" tabindex="-1"><a class="header-anchor" href="#游标的简便写法" aria-hidden="true">#</a> 游标的简便写法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>
  V_JOB VARCHAR2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_JOB :<span class="token operator">=</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">FOR</span> I <span class="token operator">IN</span> <span class="token punctuation">(</span>
            <span class="token keyword">SELECT</span> T<span class="token punctuation">.</span>ENAME
            <span class="token keyword">FROM</span> EMP T
            <span class="token keyword">WHERE</span> T<span class="token punctuation">.</span>JOB <span class="token operator">=</span> V_JOB
           <span class="token punctuation">)</span> <span class="token keyword">LOOP</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span>I<span class="token punctuation">.</span>ENAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="游标的标准-复杂写法" tabindex="-1"><a class="header-anchor" href="#游标的标准-复杂写法" aria-hidden="true">#</a> 游标的标准/复杂写法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>
  <span class="token keyword">CURSOR</span> C_JOB  <span class="token comment">-- 类型定义</span>
  <span class="token operator">IS</span>
  <span class="token keyword">SELECT</span> EMPNO<span class="token punctuation">,</span> ENAME<span class="token punctuation">,</span> JOB<span class="token punctuation">,</span> SAL
  <span class="token keyword">FROM</span> EMP
  <span class="token keyword">WHERE</span> JOB <span class="token operator">=</span> <span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">;</span>
  
  C_ROW C_JOB<span class="token operator">%</span>ROWTYPE<span class="token punctuation">;</span>  <span class="token comment">-- 定义一个游标变量</span>
<span class="token keyword">BEGIN</span>
  <span class="token keyword">OPEN</span> C_JOB<span class="token punctuation">;</span>  <span class="token comment">-- 打开游标</span>
  <span class="token keyword">LOOP</span>
    <span class="token keyword">FETCH</span> C_JOB
    <span class="token keyword">INTO</span> C_ROW<span class="token punctuation">;</span>  <span class="token comment">-- 提取一行数据到 C_ROW</span>
    <span class="token keyword">EXIT</span> <span class="token keyword">WHEN</span> C_JOB<span class="token operator">%</span>NOTFOUND<span class="token punctuation">;</span>  <span class="token comment">-- 判读是否提取到值，没取到值就退出</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span>C_ROW<span class="token punctuation">.</span>EMPNO <span class="token operator">||</span> <span class="token string">&#39;-&#39;</span>
                      <span class="token operator">||</span> C_ROW<span class="token punctuation">.</span>ENAME <span class="token operator">||</span> <span class="token string">&#39;-&#39;</span>
                      <span class="token operator">||</span> C_ROW<span class="token punctuation">.</span>JOB <span class="token operator">||</span> <span class="token string">&#39;-&#39;</span>
                      <span class="token operator">||</span> C_ROW<span class="token punctuation">.</span>SAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
  <span class="token keyword">CLOSE</span> C_JOB<span class="token punctuation">;</span>  <span class="token comment">-- 关闭游标</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function E(h,_){const a=p("ExternalLinkIcon");return o(),c("div",null,[d,r,u,k,n("p",null,[n("a",v,[s("https://blog.csdn.net/qq_34745941/article/details/81294166"),e(a)])]),n("p",null,[n("a",m,[s("https://blog.csdn.net/qq_44333590/article/details/114264859"),e(a)])]),b])}const w=t(i,[["render",E],["__file","08_游标.html.vue"]]);export{w as default};
