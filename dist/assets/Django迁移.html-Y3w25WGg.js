import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,f as t}from"./app-VKLC1A-x.js";const i={},d=t(`<h1 id="django迁移" tabindex="-1"><a class="header-anchor" href="#django迁移" aria-hidden="true">#</a> Django迁移</h1><p>在数据库删除了一个表格，想要重新生成一个相同的表，操作如下：</p><p>注释掉Django中对应的Model</p><p>分别执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python manage.py makemigrations   
python manage.py migrate --fake
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行时会询问是否清除旧的表格，回复<code>yes</code>即可</p><p>之后去掉Model中的注释重新迁移即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python manage.py makemigrations   
python manage.py migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[d];function o(r,c){return a(),n("div",null,s)}const p=e(i,[["render",o],["__file","Django迁移.html.vue"]]);export{p as default};
