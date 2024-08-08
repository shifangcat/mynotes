import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-VKLC1A-x.js";const p="/mynotes/assets/MongoDB聚合命令示例-ABhLPBsp.png",o={},t=e(`<h1 id="mongodb数据库" tabindex="-1"><a class="header-anchor" href="#mongodb数据库" aria-hidden="true">#</a> MongoDB数据库</h1><h2 id="mongodb介绍" tabindex="-1"><a class="header-anchor" href="#mongodb介绍" aria-hidden="true">#</a> MongoDB介绍</h2><ul><li><p><strong>优势</strong></p><p><em><strong>1&gt; 易扩展</strong></em>：NoSQL数据库种类繁多，但是⼀个共同的特点都是去掉关系数据库的关系型特性。数据之间⽆关系，这样就⾮常容易扩展</p><p><em><strong>2&gt; ⼤数据量，⾼性能</strong></em>：NoSQL数据库都具有⾮常⾼的读写性能，尤其在⼤数据量下，同样表现优秀。这得益于它的⽆关系性，数据库的结构简单</p><p><em><strong>3&gt; 灵活的数据模型</strong></em>：NoSQL⽆需事先为要存储的数据建⽴字段，随时可以存储⾃定义的数据格式。⽽在关系数据库⾥，增删字段是⼀件⾮常麻烦的事情。如果是⾮常⼤数据量的表，增加字段简直就是⼀个噩梦</p></li><li><p><strong>安装和启动</strong></p><ul><li><p><em><strong>安装</strong></em></p><p>参考资料：https://www.cnblogs.com/chy18883701161/p/11100560.html</p><p>https://www.runoob.com/mongodb/mongodb-window-install.html</p></li><li><p><em><strong>启动</strong></em></p><p>启动服务器：<code>net start MongoDB</code></p><p>关闭服务器：<code>net stop MongoDB</code></p><p>启动客户端：<code>mongo</code></p><p>查看帮助：<code>mongo --help</code></p><p>退出客户端：<code>exit</code> 或 <code>quit()</code> 或 <code>ctrl+c</code></p><p>默认端口：27017</p></li></ul></li></ul><h2 id="数据库和集合的命令" tabindex="-1"><a class="header-anchor" href="#数据库和集合的命令" aria-hidden="true">#</a> 数据库和集合的命令</h2><ul><li><p><strong>关于数据库的命令</strong></p><p>查看所有数据库：<code>show dbs</code> 或 <code>show databases</code></p><p>查看当前数据库：<code>db</code></p><p>切换数据库：<code>use [db_name]</code></p><p>删除当前所在的数据库：<code>db.dropDatabase()</code></p><p>创建数据库：使用<code>use [db_name]</code>时会自动创建数据库，但是如果不向其中存储数据的话在查看所有数据库时仍旧不会显示新建的数据库</p></li><li><p><strong>关于集合的命令</strong></p><p>MongoDB的数据是存储在集合中的，集合不需要手动创建，在向不存在的集合中添加数据时，集合会自动被创建</p><p>手动创建结合：</p><p><code>db.createCollection([name], [options])</code></p><p><code>db.createCollection(&quot;stu&quot;)</code></p><p><code>db.createCollection(&quot;sub&quot;, {capped: true, size: 10})</code></p><blockquote><p>参数<code>capped</code>：默认值为<code>false</code>，表示不设置上限；值为<code>true</code>，表示设置上限</p><p>参数<code>size</code>：当<code>capped</code>值为<code>true</code>时，需要指定此参数，表示上限⼤⼩，单位为字节。当集合达到上限时，后添加的数据会覆盖最先添加的数据</p></blockquote><p>查看集合：<code>show collections</code></p><p>删除集合：<code>db.[集合名称].drop()</code></p></li><li><p><strong>数据类型</strong></p><p><code>Object</code>：⽤于嵌⼊式的⽂档，即⼀个值为⼀个⽂档</p><p><code>ObjectID</code>：⽂档ID</p><p><code>String</code>：字符串，最常⽤，必须是有效的<code>UTF-8</code></p><p><code>Boolean</code>：布尔值，<code>true</code>或<code>false</code>，全部小写</p><p><code>Integer</code>：整数，可以是32位或64位，这取决于服务器</p><p><code>Double</code>：浮点值</p><p><code>Arrays</code>：数组或列表，多个值存储到⼀个键</p><p><code>Null</code>：存储<code>Null</code>值</p><p><code>Timestamp</code>：时间戳，表示从1970-1-1到现在的总秒数</p><p><code>Date</code>：存储当前⽇期或时间的<code>UNIX</code>时间格式</p><p><em><strong>注</strong></em>：<em><strong>1&gt;</strong></em> 创建⽇期语句如下：<code>new Date(&#39;2017-02-08&#39;)</code></p><p><em><strong>2&gt;</strong></em> 每个⽂档都有⼀个属性，为<code>_id</code>，保证每个⽂档的唯⼀性。 可以⾃⼰设置<code>_id</code>插⼊⽂档，如果没有提供，那么MongoDB会为每个⽂档提供⼀个独特的<code>_id</code>，类型为<code>ObjectID</code></p><p><em><strong>3&gt;</strong></em> <code>ObjectID</code>是⼀个12字节的⼗六进制数： 前4个字节为当前的时间戳；接下来3个字节的机器ID ；接下来的2个字节中MongoDB的服务进程id ；最后3个字节是简单的增量值</p></li></ul><h2 id="增删改查" tabindex="-1"><a class="header-anchor" href="#增删改查" aria-hidden="true">#</a> 增删改查</h2><ul><li><p><strong>插入数据</strong></p><ul><li><p><em><strong>db.集合名称.insert(document)</strong></em></p><p><code>db.stu.insert({name:&#39;gj&#39;,gender:1})</code></p><p><code>db.stu.insert({_id:&quot;20170101&quot;,name:&#39;gj&#39;,gender:1})</code></p><p>插⼊⽂档时， 如果不指定<code>_id</code>参数， MongoDB会为⽂档分配⼀个唯⼀的<code>ObjectID</code></p></li><li><p><em><strong>db.集合名称.save(document)</strong></em></p></li></ul><p>两者区别：</p><p>指定<code>_id</code>插入数据时，如果<code>_id</code>已经存在<code>insert()</code>会报错，<code>save()</code>会更新数据</p></li><li><p><strong>查询数据</strong></p><p><code>db.集合名称.find()</code>：显示集合中的所有数据</p></li><li><p><strong>更新数据</strong></p><p><code>db.集合名称.update([query], [update], {multi: [boolean]})</code></p><blockquote><p>参数<code>query</code>：查询条件，筛选需要更新的数据</p><p>参数<code>update</code>：更新操作符</p><p>参数<code>multi</code>：可选，默认是<code>false</code>，表示只更新找到的第⼀条记录；值为<code>true</code>时表示更新所有满足条件的数据</p></blockquote><p><code>db.test01.update({name:&#39;zhangsan&#39;},{name:&#39;wangwu&#39;})</code></p><blockquote><p>把<code>name</code>为<code>zhangsan</code>的数据替换为<code>{name:&#39;wangwu&#39;}</code>，其他的内容不会被保留</p></blockquote><p><code>db.test01.update({name:&#39;lisi&#39;},{$set:{name:&#39;mazi&#39;}})</code></p><blockquote><p>把<code>name</code>为<code>lisi</code>的数据的<code>name</code>的值更新为<code>mazi</code>，其他的内容会保留下来</p></blockquote><p><code>db.test01.update({name:&#39;mazi&#39;},{$set:{name:&#39;lisi&#39;}},{multi:true})</code></p><blockquote><p>设置<code>{multi:true}</code>，将所有满足查询条件的数据都进行更改</p></blockquote><p><em><strong>注</strong></em>：设置<code>{multi:true}</code>时必须搭配<code>$</code>符进行使用</p></li><li><p><strong>删除数据</strong></p><p><code>db.集合名称.remove([query],{justOne: [boolean]})</code></p><blockquote><p>参数<code>query</code>：查询条件，筛选需要删除的数据</p><p>参数<code>justOne</code>：可选，默认<code>false</code>，表示删除所有满足条件的数据；如果设为<code>true</code>，则只删除⼀条</p></blockquote><p>如：<code>db.test01.remove({name:&#39;mazi&#39;},{justOne:true})</code>：删除<code>name</code>为<code>mazi</code>的第一条数据</p></li></ul><h2 id="高级查询" tabindex="-1"><a class="header-anchor" href="#高级查询" aria-hidden="true">#</a> 高级查询</h2><ul><li><p><strong>条件查询</strong></p><p><code>db.集合名称.find({条件⽂档})</code>：查询满足条件的数据</p><p><code>db.集合名称.findOne({条件⽂档})</code>：查询满足条件的第一条数据</p><p><code>db.集合名称.find({条件⽂档}).pretty()</code>：将查询的结果格式化</p></li><li><p><strong>比较运算符</strong></p><p>等于：默认是等于判断，没有运算符</p><p>⼩于：<code>$lt</code>（less than）</p><p>⼩于等于：<code>$lte</code>（less than equal）</p><p>⼤于：<code>$gt</code>（greater than）</p><p>⼤于等于：<code>$gte</code></p><p>不等于：<code>$ne</code></p><p><code>db.test01.find({age:{$lte:14}})</code>：查询<code>age</code>小于等于14的数据</p><p><code>db.test01.find({age:14})</code>：查询<code>age</code>为14的数据</p></li><li><p><strong>范围运算符</strong></p><p>使⽤<code>$in</code>、<code>$nin</code>判断是否在某个范围内</p><p><code>db.test01.find({age:{$in:[14,12]}})</code>：查询年龄为14和12的数据</p><p><code>db.test01.find({age:{$nin:[14,12]}})</code>：查询年龄不为14和12的数据</p></li><li><p><strong>逻辑运算符</strong></p><ul><li><p><code>and</code>：直接在json中写明多个条件即可</p><p><code>db.stu.find({age:{$gte:18},gender:true})</code>：查询年龄⼤于或等于18， 并且性别为true的学⽣</p></li><li><p><code>or</code>：使⽤<code>$or</code>，值为数组，数组中每个元素为json</p><p><code>db.stu.find({$or:[{age:{$gt:18}},{gender:false}]})</code>：查询年龄⼤于18， 或性别为false的学⽣</p><p><code>db.stu.find({$or:[{age:{$gte:18}},{gender:true}],name:&#39;gj&#39;})</code>：查询年龄⼤于18或性别为男⽣， 并且姓名是郭靖</p></li></ul></li><li><p><strong>支持正则表达式</strong></p><p>使⽤<code>//</code>或<code>$regex</code>编写正则表达式</p><p><code>db.products.find({sku: /^abc/})</code>：查询sku以abc开头的产品</p><p><code>db.products.find({$regex: &quot;789$&quot;})</code>：查询sku以789结尾的产品</p></li><li><p><strong>limit()方法和skip()方法</strong></p><ul><li><p><em><strong>limit()方法</strong></em>：⽤于读取指定数量的⽂档</p><p>使用语法：<code>db.集合名称.find().limit(NUMBER)</code></p><p><code>db.stu.find().limit(2)</code>：查询2条学⽣信息</p></li><li><p><em><strong>skip()方法</strong></em>： ⽤于跳过指定数量的⽂档</p><p>使用语法：<code>db.集合名称.find().skip(NUMBER)</code></p><p><code>db.stu.find().skip(2)</code>：跳过前2条数据进行查询</p></li><li><p><em><strong>同时使用</strong></em>：不分先后顺序，效果相同，不过先<code>skip()</code>时效率更高</p><p><code>db.stu.find().limit(4).skip(5)</code>和<code>db.stu.find().skip(5).limit(4)</code>效果相同</p></li></ul></li><li><p><strong>⾃定义查询</strong></p><p>使⽤<code>$where</code>后⾯写⼀个函数，返回满⾜条件的数据，类似于JS语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.test01.find({$where:function(){return this.age&gt;=14}})  # 查询年龄大于等于14的数据
db.test01.find({
    $where:function() {
        return this.age&gt;14;}
})  # 查询年龄大于14的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>投影</strong></p><p>在查询到的返回结果中，使用投影可以选择需要显示的字段</p><p>使用语法：<code>db.集合名称.find({},{字段名称:1,...})</code></p><p>参数为字段名称和值，需要显示的设置值为<code>1</code>，不需要显示的不写即可</p><p><em><strong>注</strong></em>：<code>_id</code>是默认显示的，不需要显示时需要将它的值设置为<code>0</code></p><p><code>db.test01.find({},{_id:0,name:1})</code>：查询所有数据，不显示<code>_id</code>，只显示<code>name</code>字段</p></li><li><p><strong>排序</strong></p><p>使用<code>sort()</code>方法对查询结果进行排序</p><p>使用语法：<code>db.集合名称.find().sort({字段:1,...})</code></p><blockquote><p>字段值为<code>1</code>表示升序排列；字段值为<code>-1</code>表示降序排列</p></blockquote><p><code>db.test01.find().sort({age:1})</code>：按照年龄升序排序</p><p><code>db.test01.find().sort({age:-1,name:-1})</code>：按照age降序排序，年龄相同再按照name降序排序</p></li><li><p><strong>统计数量</strong></p><p>使用<code>count()</code>方法可以统计数据的数量</p><p>使用语法：<code>db.集合名称.find({条件}).count()</code>、<code>db.集合名称.count({条件})</code></p><p><code>db.test01.find({age:{$gt:15}}).count()</code>：统计年龄大于15的数据的数量</p><p><code>db.test01.count({age:{$gt:15}})</code>：同上，统计年龄大于15的数据的数量</p><p><em><strong>注</strong></em>：<code>find()</code>和<code>count()</code>同时使用的时候，过滤条件需要写在<code>find()</code>中</p></li><li><p><strong>消除重复</strong></p><p>使用<code>distinct()</code>方法对数据进⾏去重</p><p>使用语法：<code>db.集合名称.distinct(&#39;去重字段&#39;,{条件})</code></p><p><code>db.test01.distinct(&#39;age&#39;)</code>：对字段age进行去重</p><p><code>db.test01.distinct(&#39;age&#39;,{name:&#39;mazi&#39;})</code>：在name为mazi的结果中对字段age进行去重</p></li></ul><h2 id="数据的备份和恢复" tabindex="-1"><a class="header-anchor" href="#数据的备份和恢复" aria-hidden="true">#</a> 数据的备份和恢复</h2><ul><li><p><strong>数据的备份</strong></p><p>语法：<code>mongodump -h dbhost -d dbname -o dbdirectory</code></p><p><code>-h</code>：服务器地址，也可以指定端⼝号</p><p><code>-d</code>：需要备份的数据库名称</p><p><code>-o</code>：备份的数据存放位置，此⽬录中存放着备份出来的数据</p><p>如：<code>mongodump -h 192.168.196.128:27017 -d test1 -o ~/Desktop/test1bak</code></p></li><li><p><strong>数据的恢复</strong></p><p>语法：<code>mongorestore -h dbhost -d dbname --dir dbdirectory</code></p><p><code>-h</code>：服务器地址</p><p><code>-d</code>：需要恢复的数据库实例</p><p><code>--dir</code>：需要恢复的数据所在位置</p><p>如：<code>mongorestore -h 192.168.196.128:27017 -d test2 --dir ~/Desktop/test1bak/test1</code></p></li></ul><p><strong>※※数据的备份和恢复都需要另开一个终端运行语法命令，而不是在MongoDB的客户端中运行命令</strong></p><p>Windows环境下，如果是使用的<code>msi</code>版本的文件进行安装的，备份和恢复前需要下载<code>bin</code>目录中的<code>mongodump.exe</code>和<code>mongoimport.exe</code>等工具，然后复制到安装位置的bin目录中，下载地址为：https://www.mongodb.com/try/download/database-tools</p><h2 id="聚合命令" tabindex="-1"><a class="header-anchor" href="#聚合命令" aria-hidden="true">#</a> 聚合命令</h2><p>聚合(aggregate)是基于数据处理的聚合管道，每个文档通过一个由多个阶段（stage）组成的管道，可以对每个阶段的管道进行分组、过滤等功能，然后经过一系列的处理，输出相应的结果</p><p>语法：<code>db.集合名称.aggregate({管道:{表达式}})</code></p><img src="`+p+`" alt="MongoDB聚合命令示例" style="zoom:50%;"><ul><li><p><strong>常用管道</strong></p><p>管道：在mongodb中，⽂档处理完毕后，通过管道进⾏下⼀次处理</p><p><code>$group</code>：将集合中的⽂档分组，可⽤于统计结果</p><p><code>$match</code>：过滤数据，只输出符合条件的⽂档</p><p><code>$project</code>：修改输⼊⽂档的结构，如重命名、增加、删除字段、创建计算结果</p><p><code>$sort</code>：将输⼊⽂档排序后输出</p><p><code>$limit</code>：限制聚合管道返回的⽂档数</p><p><code>$skip</code>：跳过指定数量的⽂档，并返回余下的⽂档</p><p><code>$unwind</code>：将数组类型的字段进⾏拆分</p></li><li><p><strong>常用表达式</strong></p><p>表达式：处理输入的文档并输出</p><p>语法：<code>表达式:&#39;$字段名称&#39;</code></p><p><code>$sum</code>：计算总和，<code>$sum:1</code>表示将每一条数据的值都作为<code>1</code>，可以用来统计数量</p><p><code>$avg</code>：计算平均值</p><p><code>$min</code>：获取最⼩值</p><p><code>$max</code>：获取最⼤值</p><p><code>$push</code>：在结果⽂档中插⼊值到⼀个数组中</p><p><code>$first</code>：根据资源⽂档的排序获取第⼀个⽂档数据</p><p><code>$last</code>：根据资源⽂档的排序获取最后⼀个⽂档数据</p></li><li><p><strong>$group</strong></p><p>将集合中的文档进行分组，可用于统计结果</p><p><code>_id</code>表示分组的依据，使用某个字段的格式为<code>&quot;$字段名称&quot;</code></p><p>取字典嵌套的字典中的值，如：<code>$_id.country</code></p><p>能够同时按照多个键进行分组，如：<code>{$group:{_id:{country:&quot;$country&quot;,pro:&quot;$pro&quot;}}}</code></p><p>​ 分组结果为：<code>{_id:{country:&quot;&quot;,pro:&quot;&quot;}}</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 按照年龄分组，统计各组的数量和平均年龄</span>
db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$group</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$sum</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">avg_age</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$avg</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 使用$group统计整个文档，将集合中的所有数据分为一个组</span>
db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$group</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$sum</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">ave_age</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$avg</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：https://docs.mongodb.com/manual/reference/operator/aggregation/group/</p></li><li><p><strong>$project</strong></p><p>修改输入文档的结构，如：重命名，增加、删除字段，创建计算结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$group</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$sum</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">avg_age</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$avg</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$project</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">&quot;$_id&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">avg_age</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：<code>$project</code>中的<code>1</code>和<code>0</code>与投影中的作用相同，用于设置字段是否显示</p></li><li><p><strong>$match</strong></p><p>用于过滤数据，只输出符合条件的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 筛选出年龄大于14的数据</span>
db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$match</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$gt</span><span class="token operator">:</span><span class="token number">14</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>注</strong></em>：<code>$match</code>是管道命令，能将结果交给后一个管道，但是<code>find()</code>不可以</p></li><li><p><strong>$sort</strong></p><p>将输入的文档排序后输出</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$group</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$sum</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">avg_age</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$avg</span><span class="token operator">:</span><span class="token string">&quot;$age&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$sort</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">avg_age</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>$limit和$skip</strong></p><p><code>$limit</code>：限制输出数量</p><p><code>$skip</code>：跳过一定数量的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$limit</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$skip</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

