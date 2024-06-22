import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,f as s}from"./app-VKLC1A-x.js";const d="/mynotes/assets/数据存储逻辑图-YPQQJs92.jpg",l={},v=s(`<h1 id="底层视图-数据存储逻辑图" tabindex="-1"><a class="header-anchor" href="#底层视图-数据存储逻辑图" aria-hidden="true">#</a> 底层视图_数据存储逻辑图</h1><h2 id="底层视图" tabindex="-1"><a class="header-anchor" href="#底层视图" aria-hidden="true">#</a> 底层视图</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>ORACLE 常用系统表及视图：
<span class="token comment">-- 部分表和视图需要 SYS 管理员授权后普通用户才能访问</span>

☆ DBA_ 开头：
DBA_USERS 数据库用户信息
DBA_SEGMENTS 表段信息
DBA_EXTENTS 数据区信息
DBA_OBJECTS 数据库对象信息
DBA_TABLESPACES 数据库表空间信息
DBA_DATA_FILES 数据文件设置信息
DBA_TEMP_FILES 临时数据文件信息
DBA_ROLLBACK_SEGS 回滚段信息
DBA_TS_QUOTAS 用户表空间配额信息
DBA_FREE_SPACE 数据库空闲空间信息
DBA_PROFILES 数据库用户资源限制信息
DBA_SYS_PRIVS 用户的系统权限信息
DBA_TAB_PRIVS 用户具有的对象权限信息
DBA_COL_PRIVS 用户具有的列对象权限信息
DBA_ROLE_PRIVS 用户具有的角色信息
DBA_AUDIT_TRAIL 审计跟踪记录信息
DBA_STMT_AUDIT_OPTS 审计设置信息
DBA_AUDIT_OBJECT 对象审计结果信息
DBA_AUDIT_SESSION 会话审计结果信息
DBA_INDEXES 用户模式的索引信息

☆ USER_ 开头：
USER_OBJECTS 用户对象信息
USER_SOURCE 数据库用户的所有资源对象信息
USER_SEGMENTS 用户的表段信息
USER_TABLES 用户的表对象信息
USER_TAB_COLUMNS 用户的表列信息
USER_CONSTRAINTS 用户的对象约束信息
USER_SYS_PRIVS 当前用户的系统权限信息
USER_TAB_PRIVS 当前用户的对象权限信息
USER_COL_PRIVS 当前用户的表列权限信息
USER_ROLE_PRIVS 当前用户的角色权限信息
USER_INDEXES 用户的索引信息
USER_IND_COLUMNS 用户的索引对应的表列信息
USER_CONS_COLUMNS 用户的约束对应的表列信息
USER_CLUSTERS 用户的所有簇信息
USER_CLU_COLUMNS 用户的簇所包含的内容信息
USER_CLUSTER_HASH_EXPRESSIONS 散列簇的信息

☆ V$ 开头：
V$<span class="token keyword">DATABASE</span> 数据库信息
V$DATAFILE 数据文件信息
V$CONTROLFILE 控制文件信息
V$LOGFILE 重做日志信息
V$INSTANCE 数据库实例信息
V$LOG 日志组信息
V$LOGHIST 日志历史信息
V$SGA 数据库 SGA 信息
V$PARAMETER 初始化参数信息
V$PROCESS 数据库服务器进程信息
V$BGPROCESS 数据库后台进程信息
V$CONTROLFILE_RECORD_SECTION 控制文件记载的各部分信息
V$THREAD 线程信息
V$DATAFILE_HEADER 数据文件头所记载的信息
V$ARCHIVED_LOG 归档日志信息
V$ARCHIVE_DEST 归档日志的设置信息
V$LOGMNR_CONTENTS 归档日志分析的 DML DDL 结果信息
V$LOGMNR_DICTIONARY 日志分析的字典文件信息
V$LOGMNR_LOGS 日志分析的日志列表信息
V$<span class="token keyword">TABLESPACE</span> 表空间信息
V$TEMPFILE 临时文件信息
V$FILESTAT 数据文件的 I<span class="token operator">/</span>O 统计信息
V$UNDOSTAT UNDO 数据信息
V$ROLLNAME 在线回滚段信息
V$ROLLNAME 在线回滚段信息
V$<span class="token keyword">SESSION</span> 会话信息
V$<span class="token keyword">TRANSACTION</span> 事务信息
V$ROLLSTAT 回滚段统计信息
V$PWFILE_USERS 特权用户信息
V$SQLAREA 当前查询过的 <span class="token keyword">SQL</span> 语句访问过的资源及相关的信息
V$<span class="token keyword">SQL</span> 与 V$SQLAREA 基本相同的相关信息
V$SYSSTAT 数据库系统状态信息

☆ ALL_ 开头：
ALL_USERS 数据库所有用户的信息
ALL_OBJECTS 数据库所有的对象的信息
ALL_SOURCE 数据库所有对象的详细信息
ALL_DEF_AUDIT_OPTS 所有默认的审计设置信息
ALL_TABLES 所有的表对象信息
ALL_INDEXES 所有的数据库对象索引的信息

☆ SESSION_ 开头：
SESSION_ROLES 会话的角色信息
SESSION_PRIVS 会话的权限信息

☆ INDEX_ 开头：
INDEX_STATS 索引的设置和存储信息

☆ 伪表：
DUAL 系统伪列表信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据存储逻辑图" tabindex="-1"><a class="header-anchor" href="#数据存储逻辑图" aria-hidden="true">#</a> 数据存储逻辑图</h2><img src="`+d+'" alt="数据存储逻辑图" style="zoom:33%;">',5),a=[v];function r(c,S){return i(),e("div",null,a)}const u=n(l,[["render",r],["__file","17_底层视图_数据存储逻辑图.html.vue"]]);export{u as default};
