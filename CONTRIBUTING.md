# 贡献指南

欢迎参与 Vue Admin Template 项目的贡献！无论是报告bug、提出功能建议，还是提交代码，都是对项目的极大帮助。

## 如何贡献

### 报告问题

如果你发现了bug或有功能建议，请按照以下步骤提交Issue：

1. 搜索现有Issue，确保你的问题没有被其他人提出过
2. 点击 [New Issue]创建新问题
3. 选择合适的Issue模板（bug报告或功能请求）
4. 填写详细信息，包括：
   - 问题描述
   - 复现步骤（针对bug）
   - 预期行为
   - 实际行为
   - 环境信息（浏览器、操作系统等）
   - 相关截图（如果有）

### 提交代码

如果你想直接贡献代码，可以按照以下流程提交Pull Request：

1. Fork 本仓库到你的GitHub账户
2. 克隆你fork的仓库到本地
   ```bash
   git clone https://github.com/your-username/vue-admin-template.git
   ```
3. 创建新分支
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. 进行代码修改
5. 提交修改
   ```bash
   git add .
   git commit -m "Add some feature"
   ```
6. 推送到你的远程仓库
   ```bash
   git push origin feature/your-feature-name
   ```
7. 到GitHub上创建Pull Request

## 代码规范

为了保持代码风格一致，请遵循以下规范：

### JavaScript/TypeScript

- 使用ES6+语法
- 变量命名：使用camelCase（驼峰命名法）
- 常量命名：使用UPPER_SNAKE_CASE（大写蛇形命名法）
- 函数命名：使用camelCase，动词开头
- 类命名：使用PascalCase（帕斯卡命名法）
- 适当添加注释，特别是复杂逻辑
- 避免使用`var`，使用`let`和`const`

### Vue

- 组件命名：使用PascalCase
- 模板中属性命名：使用kebab-case（短横线命名法）
- 遵循Vue的最佳实践，如单向数据流
- 组件props定义时指定类型和默认值
- 使用Vue的生命周期钩子函数

### CSS/SCSS

- 使用BEM命名规范
- 避免使用`!important`
- 优先使用flexbox和grid布局
- 避免过度嵌套

### 代码格式化

- 使用ESLint进行代码检查
- 使用Prettier进行代码格式化
- 提交代码前运行`npm run lint`确保代码规范

## 开发流程

1. 安装依赖
   ```bash
   npm install
   ```
2. 开发环境运行
   ```bash
   npm run dev
   ```
3. 代码格式检查
   ```bash
   npm run lint
   ```
4. 代码格式修复
   ```bash
   npm run lint -- --fix
   ```
5. 构建生产环境
   ```bash
   npm run build:prod
   ```

## 其他注意事项

- 请保持PR的聚焦，一个PR尽量只解决一个问题或添加一个功能
- 请确保你的代码可以正常运行，没有引入新的bug
- 请更新相关文档（如README.md）如果你的修改影响了使用方式
- 对于重大变更，请先提交Issue进行讨论

感谢你的贡献！