import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as p,b as s,d as a,e,f as r}from"./app-VKLC1A-x.js";const d="/mynotes/assets/Hadoop项目结构-2AW_tLi6.png",i="/mynotes/assets/分布式文件系统的结构-VWQKwLw9.png",c={},m=s("h1",{id:"hadoop",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hadoop","aria-hidden":"true"},"#"),a(" Hadoop")],-1),u=s("h2",{id:"hadoop-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hadoop-介绍","aria-hidden":"true"},"#"),a(" Hadoop 介绍")],-1),v={href:"https://hadoop.org.cn/docs/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/huxili2020/article/details/117809913",target:"_blank",rel:"noopener noreferrer"},b=r('<h3 id="hadoop-和-oracle-的区别" tabindex="-1"><a class="header-anchor" href="#hadoop-和-oracle-的区别" aria-hidden="true">#</a> Hadoop 和 Oracle 的区别</h3><p>Hadoop 是一款大数据标准处理软件，Oracle 只适合存储少量数据的应用场景，通常是 GB 级别以下数据量，但是一旦数据量非常大的时候，Oracle 将不再适用，这时只能用大数据技术进行处理</p><p>Oracle 中只能存储文本文件，大数据除了可以存储文本，还可以存储图片、视频、音频</p><p>我们称文本文件为<strong>结构化数据</strong>；图片、视频、音频是<strong>非结构化数据</strong>；json、html 等具有一定规则性的文件称为<strong>半结构化数据</strong></p><h3 id="hadoop-的发展历史" tabindex="-1"><a class="header-anchor" href="#hadoop-的发展历史" aria-hidden="true">#</a> Hadoop 的发展历史</h3><p>Hadoop 的创始人是 Doug Cutting，最早来自于 2002 年的 Apache Nutch 项目，Nutch 项目是 Lucene 项目的一部分，Lucene 是 Apache 的一个顶级项目，最早是一个文本搜索库</p><p>2004 年，Nutch 项目也模仿 GFS（Google File System）开发了自己的分布式文件系统 NDFS（Nutch Distributed File System），也就是 HDFS 的前身</p><p>2005 年，Nutch 开源实现了谷歌的 MapReduce</p><p>2006 年，Nutch 中的 NDFS 和 MapReduce 开始独立出来，成为 Lucene 项目的一个子项目，称为 Hadoop</p><p>2008 年 1 月，Hadoop 正式成为 Apache 顶级项目</p><p>2008 年 4 月，Hadoop 打破世界纪录，成为最快排序 1TB 数据的系统，用了 209 秒</p><p>2009 年 5 月，Hadoop 更是把 1TB 数据排序时间缩短到 62 秒，成为大数据时代最具影响力的开源分布式开发平台，并成为事实上的大数据处理标准</p><h3 id="hadoop-的结构" tabindex="-1"><a class="header-anchor" href="#hadoop-的结构" aria-hidden="true">#</a> Hadoop 的结构</h3><p>Hadoop 1.0 的核心是分布式文件系统 HDFS（Hadoop Distributed File System）和 MapReduce（分布式并行编程模型）</p><p>Hadoop 2.0 以后增加了一个核心组件，成为三大核心组件（HDFS、MapReduce、YARN）</p><p><strong>HDFS</strong>：Hadoop Distributed File System，Hadoop 分布式文件系统，用于解决大数据的存储问题</p><p><strong>MapReduce</strong>：用于解决大数据的计算问题</p><p><strong>YARN</strong>：负责集群资源的管理</p><h3 id="hadoop-生态系统和功能" tabindex="-1"><a class="header-anchor" href="#hadoop-生态系统和功能" aria-hidden="true">#</a> Hadoop 生态系统和功能</h3><img src="'+d+'" alt="Hadoop项目结构"><table><thead><tr><th style="text-align:left;"><strong>生态系统</strong></th><th style="text-align:left;"><strong>功能</strong></th></tr></thead><tbody><tr><td style="text-align:left;">HDFS</td><td style="text-align:left;">分布式文件系统</td></tr><tr><td style="text-align:left;">MapReduce</td><td style="text-align:left;">分布式并行编程模型</td></tr><tr><td style="text-align:left;">YARN</td><td style="text-align:left;">资源管理和调度器</td></tr><tr><td style="text-align:left;">Tez</td><td style="text-align:left;">运行在 YARN 之上的下一代 Hadoop 查询处理框架</td></tr><tr><td style="text-align:left;">Hive</td><td style="text-align:left;">Hadoop 上的数据仓库</td></tr><tr><td style="text-align:left;">HBase</td><td style="text-align:left;">Hadoop 上的非关系型的分布式数据库</td></tr><tr><td style="text-align:left;">Pig</td><td style="text-align:left;">一个基于 Hadoop 的大规模数据分析平台，提供类似 SQL 的查询语言 Pig Latin</td></tr><tr><td style="text-align:left;">Sqoop</td><td style="text-align:left;">用于在 Hadoop 与传统数据库之间进行数据传递</td></tr><tr><td style="text-align:left;">Oozie</td><td style="text-align:left;">Hadoop 上的工作流管理系统</td></tr><tr><td style="text-align:left;">Zookeeper</td><td style="text-align:left;">提供分布式协调一致性服务</td></tr><tr><td style="text-align:left;">Storm</td><td style="text-align:left;">流计算框架</td></tr><tr><td style="text-align:left;">Flume</td><td style="text-align:left;">一个高可用的，高可靠的，分布式的海量日志采集、聚合和传输的系统</td></tr><tr><td style="text-align:left;">Ambari</td><td style="text-align:left;">Hadoop 快速部署工具，支持 Apache Hadoop 集群的供应、管理和监控</td></tr><tr><td style="text-align:left;">Kafka</td><td style="text-align:left;">一种高吞吐量的分布式发布订阅消息系统，可以处理消费者规模的网站中的所有动作流数据</td></tr><tr><td style="text-align:left;">Spark</td><td style="text-align:left;">类似于 Hadoop MapReduce 的通用并行框架</td></tr></tbody></table><h2 id="hdfs" tabindex="-1"><a class="header-anchor" href="#hdfs" aria-hidden="true">#</a> HDFS</h2><h3 id="hdfs-介绍" tabindex="-1"><a class="header-anchor" href="#hdfs-介绍" aria-hidden="true">#</a> HDFS 介绍</h3><p>HDFS 集群中有两类节点，一类称为<strong>主节点</strong>（Master Node，又称名称节点，Name Node），另一类称为<strong>从节点</strong>（Slave Node，又称数据节点，DataNode）</p><p>从节点 Data Node 负责数据的存储，它是集群的工作节点</p><p>主节点 Name Node 只负责元数据的维护，它在集群中有且仅有一台</p><p>元数据只会维护数据和数据节点之间的映射关系</p><img src="'+i+`" alt="分布式文件系统的结构"><h3 id="在-hdfs-中运行命令" tabindex="-1"><a class="header-anchor" href="#在-hdfs-中运行命令" aria-hidden="true">#</a> 在 HDFS 中运行命令</h3><p>参考资料：https://www.jianshu.com/nb/37386407</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要进入 hadoop 目录中的 bin 文件夹下，即：/opt/module/hadoop-3.3.0/bin</span>
./hdfs dfs <span class="token parameter variable">-ls</span> /                <span class="token comment"># 查看目录中的文件</span>
./hdfs dfs <span class="token parameter variable">-ls</span> /test            <span class="token comment"># 查看 test 文件夹中的文件</span>
./hdfs dfs <span class="token parameter variable">-mkdir</span> /0808         <span class="token comment"># 创建文件夹</span>
./hdfs dfs <span class="token parameter variable">-touch</span> /wordcount    <span class="token comment"># 创建文件</span>
./hdfs dfs <span class="token parameter variable">-touch</span> /wanhe/info   <span class="token comment"># 创建文件</span>
./hdfs dfs <span class="token parameter variable">-chmod</span> <span class="token number">700</span> /tmp      <span class="token comment"># 修改文件权限</span>
./hdfs dfs <span class="token parameter variable">-put</span> info /wanhe     <span class="token comment"># 将本地文件上传到 HDFS 指定目录（本地文件需提前建好）</span>
./hdfs dfs <span class="token parameter variable">-get</span> /wanhe/info ./  <span class="token comment"># 从 HDFS 下载文件到本地（需要保证对本地文件夹有写的权限）</span>
./hdfs dfs <span class="token parameter variable">-rm</span> /wanhe/info      <span class="token comment"># 从 HDFS 删除文件</span>
./hdfs dfs <span class="token parameter variable">-rm</span> <span class="token parameter variable">-r</span> /wanhe        <span class="token comment"># 删除文件夹，不支持 -rf</span>

./hdfs dfs <span class="token parameter variable">-moveFromLocal</span> info /wanhe      <span class="token comment"># 剪切本地文件到 HDFS</span>
./hdfs dfs <span class="token parameter variable">-cat</span> /wanhe/info                <span class="token comment"># 查看文件内容</span>
./hdfs dfs <span class="token parameter variable">-appendToFile</span> info /wanhe/info  <span class="token comment"># 在文件末尾追加内容，只能读取文件追加，不能追加字符串</span>
./hdfs dfs <span class="token parameter variable">-cp</span> /wanhe/info /tmp/           <span class="token comment"># 文件复制</span>
./hdfs dfs <span class="token parameter variable">-mv</span> /wanhe/info /user/          <span class="token comment"># 移动文件位置</span>

./hdfs dfs <span class="token parameter variable">-du</span> /user  <span class="token comment"># 统计文件夹的大小信息</span>
./hdfs dfs <span class="token parameter variable">-df</span> <span class="token parameter variable">-h</span> /   <span class="token comment"># 统计文件系统的可用空间信息</span>
Filesystem             Size  Used  Available  Use%
hdfs://node100:9000  <span class="token number">17.5</span> G  <span class="token number">24</span> K    <span class="token number">910.7</span> M    <span class="token number">0</span>%

./hdfs dfs <span class="token parameter variable">-count</span> /user  <span class="token comment"># 统计指定目录下的文件数量</span>
    <span class="token number">1</span>            <span class="token number">1</span>                  <span class="token number">0</span> /user
<span class="token comment"># 第一列 1 表示 /user/ 目录下文件夹的数量</span>
<span class="token comment"># 第二列 1 表示 /user/ 目录下文件的数量</span>
<span class="token comment"># 第三列 0 表示 /user/ 目录下所有文件占用的磁盘容量（不计算副本个数）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网页端操作 HDFS 文件系统：http://192.168.5.100:9870/</p><h3 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h3><h4 id="拒绝连接" tabindex="-1"><a class="header-anchor" href="#拒绝连接" aria-hidden="true">#</a> 拒绝连接</h4><p>hadoop 用户进入 <code>bin</code> 目录后，可以通过 <code>jps</code> 命令查看 HDFS 服务是否启动，如果出现如下内容，则已经启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>hadoop@node100 sbin<span class="token punctuation">]</span>$ jps
<span class="token number">7554</span> SecondaryNameNode
<span class="token number">7940</span> NodeManager
<span class="token number">8276</span> Jps
<span class="token number">7356</span> DataNode
<span class="token number">7821</span> ResourceManager
<span class="token number">7231</span> NameNode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反之，则没有启动，需要进入 <code>/hadoop/sbin/</code> 目录中，运行如下命令进行启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./start-all.sh
./start-dfs.sh  <span class="token comment"># 和上面作用相同，二选一使用即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件无法上传" tabindex="-1"><a class="header-anchor" href="#文件无法上传" aria-hidden="true">#</a> 文件无法上传</h4><p>使用 <code>jps</code> 命令查看，在启动的服务中，是否缺少了 <code>DataNode</code>，如果缺少了 <code>DataNode</code>，则进入 <code>/hadoop/sbin/</code> 目录中，使用如下命令停止 HDFS 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./stop-all.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>服务停止后，依次运行如下三个命令，对 HDFS 服务进行初始化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /tmp/hadoop-hadoop/dfs/data/*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /tmp/hadoop-hadoop/dfs/name/*
hdfs namenode <span class="token parameter variable">-format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化完成后，重新启动 HDFS 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./start-all.sh
./start-dfs.sh  <span class="token comment"># 和上面作用相同，二选一使用即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>jps</code> 命令，查看 <code>DataNode</code> 是否已经启动</p><h3 id="mapreduce" tabindex="-1"><a class="header-anchor" href="#mapreduce" aria-hidden="true">#</a> MapReduce</h3><p>使用 MapReduce 进行计算，会先打包成一个 JOB 任务，然后会启动两个程序，一个 Map 程序，另一个 Reduce 程序。它首先执行 Map 程序，Map 程序执行完后才会执行 Reduce 程序。Map 程序的输出是 Reduce 程序的输入</p><h3 id="hadoop-自带的词频统计" tabindex="-1"><a class="header-anchor" href="#hadoop-自带的词频统计" aria-hidden="true">#</a> Hadoop 自带的词频统计</h3><p>参考资料：https://www.jianshu.com/p/327d2af3903d</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./yarn jar /opt/module/hadoop-3.3.0/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.3.0.jar wordcount /worddemo /word123
<span class="token comment"># ./yarn 是执行命令</span>
<span class="token comment"># jar 是表示执行的是 jar 包</span>
<span class="token comment"># /opt/module/hadoop-3.3.0/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.3.0.jar 表示要执行的jar包</span>
<span class="token comment"># wordcount 是要执行过程的名字</span>
<span class="token comment"># /worddemo 是我们上传的待分析的文件在 HDFS 中所在的路径</span>
<span class="token comment"># /word123 是分析结果的输出路径</span>

<span class="token comment"># 等待一段时间后，会得到输出结果</span>
<span class="token comment"># 查看 /word123，会看到两个文件，其中 _SUCCESS 代表成功，part-r-00000 保存着输出结果</span>
./hdfs dfs <span class="token parameter variable">-ls</span> /word123
Found <span class="token number">2</span> items
-rw-r--r--   <span class="token number">2</span> root supergroup          <span class="token number">0</span> <span class="token number">2019</span>-05-30 <span class="token number">12</span>:30 /word123/_SUCCESS
-rw-r--r--   <span class="token number">2</span> root supergroup         <span class="token number">65</span> <span class="token number">2019</span>-05-30 <span class="token number">12</span>:30 /word123/part-r-00000
<span class="token comment"># 查看词频统计结果</span>
./hdfs dfs <span class="token parameter variable">-cat</span> /word123/part-r-00000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapreduce-过程分析" tabindex="-1"><a class="header-anchor" href="#mapreduce-过程分析" aria-hidden="true">#</a> MapReduce 过程分析</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># MapReduce 任务的输入：</span>
hello world hello
hello <span class="token builtin class-name">test</span>
<span class="token builtin class-name">test</span> today

<span class="token comment"># Map 程序：</span>
<span class="token comment"># Map 程序的输入：</span>
<span class="token operator">&lt;</span>行号, 该行内容<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token number">1</span>, <span class="token string">&quot;hello world hello&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token number">2</span>, <span class="token string">&quot;hello test&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token number">3</span>, <span class="token string">&quot;test today&quot;</span><span class="token operator">&gt;</span>

<span class="token comment"># Map 程序的输出</span>
<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;world&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>

<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;test&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>

<span class="token operator">&lt;</span><span class="token string">&quot;test&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;today&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>

<span class="token comment"># Shuffle 过程：排序 分区 合并 归并</span>
<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>    <span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>  	
<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>    <span class="token operator">&lt;</span><span class="token string">&quot;world&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;world&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>

<span class="token comment"># Reduce 程序：</span>
<span class="token comment"># Reduce 程序的输入：</span>
<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator">&lt;</span><span class="token number">2</span>, <span class="token number">1</span>, <span class="token operator"><span class="token file-descriptor important">0</span>&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;test&quot;</span>, <span class="token operator">&lt;</span><span class="token number">0</span>, <span class="token number">1</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;today&quot;</span>, <span class="token operator">&lt;</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;world&quot;</span>, <span class="token operator">&lt;</span><span class="token number">1</span>, <span class="token number">0</span>, <span class="token operator"><span class="token file-descriptor important">0</span>&gt;&gt;</span>

<span class="token comment"># Reduce 程序的输出：</span>
<span class="token operator">&lt;</span><span class="token string">&quot;hello&quot;</span>, <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;test&quot;</span>, <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;today&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span><span class="token string">&quot;world&quot;</span>, <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>

<span class="token comment"># MapReduce 任务的输出：</span>
hello <span class="token number">3</span>
<span class="token builtin class-name">test</span> <span class="token number">2</span>
today <span class="token number">1</span>
world <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function k(g,f){const n=o("ExternalLinkIcon");return l(),p("div",null,[m,u,s("p",null,[a("Hadoop 中文文档："),s("a",v,[a("https://hadoop.org.cn/docs/"),e(n)])]),s("p",null,[a("参考资料："),s("a",h,[a("https://blog.csdn.net/huxili2020/article/details/117809913"),e(n)])]),b])}const y=t(c,[["render",k],["__file","03_Hadoop.html.vue"]]);export{y as default};