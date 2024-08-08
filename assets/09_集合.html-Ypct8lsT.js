import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const e={},p=t(`<h1 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>集合是 Python 提供的内置数据结构，与列表、字典一样都属于<em><strong>可变类型</strong></em>的序列</p><p>集合是没有 value 的字典，元素是<em><strong>无序且不能重复</strong></em>的</p><h2 id="集合的创建" tabindex="-1"><a class="header-anchor" href="#集合的创建" aria-hidden="true">#</a> 集合的创建</h2><h3 id="普通创建" tabindex="-1"><a class="header-anchor" href="#普通创建" aria-hidden="true">#</a> 普通创建</h3><p>使用 花括号 <code>{}</code> 和 <code>set()</code> 函数创建集合</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合生成式" tabindex="-1"><a class="header-anchor" href="#集合生成式" aria-hidden="true">#</a> 集合生成式</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span>i<span class="token operator">*</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>  <span class="token comment"># {16, 1, 4, 9}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>    <span class="token comment"># {3}</span>
s3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token operator">*</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>  <span class="token comment"># {9, 3, 12, 6}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合的相关操作" tabindex="-1"><a class="header-anchor" href="#集合的相关操作" aria-hidden="true">#</a> 集合的相关操作</h2><h3 id="增加集合元素" tabindex="-1"><a class="header-anchor" href="#增加集合元素" aria-hidden="true">#</a> 增加集合元素</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>add()</code></td><td style="text-align:left;">一次添加一个元素</td></tr><tr><td style="text-align:left;"><code>update()</code></td><td style="text-align:left;">一次添加至少一个元素</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>
s<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除集合元素" tabindex="-1"><a class="header-anchor" href="#删除集合元素" aria-hidden="true">#</a> 删除集合元素</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>remove()</code></td><td style="text-align:left;">一次删除一个指定元素，指定元素不存在抛出 KeyError</td></tr><tr><td style="text-align:left;"><code>discard()</code></td><td style="text-align:left;">一次删除一个指定元素，指定元素不存在不抛出异常</td></tr><tr><td style="text-align:left;"><code>pop()</code></td><td style="text-align:left;">一次删除一个任意元素，不能指定参数，随机删除</td></tr><tr><td style="text-align:left;"><code>clear()</code></td><td style="text-align:left;">清空集合</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>
s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># KeyError: 1</span>
s<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合元素的判断" tabindex="-1"><a class="header-anchor" href="#集合元素的判断" aria-hidden="true">#</a> 集合元素的判断</h3><p>使用 <code>in</code> 和 <code>not in</code> 判断集合中是否存在指定元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>
<span class="token string">&#39;a&#39;</span> <span class="token keyword">in</span> s  <span class="token comment"># True</span>
<span class="token number">1</span> <span class="token keyword">in</span> s    <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合间的关系" tabindex="-1"><a class="header-anchor" href="#集合间的关系" aria-hidden="true">#</a> 集合间的关系</h2><table><thead><tr><th style="text-align:left;"><strong>关系</strong></th><th style="text-align:left;"><strong>判断方式</strong></th></tr></thead><tbody><tr><td style="text-align:left;">两个集合是否相等</td><td style="text-align:left;">可以使用运算符 <code>==</code> 或 <code>!=</code> 进行判断</td></tr><tr><td style="text-align:left;">一个集合是否是另一个集合的子集</td><td style="text-align:left;">可以调用 <code>issubset</code> 方法进行判断</td></tr><tr><td style="text-align:left;">一个集合是否是另一个集合的超集</td><td style="text-align:left;">可以调用 <code>issuperset</code> 方法进行判断</td></tr><tr><td style="text-align:left;">两个集合是否有交集</td><td style="text-align:left;">可以调用 <code>isdisjoint</code> 方法进行判断</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
s3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
s4 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
s1 <span class="token operator">==</span> s2  <span class="token comment"># True，相等判断</span>
s1 <span class="token operator">!=</span> s2  <span class="token comment"># False，相等判断</span>
s3<span class="token punctuation">.</span>issubset<span class="token punctuation">(</span>s1<span class="token punctuation">)</span>    <span class="token comment"># True，子集判断，s3 是 s1 的子集</span>
s1<span class="token punctuation">.</span>issuperset<span class="token punctuation">(</span>s3<span class="token punctuation">)</span>  <span class="token comment"># True，超集判断，s1 是 s3 的超集</span>
s4<span class="token punctuation">.</span>isdisjoint<span class="token punctuation">(</span>s1<span class="token punctuation">)</span>  <span class="token comment"># False，交集判断，True 为不相交，False 为相交</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合的数学操作" tabindex="-1"><a class="header-anchor" href="#集合的数学操作" aria-hidden="true">#</a> 集合的数学操作</h2><table><thead><tr><th style="text-align:left;"><strong>操作</strong></th><th style="text-align:left;"><strong>方法</strong></th></tr></thead><tbody><tr><td style="text-align:left;">取交集</td><td style="text-align:left;"><code>s1.intersection(s2)</code> 或 <code>s1 &amp; s2</code></td></tr><tr><td style="text-align:left;">取并集</td><td style="text-align:left;"><code>s1.union(s2)</code></td></tr><tr><td style="text-align:left;">取差集</td><td style="text-align:left;"><code>s1.difference(s2)</code>、<code>s1 - s2</code> 或 <code>s2 - s1</code></td></tr><tr><td style="text-align:left;">取对称差集</td><td style="text-align:left;"><code>s1.symmetric_difference(s2)</code> 或 <code>s1 ^ s2</code></td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token comment"># 取交集</span>
s1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># {2, 3}</span>
s1 <span class="token operator">&amp;</span> s2              <span class="token comment"># {2, 3}</span>
<span class="token comment"># 取并集</span>
s1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># {1, 2, 3, 4}</span>
s1 <span class="token operator">|</span> s2       <span class="token comment"># {1, 2, 3, 4}</span>
<span class="token comment"># 取差集</span>
s1<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># {1}</span>
s1 <span class="token operator">-</span> s2            <span class="token comment"># {1}</span>
s2 <span class="token operator">-</span> s1            <span class="token comment"># {4}</span>
<span class="token comment"># 取对称差集</span>
s1<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># {1, 4}</span>
s1 <span class="token operator">^</span> s2                      <span class="token comment"># {1, 4}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表、字典、元组、集合总结" tabindex="-1"><a class="header-anchor" href="#列表、字典、元组、集合总结" aria-hidden="true">#</a> 列表、字典、元组、集合总结</h2><table><thead><tr><th style="text-align:left;"><strong>数据结构</strong></th><th style="text-align:left;"><strong>是否可变</strong></th><th style="text-align:left;"><strong>是否可重复</strong></th><th style="text-align:left;"><strong>是否有序</strong></th><th style="text-align:left;"><strong>定义符号</strong></th></tr></thead><tbody><tr><td style="text-align:left;">列表（list）</td><td style="text-align:left;">可变</td><td style="text-align:left;">可重复</td><td style="text-align:left;">有序</td><td style="text-align:left;"><code>[]</code></td></tr><tr><td style="text-align:left;">元组（tuple）</td><td style="text-align:left;">不可变</td><td style="text-align:left;">可重复</td><td style="text-align:left;">有序</td><td style="text-align:left;"><code>()</code></td></tr><tr><td style="text-align:left;">字典（dict）</td><td style="text-align:left;">可变</td><td style="text-align:left;">key 不可重复<br>value 可重复</td><td style="text-align:left;">无序</td><td style="text-align:left;"><code>{key: value}</code></td></tr><tr><td style="text-align:left;">集合（set）</td><td style="text-align:left;">可变</td><td style="text-align:left;">不可重复</td><td style="text-align:left;">无序</td><td style="text-align:left;"><code>{}</code></td></tr></tbody></table>`,28),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","09_集合.html.vue"]]);export{r as default};
