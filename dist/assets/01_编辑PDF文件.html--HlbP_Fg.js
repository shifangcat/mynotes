import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-VKLC1A-x.js";const e={},t=p(`<h1 id="编辑pdf文件" tabindex="-1"><a class="header-anchor" href="#编辑pdf文件" aria-hidden="true">#</a> 编辑PDF文件</h1><p>安装Python包：<code>pip install PyPDF2</code></p><ul><li><p><strong>读PDF文件</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;第01页.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pdfFile<span class="token punctuation">:</span>
    pdfReader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>pdfFile<span class="token punctuation">)</span>  <span class="token comment"># 创建PDF的读对象</span>
    numpages <span class="token operator">=</span> pdfReader<span class="token punctuation">.</span>numPages  <span class="token comment"># 获取PDF文件的总页数</span>
    pageObj <span class="token operator">=</span> pdfReader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 获取PDF文件的第一页</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>pageObj<span class="token punctuation">.</span>extractText<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 读取第一页中的文本内容</span>
    <span class="token comment"># 但是识别效率并不高，而且图片、中文、表格等均无法识别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>写PDF文件</strong></p><p>PDF的编辑是十分不友好的，所以通常的写PDF文件也即是获取到某一PDF文件的一些整页内容，然后将这些内容再整页的放到其他文件中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;未加水印的文件.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pdfBasicFile<span class="token punctuation">:</span>
    pdfBasicReader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>pdfBasicFile<span class="token punctuation">)</span>
    pdfWriter <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建PDF的写对象</span>

    <span class="token keyword">for</span> pageNum <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> pdfBasicReader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
        pageObj <span class="token operator">=</span> pdfBasicReader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>pageNum<span class="token punctuation">)</span>
        pdfWriter<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>pageObj<span class="token punctuation">)</span>  <span class="token comment"># 将获取到的整页添加到写对象中</span>

    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;write_test.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pdfWriteFile<span class="token punctuation">:</span>
        pdfWriter<span class="token punctuation">.</span>write<span class="token punctuation">(</span>pdfWriteFile<span class="token punctuation">)</span>  <span class="token comment"># 将整页写入到其他文件中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>PDF合并</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;第01页.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;第02页.pdf&#39;</span><span class="token punctuation">]</span>
merger <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileMerger<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
    merger<span class="token punctuation">.</span>append<span class="token punctuation">(</span>PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
merger<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;合并后的PDF.pdf&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>PDF添加水印</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;未加水印的文件.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pdfFile<span class="token punctuation">:</span>
    pdfReader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>pdfFile<span class="token punctuation">)</span>
    pdfFileFirstPage <span class="token operator">=</span> pdfReader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 获取PDF文件的第一页</span>

    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;水印.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> markFile<span class="token punctuation">:</span>
        pdfMarkReader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>markFile<span class="token punctuation">)</span>
        markFileFirstPage <span class="token operator">=</span> pdfMarkReader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 获取水印文件的第一页</span>
		<span class="token comment"># 将水印文件的第一页和PDF文件的第一页合并</span>
        pdfFileFirstPage<span class="token punctuation">.</span>mergePage<span class="token punctuation">(</span>markFileFirstPage<span class="token punctuation">)</span>

        pdfWriter <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建一个写入对象</span>
        pdfWriter<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>pdfFileFirstPage<span class="token punctuation">)</span>  <span class="token comment"># 将添加了水印的第一页加入到写入对象中</span>

        <span class="token keyword">for</span> pageNum <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> pdfReader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
            pageObj <span class="token operator">=</span> pdfReader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>pageNum<span class="token punctuation">)</span>
            pdfWriter<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>pageObj<span class="token punctuation">)</span>  <span class="token comment"># 将PDF文件的其他页加入到写入对象中</span>

        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;添加了水印的文件.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> resultPdfFile<span class="token punctuation">:</span>
            pdfWriter<span class="token punctuation">.</span>write<span class="token punctuation">(</span>resultPdfFile<span class="token punctuation">)</span>  <span class="token comment"># 将写入对象中的内容写入到文件中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>PDF加密</strong></p><p>使用PDF写入对象的<code>encrypt()</code>方法可以实现对PDF文件进行加密</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;第01页.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pdfFile<span class="token punctuation">:</span>
    pdfReader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>pdfFile<span class="token punctuation">)</span>
    pdfWriter <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> pageNum <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>pdfReader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
        pdfWriter<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>pdfReader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>pageNum<span class="token punctuation">)</span><span class="token punctuation">)</span>

    pdfWriter<span class="token punctuation">.</span>encrypt<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 设置加密的密码</span>

    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;encryptedFile.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> resultPdf<span class="token punctuation">:</span>
        pdfWriter<span class="token punctuation">.</span>write<span class="token punctuation">(</span>resultPdf<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：<code>encrypt()</code>方法可以设置两个密码参数，第一个是<code>user_pwd</code>，第二个是<code>owner_pwd</code>，只设置一个密码参数则两个<code>pwd</code>相同</p></li><li><p><strong>打开加密的PDF文件</strong></p><p>使用读对象的<code>decrypt()</code>方法可以对加密的PDF文件进行解密</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;encryptedFile.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pdfFile<span class="token punctuation">:</span>
    pdfReader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span>pdfFile<span class="token punctuation">)</span>
    pdfReader<span class="token punctuation">.</span>decrypt<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 使用密码进行解密</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>pdfReader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","01_编辑PDF文件.html.vue"]]);export{r as default};
