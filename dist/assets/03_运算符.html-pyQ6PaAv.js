import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const p={},e=t(`<h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2><table><thead><tr><th style="text-align:left;"><strong>符号</strong></th><th style="text-align:left;"><strong>作用</strong></th><th style="text-align:left;"><strong>符号</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">加</td><td style="text-align:left;">-</td><td style="text-align:left;">减</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">乘</td><td style="text-align:left;">/</td><td style="text-align:left;">除</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">取模、取余</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArithmeticOperatorDemo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 5</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 4</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 15</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1，整数的计算结果只能是整数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2</span>

        <span class="token comment">// 有小数参与计算可能会导致结果不准确</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1.1</span> <span class="token operator">+</span> <span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 2.2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1.1</span> <span class="token operator">+</span> <span class="token number">1.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2.1100000000000003</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1.1</span> <span class="token operator">-</span> <span class="token number">1.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0.09000000000000008</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1.1</span> <span class="token operator">*</span> <span class="token number">1.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1.1110000000000002</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：整数参与计算，结果只能是整数</p><p>小数参与计算，结果有可能是不精确的</p><h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h3><p><strong>隐式转换（自动类型提升）</strong>：把一个取值范围小的数值，转成取值范围大的数据</p><p><strong>隐式转换的两种提升规则</strong>：</p><p><em><strong>1&gt;</strong></em> 取值范围小的和取值范围大的进行运算，小的会提升为大的，再进行运算</p><p><em><strong>2&gt;</strong></em> byte、short、char 三种类型的数据在运算的时候，都会直接先提升为 int，然后再进行运算</p><h3 id="强制转换" tabindex="-1"><a class="header-anchor" href="#强制转换" aria-hidden="true">#</a> 强制转换</h3><p>把一个取值范围大的数值赋值给一个取值范围小的变量，是不被允许的，此时就需要强制转换</p><p><strong>格式</strong>：<code>目标数据类型 变量名 = (目标数据类型)被强制转换的数据;</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArithmeticOperatorDemo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果默认会是 int 类型，现强制转换为 byte 类型</span>
        <span class="token keyword">byte</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>b1 <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h3><p><em><strong>1&gt;</strong></em> 当 <code>+</code> 的操作中出现字符串时，<code>+</code> 表示的是字符串的拼接，会将前后的内容拼接起来，返回一个新的字符串</p><p><em><strong>2&gt;</strong></em> 连续进行 <code>+</code> 操作时，从左到右依次执行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArithmeticOperatorDemo03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3.7</span> <span class="token operator">+</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 3.7abc</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// abctrue</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;中&#39;</span> <span class="token operator">+</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 中abctrue</span>

        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的年龄是&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token char">&#39;岁&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 我的年龄是18岁</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的年龄是&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;age&quot;</span> <span class="token operator">+</span> <span class="token char">&#39;岁&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 我的年龄是age岁</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3abc21</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符运算" tabindex="-1"><a class="header-anchor" href="#字符运算" aria-hidden="true">#</a> 字符运算</h3><p>当字符参与运算时，会把字符通过 ASCII 码表查询到对应的数字再进行计算</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArithmeticOperatorDemo04</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 99</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 68</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 162</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 94</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 291</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 32</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;中&#39;</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 20016</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自增自减运算符" tabindex="-1"><a class="header-anchor" href="#自增自减运算符" aria-hidden="true">#</a> 自增自减运算符</h2><table><thead><tr><th style="text-align:left;"><strong>符号</strong></th><th style="text-align:left;"><strong>作用</strong></th><th style="text-align:left;"><strong>说明</strong></th></tr></thead><tbody><tr><td style="text-align:left;">++</td><td style="text-align:left;">加</td><td style="text-align:left;">变量的值加 1</td></tr><tr><td style="text-align:left;">--</td><td style="text-align:left;">减</td><td style="text-align:left;">变量的值减 1</td></tr></tbody></table><p><strong>两种用法</strong>：</p><p><em><strong>1&gt;</strong></em> 单独使用：<code>++</code> 和 <code>--</code> 无论是在变量的前面还是后面，单独写一行结果是一样的</p><p><em><strong>2&gt;</strong></em> 参与计算：后 <code>++</code>，先用后加；先 <code>++</code>，先加后用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArithmeticOperatorDemo05</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 单独使用</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        a<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 11</span>
        <span class="token operator">++</span>a<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 12</span>
        a<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 11</span>
        <span class="token operator">--</span>a<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 10</span>

        <span class="token comment">// 参与计算</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 10，后 ++，先用后加</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">++</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 11，先 ++，先加后用</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2><table><thead><tr><th style="text-align:left;"><strong>符号</strong></th><th style="text-align:left;"><strong>作用</strong></th><th style="text-align:left;"><strong>说明</strong></th></tr></thead><tbody><tr><td style="text-align:left;">=</td><td style="text-align:left;">赋值</td><td style="text-align:left;">int a = 10，将 10 赋值给变量 a</td></tr><tr><td style="text-align:left;">+=</td><td style="text-align:left;">加后赋值</td><td style="text-align:left;">a += b，将 a + b 的值赋值给 a</td></tr><tr><td style="text-align:left;">-=</td><td style="text-align:left;">减后赋值</td><td style="text-align:left;">a -= b，将 a - b 的值赋值给 a</td></tr><tr><td style="text-align:left;">*=</td><td style="text-align:left;">乘后赋值</td><td style="text-align:left;">a *= b，将 a * b 的值赋值给 a</td></tr><tr><td style="text-align:left;">/=</td><td style="text-align:left;">除后赋值</td><td style="text-align:left;">a /= b，将 a / b 的值赋值给 a</td></tr><tr><td style="text-align:left;">%=</td><td style="text-align:left;">取余后赋值</td><td style="text-align:left;">a %= b，将 a % b 的值赋值给 a</td></tr></tbody></table><p><em><strong>注</strong></em>：<code>+=</code>、<code>-=</code>、<code>*=</code>、<code>/=</code>、<code>%=</code> 底层都隐藏了一个强制类型转换</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AssigningOperatorDemo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 10</span>

        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        a <span class="token operator">+=</span> b<span class="token punctuation">;</span>  <span class="token comment">// 等同于 a = (int)(a + b);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 30</span>

        <span class="token comment">// +=、-=、*=、/=、%= 底层都隐藏了一个强制类型转换</span>
        <span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        s <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 等同于 s = (short)(s + 1);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2><table><thead><tr><th style="text-align:left;"><strong>符号</strong></th><th style="text-align:left;"><strong>说明</strong></th></tr></thead><tbody><tr><td style="text-align:left;">==</td><td style="text-align:left;">判断是否相等</td></tr><tr><td style="text-align:left;">!=</td><td style="text-align:left;">判断是否不相等</td></tr><tr><td style="text-align:left;">&gt;</td><td style="text-align:left;">判断是否大于</td></tr><tr><td style="text-align:left;">&gt;=</td><td style="text-align:left;">判断是否大于等于</td></tr><tr><td style="text-align:left;">&lt;</td><td style="text-align:left;">判断是否小于</td></tr><tr><td style="text-align:left;">&lt;=</td><td style="text-align:left;">判断是否小于等于</td></tr></tbody></table><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2><table><thead><tr><th style="text-align:left;"><strong>符号</strong></th><th style="text-align:left;"><strong>作用</strong></th><th style="text-align:left;"><strong>说明</strong></th></tr></thead><tbody><tr><td style="text-align:left;">&amp;</td><td style="text-align:left;">逻辑与（且）</td><td style="text-align:left;">并且，两边都为真，结果才是真</td></tr><tr><td style="text-align:left;">|</td><td style="text-align:left;">逻辑或</td><td style="text-align:left;">或者，两边都为假，结果才是假</td></tr><tr><td style="text-align:left;">^</td><td style="text-align:left;">逻辑异或</td><td style="text-align:left;">相同为 false，不同为 true</td></tr><tr><td style="text-align:left;">!</td><td style="text-align:left;">逻辑非</td><td style="text-align:left;">取反</td></tr></tbody></table><h2 id="短路逻辑运算符" tabindex="-1"><a class="header-anchor" href="#短路逻辑运算符" aria-hidden="true">#</a> 短路逻辑运算符</h2><table><thead><tr><th><strong>符号</strong></th><th><strong>作用</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>短路与</td><td>结果和 &amp; 相同，但是有短路效果</td></tr><tr><td>||</td><td>短路或</td><td>结果和 | 相同，但是有短路效果</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogicOperatorDemo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 短路效果</span>
        <span class="token comment">// 简单理解：当左边的表达式能确定最终结果时，右边的内容就不会运行</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> res <span class="token operator">=</span> a<span class="token operator">++</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">++</span>b <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 11</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h2><p><strong>格式</strong>：<code>关系表达式 ? 表达式 1 : 表达式 2;</code></p><p><strong>说明</strong>：当关系表达式为 <code>true</code> 时，结果为表达式 1；反之，为表达式 2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TernaryOperatorDemo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 需求：获取两个数中的较大值</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> maxNum <span class="token operator">=</span> num1 <span class="token operator">&gt;</span> num2 <span class="token operator">?</span> num1 <span class="token operator">:</span> num2<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>maxNum<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 20</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：三元运算符的结果需要被使用</p>`,44),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","03_运算符.html.vue"]]);export{k as default};
