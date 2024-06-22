import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-VKLC1A-x.js";const e={},p=t(`<h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1><h2 id="字符串的驻留机制" tabindex="-1"><a class="header-anchor" href="#字符串的驻留机制" aria-hidden="true">#</a> 字符串的驻留机制</h2><p>字符串：在 Python 中，字符串是基本数据类型，是一个<em><strong>不可变的字符序列</strong></em></p><p><strong>字符串的驻留机制</strong>：</p><p>仅保存一份相同且不可变字符串的方法，不同的值被存放在字符串的驻留中，Python的驻留机制对相同的字符串只保留一份拷贝，后续创建相同字符串时，不会开辟新空间，而是把该字符串的地址赋给新创建的变量</p><p>sys 中的 intern 方法强制 2 个字符串指向同一个对象</p><p><strong>驻留机制的几种情况（交互模式下）</strong>：</p><p><em><strong>1&gt;</strong></em> 字符串的长度为 0 或 1 时</p><p><em><strong>2&gt;</strong></em> 符合标识符的字符串</p><p><em><strong>3&gt;</strong></em> 字符串只能在编译时进行驻留，而非运行时</p><p><em><strong>4&gt;</strong></em> [-5, 256] 之间的整数数字</p><p><strong>字符串驻留机制的优缺点</strong>：</p><p><em><strong>1&gt;</strong></em> 当需要值相同的字符串时，可以直接从字符串池里拿来使用，避免频繁地创建和销毁，提升效率和节约内存，因此拼接字符串和修改字符串是会比较影响性能的</p><p><em><strong>2&gt;</strong></em> 在需要进行字符串拼接时建议使用 <code>str</code> 类型的 <code>join</code> 方法，而非 <code>+</code>，因为 <code>join</code> 方法是先计算出所有字符中的长度，然后再拷贝，只 <code>new</code> 一次对象，效率要比 <code>+</code> 效率高</p><h2 id="字符串的常用操作" tabindex="-1"><a class="header-anchor" href="#字符串的常用操作" aria-hidden="true">#</a> 字符串的常用操作</h2><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>index()</code></td><td style="text-align:left;">查找子串第一次出现的位置，如果查找的子串不存在，抛出 <code>ValueError</code></td></tr><tr><td style="text-align:left;"><code>rindex()</code></td><td style="text-align:left;">查找子串最后一次出现的位置，如果查找的子串不存在，抛出 <code>ValueError</code></td></tr><tr><td style="text-align:left;"><code>find()</code></td><td style="text-align:left;">查找子串第一次出现的位置，如果查找的子串不存在，则返回 <code>-1</code></td></tr><tr><td style="text-align:left;"><code>rfind()</code></td><td style="text-align:left;">查找子串最后一次出现的位置，如果查找的子串不存在，则返回 <code>-1</code></td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&#39;hello hello&#39;</span>
s<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;he&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># 0</span>
s<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;he&#39;</span><span class="token punctuation">)</span>    <span class="token comment"># 0</span>
s<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span><span class="token string">&#39;he&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 6</span>
s<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;he&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># 6</span>
s<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;k&#39;</span><span class="token punctuation">)</span>    <span class="token comment"># ValueError: substring not found</span>
s<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;k&#39;</span><span class="token punctuation">)</span>     <span class="token comment"># -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大小写转换" tabindex="-1"><a class="header-anchor" href="#大小写转换" aria-hidden="true">#</a> 大小写转换</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>upper()</code></td><td style="text-align:left;">把字符串中所有字符都转成大写字母</td></tr><tr><td style="text-align:left;"><code>lower()</code></td><td style="text-align:left;">把字符串中所有字符都转成小写字母</td></tr><tr><td style="text-align:left;"><code>swapcase()</code></td><td style="text-align:left;">把字符串中所有大写字母转成小写字母，所有小写字母转成大写字母</td></tr><tr><td style="text-align:left;"><code>capitalize()</code></td><td style="text-align:left;">把第一个字母转换成大写，其余字母转换成小写</td></tr><tr><td style="text-align:left;"><code>title()</code></td><td style="text-align:left;">把每个单词的第一个字母转换成大写，其余字母转换成小写</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&#39;heLLo, pyTHon&#39;</span>
s<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># &#39;HELLO, PYTHON&#39;</span>
s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># &#39;hello, python&#39;</span>
s<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># &#39;HEllO, PYthON&#39;</span>
s<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;Hello, python&#39;</span>
s<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># &#39;Hello, Python&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐" aria-hidden="true">#</a> 对齐</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>center()</code></td><td style="text-align:left;">居中对齐，第 1 个参数指定宽度，第 2 个参数指定填充符，第 2 个参数是可选的，默认是空格，如果设置宽度小于实际宽度则返回原字符串</td></tr><tr><td style="text-align:left;"><code>ljust()</code></td><td style="text-align:left;">左对齐，第 1 个参数指定宽度，第 2 个参数指定填充符，第 2 个参数是可选的，默认是空格，如果设置宽度小于实际宽度则返回原字符串</td></tr><tr><td style="text-align:left;"><code>rjust()</code></td><td style="text-align:left;">右对齐，第 1 个参数指定宽度，第 2 个参数指定填充符，第 2 个参数是可选的，默认是空格，如果设置宽度小于实际宽度则返回原字符串</td></tr><tr><td style="text-align:left;"><code>zfill()</code></td><td style="text-align:left;">右对齐，左边用 0 填充，该方法只接收一个参数，用于指定字符串的宽度，如果指定的宽度小于等于字符串的长度，返回字符串本身</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&#39;demo&#39;</span>
s<span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;*demo*&#39;</span>
s<span class="token punctuation">.</span>ljust<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># &#39;demo**&#39;</span>
s<span class="token punctuation">.</span>rjust<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># &#39;**demo&#39;</span>
s<span class="token punctuation">.</span>zfill<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>        <span class="token comment"># &#39;00demo&#39;</span>
<span class="token string">&#39;-8910&#39;</span><span class="token punctuation">.</span>zfill<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;-0008910&#39;</span>
<span class="token string">&#39;+234&#39;</span><span class="token punctuation">.</span>zfill<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>   <span class="token comment"># &#39;+0000234&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="劈分-分隔" tabindex="-1"><a class="header-anchor" href="#劈分-分隔" aria-hidden="true">#</a> 劈分/分隔</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>split()</code></td><td style="text-align:left;"><em><strong>1&gt;</strong></em> 从字符串的左边开始劈分，默认的分隔符是空格，返回的值是一个列表<br><em><strong>2&gt;</strong></em> 通过参数 <code>sep</code> 指定劈分字符串时的分隔符<br><em><strong>3&gt;</strong></em> 通过参数 <code>maxsplit</code> 指定劈分字符串时的最大劈分次数，在经过最大次劈分之后，剩余的字符串会单独做为一部分</td></tr><tr><td style="text-align:left;"><code>rsplit()</code></td><td style="text-align:left;"><em><strong>1&gt;</strong></em> 从字符串的右边开始劈分，默认的分隔符是空格，返回的值是一个列表<br><em><strong>2&gt;</strong></em> 通过参数 <code>sep</code> 指定劈分字符串时的分隔符<br><em><strong>3&gt;</strong></em> 通过参数 <code>maxsplit</code> 指定劈分字符串时的最大劈分次数，在经过最大次劈分之后，剩余的字符串会单独做为一部分</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&#39;hello world python&#39;</span>
s1<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># [&#39;hello&#39;, &#39;world&#39;, &#39;python&#39;]</span>
s1<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [&#39;hello&#39;, &#39;world&#39;, &#39;python&#39;]</span>

s2 <span class="token operator">=</span> <span class="token string">&#39;hello;world;python&#39;</span>
s2<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> maxsplit<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># [&#39;hello&#39;, &#39;world;python&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串判断" tabindex="-1"><a class="header-anchor" href="#字符串判断" aria-hidden="true">#</a> 字符串判断</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>isidentifier()</code></td><td style="text-align:left;">判断字符串是不是合法的标识符（字母、数字、下划线）</td></tr><tr><td style="text-align:left;"><code>isspace()</code></td><td style="text-align:left;">判断字符串是否全部由空白字符串（回车、换行、水平制表符）组成</td></tr><tr><td style="text-align:left;"><code>isalpha()</code></td><td style="text-align:left;">判断字符串是否全由字母组成</td></tr><tr><td style="text-align:left;"><code>isdecimal()</code></td><td style="text-align:left;">判断字符串是否全由十进制的数字组成</td></tr><tr><td style="text-align:left;"><code>isnumeric()</code></td><td style="text-align:left;">判断字符串是否全部由数字组成</td></tr><tr><td style="text-align:left;"><code>isalnum()</code></td><td style="text-align:left;">判断字符串是否全部由字母和数字组成</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&#39;hello张三&#39;</span>
s<span class="token punctuation">.</span>isidentifier<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
s<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># False</span>
s<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># True，汉字默认为字母</span>
s<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># False</span>
s<span class="token punctuation">.</span>isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># False</span>
s<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换与合并" tabindex="-1"><a class="header-anchor" href="#替换与合并" aria-hidden="true">#</a> 替换与合并</h3><table><thead><tr><th style="text-align:left;"><strong>方法</strong></th><th style="text-align:left;"><strong>作用</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>replace()</code></td><td style="text-align:left;">替换字符串，第 1 个参数指定被替换的子字符串，第 2 个参数指定替换子字符串的字符串，第 3 个参数指定最大替换次数<br>返回替换后得到的字符串，替换前的字符串不发生变化</td></tr><tr><td style="text-align:left;"><code>join()</code></td><td style="text-align:left;">将列表或元组中的字符串合并成一个字符串</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 替换</span>
s <span class="token operator">=</span> <span class="token string">&#39;hello python, python, python&#39;</span>
s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">)</span>     <span class="token comment"># &#39;hello java, java, java&#39;</span>
s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;hello java, java, python&#39;</span>

<span class="token comment"># 合并</span>
t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>t<span class="token punctuation">)</span>   <span class="token comment"># &#39;hellopythonjava&#39;</span>
<span class="token string">&#39; &#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>t<span class="token punctuation">)</span>  <span class="token comment"># &#39;hello python java&#39;</span>
<span class="token string">&#39;*&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>t<span class="token punctuation">)</span>  <span class="token comment"># &#39;hello*python*java&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的比较" tabindex="-1"><a class="header-anchor" href="#字符串的比较" aria-hidden="true">#</a> 字符串的比较</h3><p><strong>运算符</strong>：<code>&gt;</code>、<code>&gt;=</code>、<code>&lt;</code>、<code>&lt;=</code>、<code>==</code>、<code>!=</code></p><p><strong>比较规则</strong>：首先比较两个字符串中的第一个字符，如果相等则继续比较下一个字符，依次比较下去，直到两个字符串中的字符不相等时，其比较结果就是两个字符串的比较结果，两个字符串中的所有后续字符将不再被比较</p><p><strong>比较原理</strong>：两个字符进行比较时，比较的是其 <code>ordinal value</code>（原始值），调用内置函数 <code>ord()</code> 可以得到指定字符的 <code>ordinal value</code>。与内置函数 <code>ord()</code> 对应的是内置函数 <code>chr()</code>，调用内置函数 <code>chr()</code> 时，指定 <code>ordinal value</code> 可以得到其对应的字符</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&#39;apple&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;app&#39;</span>  <span class="token comment"># True</span>
<span class="token string">&#39;123&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;4&#39;</span>      <span class="token comment"># False</span>
<span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>         <span class="token comment"># 49</span>
<span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span>         <span class="token comment"># 52</span>
<span class="token string">&#39;a&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;b&#39;</span>        <span class="token comment"># False</span>
<span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>         <span class="token comment"># 97</span>
<span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>         <span class="token comment"># 98</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>==</code> 与 <code>is</code> 的区别</strong>：</p><p><code>==</code> 比较的是 <code>value</code></p><p><code>is</code> 比较的是 <code>id</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
a <span class="token operator">==</span> b  <span class="token comment"># True</span>
a <span class="token keyword">is</span> b  <span class="token comment"># True</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>   <span class="token comment"># 140709256431312</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>   <span class="token comment"># 140709256431312</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的切片" tabindex="-1"><a class="header-anchor" href="#字符串的切片" aria-hidden="true">#</a> 字符串的切片</h3><p>字符串是不可变类型，不具备增删改等操作，切片将产生新的对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&#39;hello python&#39;</span>
s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>     <span class="token comment"># &#39;ell&#39;</span>
s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>      <span class="token comment"># &#39;lo python&#39;</span>
s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>      <span class="token comment"># &#39;hello&#39;</span>
s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment"># &#39;eoyo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化字符串" tabindex="-1"><a class="header-anchor" href="#格式化字符串" aria-hidden="true">#</a> 格式化字符串</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 方法一：% 占位符</span>
name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
age <span class="token operator">=</span> <span class="token number">20</span>
<span class="token string">&#39;我叫%s，今年%d岁了&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token string">&#39;我叫%s，今年%d了，%s回家，%d号开学&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;明天&#39;</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span>

