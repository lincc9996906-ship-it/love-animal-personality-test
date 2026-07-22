# 测测你的恋爱动物人格

React + Tailwind CSS 的恋爱人格测试网页 MVP。

## 启动

本机已安装依赖后运行：

```bash
pnpm dev
```

生产构建：

```bash
pnpm build
```

## 接入题库

为遵循“题目必须原样使用”的要求，`src/data/questions.js` 没有填入任何自创题目。请将提供的 20 道题粘贴进该文件的 `questions` 数组。每题必须有 1 个 `question`、4 个 `options`，每个选项都带 `scores`。

题库通过校验后，开始按钮将自动进入完整的答题、分析和结果流程。
