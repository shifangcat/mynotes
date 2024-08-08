import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const t="/mynotes/assets/以目录的形式定义蓝图-目录结构-dcOSGeZf.png",p={},o=e(`<h1 id="flask-蓝图、测试与部署" tabindex="-1"><a class="header-anchor" href="#flask-蓝图、测试与部署" aria-hidden="true">#</a> Flask-蓝图、测试与部署</h1><h2 id="蓝图blueprint" tabindex="-1"><a class="header-anchor" href="#蓝图blueprint" aria-hidden="true">#</a> 蓝图Blueprint</h2><p>蓝图：用于实现单个应用的视图、模板、静态文件的集合。蓝图就是模块化处理的类</p><p>简单来说，蓝图就是一个存储操作路由映射方法的容器，主要用来实现客户端请求和URL相互关联的功能。 在Flask中，使用蓝图可以帮助我们实现模块化应用的功能</p><h3 id="蓝图的使用" tabindex="-1"><a class="header-anchor" href="#蓝图的使用" aria-hidden="true">#</a> 蓝图的使用</h3><p><em><strong>1&gt;</strong></em> 创建蓝图对象：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Blueprint

<span class="token comment"># Blueprint必须指定两个参数，app_orders表示蓝图的名称，__name__表示蓝图所在模块</span>
app_orders <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;app_orders&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>2&gt;</strong></em> 使用蓝图注册路由：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app_orders<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/get_orders&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get_orders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;get orders page&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>3&gt;</strong></em> 在程序实例中注册蓝图：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># app.register_blueprint(app_orders)</span>
<span class="token comment"># url_prefix的作用是给该蓝图下注册的url添加一个统一的前缀</span>
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>app_orders<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&#39;/orders&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以目录的形式定义蓝图" tabindex="-1"><a class="header-anchor" href="#以目录的形式定义蓝图" aria-hidden="true">#</a> 以目录的形式定义蓝图</h3><p>目录结构如图：<img src="`+t+`" alt="以目录的形式定义蓝图-目录结构" style="zoom:67%;"></p><p><em><strong>1&gt;</strong></em> 在<code>main.py</code>文件中创建<code>app</code>对象和注册蓝图：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> cart <span class="token keyword">import</span> app_cart

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token comment"># 注册蓝图</span>
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>app_cart<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&#39;/cart&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>2&gt;</strong></em> 在<code>cart/__init__.py</code>文件中创建蓝图对象和导入<code>cart/views.py</code>文件中的视图函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Blueprint

<span class="token comment"># 创建蓝图对象，template_folder和static_folder指定该蓝图下的模板文件夹和静态文件夹</span>
<span class="token comment"># 注：如果有一个与cart同级的templates目录，那么将优先从该目录中寻找模板文件</span>
app_cart <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;app_cart&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">,</span> template_folder<span class="token operator">=</span><span class="token string">&#39;templates&#39;</span><span class="token punctuation">,</span> static_folder<span class="token operator">=</span><span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 在__init__.py文件被执行的时候，把视图加载进来，让蓝图与应用程序知道有视图的存在</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span>views <span class="token keyword">import</span> get_cart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>3&gt;</strong></em> 在<code>cart/views.py</code>文件中定义视图函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> render_template
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> app_cart

<span class="token decorator annotation punctuation">@app_cart<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/get_cart&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get_cart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">&#39;cart.html&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2><ul><li><p><strong>Web程序开发的阶段</strong>：需求分析、设计阶段、实现阶段、测试阶段</p></li><li><p><strong>测试的分类</strong>： 测试从软件开发过程可以分为：单元测试、集成测试、系统测试等。在众多的测试中，与程序开发人员最密切的就是单元测试，因为单元测试是由开发人员进行的，而其他测试都由专业的测试人员来完成</p></li><li><p><strong>单元测试</strong>就是开发者编写一小段代码，检验目标代码的功能是否符合预期。通常情况下，单元测试主要面向一些功能单一的模块进行。在Web开发过程中，单元测试实际上就是一些“断言”（assert）代码</p></li><li><p><strong>断言</strong>就是判断一个函数或对象的一个方法所产生的结果是否符合你期望的那个结果。 Python中assert断言是声明布尔值为真的判定，如果表达式为假会发生异常。单元测试中，一般使用assert来断言结果</p></li></ul><h3 id="断言assert" tabindex="-1"><a class="header-anchor" href="#断言assert" aria-hidden="true">#</a> 断言assert</h3><p><code>assert</code>是Python中的一个关键字，使用方法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">num_div</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># assert，断言，后面是一个表达式，如果表达式返回真，则断言成功，程序能够继续向下执行；</span>
    <span class="token comment"># 如果表达式返回假，则断言失败，抛出AssertionError异常，终止程序的继续执行</span>
    <span class="token keyword">assert</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>num2<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> num2 <span class="token operator">!=</span> <span class="token number">0</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num1<span class="token operator">/</span>num2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元测试-1" tabindex="-1"><a class="header-anchor" href="#单元测试-1" aria-hidden="true">#</a> 单元测试</h3><ul><li><p><strong>单元测试的基本写法</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest  <span class="token comment"># 导入单元测试模块</span>

<span class="token comment"># 定义一个类，继承自unittest.TestCase</span>
<span class="token keyword">class</span> <span class="token class-name">TestClass</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 该方法会首先执行，相当于做测试前的准备工作</span>
    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token comment"># 该方法会在测试代码执行完后执行，相当于做测试后的扫尾工作</span>
    <span class="token keyword">def</span> <span class="token function">tearDown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token comment"># 测试方法，方法名需要以\`test_\`开头</span>
    <span class="token keyword">def</span> <span class="token function">test_app_exists</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>常用的断言方法</strong></p><table><thead><tr><th><strong>方法</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>assertEqual()</td><td>如果两个值相等，则pass</td></tr><tr><td>assertNotEqual()</td><td>如果两个值不相等，则pass</td></tr><tr><td>assertTrue()</td><td>判断bool值为True，则pass</td></tr><tr><td>assertFalse()</td><td>判断bool值为False，则pass</td></tr><tr><td>assertIsNone()</td><td>不存在，则pass</td></tr><tr><td>assertIsNotNone()</td><td>存在，则pass</td></tr><tr><td>assertIn()</td><td>前者在后者里面，则pass</td></tr><tr><td>assertNotIn()</td><td>前者不在后者里面，则pass</td></tr></tbody></table></li></ul><h3 id="web请求测试" tabindex="-1"><a class="header-anchor" href="#web请求测试" aria-hidden="true">#</a> Web请求测试</h3><p>待测试代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> request<span class="token punctuation">,</span> jsonify

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 接收参数</span>
    username <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 校验数据</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>username<span class="token punctuation">,</span> password<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;数据不完整&#39;</span><span class="token punctuation">}</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>resp<span class="token punctuation">)</span>
    <span class="token keyword">if</span> username <span class="token operator">==</span> <span class="token string">&#39;admin&#39;</span> <span class="token keyword">and</span> password <span class="token operator">==</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">}</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>resp<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;用户名或密码不正确&#39;</span><span class="token punctuation">}</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>resp<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest
<span class="token keyword">from</span> login <span class="token keyword">import</span> app
<span class="token keyword">import</span> json

<span class="token keyword">class</span> <span class="token class-name">LoginTest</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;构造单元测试案例&quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;在进行测试之前，先被执行&quot;&quot;&quot;</span>
        <span class="token comment"># 设置测试模式，测试模式打开时，待测试代码出现异常时会抛出异常信息</span>
        <span class="token comment"># app.config[&#39;TESTING&#39;] = True</span>
        app<span class="token punctuation">.</span>testing <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token comment"># 使用Flask的app对象创建Web请求的客户端</span>
        self<span class="token punctuation">.</span>client <span class="token operator">=</span> app<span class="token punctuation">.</span>test_client<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_empty_username_password</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;测试用户名或密码不完整的情况&quot;&quot;&quot;</span>
        <span class="token comment"># 使用客户端模拟发送Web请求，data为携带的数据</span>
        response <span class="token operator">=</span> self<span class="token punctuation">.</span>client<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment"># response是对应视图函数返回的响应对象，data属性是响应体中的数据</span>
        json_data <span class="token operator">=</span> response<span class="token punctuation">.</span>data
        <span class="token comment"># 将返回的json字符串转换为字典</span>
        resp <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>
        <span class="token comment"># 获取返回值后进行断言测试</span>
        self<span class="token punctuation">.</span>assertIn<span class="token punctuation">(</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span> resp<span class="token punctuation">,</span> <span class="token string">&#39;返回数据格式不正确&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>resp<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;返回状态码不正确&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 启动测试</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库测试" tabindex="-1"><a class="header-anchor" href="#数据库测试" aria-hidden="true">#</a> 数据库测试</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest
<span class="token keyword">from</span> author_book <span class="token keyword">import</span> Author<span class="token punctuation">,</span> app<span class="token punctuation">,</span> db

<span class="token keyword">class</span> <span class="token class-name">DatabaseTest</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        app<span class="token punctuation">.</span>testing <span class="token operator">=</span> <span class="token boolean">True</span>
        app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;SQLALCHEMY_DATABASE_URI&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;mysql+pymysql://root:mysql@127.0.0.1:3306/flask_test&#39;</span>
        db<span class="token punctuation">.</span>create_all<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 生成相应的表格</span>

    <span class="token keyword">def</span> <span class="token function">test_add_author</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;测试添加作者到数据库的操作&quot;&quot;&quot;</span>
        author <span class="token operator">=</span> Author<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;zhang&#39;</span><span class="token punctuation">)</span>
        db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>add<span class="token punctuation">(</span>author<span class="token punctuation">)</span>
        db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

        res <span class="token operator">=</span> Author<span class="token punctuation">.</span>query<span class="token punctuation">.</span>filter_by<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;zhang&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertIsNotNone<span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;未查询到数据&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">tearDown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;在测试结束后执行，通常用来进行扫尾工作&quot;&quot;&quot;</span>
        db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 断开和数据库之间的连接</span>
        db<span class="token punctuation">.</span>drop_all<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 清除所有数据</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>采用Gunicorn做wsgi容器，来部署flask程序。Gunicorn（绿色独角兽）是一个Python WSGI的HTTP服务器。从Ruby的独角兽（Unicorn ）项目移植。该Gunicorn服务器与各种Web框架兼容，实现非常简单，轻量级的资源消耗。Gunicorn直接用命令启动，不需要编写配置文件，相对uWSGI要容易很多</p><p>区分几个概念：</p><p>**WSGI：**全称是Web Server Gateway Interface（web服务器网关接口），它是一种规范，它是web服务器和web应用程序之间的接口。它的作用就像是桥梁，连接在web服务器和web应用框架之间</p><p>**uwsgi：**是一种传输协议，用于定义传输信息的类型</p><p>**uWSGI：**是实现了uwsgi协议WSGI的web服务器</p><h3 id="使用gunicorn" tabindex="-1"><a class="header-anchor" href="#使用gunicorn" aria-hidden="true">#</a> 使用Gunicorn</h3><p>web开发中，部署方式大致类似。简单来说，前端代理使用Nginx主要是为了实现分流、转发、负载均衡，以及分担服务器的压力。Nginx部署简单，内存消耗少，成本低</p><p>Nginx既可以做正向代理，也可以做反向代理：</p><p><strong>正向代理</strong>：请求经过代理服务器从局域网发出，然后到达互联网上的服务器。特点：服务端并不知道真正的客户端是谁</p><p><strong>反向代理</strong>：请求从互联网发出，先进入代理服务器，再转发给局域网内的服务器。特点：客户端并不知道真正的服务端是谁</p><p><strong>区别</strong>：正向代理的对象是客户端。反向代理的对象是服务端</p><p><strong>安装gunicorn</strong>：<code>pip install gunicorn</code></p><p><strong>查看命令行选项</strong>：<code>gunicorn -h</code></p><p><strong>运行命令</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gunicorn -w 4 -b 127.0.0.1:5000 -D --access-logfile ./logs/log main:app
# -w：表示运行的进程数（worker）
# -b：表示绑定的ip地址和端口号（bind）
# -D：表示在后台运行
# --access-logfile：表示记录访问的日志文件
# ./logs/log：表示日志的存储位置
# main：表示运行的Flask文件名称
# app：表示Flask程序的实例名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> Nginx配置</h3><p>nginx命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动
sudo /usr/local/nginx/sbin/nginx
# 查看
ps aux | grep nginx
# 停止
sudo /usr/local/nginx/sbin/nginx -s stop
# 重启
sudo /usr/local/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置配置文件：</p><p>打开<code>/usr/local/nginx/conf/nginx.conf</code>文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream flask {
	# 设置gunicorn服务器
	server 10.211.55.2:5000;
	server 10.211.55.2:5001;
}

server {
    # 监听80端口
    listen 80;
    # 本机
    server_name localhost;
    # 默认请求的url
    location / {
        # 将请求转发到gunicorn服务器
        proxy_pass http://flask;
        # 设置请求头，将用户的头信息传递给服务器端
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),i=[o];function c(l,u){return s(),a("div",null,i)}const k=n(p,[["render",c],["__file","04_Flask-蓝图、测试与部署.html.vue"]]);export{k as default};
