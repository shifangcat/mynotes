import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const o={},t=e(`<h1 id="视频音频处理" tabindex="-1"><a class="header-anchor" href="#视频音频处理" aria-hidden="true">#</a> 视频音频处理</h1><h2 id="视频批量转音频" tabindex="-1"><a class="header-anchor" href="#视频批量转音频" aria-hidden="true">#</a> 视频批量转音频</h2><p>下载Python包：<code>pip install moviepy</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> moviepy<span class="token punctuation">.</span>editor <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

video_folder <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token punctuation">)</span>
audio_folder <span class="token operator">=</span> video_folder<span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span><span class="token string">&#39;mp3&#39;</span><span class="token punctuation">)</span>
audio_folder<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token number">0o777</span><span class="token punctuation">,</span> exist_ok<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
VIDEO_SUFFIX <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;.mp4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.mkv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.avi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rmvb&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> f <span class="token keyword">in</span> video_folder<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    audio_name <span class="token operator">=</span> f<span class="token punctuation">.</span>stem <span class="token operator">+</span> <span class="token string">&#39;.mp3&#39;</span>
    audio_file <span class="token operator">=</span> audio_folder<span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span>audio_name<span class="token punctuation">)</span>
    <span class="token keyword">if</span> f<span class="token punctuation">.</span>suffix <span class="token keyword">in</span> VIDEO_SUFFIX <span class="token keyword">and</span> <span class="token keyword">not</span> audio_file<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        video <span class="token operator">=</span> VideoFileClip<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>
        video<span class="token punctuation">.</span>audio<span class="token punctuation">.</span>write_audiofile<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>audio_file<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="youtube-dl使用" tabindex="-1"><a class="header-anchor" href="#youtube-dl使用" aria-hidden="true">#</a> youtube-dl使用</h2><p>安装：<code>pip install youtube-dl</code></p><p>升级：<code>pip install -U youtube-dl</code></p><p>卸载：<code>pip uninstall youtube-dl</code></p><p>查看版本：<code>youtube-dl --version</code></p><p>查看帮助文件：<code>youtube-dl -h</code> 或 <code>youtube-dl -help</code></p><p>参考资料：http://pythonabc.org/index.php/python-pdf/youtube-dl</p><p>官网：https://github.com/ytdl-org/youtube-dl</p><ul><li><p><strong>在命令行中使用</strong></p><ul><li><p><em><strong>下载单个视频</strong></em></p><p><code>youtube-dl 视频链接</code></p><p><code>youtube-dl -f &#39;best&#39; 视频链接</code></p><p><code>youtube-dl -civw -f bestvideo+bestaudio 视频链接</code></p><p>参数根据自己需要选择：<code>c</code>断点续传、<code>i</code>忽略错误、<code>v</code>显示全部信息、<code>w</code>不覆盖已有文件</p></li><li><p><em><strong>下载播放列表</strong></em></p><p><code>youtube-dl 播放列表链接</code>：下载列表中全部视频</p><p><code>youtube-dl -c --playlist-start num 播放列表链接</code>：下载从第num个开始到末尾的视频</p><p><code>youtube-dl -c --playlist-end num 播放列表链接</code>：下载从第1个到第num个视频</p><p><code>youtube-dl -c --playlist-items 7-12 播放列表链接</code>：下载第7到第12的视频</p><p><code>youtube-dl -c --playlist-start 7 --playlist-end 12 播放列表链接</code>：（同上）</p><p><code>youtube-dl -c --playlist-items 2-3,5,8-10,18 播放列表链接</code>：下载第2、3、5、8-10、18个视频</p></li><li><p><em><strong>使用代理</strong></em></p><p><code>youtube-dl --proxy 代理IP:代理端口 视频链接</code></p></li></ul></li><li><p><strong>在Python中使用</strong></p><ul><li><p><em><strong>下载视频</strong></em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> youtube_dl

<span class="token comment"># 待下载视频的链接</span>
video_url <span class="token operator">=</span> <span class="token string">&#39;https://www.bilibili.com/video/BV1Wb4y1z7ve&#39;</span>
<span class="token comment"># 保存文件的文件夹</span>
save_folder <span class="token operator">=</span> <span class="token string">&#39;D:/pythonstudy/edit_file/edit_file_code/08_视频音频处理/mp3/&#39;</span>

<span class="token comment"># ydl_opts是youtube-dl的设置参数，很重要</span>
<span class="token comment"># 是一个字典，关于youtube-dl的参数都在这是设置</span>
ydl_opts <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;outtmpl&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;%(title)s.%(ext)s&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># 不指定保存的文件夹</span>
    <span class="token comment"># &#39;outtmpl&#39;: save_folder + &#39;%(title)s.%(ext)s&#39;,  # 指定保存的文件夹</span>
    <span class="token comment"># outtmpl：定义输出的模板，指定输出的文件夹和保存的文件名</span>
    <span class="token comment"># 指定文件夹时则保存到相应文件夹，不指定则保存到当前文件夹</span>
    <span class="token comment"># title：文件的名字，如：凤凰传奇；ext：文件的扩展名，如：mp4</span>
    <span class="token comment"># 所以文件的名字最终为：凤凰传奇.mp4</span>

    <span class="token comment"># &#39;format&#39;: &#39;best&#39;,  # 最好的视频或音频</span>
    <span class="token comment"># &#39;format&#39;: &#39;bestvideo&#39;,  # 最好的视频</span>
    <span class="token comment"># &#39;format&#39;: &#39;bestaudio&#39;,  # 最好的音频</span>
    <span class="token comment"># 不止一个视频/音频文件时选择质量最好的下载，但是如果网站没有提供对应的版本时则会报错</span>
<span class="token punctuation">}</span>

<span class="token comment"># 用参数创建下载对象</span>
ydl <span class="token operator">=</span> youtube_dl<span class="token punctuation">.</span>YoutubeDL<span class="token punctuation">(</span>ydl_opts<span class="token punctuation">)</span>

<span class="token comment"># 用下载对象下载文件，参数是列表，列表的每个元素是视频的链接</span>
ydl<span class="token punctuation">.</span>download<span class="token punctuation">(</span><span class="token punctuation">[</span>video_url<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em><strong>获取视频信息</strong></em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> youtube_dl

video_url <span class="token operator">=</span> <span class="token string">&#39;https://www.bilibili.com/video/BV1Wb4y1z7ve&#39;</span>

ydl_opts <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;outtmpl&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;%(title)s.%(ext)s&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

ydl <span class="token operator">=</span> youtube_dl<span class="token punctuation">.</span>YoutubeDL<span class="token punctuation">(</span>ydl_opts<span class="token punctuation">)</span>

<span class="token comment"># 通过extract_info()方法获取视频的信息，返回的是一个字典</span>
infos <span class="token operator">=</span> ydl<span class="token punctuation">.</span>extract_info<span class="token punctuation">(</span>
    video_url<span class="token punctuation">,</span>  <span class="token comment"># 视频的链接</span>

    download<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token comment"># 设置download为False表示只获取信息不下载，</span>
    <span class="token comment"># 默认为True，获取信息的时候也会开启下载</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>infos</code>中的信息说明：</p><p><em><strong>1&gt;</strong></em> 如果存在键<code>entries</code>，说明通过链接得到的一个播放列表或者是一系列视频；不存在则说明是单个视频。可以通过<code>infos[&#39;entries&#39;]</code>获取视频列表</p><p><em><strong>2&gt;</strong></em> 对于单个视频可以通过<code>id</code>、<code>duration</code>、<code>ext</code>、<code>title</code>、<code>webpage_url</code>等键获取ID、时长、扩展名、标题、链接等信息</p></li></ul></li></ul>`,13),p=[t];function i(l,c){return s(),a("div",null,p)}const r=n(o,[["render",i],["__file","09_视频音频处理.html.vue"]]);export{r as default};
