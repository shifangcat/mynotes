import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const e={},o=t(`<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1><h2 id="基础正则表达式" tabindex="-1"><a class="header-anchor" href="#基础正则表达式" aria-hidden="true">#</a> 基础正则表达式</h2><h3 id="字符" tabindex="-1"><a class="header-anchor" href="#字符" aria-hidden="true">#</a> 字符</h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>[abc]</code></td><td>字符集，匹配集合中所含的任一字符</td></tr><tr><td><code>[^abc]</code></td><td>否定字符集，匹配任何不在集合中的字符</td></tr><tr><td><code>[a-z]</code></td><td>字符范围，匹配指定范围内的任意字符</td></tr><tr><td><code>.</code></td><td>匹配除换行符以外的任何单个字符</td></tr><tr><td><code>\\</code></td><td>转义字符</td></tr><tr><td><code>\\w</code></td><td>匹配任何字母数字，包括下划线（等价于 <code>[A-Za-z0-9_]</code>）</td></tr><tr><td><code>\\W</code></td><td>匹配任何非字母数字（等价于 <code>[^A-Za-z0-9_]</code>）</td></tr><tr><td><code>\\d</code></td><td>数字，匹配任何数字</td></tr><tr><td><code>\\D</code></td><td>非数字，匹配任何非数字字符</td></tr><tr><td><code>\\s</code></td><td>空白，匹配任何空白字符，包括空格、制表符等</td></tr><tr><td><code>\\S</code></td><td>非空白，匹配任何非空白字符</td></tr></tbody></table><p><em><strong>注</strong></em>：大写和小写字母匹配范围正好相反</p><h3 id="数量表示" tabindex="-1"><a class="header-anchor" href="#数量表示" aria-hidden="true">#</a> 数量表示</h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>?</code></td><td>匹配前面的表达式 0 个或 1 个，即表示可选项</td></tr><tr><td><code>+</code></td><td>匹配前面的表达式至少 1 个</td></tr><tr><td><code>*</code></td><td>匹配前面的表达式 0 个或多个</td></tr><tr><td><code>|</code></td><td>或运算符，并集，可以匹配符号前后的表达式</td></tr><tr><td><code>{m}</code></td><td>匹配前面的表达式 m 个</td></tr><tr><td><code>{m,}</code></td><td>匹配前面的表达式最少 m 个</td></tr><tr><td><code>{m,n}</code></td><td>匹配前面的表达式最少 m 个，最多 n 个</td></tr></tbody></table><h3 id="锚点和边界" tabindex="-1"><a class="header-anchor" href="#锚点和边界" aria-hidden="true">#</a> 锚点和边界</h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>^</code></td><td>匹配字符串或行开头</td></tr><tr><td><code>$</code></td><td>匹配字符串或行结尾</td></tr><tr><td><code>\\b</code></td><td>匹配单词边界比如 <code>Man\\b</code> 可以匹配 <code>CodeMan</code> 末尾的 <code>Man</code> ，不能匹配 <code>CodeManCode</code> 中的 <code>Man</code></td></tr><tr><td><code>\\B</code></td><td>匹配非单词边界比如 <code>Code\\B</code> 可以匹配 <code>HelloCodeMan</code> 中的 <code>Code</code>，不能匹配 <code>HelloCode</code> 中的 <code>Code</code></td></tr></tbody></table><h3 id="特殊标志" tabindex="-1"><a class="header-anchor" href="#特殊标志" aria-hidden="true">#</a> 特殊标志</h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>/.../i</code></td><td>忽略大小写</td></tr><tr><td><code>/.../g</code></td><td>全局匹配</td></tr><tr><td><code>/.../m</code></td><td>多行修饰符用于多行匹配</td></tr></tbody></table><h2 id="oracle-中的正则函数" tabindex="-1"><a class="header-anchor" href="#oracle-中的正则函数" aria-hidden="true">#</a> Oracle 中的正则函数</h2><h3 id="regexp-like" tabindex="-1"><a class="header-anchor" href="#regexp-like" aria-hidden="true">#</a> REGEXP_LIKE</h3><p><code>REGEXP_LIKE(字符串, 正则表达式)</code></p><blockquote><p>作用：筛选出符合正则规则的数据</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;123456&#39;</span> <span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
      <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;1234&#39;</span><span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
      <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;1&#39;</span><span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
      <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;12A34&#39;</span><span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
      <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;ABCD&#39;</span><span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
      <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;A123B,%CD&#39;</span><span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
      <span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
      <span class="token keyword">SELECT</span> <span class="token string">&#39;,%&#39;</span><span class="token keyword">AS</span> CN <span class="token keyword">FROM</span> DUAL
     <span class="token punctuation">)</span> T
<span class="token comment">-- WHERE REGEXP_LIKE(T.CN, &#39;^[0-9]{4}$&#39;)      -- 找的是长度为 4 的纯数字</span>
<span class="token comment">-- WHERE REGEXP_LIKE(T.CN, &#39;^[a-zA-Z]+$&#39;)     -- 找的是纯字母</span>
<span class="token comment">-- WHERE REGEXP_LIKE(T.CN, &#39;^[0-9a-zA-Z]+$&#39;)  -- 找的是数字，或者字母的</span>
<span class="token keyword">WHERE</span> REGEXP_LIKE<span class="token punctuation">(</span>T<span class="token punctuation">.</span>CN<span class="token punctuation">,</span> <span class="token string">&#39;^[^0-9a-zA-Z]+$&#39;</span><span class="token punctuation">)</span>    <span class="token comment">-- 找的是非数字，非字母的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexp-substr" tabindex="-1"><a class="header-anchor" href="#regexp-substr" aria-hidden="true">#</a> REGEXP_SUBSTR</h3><p><code>REGEXP_SUBSTR(字符串, 正则表达式, 从第几个字符开始匹配, 取第几个匹配组)</code></p><blockquote><p>作用：从字符串中截取出符合正则规则的字符串</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> REGEXP_SUBSTR<span class="token punctuation">(</span><span class="token string">&#39;李一,李二,李三,李四无&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[^,]+&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> A1  <span class="token comment">-- 李一</span>
      <span class="token punctuation">,</span>REGEXP_SUBSTR<span class="token punctuation">(</span><span class="token string">&#39;李一,李二,李三,李四无&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[^,]+&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> A2  <span class="token comment">-- 李二</span>
      <span class="token punctuation">,</span>REGEXP_SUBSTR<span class="token punctuation">(</span><span class="token string">&#39;李一,李二,李三,李四无&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[^,]+&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> A3  <span class="token comment">-- 李三</span>
      <span class="token punctuation">,</span>REGEXP_SUBSTR<span class="token punctuation">(</span><span class="token string">&#39;李一,李二,李三,李四无&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[^,]+&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> A4  <span class="token comment">-- 李四无</span>
      <span class="token punctuation">,</span>REGEXP_SUBSTR<span class="token punctuation">(</span><span class="token string">&#39;李一,李二,李三,李四无&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[^,]+&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> A5  <span class="token comment">-- 二</span>
<span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexp-instr" tabindex="-1"><a class="header-anchor" href="#regexp-instr" aria-hidden="true">#</a> REGEXP_INSTR</h3><p><code>REGEXP_INSTR(字符串, 正则表达式, 从第几个字符开始匹配, 第几次匹配)</code></p><blockquote><p>作用：返回符合规则的字符的位置</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> REGEXP_INSTR<span class="token punctuation">(</span><span class="token string">&#39;N3DSAD312NVNDSK&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[0-9]&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>        <span class="token comment">-- 2</span>
<span class="token keyword">SELECT</span> REGEXP_INSTR<span class="token punctuation">(</span><span class="token string">&#39;123aNDSAD312NVNDSK&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[a-zA-Z]&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>  <span class="token comment">-- 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexp-replace" tabindex="-1"><a class="header-anchor" href="#regexp-replace" aria-hidden="true">#</a> REGEXP_REPLACE</h3><p><code>REGEXP_REPLACE(字符串, 正则表达式, 替换之后的值)</code></p><blockquote><p>作用：返回替换后的字符串</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> REGEXP_REPLACE<span class="token punctuation">(</span><span class="token string">&#39;ABC2344RERY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[0-9]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>  <span class="token comment">-- ABCAAAARERY</span>
<span class="token keyword">SELECT</span> REGEXP_REPLACE<span class="token punctuation">(</span><span class="token string">&#39;ABC2344RERY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[A-Z]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>  <span class="token comment">-- 11123441111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28),p=[o];function c(d,l){return s(),a("div",null,p)}const k=n(e,[["render",c],["__file","11_正则表达式.html.vue"]]);export{k as default};
