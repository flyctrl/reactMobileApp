## 技术栈
- [router4.0](https://reacttraining.com/react-router/) 使用的react-router 4.0
- [precss](https://github.com/jonathantneal/precss) 封装成sass语法的postcss集合插件
[eslint规则](http://git.jc/app-h5/docs/blob/master/frontend/.eslintrc.js)
[stylelint规则](http://git.jc/app-h5/docs/blob/master/frontend/.stylelintrc)
- [Ant Design Mobile of React](https://mobile.ant.design/) Ant Design Mobile 的 React 实现WebApp开发

## 路由

### 路由书写简单规范
- 主要是以JSON数组格式进行配置，添加模块后只需要添加想要的路由配置即可
- 路由配置文件入口：Contants/Router/index.js

Example：
```
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    showBack: false,
    showMenu: true,
    title: '首页'
  },
  {
    path: urls.HOME,
    exact: true,
    component: Home,
    showBack: false,
    showMenu: true,
    title: '首页'
  }, {
    path: urls.LOGIN,
    exact: true,
    component: Login,
    showBack: false,
    showMenu: false,
    title: '登录'
  }, {
    path: urls.TASKLIST,
    exact: true,
    component: TaskList,
    showBack: true,
    showMenu: true,
    title: '任务列表'
  }
  ...
]
```
**字段说明**
 ```
path: 路由路径
exact: 路由是否精确匹配
component: 路由对应的组件
showBack: 是否显示header的返回按钮
showMenu: 是否显示footer的菜单
title: 标题，APP头部标题
```
### 底部菜单配置
- 基于antdMobile的tabBar，配置APP的footer部分菜单（路由、样式、名称）
- 以JSON数组格式进行配置，菜单顺序就是配置文件的顺序
- 菜单配置文件入口：Components/Menus/index.js

Example：
```
const data = [
  {
    path: urls.HOME,
    key: 'Home',
    icon: '#icon-home',
    onIcon: '#icon-home-on',
    title: '首页'
  }, {
    path: urls.MESSAGE,
    key: 'Message',
    icon: '#icon-xiaoxi',
    onIcon: '#icon-xiaoxi-on',
    title: '消息'
  }, {
    path: urls.WORKPLAT,
    key: 'Workplat',
    icon: '#icon-gongzuo',
    onIcon: '#icon-gongzuo-on',
    title: '工作台'
  }, {
    path: urls.CONTACT,
    key: 'Contact',
    icon: '#icon-tongxunlu',
    onIcon: '#icon-tongxunlu-on',
    title: '通讯录'
  }, {
    path: urls.MINE,
    key: 'Mine',
    icon: '#icon-wode',
    onIcon: '#icon-wode-on',
    title: '我的'
  }
]
```
**字段说明**
```
path: 路由地址,
key: 每项菜单必须配的key
icon: 默认时候的icon
onIcon: 被选中状态时候的icon
title: 菜单名称
```

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

## 脚本
### 运行
```
git clone https://github.com/flyctrl/youmingApp.git
cd youmingApp
yarn（或者npm install）
npm start
```
### 发布
```
npm run build:test
npm run build:pre
npm run build
```