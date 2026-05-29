# Baili Art Space

这是百里个人艺术网站的静态站点仓库，用于 GitHub 托管代码，并通过 Vercel 部署。

## 当前状态

- GitHub 仓库：https://github.com/wlz6010660/Baili-Art-Space
- 主分支：`main`
- 当前网站架构：纯静态 HTML / CSS / JavaScript
- 部署目标：Vercel
- 图片：已上传到 GitHub
- 视频：暂时不上传，继续保留在本地
- 对象存储、CDN、云服务器方案：先暂停，不作为当前阶段方案

## 项目结构

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
├── freedom-people.html
├── history-voice.html
├── lugu-lake-daughter.html
├── student-works.html
├── vr-art.html
├── xinjiang-landscape.html
├── DEPLOYMENT_NOTES.md
└── README.md
```

## Vercel 部署设置

在 Vercel 创建项目时使用以下设置：

- Application Preset：`Other`
- Root Directory：`./`
- Build Command：留空
- Output Directory：留空，或填 `.`
- Install Command：留空

这个项目没有 `package.json`，不需要安装依赖，也不需要构建步骤。

## 图片和视频约定

图片已经进入 GitHub 仓库，Vercel 部署后应该可以正常显示。

视频文件体积较大，当前继续忽略，不进入 GitHub：

```gitignore
assets/vr-art/*.mp4
assets/vr-art/*.mov
assets/*.mov
```

本地视频文件仍在项目目录中，但不会被提交。后续如果要上线视频，再单独决定方案，例如压缩成 MP4、转 HLS，或使用对象存储/视频点播服务。

## 交接提醒

新 session 接手时，先做这几件事：

1. 查看当前状态：

```bash
git status -sb
```

2. 确认远端：

```bash
git remote -v
```

3. 如果需要推送，优先尝试普通 Git：

```bash
git push
```

之前这台机器到 GitHub 的普通 Git 传输不稳定；如果大文件推送失败，可以继续使用 GitHub API 或 `gh` 辅助处理。

4. 不要误把视频加入提交。提交前检查：

```bash
git diff --cached --name-only | grep -E '\\.(mov|mp4)$'
```

没有输出才安全。

## 最近完成的事项

- 安装并登录了 GitHub CLI。
- 初始化并上传 GitHub 仓库。
- 先上传网站代码和小素材。
- 后续补传了所有图片。
- 视频暂时排除。
- 添加了部署记录文件 `DEPLOYMENT_NOTES.md`。
