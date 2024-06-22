# mynotes

存放 vuepress theme hope 编译得到的静态文件，用于部署 Gitee Pages

部署分支：main

部署目录：dist

强制启用 https

**注意事项**：

为了成功部署 Gitee Pages，在编译得到 dist 文件前需要修改 `config.ts` 文件里面的 `base` 配置为 `/mynotes/`，同时要让部署 Gitee Pages 的仓库名和 `base` 配置保持一致，即仓库名也设置为 `mynotes`
