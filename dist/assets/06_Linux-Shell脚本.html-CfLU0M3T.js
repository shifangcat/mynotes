import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-VKLC1A-x.js";const l="/mynotes/assets/开机启动顺序-bJdJW_Qt.png",t={},i=e(`<h1 id="linux-shell-脚本" tabindex="-1"><a class="header-anchor" href="#linux-shell-脚本" aria-hidden="true">#</a> Linux Shell 脚本</h1><h2 id="shell-介绍" tabindex="-1"><a class="header-anchor" href="#shell-介绍" aria-hidden="true">#</a> Shell 介绍</h2><h3 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h3><p><strong>Kernel</strong>：Linux 内核主要是为了和硬件打交道</p><p>Shell 是一个用 C 语言编写的命令解释器，它是用户使用 Linux 的桥梁，Shell 既是一种命令语言，又是一种程序设计语言。Shell 是指一种应用程序，其提供了一个界面，用户可以通过这个界面访问操作系统的内核</p><ul><li><p><strong>Shell 两大主流</strong>：</p><ul><li><p><em><strong>sh</strong></em>：</p><p>Bourne shell（sh），Solaris，hpux 默认 Shell</p><p>Bourne again shell（bash），Linux 系统默认 Shell</p></li><li><p><em><strong>csh</strong></em>：</p><p>C shell（csh）</p><p>tc shell（tcsh）</p></li></ul></li></ul><p>使用 <code>#!</code> 声明告诉系统其后路径所指定的程序即是解释此脚本文件的 Shell 程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello word !&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-脚本的执行" tabindex="-1"><a class="header-anchor" href="#shell-脚本的执行" aria-hidden="true">#</a> Shell 脚本的执行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方法一：输入脚本的相对路径或绝对路径，必须是一个可执行的文件</span>
./helloworld.sh
/root/helloworld.sh

<span class="token comment"># 方法二：bash 或 sh + 脚本，当脚本没有 x 权限时，root 用户和文件所有者可以通过该方式执行脚本</span>
<span class="token function">sh</span> helloworld.sh
<span class="token function">sh</span> hi.sh

<span class="token comment"># 方法三：在脚本的路径前再加个 . 或 source</span>
<span class="token builtin class-name">source</span> helloworld.sh
<span class="token builtin class-name">.</span> hi.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>区别</strong>：</p><p><em><strong>1&gt;</strong></em> 方法一和方法二会新开一个进程执行脚本文件，不在同一个进程的变量无法共享</p><p><em><strong>2&gt;</strong></em> 方法三不会新开进程，变量可以共享</p><p><strong>export</strong>：变量引用顺序为：从当前进程查询变量，如果当前进程没有这个变量默认去父进程查询这个变量；如果用 <code>export</code> 修饰变量，那么父进程中的变量对子进程而言是可见的，将来配置 <code>profile</code> 的时候，所有变量前必须加 <code>export</code></p></li></ul><h2 id="shell-基础入门" tabindex="-1"><a class="header-anchor" href="#shell-基础入门" aria-hidden="true">#</a> Shell 基础入门</h2><h3 id="shell-变量" tabindex="-1"><a class="header-anchor" href="#shell-变量" aria-hidden="true">#</a> Shell 变量</h3><ul><li><p><strong>变量的定义</strong>：</p><p><em><strong>1&gt;</strong></em> 定义变量时，变量名不加美元符号 <code>$</code></p><p><em><strong>2&gt;</strong></em> 命名只能使用英文字母、数字和下划线，不能以数字开头</p><p><em><strong>3&gt;</strong></em> 中间不能有空格，不能使用标点符号</p><p><em><strong>4&gt;</strong></em> 不能使用 <code>bash</code> 关键字做变量名（可用 <code>help</code> 命令查看保留关键字）</p></li><li><p><strong>变量的类型</strong>：</p><p><strong>局部变量</strong>：局部变量在脚本或命令中定义，仅在当前 Shell 实例中有效，其他 Shell 启动的程序不能访问局部变量</p><p><strong>环境变量</strong>：所有的程序，包括 Shell 启动的程序都能访问环境变量，有些程序需要环境变量来保证其运行</p><p><strong>Shell 变量</strong>：由 Shell 程序设置的特殊变量，Shell 中有一部分是环境变量，有一部分是局部变量</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 变量的声明</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;zhangsan&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> /etc<span class="token variable">\`</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> /etc<span class="token variable">)</span></span>

