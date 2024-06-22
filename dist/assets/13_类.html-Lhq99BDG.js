import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const t={},p=e(`<h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1><h2 id="类的创建" tabindex="-1"><a class="header-anchor" href="#类的创建" aria-hidden="true">#</a> 类的创建</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Student 是类的名称（类名），由一个或多个单词组成，每个单词的首字母大写，其余小写</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的组成" tabindex="-1"><a class="header-anchor" href="#类的组成" aria-hidden="true">#</a> 类的组成</h2><h3 id="类属性" tabindex="-1"><a class="header-anchor" href="#类属性" aria-hidden="true">#</a> 类属性</h3><p>类中方法外的变量称为类属性，被该类的所有对象所共享</p><h3 id="self-属性" tabindex="-1"><a class="header-anchor" href="#self-属性" aria-hidden="true">#</a> self 属性</h3><p>在类封装的方法内部，<code>self</code> 就表示当前调用方法的对象自己，哪一个对象调用的方法，<code>self</code> 就是哪一个对象的引用</p><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3><h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3><p><em><strong>1&gt;</strong></em> 使用 <code>@staticmethod</code> 修饰，可以使用类名直接访问的方法</p><p><em><strong>2&gt;</strong></em> 静态方法既不需要访问实例属性或者调用实例方法，也不需要访问类属性或者调用类方法，同时不需要传递 <code>cls</code> 参数</p><p><em><strong>3&gt;</strong></em> 静态方法可以通过<code>类名.</code>的方式直接调用——不需要创建对象就能访问</p><h3 id="类方法" tabindex="-1"><a class="header-anchor" href="#类方法" aria-hidden="true">#</a> 类方法</h3><p><em><strong>1&gt;</strong></em> 使用 <code>@classmethod</code> 修饰，可以使用类名直接访问的方法</p><p><em><strong>2&gt;</strong></em> 在类方法内部，可以直接访问类属性或者调用其他的类方法</p><p><em><strong>3&gt;</strong></em> 类方法的第一个参数应该是 <code>cls</code>，类似实例方法的第一个参数 <code>self</code>，哪一个类调用的方法，方法内的 <code>cls</code> 就是哪一个类的引用</p><p><em><strong>4&gt;</strong></em> 在类方法内部，可以通过 <code>cls</code> 访问类的属性，或者调用类的方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    <span class="token comment"># 类属性</span>
    <span class="token comment"># 直接写在类里的变量，称为类属性，类中的实例对象都具有这一属性，类内的全局变量</span>
    native_place <span class="token operator">=</span> <span class="token string">&#39;中国&#39;</span>

    <span class="token comment"># 初始化方法</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># self.name 称为实例属性，进行了一个赋值的操作，将局部变量 name 的值赋给实例属性</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token comment"># 实例方法</span>
    <span class="token keyword">def</span> <span class="token function">info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我的名字叫&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;年龄是&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

    <span class="token comment"># 类方法</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">cm</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;类方法&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 静态方法</span>
    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">sm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 静态方法中不允许写self</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;静态方法&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h2><p>对象的创建又称为类的实例化</p><p><strong>语法</strong>：<code>实例名 = 类名()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建上面 Student 类的实例</span>
stu <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>native_place<span class="token punctuation">)</span>  <span class="token comment"># 访问实例的属性/类属性</span>
stu<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment"># 调用实例方法</span>
stu<span class="token punctuation">.</span>cm<span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment"># 调用类方法</span>
stu<span class="token punctuation">.</span>sm<span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment"># 调用静态方法</span>

Student<span class="token punctuation">.</span>native_place <span class="token operator">=</span> <span class="token string">&#39;上海&#39;</span>  <span class="token comment"># 修改类属性</span>
Student<span class="token punctuation">.</span>info<span class="token punctuation">(</span>stu<span class="token punctuation">)</span>  <span class="token comment"># 调用实例方法，对象名实际就是方法定义处的 self</span>
Student<span class="token punctuation">.</span>cm<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># 调用类方法</span>
Student<span class="token punctuation">.</span>sm<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># 调用静态方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态绑定属性和方法" tabindex="-1"><a class="header-anchor" href="#动态绑定属性和方法" aria-hidden="true">#</a> 动态绑定属性和方法</h2><p>Python 是动态语言，在创建对象之后，可以动态地绑定属性和方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&#39;在吃饭&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建两个实例</span>
stu1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
stu2 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Marry&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----动态绑定属性-----&#39;</span><span class="token punctuation">)</span>
stu2<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;女&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> stu1<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>name<span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>age<span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>gender<span class="token punctuation">)</span>
<span class="token comment"># print(stu1.name, stu1.age, stu1.gender)</span>
<span class="token comment"># AttributeError，因为 stu1 没有绑定 gender 属性，所以无法调用</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----动态绑定方法-----&#39;</span><span class="token punctuation">)</span>
stu1<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
stu2<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;定义在类之外的，称为函数&#39;</span><span class="token punctuation">)</span>

stu1<span class="token punctuation">.</span>show <span class="token operator">=</span> show
stu1<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># stu2.show()</span>
<span class="token comment"># AttributeError，因为 stu2 没有绑定 show 方法，所以无法调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","13_类.html.vue"]]);export{r as default};
