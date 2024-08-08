import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const t={},e=p(`<h1 id="发送邮件和短信" tabindex="-1"><a class="header-anchor" href="#发送邮件和短信" aria-hidden="true">#</a> 发送邮件和短信</h1><h2 id="发送邮件" tabindex="-1"><a class="header-anchor" href="#发送邮件" aria-hidden="true">#</a> 发送邮件</h2><ul><li><p><strong>发送邮件</strong></p><p>使用Python内置的<code>smtplib</code>包可以实现邮件发送</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib

<span class="token comment"># 使用相应邮箱的服务器和端口号创建邮件服务器</span>
server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span><span class="token string">&#39;smtp.qq.com&#39;</span><span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>

<span class="token comment"># 配置邮箱的账号和密码（或授权码）</span>
server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;xxxx@qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pwdxxxx&#39;</span><span class="token punctuation">)</span>
msg <span class="token operator">=</span> <span class="token string">&#39;这是一个测试邮件&#39;</span>

<span class="token comment"># 设置发件邮箱、接收邮箱、邮件内容；邮件内容需要是bytes类型</span>
server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span><span class="token string">&#39;aaaa@qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bbbb@qq.com&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>发送邮件-进阶</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText

sender <span class="token operator">=</span> <span class="token string">&#39;xxxx@qq.com&#39;</span>  <span class="token comment"># 发件人</span>
pwd <span class="token operator">=</span> <span class="token string">&#39;pwdxxxx&#39;</span>  <span class="token comment"># 密码/授权码</span>
receiver <span class="token operator">=</span> <span class="token string">&#39;xxxx@qq.com&#39;</span>  <span class="token comment"># 收件人</span>

msg <span class="token operator">=</span> MIMEMultipart<span class="token punctuation">(</span><span class="token punctuation">)</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> sender  <span class="token comment"># 发件人</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> receiver  <span class="token comment"># 收件人</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;这是邮件的主题&#39;</span>  <span class="token comment"># 邮件主题</span>

body <span class="token operator">=</span> <span class="token string">&#39;这是邮件的正文&#39;</span>  <span class="token comment"># 邮件正文</span>
<span class="token comment"># msg.attach(MIMEText(body, &#39;plain&#39;))</span>
msg<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;plain&#39;可加可不加</span>

<span class="token comment"># 配置邮件服务器</span>
server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span><span class="token string">&#39;smtp.qq.com&#39;</span><span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>login<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
<span class="token comment"># server.send_message(msg)  # 也可以使用下面的sendmail()方法发送</span>
server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>发送邮件-添加附件</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>image <span class="token keyword">import</span> MIMEImage
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText

sender <span class="token operator">=</span> <span class="token string">&#39;xxxx@qq.com&#39;</span>  <span class="token comment"># 发件人</span>
pwd <span class="token operator">=</span> <span class="token string">&#39;pwdxxxx&#39;</span>  <span class="token comment"># 密码/授权码</span>
receiver <span class="token operator">=</span> <span class="token string">&#39;xxxx@qq.com&#39;</span>  <span class="token comment"># 收件人</span>

msg <span class="token operator">=</span> MIMEMultipart<span class="token punctuation">(</span><span class="token punctuation">)</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> sender  <span class="token comment"># 发件人</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> receiver  <span class="token comment"># 收件人</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;图片邮件&#39;</span>  <span class="token comment"># 邮件主题</span>

body <span class="token operator">=</span> <span class="token string">&#39;这是邮件的正文&#39;</span>
msg<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;sheep.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span>
    img <span class="token operator">=</span> MIMEImage<span class="token punctuation">(</span>fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

msg<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>img<span class="token punctuation">)</span>

<span class="token comment"># 配置邮件服务器</span>
server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span><span class="token string">&#39;smtp.qq.com&#39;</span><span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>login<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>send_message<span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>群发邮件</strong></p><p>使用程序群发邮件和使用网页群发相同，都是使用<code>;</code>将多个收件人邮箱分隔开来，如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText

sender <span class="token operator">=</span> <span class="token string">&#39;xxxx@qq.com&#39;</span>
pwd <span class="token operator">=</span> <span class="token string">&#39;pwdxxxx&#39;</span>
receiver <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;aaaa@qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bbbb@qq.com&#39;</span><span class="token punctuation">]</span>  <span class="token comment"># 多个收件人邮箱</span>

msg <span class="token operator">=</span> MIMEMultipart<span class="token punctuation">(</span><span class="token punctuation">)</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> sender
msg<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>receiver<span class="token punctuation">)</span>  <span class="token comment"># 使用“;”分隔多个邮箱</span>
msg<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;群发邮件&#39;</span>

body <span class="token operator">=</span> <span class="token string">&#39;这是群发邮件的正文&#39;</span>
msg<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>

server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span><span class="token string">&#39;smtp.qq.com&#39;</span><span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>login<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>send_message<span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="发送短信" tabindex="-1"><a class="header-anchor" href="#发送短信" aria-hidden="true">#</a> 发送短信</h2><p>发送短信可以上网搜索....</p><p>如：搜索【Python发送短信】，然后看教程选择服务商....</p>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","06_发送邮件和短信.html.vue"]]);export{d as default};
