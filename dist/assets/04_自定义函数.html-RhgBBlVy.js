import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},o=e(`<h1 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a> 自定义函数</h1><h2 id="自定义函数-1" tabindex="-1"><a class="header-anchor" href="#自定义函数-1" aria-hidden="true">#</a> 自定义函数</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 语法结构</span>
<span class="token comment">-- 设置入参时不用设置数据类型的长度</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> 函数名<span class="token punctuation">(</span>参数<span class="token number">1</span> 数据类型<span class="token punctuation">,</span> 参数<span class="token number">2</span> 数据类型<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token keyword">RETURN</span> 返回的数据类型（不写长度）  <span class="token comment">-- 返回的即便是 VARCHAR2 类型，也不能给长度</span>
<span class="token operator">IS</span>  <span class="token comment">-- IS 或者 AS 随便写一个都可以</span>
  声明变量  <span class="token comment">-- 声明变量的时候需要给长度</span>
<span class="token keyword">BEGIN</span>
  <span class="token comment">-- 函数的具体逻辑</span>
  <span class="token keyword">RETURN</span> 函数的返回结果<span class="token punctuation">;</span>
  <span class="token comment">-- 异常处理</span>
  EXCEPTION <span class="token keyword">WHEN</span> OTHERS <span class="token keyword">THEN</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 示例</span>
<span class="token comment">-- 创建计算 1 到 N 的和的函数</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> F_GET_N_SUM<span class="token punctuation">(</span>P_N NUMBER<span class="token punctuation">)</span>
<span class="token keyword">RETURN</span> NUMBER
<span class="token operator">IS</span>
  V_SUM NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
  V_SUM :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">FOR</span> I <span class="token operator">IN</span> <span class="token number">1.</span><span class="token punctuation">.</span>P_N <span class="token keyword">LOOP</span>
    V_SUM :<span class="token operator">=</span> V_SUM <span class="token operator">+</span> I<span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
  <span class="token keyword">RETURN</span> V_SUM<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 调用函数</span>
<span class="token keyword">SELECT</span> F_GET_N_SUM<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的编译" tabindex="-1"><a class="header-anchor" href="#函数的编译" aria-hidden="true">#</a> 函数的编译</h2><p>编译就是把函数在数据库里创建，将写好的代码放在数据库的某个文件里存着，调用函数的时候就会到数据库里执行存放的函数逻辑</p><p><strong>编译的方法</strong>：选中相应的定义函数的代码执行即可</p><p><strong>检查函数的编译（创建）有没有出错</strong>：选中函数的名称 -&gt; 鼠标右键 -&gt; view/edit</p>`,7),t=[o];function c(l,i){return s(),a("div",null,t)}const k=n(p,[["render",c],["__file","04_自定义函数.html.vue"]]);export{k as default};
