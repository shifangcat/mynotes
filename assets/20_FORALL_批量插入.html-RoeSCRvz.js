const e=JSON.parse('{"key":"v-63095ff6","path":"/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/02_PLSQL%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/20_FORALL_%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5.html","title":"FORALL_批量插入","lang":"zh-CN","frontmatter":{"description":"```sql -- 建表 CREATE TABLE EMPTEST1 AS SELECT EMPNO ,ENAME ,HIREDATE FROM EMP WHERE 1 = 2; -- 进行批量插入 DECLARE CURSOR EMP_CUR IS SELECT EMPNO ,ENAME ,HIREDATE FROM EMP; TYPE EMPREC...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/mynotes/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/02_PLSQL%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/20_FORALL_%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5.html"}],["meta",{"property":"og:site_name","content":"云的笔记"}],["meta",{"property":"og:title","content":"FORALL_批量插入"}],["meta",{"property":"og:description","content":"```sql -- 建表 CREATE TABLE EMPTEST1 AS SELECT EMPNO ,ENAME ,HIREDATE FROM EMP WHERE 1 = 2; -- 进行批量插入 DECLARE CURSOR EMP_CUR IS SELECT EMPNO ,ENAME ,HIREDATE FROM EMP; TYPE EMPREC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T14:01:50.000Z"}],["meta",{"property":"article:author","content":"Mr.云"}],["meta",{"property":"article:modified_time","content":"2024-03-09T14:01:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FORALL_批量插入\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T14:01:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.云\\",\\"url\\":\\"https://gitee.com/yuyangk\\"}]}"]]},"headers":[],"git":{"createdTime":1709992910000,"updatedTime":1709992910000,"contributors":[{"name":"yuyangk","email":"11523324+yuyangk@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":0.78,"words":233},"filePathRelative":"docs/大数据/02_PLSQL程序设计/20_FORALL_批量插入.md","localizedDate":"2024年3月9日","excerpt":"","autoDesc":true}');export{e as data};