<span class="token comment"># 变量的调用</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$name</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${name}</span>

<span class="token comment"># 只读变量，不能被修改和删除</span>
<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&quot;https://www.google.com&quot;</span>
<span class="token builtin class-name">readonly</span> url  <span class="token comment"># 标志 url 为只读变量</span>
<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&quot;https://www.runoob.com&quot;</span>

<span class="token comment"># 删除变量</span>
<span class="token builtin class-name">unset</span> name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-字符串" tabindex="-1"><a class="header-anchor" href="#shell-字符串" aria-hidden="true">#</a> Shell 字符串</h3><p>Shell 中的字符串可以用单引号、双引号，也可以不用引号</p><p>单引号里的任何字符都会原样输出，其中的变量是无效的</p><p>单引号字符串中不能出现单独一个的单引号，但是可以成对出现，作为字符串拼接使用</p><p>双引号中可以有变量，会输出变量的实际值；双引号里可以出现转义字符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 声明字符串</span>
<span class="token assign-left variable">str1</span><span class="token operator">=</span><span class="token string">&quot;hello world 1&quot;</span>
<span class="token assign-left variable">str2</span><span class="token operator">=</span><span class="token string">&#39;hello world 2&#39;</span>

<span class="token comment"># 字符串拼接：双引号</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;zhangsan&quot;</span>
<span class="token assign-left variable">name1</span><span class="token operator">=</span><span class="token string">&quot;hello, &quot;</span><span class="token variable">$name</span><span class="token string">&quot; world&quot;</span>  <span class="token comment"># hello, zhangsan world</span>
<span class="token assign-left variable">name2</span><span class="token operator">=</span><span class="token string">&quot;hello, <span class="token variable">\${name}</span> world&quot;</span>  <span class="token comment"># hello, zhangsan world</span>

<span class="token comment"># 字符串拼接：单引号</span>
<span class="token assign-left variable">passwd</span><span class="token operator">=</span><span class="token string">&#39;abcd&#39;</span>
<span class="token assign-left variable">passwd1</span><span class="token operator">=</span><span class="token string">&#39;hello, &#39;</span><span class="token variable">$passwd</span><span class="token string">&#39; world&#39;</span>  <span class="token comment"># hello, abcd world</span>
<span class="token assign-left variable">passwd2</span><span class="token operator">=</span><span class="token string">&#39;hello, \${passwd} world&#39;</span>  <span class="token comment"># hello, \${passwd} world</span>

<span class="token comment"># 字符串的长度</span>
<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token string">&quot;abcd&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>s}</span>     <span class="token comment"># 输出 4</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${s<span class="token operator">:</span>1<span class="token operator">:</span>2}</span>  <span class="token comment"># 输出 bc，从索引 1 开始，截取 2 位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-数组" tabindex="-1"><a class="header-anchor" href="#shell-数组" aria-hidden="true">#</a> Shell 数组</h3><p><code>bash</code> 支持一维数组，不支持多维数组，不限定数组的大小</p><p>数组中元素的下标由 0 开始，获取数组中的元素要使用下标，下标可以是整数或算术表达式，值应当大于或等于 0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义数组：用括号来表示数组，数组元素用空格分割开</span>
数组名<span class="token operator">=</span><span class="token punctuation">(</span>值1 值2 <span class="token punctuation">..</span>. 值n<span class="token punctuation">)</span>
<span class="token assign-left variable">names</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span> <span class="token string">&quot;tim&quot;</span> <span class="token string">&quot;bob&quot;</span> <span class="token string">&quot;jack&quot;</span> <span class="token string">&quot;jerry&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取数组中的元素：\${数组名[下标]}</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">\${names<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${names<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${names<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>  <span class="token comment"># 使用 @ 或 * 获取数组中的所有元素</span>

