const e=JSON.parse('{"key":"v-97159a0e","path":"/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/02_PLSQL%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E6%8B%89%E9%93%BE%E8%A1%A8%E7%9A%84%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html","title":"拉链表的存储过程","lang":"zh-CN","frontmatter":{"description":"```sql -- 创建存储过程 CREATE OR REPLACE PROCEDURE SPSTUTAG_LALIAN IS BEGIN -- 开链，将最新的数据插入拉链表 INSERT INTO STU_TAG SELECT T.SNO ,T.SNAME ,T.SAGE ,T.SSEX ,T.BIRTHDAY ,TRUNC(SYSDATE, \'DD...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/mynotes/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/02_PLSQL%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E6%8B%89%E9%93%BE%E8%A1%A8%E7%9A%84%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"云的笔记"}],["meta",{"property":"og:title","content":"拉链表的存储过程"}],["meta",{"property":"og:description","content":"```sql -- 创建存储过程 CREATE OR REPLACE PROCEDURE SPSTUTAG_LALIAN IS BEGIN -- 开链，将最新的数据插入拉链表 INSERT INTO STU_TAG SELECT T.SNO ,T.SNAME ,T.SAGE ,T.SSEX ,T.BIRTHDAY ,TRUNC(SYSDATE, \'DD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T14:01:50.000Z"}],["meta",{"property":"article:author","content":"Mr.云"}],["meta",{"property":"article:modified_time","content":"2024-03-09T14:01:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拉链表的存储过程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T14:01:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.云\\",\\"url\\":\\"https://gitee.com/yuyangk\\"}]}"]]},"headers":[],"git":{"createdTime":1709992910000,"updatedTime":1709992910000,"contributors":[{"name":"yuyangk","email":"11523324+yuyangk@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"docs/大数据/02_PLSQL程序设计/拉链表的存储过程.md","localizedDate":"2024年3月9日","excerpt":"","autoDesc":true}');export{e as data};
