import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const p={},e=t(`<h1 id="集合-arraylist" tabindex="-1"><a class="header-anchor" href="#集合-arraylist" aria-hidden="true">#</a> 集合-ArrayList</h1><h2 id="集合概述" tabindex="-1"><a class="header-anchor" href="#集合概述" aria-hidden="true">#</a> 集合概述</h2><p>集合的<em><strong>长度是可变的</strong></em>，根据存储元素的多少可以实现自动增减</p><p>集合<em><strong>只能存储引用数据类型</strong></em>，不通存储基本数据类型，如果需要存储基本数据类型，需要将其转换为<em><strong>包装类</strong></em></p><h2 id="arraylist" tabindex="-1"><a class="header-anchor" href="#arraylist" aria-hidden="true">#</a> ArrayList</h2><p><strong>创建集合对象</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayListDemo01</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建集合对象</span>
		<span class="token comment">// 泛型：限定集合中存储数据的类型</span>
		<span class="token comment">// ArrayList&lt;String&gt; list = new ArrayList&lt;String&gt;(); // JDK7 之前的写法</span>

		<span class="token comment">// JDK7 之后的写法，可以省略后面的类型</span>
		<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 此时创建的是 ArrayList 对象，而 ArrayList 是 Java 已经写好的一个类，并对其进行了一些特殊处理</span>
		<span class="token comment">// 所以打印 ArrayList 展示的不是地址值，而是集合中存储的数据内容，并使用 [] 进行包裹</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// []</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用成员方法</strong>：</p><table><thead><tr><th style="text-align:left;"><strong>方法名</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;">boolean add(E e)</td><td style="text-align:left;">添加元素，返回值表示是否添加成功</td></tr><tr><td style="text-align:left;">boolean remove(E e)</td><td style="text-align:left;">删除指定元素，返回值表示是否删除成功</td></tr><tr><td style="text-align:left;">E remove(int index)</td><td style="text-align:left;">删除指定索引的元素，返回被删除的元素</td></tr><tr><td style="text-align:left;">E set(int index, E e)</td><td style="text-align:left;">修改指定索引下的元素，返回原来的元素</td></tr><tr><td style="text-align:left;">E get(int index)</td><td style="text-align:left;">获取指定索引的元素</td></tr><tr><td style="text-align:left;">int size()</td><td style="text-align:left;">获取集合的长度（集合中元素的个数）</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayListDemo02</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建集合</span>
		<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 添加元素</span>
		<span class="token comment">// list.add(&quot;aaa&quot;)：添加元素，返回值表示是否添加成功（实际会永远返回 true）</span>
		list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">boolean</span> ret <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, bbb, ccc]</span>

		<span class="token comment">// 删除元素</span>
		<span class="token comment">// list.remove(&quot;aaa&quot;)：删除指定元素，，返回值表示是否删除成功</span>
		<span class="token keyword">boolean</span> ret1 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ret1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [bbb, ccc]</span>

		<span class="token keyword">boolean</span> ret2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ret2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，删除的元素不存在会返回 false</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [bbb, ccc]</span>

		<span class="token comment">// list.remove(0)：删除指定索引的元素，返回被删除的元素</span>
		<span class="token class-name">String</span> ret3 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ret3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bbb</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ccc]</span>

		<span class="token comment">// 修改元素</span>
		<span class="token comment">// list.set(0, &quot;xxx&quot;)：修改指定索引下的元素，返回原来的元素</span>
		<span class="token class-name">String</span> ret4 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ret4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ccc</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [xxx]</span>

		<span class="token comment">// 查询元素</span>
		<span class="token comment">// list.get(0)：获取指定索引的元素</span>
		<span class="token class-name">String</span> ret5 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ret5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// xxx</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [xxx]</span>

		<span class="token comment">// 获取集合的长度</span>
		<span class="token comment">// list.size()：获取集合的长度（集合中元素的个数）</span>
		<span class="token keyword">int</span> len <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [xxx]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","09_集合-ArrayList.html.vue"]]);export{r as default};