<span class="token comment"># 数组的长度</span>
<span class="token assign-left variable">length1</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>names<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token assign-left variable">length2</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>names<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>

<span class="token comment"># 数组中元素的长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>names<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关联数组" tabindex="-1"><a class="header-anchor" href="#关联数组" aria-hidden="true">#</a> 关联数组</h3><p>Shell 支持关联数组，可以使用任意的字符串、或者整数作为下标来访问数组元素</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义关联数组</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">site</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.google.com&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;baidu&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${site<span class="token punctuation">[</span>&quot;google&quot;<span class="token punctuation">]</span>}</span>  <span class="token comment"># 获取关联数组中某个元素的值</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${site<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>         <span class="token comment"># 获取关联数组中所有元素的值</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">!</span>site<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>        <span class="token comment"># 获取关联数组中所有元素的键</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>site<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>        <span class="token comment"># 获取关联数组中键值对的个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-的注释" tabindex="-1"><a class="header-anchor" href="#shell-的注释" aria-hidden="true">#</a> Shell 的注释</h3><p>Shell 中只有单行注释，没有多行注释，以 <code>#</code> 开头设置注释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这是一个注释</span>

<span class="token comment"># 特殊的多行注释</span>
:<span class="token operator">&lt;&lt;</span><span class="token string">abc
这是多行注释的内容
这是多行注释的内容
abc</span>