<span class="token comment"># 方法二：{} 占位符</span>
<span class="token string">&#39;我叫{0}，今年{1}岁&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token string">&#39;我叫{0}，今年{1}了，{2}回家，{3}号开学，他也叫{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;明天&#39;</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span>

<span class="token comment"># 方法三：f-string 方法</span>
<span class="token string-interpolation"><span class="token string">f&#39;我叫</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">，今年</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">岁了&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整数和浮点数的格式化" tabindex="-1"><a class="header-anchor" href="#整数和浮点数的格式化" aria-hidden="true">#</a> 整数和浮点数的格式化</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用 %</span>
<span class="token string">&#39;%d&#39;</span> <span class="token operator">%</span> <span class="token number">99</span>             <span class="token comment"># &#39;99&#39;</span>
<span class="token string">&#39;%5d&#39;</span> <span class="token operator">%</span> <span class="token number">99</span>            <span class="token comment"># &#39;   99&#39;，输出占位 5 个的字符串，不够在前面用空格补齐</span>
<span class="token string">&#39;%2d&#39;</span> <span class="token operator">%</span> <span class="token number">1234</span>          <span class="token comment"># &#39;1234&#39;，原长度超出设置的长度，则输出原字符串不变</span>
<span class="token string">&#39;%f&#39;</span> <span class="token operator">%</span> <span class="token number">3.1415926</span>      <span class="token comment"># &#39;3.141593&#39;，默认保留 6 位小数</span>
<span class="token string">&#39;%.3f&#39;</span> <span class="token operator">%</span> <span class="token number">3.1416926</span>    <span class="token comment"># &#39;3.142&#39;，四舍五入保留 3 位小数</span>
<span class="token string">&#39;%10.3f&#39;</span> <span class="token operator">%</span> <span class="token number">3.1415926</span>  <span class="token comment"># &#39;     3.142&#39;，保留 3 位小数且占 10 个长度</span>
<span class="token string">&#39;%4f&#39;</span> <span class="token operator">%</span> <span class="token number">3.1415926</span>     <span class="token comment"># &#39;3.141593&#39;，保留 6 位小数且占 4 个长度，超出则输出原字符串</span>
<span class="token string">&#39;%d&#39;</span> <span class="token operator">%</span> <span class="token number">3.99</span>           <span class="token comment"># &#39;3&#39;，保留整数，且不进行四舍五入</span>

