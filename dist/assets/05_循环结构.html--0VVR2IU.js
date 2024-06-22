import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p={},t=e(`<h1 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h1><h2 id="range-函数" tabindex="-1"><a class="header-anchor" href="#range-函数" aria-hidden="true">#</a> range 函数</h2><p><strong>作用</strong>：用于生成一个整数序列，返回值是一个<em><strong>迭代器对象</strong></em></p><p><strong>创建 range 对象的三种方式</strong>：</p><p><em><strong>1&gt;</strong></em> <code>range(stop)</code>：创建一个 <code>[0, stop)</code> 之间的整数序列，步长为 <code>1</code></p><p><em><strong>2&gt;</strong></em> <code>range(start, stop)</code>：创建一个 <code>[start, stop)</code> 之间的整数序列，步长为 <code>1</code></p><p><em><strong>3&gt;</strong></em> <code>range(start, stop, step)</code>：创建一个 <code>[start, stop)</code> 之间的整数序列，步长为 <code>step</code></p><p><strong>range 类型的优点</strong>：</p><p>不管 range 对象表示的整数序列有多长，<em><strong>所有的 range 对象占用的内存空间都是相同的</strong></em>，因为<em><strong>仅仅需要存储 start、stop 和 step</strong></em>，只有当用到 range 对象时，才会去计算序列中的相关元素</p><p><em><strong>注</strong></em>：可以用 <code>in</code> 与 <code>not in</code> 判断整数序列中是否存在（不存在）指定的整数</p><h2 id="循环结构-1" tabindex="-1"><a class="header-anchor" href="#循环结构-1" aria-hidden="true">#</a> 循环结构</h2><p>反复做同一件事情的情况，称为循环</p><p><strong>循环的分类</strong>：while 循环、for-in 循环</p><h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    a <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>while 循环的执行流程</strong>：</p><p><strong>四步循环法</strong>：初始化变量 → 条件判断 → 条件执行体（循环体）→ 改变变量</p><h3 id="for-in-循环" tabindex="-1"><a class="header-anchor" href="#for-in-循环" aria-hidden="true">#</a> for-in 循环</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> l <span class="token keyword">in</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token comment"># 如果在循环体中不需要使用自定义变量，可以将自定义变量写为下划线“_”</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token string">&#39;ha&#39;</span><span class="token punctuation">:</span>  <span class="token comment"># ha有两个字符，所以输出两遍hello</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> 流程控制语句</h2><h3 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h3><p>用于结束循环结构，通常与分支结构 <code>if</code> 一起使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pw <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入密码&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> pw <span class="token operator">==</span> <span class="token string">&#39;8888&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;密码正确&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;密码错误&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h3><p>用于结束本次循环，进入下一次循环，通常与分支结构 <code>if</code> 一起使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i<span class="token operator">%</span><span class="token number">5</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：使用 <code>continue</code> 关键字之前，需要确认循环的计数是否已经修改，否则可能会导致死循环</p><h3 id="else-语句" tabindex="-1"><a class="header-anchor" href="#else-语句" aria-hidden="true">#</a> else 语句</h3><p><strong>与 else 语句配合使用的三种情况</strong>：</p><p><em><strong>1&gt;</strong></em> <code>if…else</code>：<code>if</code> 表达式不成立的时候执行 <code>else</code></p><p><em><strong>2&gt;</strong></em> <code>while…else</code>：没有碰到 <code>break</code> 时执行 <code>else</code></p><p><em><strong>3&gt;</strong></em> <code>for…else</code>：没有碰到 <code>break</code> 时执行 <code>else</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># for…else</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pw <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入密码&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> pw <span class="token operator">==</span> <span class="token string">&#39;8888&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;密码正确&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;密码错误&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;对不起，三次密码均错误，卡片已锁定&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># while…else</span>
a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> a <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">:</span>
    pwd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入密码&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> pwd <span class="token operator">==</span> <span class="token string">&#39;9999&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;密码正确&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;密码错误&#39;</span><span class="token punctuation">)</span>
    a <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;对不起，三次密码均错误，卡片已锁定&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套循环" tabindex="-1"><a class="header-anchor" href="#嵌套循环" aria-hidden="true">#</a> 嵌套循环</h2><p>循环结构中又嵌套了另外的完整的循环结构，其中内层循环做为外层循环的循环体执行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 输出一张九九乘法表</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">,</span> j<span class="token operator">*</span>i<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\t&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：嵌套循环中的 <code>break</code> 和 <code>continue</code> 用于控制本层循环</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> j<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token comment"># break</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\t&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","05_循环结构.html.vue"]]);export{u as default};
