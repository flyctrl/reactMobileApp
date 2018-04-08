## 技术栈
- [router4.0](https://reacttraining.com/react-router/) 使用的react-router 4.0
- [precss](https://github.com/jonathantneal/precss) 封装成sass语法的postcss集合插件
[eslint规则](http://git.jc/app-h5/docs/blob/master/frontend/.eslintrc.js)
[stylelint规则](http://git.jc/app-h5/docs/blob/master/frontend/.stylelintrc)
- [Ant Design Mobile of React](https://mobile.ant.design/) Ant Design Mobile 的 React 实现WebApp开发

## 路由

### 路由书写简单规范

- 需要包含path(路由地址)、key(用于tabBar的唯一key)、component(路由对应的模块)、icon(tabBar的icon，icon来自阿里巴巴的svg生成)、onIcon(tabBar被选中时候的icon)、title(App的标题和路由的对应的标题)

- 路由的顺序即是tabBar的顺序

## 引用常用资源

### 引用说明

现在在webpack配置了alias方便引用资源，举个例子当你在某个视图组件中需要引用公共组件；不管你与那个组件的相对路径是怎样的，可以直接`import AddButton from 'Components/AddButton'`

目前可以这样引用的有：

- Src: 对应src目录
- Util: 对应'src/utils/'
- Components: 对应'src/components/',
- Asserts: 对应'src/asserts/',
- Contants: 对应'src/contants/'

### 文件资源说明
- Components/Menus/index.js: 菜单配置文件
- Contants/urls.js: 路由地址
- Contants/Router/index.js: 路由入口文件
- Util/index.js: 环境地址配置
- Util/api.js: 接口地址
- Util/fetch.js: 公用请求接口方法
- Util/history.js: createBrowserHistory方法
- Util/storage.js: 对本地存储的操作方法