<span class="token comment"># 使用 {}</span>
<span class="token string">&#39;{0:.3}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span>    <span class="token comment"># &#39;3.14&#39;</span>
<span class="token string">&#39;{:.3f}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span>    <span class="token comment"># &#39;3.142&#39;</span>
<span class="token string">&#39;{:10.3f}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;     3.142&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编码与解码" tabindex="-1"><a class="header-anchor" href="#编码与解码" aria-hidden="true">#</a> 编码与解码</h3><p><strong>编码</strong>：将字符串转换为二进制数据（bytes）</p><p><strong>解码</strong>：将 bytes 类型的数据转换成字符串类型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 编码</span>
s <span class="token operator">=</span> <span class="token string">&#39;天涯共此时&#39;</span>
s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># b&#39;\\xcc\\xec\\xd1\\xc4\\xb9\\xb2\\xb4\\xcb\\xca\\xb1&#39;</span>
s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># b&#39;\\xe5\\xa4\\xa9\\xe6\\xb6\\xaf\\xe5\\x85\\xb1\\xe6\\xad\\xa4\\xe6\\x97\\xb6&#39;</span>
<span class="token comment"># gbk 编码一个中文占 2 个字节</span>
<span class="token comment"># utf-8 编码一个中文占 3 个字节</span>

<span class="token comment"># 解码</span>
b1 <span class="token operator">=</span> <span class="token string">b&#39;\\xcc\\xec\\xd1\\xc4\\xb9\\xb2\\xb4\\xcb\\xca\\xb1&#39;</span>
b2 <span class="token operator">=</span> <span class="token string">b&#39;\\xe5\\xa4\\xa9\\xe6\\xb6\\xaf\\xe5\\x85\\xb1\\xe6\\xad\\xa4\\xe6\\x97\\xb6&#39;</span>
b1<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># &#39;天涯共此时&#39;</span>
b2<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;天涯共此时&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","10_字符串.html.vue"]]);export{u as default};
