import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const e={},p=t(`<h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1><h2 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义" aria-hidden="true">#</a> 类的定义</h2><p>类：是对象共同特征的描述</p><p>对象：真实存在的具体东西</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 语法结构</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> 类名 <span class="token punctuation">{</span>
    <span class="token number">1.</span>成员变量（代表属性，一般是名词）
    <span class="token number">2.</span>成员方法（代表行为，一般是动词）
	<span class="token number">3.</span>构造器
    <span class="token number">4.</span>代码块
    <span class="token number">5.</span>内部类
<span class="token punctuation">}</span>

<span class="token comment">// 创建对象</span>
类名 对象名 <span class="token operator">=</span> <span class="token keyword">new</span> 类名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 访问成员变量</span>
对象名<span class="token punctuation">.</span>成员变量<span class="token punctuation">;</span>

<span class="token comment">// 调用成员方法</span>
对象名<span class="token punctuation">.</span>成员方法<span class="token punctuation">;</span>

<span class="token comment">// 示例代码 #########################################</span>
<span class="token comment">// 定义手机类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
	<span class="token comment">// 属性</span>
	<span class="token class-name">String</span> brand<span class="token punctuation">;</span>
	<span class="token keyword">double</span> price<span class="token punctuation">;</span>

	<span class="token comment">// 行为</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;手机在打电话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;手机在打游戏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用手机类，创建对象并赋值，同时访问属性和方法</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PhoneTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建手机对象</span>
		<span class="token class-name">Phone</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 给手机对象赋值</span>
		p<span class="token punctuation">.</span>brand <span class="token operator">=</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">;</span>
		p<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">1999</span><span class="token punctuation">;</span>

		<span class="token comment">// 获取手机对象中的值</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 调用手机中的方法</span>
		p<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p<span class="token punctuation">.</span><span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义类的注意事项</strong>：</p><p><em><strong>1&gt;</strong></em> 用来描述一类事物的类，叫做 Javabean 类，这些类中是不写 <code>main</code> 方法的</p><p><em><strong>2&gt;</strong></em> 编写 <code>main</code> 方法的类，叫做测试类，可以在其中创建 Javabean 类的对象并进行赋值调用</p><p><em><strong>3&gt;</strong></em> 类名需要见名知意，使用大驼峰命名</p><p><em><strong>4&gt;</strong></em> 一个 Java 文件中可以定义多个 <code>class</code> 类，但是只能有一个类使用 <code>public</code> 修饰，且 <code>public</code> 修饰的类名必须成为代码的文件名，所以建议在实际开发中，一个 Java 文件中还是只定义一个 <code>class</code> 类</p><p><em><strong>5&gt;</strong></em> 成员变量的完整定义格式是：<code>修饰符 数据类型 变量名 = 初始化值</code>，一般无需指定初始化值，存在默认值。具体如下：</p><table><thead><tr><th style="text-align:left;"><strong>数据类型</strong></th><th style="text-align:left;"><strong>明细</strong></th><th style="text-align:left;"><strong>默认值</strong></th></tr></thead><tbody><tr><td style="text-align:left;">基本类型</td><td style="text-align:left;">byte、short、int、long</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">float、double</td><td style="text-align:left;">0.0</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">boolen</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">引用类型</td><td style="text-align:left;">类、接口、数组、String</td><td style="text-align:left;">null</td></tr></tbody></table><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h2><p>封装：对象代表什么，就得封装对应的数据，并提供数据对应的行为</p><p>封装可以被认为是一个保护屏障，防止该类的代码和数据被外部类定义的代码随机访问，要访问该类的代码和数据，必须通过严格的接口控制</p><p><strong>private 关键字</strong>：</p><p><em><strong>1&gt;</strong></em> <code>private</code> 是一个权限修饰符，可以修饰成员（成员变量和方法），被 <code>private</code> 修饰的成员只能在本类中才能访问</p><p><em><strong>2&gt;</strong></em> 针对被 <code>private</code> 修饰的成员变量，如果需要被其他类使用，需要提供相应的操作：</p><ul><li><p>提供 <code>setXxx(参数)</code> 方法，用于给成员变量赋值，方法用 <code>public</code> 修饰</p></li><li><p>提供 <code>getXxx()</code> 方法，用于获取成员变量的值，方法用 <code>public</code> 修饰</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用 private 实现封装</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GirlFriend</span> <span class="token punctuation">{</span>
	<span class="token comment">// 属性</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

	<span class="token comment">// 针对每一个私有化的成员变量，都要提供 set 和 get 方法</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在对应的 Test 类中进行测试</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GirlFriendTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建对象</span>
		<span class="token class-name">GirlFriend</span> gf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GirlFriend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 赋值</span>
		gf<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;小红&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 访问</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>gf<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：<code>this</code> 的作用是为了区分局部变量和成员变量，本质是代表方法调用者的地址值</p><h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2><p>构造方法也叫作构造器、构造函数</p><p><strong>作用</strong>：在创建对象的时候给成员变量进行赋值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 构造方法的格式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> 类名<span class="token punctuation">{</span>
    修饰符 类名<span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        方法体<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：如果没有写任何构造方法，虚拟机会自动添加一个空参构造方法</p><p><strong>构造方法的特点</strong>：</p><p><em><strong>1&gt;</strong></em> 方法名与类名完全相同，大小写一致</p><p><em><strong>2&gt;</strong></em> 没有返回值类型，连 <code>void</code> 都没有</p><p><em><strong>3&gt;</strong></em> 没有具体的返回值（不能由 <code>return</code> 带回结果数据）</p><p><strong>构造方法的执行机制</strong>：</p><p><em><strong>1&gt;</strong></em> 创建对象的时候由虚拟机自动调用，不能手动调用</p><p><em><strong>2&gt;</strong></em> 每创建一个对象，就会调用一次构造方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 构造方法</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

	<span class="token comment">// 如果没有写任何构造方法，虚拟机会自动添加一个空参构造方法</span>
	<span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;构造方法被执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 带参构造方法</span>
	<span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试构造方法</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建对象</span>
		<span class="token comment">// 调用空参构造</span>
		<span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 调用带参构造方法</span>
		<span class="token class-name">Student</span> stu2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// zhangsan</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 23</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造方法的注意事项</strong>：</p><p><em><strong>1&gt;</strong></em> 构造方法的定义：</p><ul><li><p>如果没有定义构造方法，系统将会给出一个默认的无参构造方法</p></li><li><p>如果定义了构造方法，系统将不再提供默认的无参构造方法</p></li></ul><p><em><strong>2&gt;</strong></em> 构造方法的重载：带参构造方法和无参构造方法，两者方法名相同，但是参数不同，这叫构造方法的重载</p><p><em><strong>3&gt;</strong></em> 推荐的使用方式：无论是否使用，都手动书写无参构造方法和带全部参数的构造方法</p><h2 id="标准的-javabean-类" tabindex="-1"><a class="header-anchor" href="#标准的-javabean-类" aria-hidden="true">#</a> 标准的 Javabean 类</h2><p><em><strong>1&gt;</strong></em> 类名采用大驼峰命名，需要见名知意</p><p><em><strong>2&gt;</strong></em> 成员变量使用 <code>private</code> 修饰</p><p><em><strong>3&gt;</strong></em> 提供至少两个构造方法：无参构造方法、带全部参数的构造方法</p><p><em><strong>4&gt;</strong></em> 成员方法：提供每一个成员变量对应的 <code>setXxx(参数)</code> 和 <code>getXxx()</code> 方法；如果还有其他行为，也需要写上</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	<span class="token comment">// 属性</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token comment">// 无参构造方法</span>
	<span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

    <span class="token comment">// 带全部参数的构造方法</span>
	<span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> username<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> password<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="成员变量和局部变量" tabindex="-1"><a class="header-anchor" href="#成员变量和局部变量" aria-hidden="true">#</a> 成员变量和局部变量</h2><table><thead><tr><th style="text-align:left;"><strong>区别</strong></th><th style="text-align:left;"><strong>成员变量</strong></th><th style="text-align:left;"><strong>局部变量</strong></th></tr></thead><tbody><tr><td style="text-align:left;">类中位置不同</td><td style="text-align:left;">类中，方法外</td><td style="text-align:left;">方法内、方法申明上</td></tr><tr><td style="text-align:left;">初始化值不同</td><td style="text-align:left;">有默认初始化值</td><td style="text-align:left;">没有初始化值，使用前需要完成赋值</td></tr><tr><td style="text-align:left;">内存位置不同</td><td style="text-align:left;">堆内存</td><td style="text-align:left;">栈内存</td></tr><tr><td style="text-align:left;">生命周期不同</td><td style="text-align:left;">随着对象的创建而存在，随着对象的消失而消失</td><td style="text-align:left;">随着方法的调用而存在，随着方法运行结束而消失</td></tr><tr><td style="text-align:left;">作用域</td><td style="text-align:left;">整个类中有效</td><td style="text-align:left;">当前方法中有效</td></tr></tbody></table>`,47),c=[p];function l(o,i){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","07_面向对象.html.vue"]]);export{r as default};