:<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>
这是多行注释的内容
这是多行注释的内容
<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-参数传递" tabindex="-1"><a class="header-anchor" href="#shell-参数传递" aria-hidden="true">#</a> Shell 参数传递</h3><p>执行 Shell 脚本时，向脚本传递参数，脚本获取参数的格式为：<code>$n</code>，<code>n</code> 表示第几个参数</p><table><thead><tr><th style="text-align:left;"><strong>参数处理</strong></th><th style="text-align:left;"><strong>参数说明</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>$#</code></td><td style="text-align:left;">传递的参数的个数</td></tr><tr><td style="text-align:left;"><code>$*</code></td><td style="text-align:left;">以一个字符串显示传递的所有参数</td></tr><tr><td style="text-align:left;"><code>$$</code></td><td style="text-align:left;">脚本运行的进程的 ID 号</td></tr><tr><td style="text-align:left;"><code>$!</code></td><td style="text-align:left;">后台运行的最后一个进程的 ID 号</td></tr><tr><td style="text-align:left;"><code>$?</code></td><td style="text-align:left;">显示最后命令的退出状态。0 表示没有错误，其他值表示有错误</td></tr><tr><td style="text-align:left;"><code>$0</code></td><td style="text-align:left;">执行的文件名</td></tr></tbody></table><h2 id="shell-的运算符" tabindex="-1"><a class="header-anchor" href="#shell-的运算符" aria-hidden="true">#</a> Shell 的运算符</h2><h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h3><p><code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>、<code>%</code>(取余)、<code>=</code>(赋值)、<code>==</code>(相等)、<code>!=</code>(不相等)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a + $b<span class="token variable">\`</span></span>   <span class="token comment"># expr 是一款表达式计算工具，使用它能完成表达式的求值操作</span>
<span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span>a + b<span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a <span class="token punctuation">\\</span>* $b<span class="token variable">\`</span></span>  <span class="token comment"># 使用 expr 时，* 需要使用 \\ 进行转义</span>
<span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span>a * b<span class="token punctuation">]</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">!=</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>  <span class="token comment"># 与左右 [] 之间需要用空格隔开</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a != b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h3><p>关系运算符只支持数字，不支持字符串</p><p><code>-eq</code>(相等)、<code>-ne</code>(不相等)、<code>-gt</code>(大于)、<code>-lt</code>(小于)、<code>-ge</code>(大于等于)、<code>-le</code>(小于等于)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-eq</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>  <span class="token comment"># 与左右 [] 之间需要用空格隔开</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 不等于 b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符" aria-hidden="true">#</a> 布尔运算符</h3><p><code>-a</code>(与运算)、<code>-o</code>(或运算)、<code>!</code>(非运算)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token number">100</span> <span class="token parameter variable">-a</span> <span class="token variable">$b</span> <span class="token parameter variable">-gt</span> <span class="token number">15</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 100，b 大于 15&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 不小于100 或者 b 不大于 15&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p><code>&amp;&amp;</code>(和、且 and)、<code>||</code>(或者 or)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token number">100</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$b</span> <span class="token parameter variable">-gt</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 100 并且 b 大于 100&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 不小于100 或者 b 不大于 100&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串运算符" tabindex="-1"><a class="header-anchor" href="#字符串运算符" aria-hidden="true">#</a> 字符串运算符</h3><p><code>=</code>(检测字符串是否相等)、<code>!=</code>(检测字符串是否不等)、<code>-z</code>(检测字符串长度是否为 0)、<code>-n</code>(检测字符串长度是否不为 0)、<code>$</code>(检测字符串是否为空)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">&quot;abc&quot;</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token string">&quot;xyz&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 不等于 b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件测试运算符" tabindex="-1"><a class="header-anchor" href="#文件测试运算符" aria-hidden="true">#</a> 文件测试运算符</h3><p><code>-r</code>(文件是否可读)、<code>-w</code>(文件是否可写)、<code>-x</code>(文件是否可执行)、<code>-f</code>(文件是否是文件)、<code>-d</code>(文件是否为文件夹)、<code>-s</code>(文件是否为空)、<code>-e</code>(文件是否存在)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;/root/hi.sh&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;文件可读&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;文件不可读&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echo-打印数据" tabindex="-1"><a class="header-anchor" href="#echo-打印数据" aria-hidden="true">#</a> echo 打印数据</h2><p>Shell 的 <code>echo</code> 指令用于字符串的输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>        <span class="token comment"># 打印普通字符串</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>hello world<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>    <span class="token comment"># 打印转义字符</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;hello <span class="token entity" title="\\n">\\n</span> world&quot;</span>  <span class="token comment"># 打印换行</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;hello <span class="token entity" title="\\c">\\c</span>&quot;</span>        <span class="token comment"># 打印不换行</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>               <span class="token comment"># 显示执行结果</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token function">file</span>      <span class="token comment"># 向文件中追加内容</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&gt;</span> <span class="token function">file</span>       <span class="token comment"># 向文件中覆盖写入</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;zhangsan&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello <span class="token variable">$name</span>&quot;</span>        <span class="token comment"># 打印变量的值</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;hello $name \\&quot;&#39;</span>     <span class="token comment"># 原样打印字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-命令" tabindex="-1"><a class="header-anchor" href="#test-命令" aria-hidden="true">#</a> test 命令</h2><p>Shell 中的 <code>test</code> 命令用于检查某个条件是否成立，可以进行数值、字符串、文件三个方面的测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> $<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token parameter variable">-eq</span> $<span class="token punctuation">[</span>b<span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;两个数相等&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;两个数不相等&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-流程控制" tabindex="-1"><a class="header-anchor" href="#shell-流程控制" aria-hidden="true">#</a> Shell 流程控制</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;没有符合的条件&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h3><p>Shell 中的 <code>case</code> 语句为多选择语句，可以用 <code>case</code> 语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;输入 abc 或者 xyz：&quot;</span>
<span class="token builtin class-name">read</span> s  <span class="token comment"># read 会将输入的内容读取到变量中</span>
<span class="token keyword">case</span> <span class="token variable">$s</span> <span class="token keyword">in</span>
    abc<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输入的是：abc&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>  <span class="token comment"># 分号 ; 的作用是防止穿透</span>
    xyz<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;你输入的是：xyz&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;你没有输入 abc 或者 xyz&quot;</span>  <span class="token comment"># * 的作用相当于 if 中的 else</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><p>当变量值在列表里，<code>for</code> 循环即执行一次所有命令，使用变量名获取列表中的当前取值</p><p>命令可为任何有效的 Shell 命令和语句，<code>in</code> 列表可以包含替换、字符串和文件名</p><p><code>in</code> 列表是可选的，如果不用它，<code>for</code> 循环使用命令行的位置参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;the value is: <span class="token variable">$i</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&#39;this is a string&#39;</span>, <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><p><code>while</code> 循环用于不断执行一系列命令，也用于从输入文件中读取数据；命令通常为测试条件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token variable"><span class="token punctuation">((</span> $i<span class="token operator">&lt;=</span><span class="token number">5</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
	<span class="token builtin class-name">let</span> <span class="token string">&quot;int++&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># while true：用于无限循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break-和-continue" tabindex="-1"><a class="header-anchor" href="#break-和-continue" aria-hidden="true">#</a> break 和 continue</h3><p><code>break</code> 命令允许跳出所有循环（终止执行后面的所有循环）</p><p><code>continue</code> 命令仅仅跳出当前循环，不会跳出所有循环</p><h2 id="shell-函数" tabindex="-1"><a class="header-anchor" href="#shell-函数" aria-hidden="true">#</a> Shell 函数</h2><p>Linux Shell 可以让用户定义函数，然后在 Shell 脚本中可以随便调用</p><p>可以带 <code>function fun()</code> 定义，也可以直接 <code>fun()</code> 定义，不带任何参数</p><p><strong>参数返回</strong>：可以加 <code>return</code> 返回，如果不加，将以最后一条命令的执行情况（<code>$?</code>）作为返回值；<code>return</code> 后面只能跟 0-255 的数值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 无参数无返回值函数的定义</span>
<span class="token function-name function">demoFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 调用函数</span>
demoFun

<span class="token comment"># 有返回值无参数函数的定义</span>
<span class="token function-name function">funWithReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;请输入第一个数字：&quot;</span>
	<span class="token builtin class-name">read</span> num1
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;请输入第二个数字：&quot;</span>
	<span class="token builtin class-name">read</span> num2
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;两个数字分别 <span class="token variable">$num1</span> 和 <span class="token variable">$num2</span>&quot;</span>
	<span class="token builtin class-name">return</span> <span class="token variable"><span class="token variable">$((</span>$num1<span class="token operator">+</span>$num2<span class="token variable">))</span></span>
<span class="token punctuation">}</span>
<span class="token comment"># 调用函数</span>
funWithReturn
<span class="token builtin class-name">echo</span> <span class="token string">&quot;两个数字的和为 <span class="token variable">$?</span>&quot;</span>  <span class="token comment"># 函数返回值在调用该函数后通过 $? 来获得</span>

<span class="token comment"># 有参数无返回值函数的定义</span>
<span class="token function-name function">funWithParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数1为：<span class="token variable">$1</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数2为：<span class="token variable">$2</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数3为：<span class="token variable">\${3}</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数总个数为：<span class="token variable">$#</span>&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;作为一个字符串输出所有参数：<span class="token variable">$*</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 调用函数</span>
funWithParam a b c d
<span class="token comment"># 注：$10 不能获取第十个参数，获取第十个参数需要使用 \${10}。当 n&gt;=10 时，需要使用 \${n} 来获取参数</span>

<span class="token comment"># 有参数有返回值函数的定义</span>
<span class="token function-name function">funWithParamReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> 和 <span class="token variable">$2</span> 的和为：&quot;</span>
	<span class="token builtin class-name">return</span> <span class="token variable"><span class="token variable">$((</span>$<span class="token number">1</span><span class="token operator">+</span>$<span class="token number">2</span><span class="token variable">))</span></span>
<span class="token punctuation">}</span>
<span class="token comment"># 调用函数</span>
funWithParamReturn <span class="token number">1</span> <span class="token number">2</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>  <span class="token comment"># 获取返回值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统任务设置" tabindex="-1"><a class="header-anchor" href="#系统任务设置" aria-hidden="true">#</a> 系统任务设置</h2><h3 id="系统启动流程" tabindex="-1"><a class="header-anchor" href="#系统启动流程" aria-hidden="true">#</a> 系统启动流程</h3><img src="`+l+`" alt="开机启动顺序" style="zoom:50%;"><h3 id="系统服务" tabindex="-1"><a class="header-anchor" href="#系统服务" aria-hidden="true">#</a> 系统服务</h3><p>可以使用 <code>chkconfig</code> 命令查看当前虚拟机的服务</p><p>通过查看可以得知不同的级别对应到每一个服务确定本次开机自动启动</p><p>开机结束后，需要使用 <code>service</code>（CentOS 6）或 <code>Systemctl</code>（CentOS 7）命令控制服务的开启或者关闭</p><h3 id="开机自启动服务" tabindex="-1"><a class="header-anchor" href="#开机自启动服务" aria-hidden="true">#</a> 开机自启动服务</h3><h4 id="rc-local" tabindex="-1"><a class="header-anchor" href="#rc-local" aria-hidden="true">#</a> rc.local</h4><p><em><strong>1&gt;</strong></em> 创建脚本文件，并赋予脚本文件执行权限</p><p><em><strong>2&gt;</strong></em> 编辑 <code>/etc/rc.d/rc.local</code> 文件，向其中添加执行脚本的命令，如：<code>source /root/initdate.sh</code></p><p><em><strong>3&gt;</strong></em> 赋予 <code>rc.local</code> 执行权限</p><p><em><strong>4&gt;</strong></em> 重启虚拟机，脚本将会被自动调用执行</p><h4 id="chkconfig" tabindex="-1"><a class="header-anchor" href="#chkconfig" aria-hidden="true">#</a> chkconfig</h4><p><em><strong>1&gt;</strong></em> 创建脚本文件，在文件开头使用 <code>chkconfig</code> 声明</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token comment">#chkconfig: 2345 88 99</span>
<span class="token comment">#description: auto_run</span>

<span class="token comment"># 脚本内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>2&gt;</strong></em> 赋予脚本文件执行权限</p><p><em><strong>3&gt;</strong></em> 将脚本文件拷贝到 <code>/etc/init.d/</code> 目录下</p><p><em><strong>4&gt;</strong></em> 运行如下命令添加服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> /etc/init.d/脚本文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>5&gt;</strong></em> 重启虚拟机，脚本将会被自动调用执行</p><h2 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status crond.service  <span class="token comment"># 查看定时服务是否启动</span>
<span class="token function">service</span> crond start  <span class="token comment"># 开启定时服务</span>
<span class="token function">service</span> crond stop   <span class="token comment"># 关闭定时服务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-e</span>           <span class="token comment"># 编辑任务文件</span>
<span class="token function">crontab</span> <span class="token parameter variable">-l</span>           <span class="token comment"># 查看定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-r</span>           <span class="token comment"># 清除定时任务</span>
* * * * * <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;&gt;</span> test.txt  <span class="token comment"># 配置定时任务</span>
    <span class="token comment"># 每个 * 之间要空一个格</span>
    <span class="token comment"># 第一个 * 表示分 0-59</span>
    <span class="token comment"># 第二个 * 表示时 0-23</span>
    <span class="token comment"># 第三个 * 表示日 1-31</span>
    <span class="token comment"># 第四个 * 表示月 1-12</span>
    <span class="token comment"># 第五个 * 表示周 0-6（0 表示周日）</span>
    <span class="token comment"># * * * * * 表示每分钟做一次定时任务的内容</span>
    <span class="token comment"># *：表示“每”，可以代表每分钟、每小时、每天等</span>
    <span class="token comment"># -：表示区间，是一个范围</span>
    <span class="token comment"># ,：是分割时段</span>
    <span class="token comment"># /n：可以看成除法，表示每隔 n 分钟/小时/天等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-在工作中的使用" tabindex="-1"><a class="header-anchor" href="#shell-在工作中的使用" aria-hidden="true">#</a> Shell 在工作中的使用</h2><h3 id="定时备份" tabindex="-1"><a class="header-anchor" href="#定时备份" aria-hidden="true">#</a> 定时备份</h3><blockquote><p>每天凌晨 2 点，把工作目录 /home/1 中的文件打包到 /home/backup 目录下，并以日期命名（如：20220906.tar.gz）</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 脚本内容</span>
<span class="token comment">#! /bin/sh</span>

<span class="token assign-left variable">workdir</span><span class="token operator">=</span>/home/1
<span class="token assign-left variable">storagedir</span><span class="token operator">=</span>/home/backup
<span class="token assign-left variable">date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y%m%d&quot;</span><span class="token variable">)</span></span>

<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> <span class="token variable">$storagedir</span>/<span class="token variable">$date</span>.tar.gz <span class="token variable">$workdir</span>

<span class="token comment"># 设置定时任务</span>
<span class="token number">0</span> <span class="token number">2</span> * * * <span class="token function">sh</span> /home/905/work01.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询报错信息" tabindex="-1"><a class="header-anchor" href="#查询报错信息" aria-hidden="true">#</a> 查询报错信息</h3><blockquote><p>将 hadoop-root-datanode-hadoop.log 文件中的报错信息覆盖写入到 home/error 中，然后判断该文件是否为空。为空，则输出“该程序运行没有报错！”；不为空，则输出“该程序运行过程中有报错，报错信息保存在 /home/error 中”</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>

<span class="token assign-left variable">logdir</span><span class="token operator">=</span>/usr/local/hadoop/logs
<span class="token assign-left variable">storagefile</span><span class="token operator">=</span>/home/error

<span class="token function">cat</span> <span class="token variable">$logdir</span>/hadoop-root-datanode-hadoop.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> <span class="token operator">&gt;</span> <span class="token variable">$storagefile</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token variable">$storagefile</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;该程序运行过程中有报错，报错信息保存在 <span class="token variable">$storagefile</span> 中&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;该程序运行没有报错！&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-操作-hive" tabindex="-1"><a class="header-anchor" href="#shell-操作-hive" aria-hidden="true">#</a> Shell 操作 Hive</h3><blockquote><p>使用 Shell 脚本操作 Hive，实现删除 comm 为 null 的员工的信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>

hive <span class="token parameter variable">-e</span> <span class="token string">&quot;insert overwrite table yzd.emp select * from yzd.emp where comm is not null&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-脚本调用存储过程" tabindex="-1"><a class="header-anchor" href="#shell-脚本调用存储过程" aria-hidden="true">#</a> Shell 脚本调用存储过程</h3><p>MySQL 中定义和使用存储过程：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 定义存储过程</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">delimiter</span> $$
mysql<span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">procedure</span> p_aaa<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">begin</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token variable">@a</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token variable">@b</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">while</span> <span class="token variable">@a</span> <span class="token operator">&lt;=</span> <span class="token variable">@b</span> 
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">do</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> t_id <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token variable">@a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token variable">@a</span><span class="token operator">=</span><span class="token variable">@a</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> $$
mysql<span class="token operator">&gt;</span> <span class="token keyword">delimiter</span> <span class="token punctuation">;</span>

<span class="token comment"># 调用存储过程</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">call</span> p_aaa<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 删除存储过程</span>
<span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> p_aaa<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shell 脚本调用 MySQL 的存储过程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p1234</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;call test.p_aaa()&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120),o=[i];function p(c,r){return n(),a("div",null,o)}const v=s(t,[["render",p],["__file","06_Linux-Shell脚本.html.vue"]]);export{v as default};
