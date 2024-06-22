import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as o,b as n,d as s,e,f as i}from"./app-VKLC1A-x.js";const p="/mynotes/assets/文件权限-suW6xaSm.png",d={},r=n("h1",{id:"linux-常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-常用命令","aria-hidden":"true"},"#"),s(" Linux 常用命令")],-1),m={href:"https://mp.weixin.qq.com/s/Kog6AfXYINIDwKMpJMkGFQ",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ipconfig         <span class="token comment"># 查看 ip 地址</span>
<span class="token function">ip</span> addr          <span class="token comment"># 查看 ip 地址</span>
<span class="token function">ping</span> ip地址/域名  <span class="token comment"># 查看网络是否连通</span>
<span class="token function">clear</span>            <span class="token comment"># 清空屏幕</span>
<span class="token function">history</span>          <span class="token comment"># 查看使用的历史指令</span>
<span class="token function">su</span> 用户名         <span class="token comment"># 切换用户</span>
<span class="token function">su</span> - 用户名       <span class="token comment"># 切换用户，并打印上一次登录时间</span>
<span class="token builtin class-name">echo</span> 内容         <span class="token comment"># 打印内容</span>

<span class="token function">date</span>                   <span class="token comment"># 查看系统时间</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token number">18</span>:18:18       <span class="token comment"># 修改时间的时分秒</span>
ntpdate cn.ntp.org.cn  <span class="token comment"># 同步时间为北京时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关机、重启、登出" tabindex="-1"><a class="header-anchor" href="#关机、重启、登出" aria-hidden="true">#</a> 关机、重启、登出</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now              <span class="token comment"># 关闭系统</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> hours:minutes <span class="token operator">&amp;</span>  <span class="token comment"># 按预定时间关闭系统</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-c</span>                  <span class="token comment"># 取消按预定时间关闭系统</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now              <span class="token comment"># 重启</span>
<span class="token function">reboot</span>                       <span class="token comment"># 重启</span>
<span class="token builtin class-name">logout</span>                       <span class="token comment"># 注销</span>
poweroff                     <span class="token comment"># 关机</span>
<span class="token function">hostname</span>                     <span class="token comment"># 查看主机名称</span>
init <span class="token number">0</span>                       <span class="token comment"># 关闭系统</span>
telinit <span class="token number">0</span>                    <span class="token comment"># 关闭系统</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作" aria-hidden="true">#</a> 目录操作</h2><h3 id="目录切换命令" tabindex="-1"><a class="header-anchor" href="#目录切换命令" aria-hidden="true">#</a> 目录切换命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前路径</span>
<span class="token builtin class-name">pwd</span>

<span class="token comment"># 目录切换命令</span>
<span class="token builtin class-name">cd</span> /      <span class="token comment"># 进入根目录</span>
<span class="token builtin class-name">cd</span> /home  <span class="token comment"># 进入 &#39;/ home&#39; 目录&#39;</span>
<span class="token builtin class-name">cd</span> -      <span class="token comment"># 返回上次所在的目录</span>
<span class="token builtin class-name">cd</span> ~      <span class="token comment"># 切换到当前用户的家目录</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>     <span class="token comment"># 返回上一级目录</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>  <span class="token comment"># 返回上两级目录</span>
<span class="token builtin class-name">cd</span> <span class="token function">dir</span>    <span class="token comment"># 进入文件夹中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录查看命令" tabindex="-1"><a class="header-anchor" href="#目录查看命令" aria-hidden="true">#</a> 目录查看命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>          <span class="token comment"># 查看目录中的文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span>       <span class="token comment"># 查看目录中文件的详细信息，可以缩写为 ll</span>
            <span class="token comment"># 以 d 开头的是文件夹，以 - 开头的是文件</span>
            <span class="token comment"># .sh 结尾的是可执行文件</span>
            <span class="token comment"># .tar .gz .tar.gz 结尾的是压缩文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-a</span>       <span class="token comment"># 查看目录中的所有文件，包括隐藏文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span>      <span class="token comment"># 查看目录中所有文件的详细信息</span>
<span class="token function">ls</span> *<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>*  <span class="token comment"># 查看包含数字的文件和文件夹</span>
<span class="token function">ls</span> <span class="token function">dir</span>      <span class="token comment"># 查看指定目录下的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录的增删改查" tabindex="-1"><a class="header-anchor" href="#目录的增删改查" aria-hidden="true">#</a> 目录的增删改查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 增加</span>
<span class="token function">mkdir</span> <span class="token function">dir</span>            <span class="token comment"># 在当前目录下新建一个 dir 文件夹</span>
<span class="token function">mkdir</span> dir1 dir2      <span class="token comment"># 在当前目录下新建两个文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /dir1/dir2  <span class="token comment"># 创建一个目录树</span>

<span class="token comment"># 删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token function">dir</span>         <span class="token comment"># 删除目录，会询问</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token function">dir</span>        <span class="token comment"># 删除目录，不会询问，可以删除目录及其内容</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> dir1 dir2  <span class="token comment"># 同时删除两个目录及它们的内容</span>
<span class="token function">rmdir</span> <span class="token function">dir</span>         <span class="token comment"># 删除目录，不会询问，只可以删除空目录</span>

<span class="token comment"># 修改</span>
<span class="token function">mv</span> <span class="token function">dir</span> new_dir  <span class="token comment"># 重命名/移动目录或文件</span>

<span class="token comment"># 复制</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token function">dir</span> new_dir  <span class="token comment"># 复制目录</span>

<span class="token comment"># 查询</span>
<span class="token function">find</span> /home <span class="token parameter variable">-name</span> <span class="token string">&#39;*a*&#39;</span>  <span class="token comment"># 在指定目录下根据文件名查询文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><h3 id="文件的增删改查" tabindex="-1"><a class="header-anchor" href="#文件的增删改查" aria-hidden="true">#</a> 文件的增删改查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> file1 file2     <span class="token comment"># 创建文件</span>
<span class="token function">rm</span> <span class="token function">file</span>               <span class="token comment"># 删除文件，会询问</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> file1 file2     <span class="token comment"># 删除文件，不会询问</span>
<span class="token function">cp</span> file1 file2        <span class="token comment"># 复制文件</span>
<span class="token function">mv</span> filename new_name  <span class="token comment"># 重命名或移动文件位置</span>

vi/vim file1     <span class="token comment"># 修改文件</span>
    :wq          <span class="token comment"># 保存并退出</span>
    :q<span class="token operator">!</span>          <span class="token comment"># 强制退出不保存</span>
    :set number  <span class="token comment"># 显示行号</span>
    /要查找的内容  <span class="token comment"># 查找内容，按 n 查找下一个</span>

<span class="token builtin class-name">echo</span> 内容 <span class="token operator">&gt;&gt;</span> filename  <span class="token comment"># 将内容增量写入到文件中，在原有内容后追加</span>
<span class="token builtin class-name">echo</span> 内容 <span class="token operator">&gt;</span> filename   <span class="token comment"># 将内容全量写入到文件中，清空原有内容</span>

<span class="token function">cat</span> filename   <span class="token comment"># 查看文件内容，适用于文件行数较少的情况</span>
<span class="token function">more</span> filename  <span class="token comment"># 查看文件内容，适用于文件行数较多的情况，会显示百分比</span>
               <span class="token comment"># 回车：看下一行</span>
               <span class="token comment"># 空格：看下一页</span>
               <span class="token comment"># q：结束查看</span>
<span class="token function">less</span> filename  <span class="token comment"># 查看文件内容，适用于文件行数较多的情况，不会显示百分比</span>
               <span class="token comment"># 回车：看下一行</span>
               <span class="token comment"># 空格：看下一页</span>
               <span class="token comment"># 上下箭头：看上一行和下一行</span>
               <span class="token comment"># q：结束查看</span>
<span class="token comment"># less 可以往前看；more 只能往后看</span>

<span class="token function">head</span> <span class="token parameter variable">-10</span> filename  <span class="token comment"># 查看文件前 10 行内容</span>
<span class="token function">tail</span> <span class="token parameter variable">-10</span> filename  <span class="token comment"># 查看文件后 10 行内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件权限" tabindex="-1"><a class="header-anchor" href="#文件权限" aria-hidden="true">#</a> 文件权限</h3><p>文件具有可读（r read）、可写（w write）、可执行（x execute）三种权限，权重分别为4、2、1</p><img src="`+p+`" alt="文件权限" style="zoom:50%;"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改文件权限</span>
<span class="token function">chmod</span> 权重 filename
<span class="token function">chmod</span> <span class="token number">777</span> <span class="token number">1234</span>.txt
<span class="token function">chmod</span> o+x demo.txt  <span class="token comment"># 给其他用户增加可执行的权限</span>
<span class="token comment"># u：user属主，g：group属组，o：others其他人，a：all所有人</span>
<span class="token comment"># +：加入，-：除去，=：设定</span>

<span class="token comment"># 修改文件所有者</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> 用户名 文件名
<span class="token function">chown</span> <span class="token parameter variable">-R</span> hadoop /home/1234.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件压缩命令" tabindex="-1"><a class="header-anchor" href="#文件压缩命令" aria-hidden="true">#</a> 文件压缩命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 压缩命令</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> 压缩后的压缩包名称 file1 file2 file3
    <span class="token comment"># z：调用 gzip 压缩命令进行压缩</span>
    <span class="token comment"># c：打包文件</span>
    <span class="token comment"># v：显示运行过程</span>
    <span class="token comment"># f：指定文件名</span>
    <span class="token comment"># z：通过 gzip 指令处理压缩文件</span>
    <span class="token comment"># x：表示解压</span>
    <span class="token comment"># t：查看压缩包的内容</span>

<span class="token comment"># 解压缩命令</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 压缩包名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定时任务-crontab" tabindex="-1"><a class="header-anchor" href="#定时任务-crontab" aria-hidden="true">#</a> 定时任务 Crontab</h2>`,21),u={href:"https://www.runoob.com/w3cnote/linux-crontab-tasks.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> crond start  <span class="token comment"># 开启定时服务</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-三剑客" tabindex="-1"><a class="header-anchor" href="#linux-三剑客" aria-hidden="true">#</a> Linux 三剑客</h2><h3 id="grep-检索内容" tabindex="-1"><a class="header-anchor" href="#grep-检索内容" aria-hidden="true">#</a> grep：检索内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> pattern <span class="token function">file</span>  <span class="token comment"># 在 file 文件中检索符合 pattern 规则的内容，返回行内容</span>

<span class="token comment"># 在 /home/hadoop/ 文件夹中所有以 .log 结束的文件中检索 registered</span>
<span class="token function">grep</span> <span class="token string">&#39;registered&#39;</span> /home/hadoop/*.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="awk-数据统计" tabindex="-1"><a class="header-anchor" href="#awk-数据统计" aria-hidden="true">#</a> awk：数据统计</h3>`,5),b={href:"https://blog.csdn.net/anqixiang/article/details/117903529",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打印文件中第 num1 列和第 num2 列的内容</span>
<span class="token function">awk</span> <span class="token string">&#39;{print $num1, $num2}&#39;</span> <span class="token function">file</span>
<span class="token function">awk</span> <span class="token string">&#39;{print $1, $3}&#39;</span> /home/hadoop/azkaban-webserver.log
<span class="token comment"># 一次读取一行文本，按输入的分隔符进行切片</span>
<span class="token comment"># 将切片结果保存在内建的变量 $num1 $num2 ...中（$0 表示一行的全部内容）</span>
<span class="token comment"># -F：指定分隔符（默认是空格）</span>
<span class="token comment"># 支持对单个切片的判断，也支持循环判断</span>

<span class="token comment"># 对 /home/hadoop/azkaban-webserver.log 文件中第一列的日期进行数量统计</span>
<span class="token function">awk</span> <span class="token string">&#39;{count[$1]++} END {for (i in count) print i &quot; &quot; count[i]}&#39;</span> /home/hadoop/azkaban-webserver.log
<span class="token comment"># {count[$1]++}：统计第一列的文本中，不同内容出现的次数</span>
<span class="token comment"># for (i in count)：在统计的结果集中进行循环</span>
<span class="token comment"># print i &quot; &quot; count[i]：打印内容和出现的次数，i 表示内容，count[i] 为该内容出现的次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sed-文件内容替换" tabindex="-1"><a class="header-anchor" href="#sed-文件内容替换" aria-hidden="true">#</a> sed：文件内容替换</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 file 中的 old_str 替换为 new_str</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/old_str/new_str/g&#39;</span> <span class="token function">file</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/ab/xxx/g&#39;</span> /root/test829/3.txt
<span class="token comment"># s：表示替换</span>
<span class="token comment"># g：表示全局</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/old_str/new_str/&#39;</span> <span class="token function">file</span>  <span class="token comment"># 对每行匹配到的第一个字符串进行替换</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/匹配字符串/d&#39;</span>              <span class="token comment"># 删除所有匹配到字符串的行</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;nd&#39;</span> <span class="token function">file</span>  <span class="token comment"># 删除文件中的第 n 行</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$d&#39;</span> <span class="token function">file</span>  <span class="token comment"># 删除文件中的最后一行</span>

<span class="token comment"># 如果存在符号，则需要加 \\ 进行转译</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/\\./\\;/&#39;</span> /root/test829/3.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--state</span>      <span class="token comment"># 查看防火墙的状态</span>
systemctl stop firewalld  <span class="token comment"># 关闭防火墙</span>

<span class="token function">ps</span> <span class="token parameter variable">-ef</span>  <span class="token comment"># 查看所有服务进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> 服务名  <span class="token comment"># 查看某个端口是否启动</span>
    <span class="token comment"># Oracle 默认端口是 1521</span>
    <span class="token comment"># SSH 默认端口是 22</span>
    <span class="token comment"># MySQL 默认端口是 3306</span>
    <span class="token comment"># SVN 默认端口是 8443</span>

<span class="token function">top</span>  <span class="token comment"># 查看当前所有在运行的进程</span>
<span class="token function">netstat</span> <span class="token parameter variable">-apn</span> <span class="token operator">|</span> <span class="token function">grep</span> 服务名  <span class="token comment"># 查看服务对应的 PID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(g,x){const a=c("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[s("参考资料："),n("a",m,[s("https://mp.weixin.qq.com/s/Kog6AfXYINIDwKMpJMkGFQ"),e(a)])]),v,n("p",null,[s("参考资料："),n("a",u,[s("https://www.runoob.com/w3cnote/linux-crontab-tasks.html"),e(a)])]),k,n("p",null,[s("参考资料："),n("a",b,[s("https://blog.csdn.net/anqixiang/article/details/117903529"),e(a)])]),h])}const q=l(d,[["render",f],["__file","02_Linux常用命令.html.vue"]]);export{q as default};