db<span class="token punctuation">.</span>test01<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$skip</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$limit</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>$unwind</strong></p><p>将⽂档中的某⼀个数组类型字段拆分成多条，每条包含数组中的⼀个值</p><p>语法：<code>db.集合名称.aggregate({$unwind:&#39;$字段名称&#39;})</code></p><p>如：<code>db.t2.aggregate({$unwind:&quot;$size&quot;})</code></p><ul><li><p><em><strong>$unwind的preserveNullAndEmptyArrays属性</strong></em></p><p><code>$unwind</code>的<code>preserveNullAndEmptyArrays</code>属性默认为<code>false</code>，表示在拆分时丢弃属性值为空的数据；设置为<code>true</code>时表示保留属性值为空的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>t3<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">$unwind</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;$size&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">preserveNullAndEmptyArrays</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><p>参考资料：https://docs.mongodb.com/manual/indexes/</p><p>索引：目的是为了提高查询速度</p><p>创建索引语法：<code>db.集合名称.createIndex({字段名称:1})</code>，<code>1</code>表示升序，<code>-1</code>表示降序</p><p>查看查询时间：<code>db.t4.find({name:&#39;test10000&#39;}).explain(&#39;executionStats&#39;)</code>，其中有个<code>executionTimeMillis</code>属性表示查询所用时间</p><p><code>db.集合名称.getIndexes()</code>：查看集合中的所有索引</p><p><code>db.集合名称.dropIndex({创建索引的字段名称:1或-1})</code>：删除索引，</p><p>​ 如：<code>db.t4.dropIndex({name:1})</code></p><p><code>db.集合名称.ensureIndex({name:1,age:1})</code>：创建联合索引</p><p>在默认情况下创建的索引均不是唯一索引</p><p>创建唯一索引：<code>db.集合名称.ensureIndex({&quot;name&quot;:1},{&quot;unique&quot;:true})</code></p><p>创建唯一索引并消除重复：<code>db.t1.ensureIndex({&quot;name&quot;:1},{&quot;unique&quot;:true,&quot;dropDups&quot;:true})</code></p><h2 id="python操作mongodb" tabindex="-1"><a class="header-anchor" href="#python操作mongodb" aria-hidden="true">#</a> Python操作MongoDB</h2><p>安装Python包：<code>pip install pymongo</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pymongo <span class="token keyword">import</span> MongoClient

<span class="token triple-quoted-string string">&quot;&quot;&quot;实例化client，建立连接&quot;&quot;&quot;</span>
client <span class="token operator">=</span> MongoClient<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">27017</span><span class="token punctuation">)</span>
<span class="token comment"># 连接test1数据库中的t5集合（不存在会自动创建）</span>
collection <span class="token operator">=</span> client<span class="token punctuation">[</span><span class="token string">&#39;test1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;t5&#39;</span><span class="token punctuation">]</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;增加&quot;&quot;&quot;</span>
<span class="token comment"># 插入一条数据</span>
ret1 <span class="token operator">=</span> collection<span class="token punctuation">.</span>insert_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret1<span class="token punctuation">.</span>inserted_id<span class="token punctuation">)</span>  <span class="token comment"># 获取到插入的数据的_id -&gt; 6224d5d1703459fb314b62f5</span>
<span class="token comment"># 插入多条数据</span>
data_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;test{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
collection<span class="token punctuation">.</span>insert_many<span class="token punctuation">(</span>data_list<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;查询&quot;&quot;&quot;</span>
<span class="token comment"># 查询一条数据，返回一条数据的字典</span>
res <span class="token operator">=</span> collection<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>  <span class="token comment"># -&gt; {&#39;_id&#39;: ObjectId(&#39;6224d48cbc67229c01aff317&#39;), &#39;name&#39;: &#39;lisi&#39;, &#39;age&#39;: 10}</span>
<span class="token comment"># 查询所有数据，返回一个Cursor对象，可以使用list(res)将其转换成列表</span>
res <span class="token operator">=</span> collection<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>  <span class="token comment"># 返回一个Cursor对象 -&gt; &lt;pymongo.cursor.Cursor object at 0x000001AF96CC77B8&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;更新&quot;&quot;&quot;</span>
<span class="token comment"># 更新一条数据</span>
collection<span class="token punctuation">.</span>update_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;test0&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;$set&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;new_test0&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 更新所有数据</span>
collection<span class="token punctuation">.</span>update_many<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;$set&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;wangwu&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;删除&quot;&quot;&quot;</span>
<span class="token comment"># 删除一条数据</span>
collection<span class="token punctuation">.</span>delete_one<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;wangwu&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 删除所有数据</span>
collection<span class="token punctuation">.</span>delete_many<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;wangwu&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),c=[t];function i(d,l){return s(),a("div",null,c)}const k=n(o,[["render",i],["__file","08_MongoDB数据库.html.vue"]]);export{k as default};
