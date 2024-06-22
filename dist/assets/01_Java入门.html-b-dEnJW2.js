import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as e}from"./app-VKLC1A-x.js";const o={},t=e(`<h1 id="java-入门" tabindex="-1"><a class="header-anchor" href="#java-入门" aria-hidden="true">#</a> Java 入门</h1><h2 id="jdk-下载和安装" tabindex="-1"><a class="header-anchor" href="#jdk-下载和安装" aria-hidden="true">#</a> JDK 下载和安装</h2><p>下载网址：https://www.oracle.com/java/technologies/downloads/</p><p><em><strong>注</strong></em>：JDK18 中文编码存在问题，不推荐下载，安装路径不要出现空格和中文</p><p><strong>JDK 目录文件说明</strong>：</p><p><strong>bin</strong>：其中存放了各种工具命令，比较重要的有：javac 和 java</p><p><strong>conf</strong>：存放了相关的配置文件</p><p><strong>include</strong>：存放了一些平台特定的头文件</p><p><strong>jmods</strong>：存放了各种模块</p><p><strong>legal</strong>：存放了各种模块的授权文档</p><p><strong>lib</strong>：存放了工具的一些补充的 JAR 包</p><h2 id="编译和运行" tabindex="-1"><a class="header-anchor" href="#编译和运行" aria-hidden="true">#</a> 编译和运行</h2><p>Java 文件需要以 <code>.java</code> 结尾，如：<code>HelloWorld.java</code></p><p>文件名需要和文件中的类名保持一致</p><p>第一个 Java 程序，HelloWorld 小案例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong>：在终端中进入 Java 文件所在的目录，使用如下命令进行编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果遇到编码问题，我们可以使用 <code>-encoding</code> 选项设置 <code>utf-8</code> 来编译：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac <span class="token parameter variable">-encoding</span> UTF-8 HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译成功后会生成一个编译后的文件 <code>HelloWorld.class</code></p><p><em><strong>注</strong></em>：Java 文件默认的是 ANSI 编码，使用 UTF-8 会导致中文编码异常，可以使用 <code>-encoding</code> 选项设置编码</p><p><strong>运行</strong>：在终端中使用如下命令运行编译后的 <code>class</code> 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：运行时不能添加 <code>.class</code> 的后缀</p><h2 id="jdk-和-jre" tabindex="-1"><a class="header-anchor" href="#jdk-和-jre" aria-hidden="true">#</a> JDK 和 JRE</h2><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><p>JDK：Java Development kit，Java 开发工具包，其中包含了以下三个部分：</p><p><em><strong>1&gt;</strong></em> <strong>JVM</strong>：Java Virtual Machine，Java 虚拟机，真正运行 Java 程序的地方</p><p><em><strong>2&gt;</strong></em> <strong>核心类库</strong>：程序运行需要且 Java 已经写好的基本的核心的类</p><p><em><strong>3&gt;</strong></em> <strong>开发工具</strong>：如：</p><p>javac：编译工具</p><p>java：运行工具</p><p>jdb：调试工具</p><p>jhat：内存分析工具等</p><h3 id="jre" tabindex="-1"><a class="header-anchor" href="#jre" aria-hidden="true">#</a> JRE</h3><p>JRE：Java Runtime Environment，Java 运行环境</p><p>JRE 中包含了 JVM、核心类库以及部分需要用到的开发工具</p><p><strong>JDK 中包含了 JRE，JRE 中包含了 JVM 虚拟机</strong></p><h2 id="api-和帮助文档" tabindex="-1"><a class="header-anchor" href="#api-和帮助文档" aria-hidden="true">#</a> API 和帮助文档</h2><p>API（Application Programming Interface）：应用程序编程接口</p><p>Java API：指的是 JDK 中提供的各种功能的 Java 类</p><p>Java API 中文在线文档：https://itmyhome.com/java-api/</p>`,43),p=[t];function r(c,d){return n(),s("div",null,p)}const u=a(o,[["render",r],["__file","01_Java入门.html.vue"]]);export{u as default};
