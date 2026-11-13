# 项目交接

## 开发基础

- 本地目录为 `D:\Projects\shiping`。
- fork 为 `OIiveirra/shiping`，上游为 `ooboqoo/shiping`。
- 当前分支从稳定标签 `v3.6.2` 创建。后续优化从此仓库继续。

## 应用内更新

- 更新模块只保留返回 null 的兼容 IPC。
- 标题栏和帮助页的更新入口已移除。
- 打包配置为 `publish: null`。获取上游代码时手动执行 Git 操作。

## 旧版数据兼容

- 上游会尝试重命名旧用户数据目录。目标已有内容时跳过迁移。
- 两版设置的存储版本均为 8，但 API 配置字段不同。
- 旧版的多套 API、项目事实卡和 JSON 历史需要专门适配。

## 本机依赖安装

- 本机 npm 配置使用 7897 代理。代理未运行时，可在单次安装命令中使用 `--proxy=null --https-proxy=null`。
- 使用 npm 11 安装此稳定版时，执行 `npm ci --legacy-peer-deps`。保留锁文件。

## 已通过的检查

- `npm test` 通过 34 项回归，包含更新禁用检查。
- `npm run build` 通过主进程与页面类型检查及构建。
- 本次修改的四个 TypeScript 文件通过 ESLint。
- 构建产物已核对，更新检查、更新下载和安装逻辑已移除。
- 本轮验证使用 `--ignore-scripts` 安装依赖。运行桌面开发环境前执行 `npm run postinstall`，下载 Electron 运行时。
