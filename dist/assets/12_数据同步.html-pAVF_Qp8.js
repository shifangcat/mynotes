const e=JSON.parse('{"key":"v-7fe8285e","path":"/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/02_PLSQL%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/12_%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5.html","title":"数据同步","lang":"zh-CN","frontmatter":{"description":"全量同步 逻辑：用源表的数据直接覆盖目标表。在向目标表中插入数据之前，先清空目标表，然后查询源表的全部数据，并插入到目标表中 全量同步的使用流程 ```sql -- 创建源表 CREATE TABLE EMP_SOURCE AS SELECT T.* -- 员工入职的这一天就是这条数据的生成时间 ,T.HIREDATE AS CREATE_DATE ,...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/mynotes/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/02_PLSQL%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/12_%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5.html"}],["meta",{"property":"og:site_name","content":"云的笔记"}],["meta",{"property":"og:title","content":"数据同步"}],["meta",{"property":"og:description","content":"全量同步 逻辑：用源表的数据直接覆盖目标表。在向目标表中插入数据之前，先清空目标表，然后查询源表的全部数据，并插入到目标表中 全量同步的使用流程 ```sql -- 创建源表 CREATE TABLE EMP_SOURCE AS SELECT T.* -- 员工入职的这一天就是这条数据的生成时间 ,T.HIREDATE AS CREATE_DATE ,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T14:01:50.000Z"}],["meta",{"property":"article:author","content":"Mr.云"}],["meta",{"property":"article:modified_time","content":"2024-03-09T14:01:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据同步\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T14:01:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.云\\",\\"url\\":\\"https://gitee.com/yuyangk\\"}]}"]]},"headers":[{"level":2,"title":"全量同步","slug":"全量同步","link":"#全量同步","children":[{"level":3,"title":"全量同步的使用流程","slug":"全量同步的使用流程","link":"#全量同步的使用流程","children":[]}]},{"level":2,"title":"增量同步","slug":"增量同步","link":"#增量同步","children":[{"level":3,"title":"增量同步与全量同步的区别","slug":"增量同步与全量同步的区别","link":"#增量同步与全量同步的区别","children":[]},{"level":3,"title":"增量同步的语法结构","slug":"增量同步的语法结构","link":"#增量同步的语法结构","children":[]},{"level":3,"title":"增量同步的使用流程","slug":"增量同步的使用流程","link":"#增量同步的使用流程","children":[]}]}],"git":{"createdTime":1709992910000,"updatedTime":1709992910000,"contributors":[{"name":"yuyangk","email":"11523324+yuyangk@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":3.76,"words":1128},"filePathRelative":"docs/大数据/02_PLSQL程序设计/12_数据同步.md","localizedDate":"2024年3月9日","excerpt":"","autoDesc":true}');export{e as data};
