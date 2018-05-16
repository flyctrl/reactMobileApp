
## 技术栈
- [router4.0](https://reacttraining.com/react-router/) 使用的react-router 4.0
- [precss](https://github.com/jonathantneal/precss) 封装成sass语法的postcss集合插件
[eslint规则](http://git.jc/app-h5/docs/blob/master/frontend/.eslintrc.js)
[stylelint规则](http://git.jc/app-h5/docs/blob/master/frontend/.stylelintrc)
- [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) pxtorem 自定义样式（不包括内联样式）和组件样式的px转化成rem
- [react-addons-css-transition-group](https://www.npmjs.com/package/react-addons-css-transition-group) 主要是实现APP内的动画效果，动画css需自定义开发
- [Ant Design Mobile of React](https://mobile.ant.design/) Ant Design Mobile 的 React 实现WebApp开发
- [Icon 编辑工具](http://www.iconfont.cn/) 阿里的矢量图标管理，将图标上传到Iconfont平台，可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端自由调整与调用，而本项目是使用的Symbol模式。

## 布局
1、设计稿标准尺寸：750*1334

2、基于pxtorem，需要适配组件内部的样式，开发页面时候需要对设计稿进行等比例缩放1/2，也就是以尺寸375*667直接进行开发，这样缩放后的设计稿尺寸是多少px，布局时候就直接写多少px就OK了

3、所有的样式不建议写内联样式，尤其是涉及到px的样式属性

4、border的1px可以写成1Px，这样就不会被转化成rem了

## 路由

### 路由书写简单规范
- 主要是以JSON数组格式进行配置，添加模块后只需要添加想要的路由配置即可
- 基于父组件的路由需要配置父组件的名称（parent）且为字符串类型，没有则设parent为null
- 路由配置文件入口：Contants/Router/index.js

Example：
```javascript
const routes = [
  {
    path: urls.HOME,
    exact: true,
    component: Home,
    parent: null,
    showMenu: true,
    title: '找工作'
  }, {
    path: urls.TOBEDONE,
    exact: true,
    component: TobeDone,
    parent: null,
    showMenu: true,
    title: '待办'
  }, {
    path: urls.PUSHORDER,
    exact: true,
    component: PushOrder,
    parent: null,
    showMenu: true,
    title: '发布工单'
  }, {
    path: urls.MESSAGE,
    exact: true,
    component: Message,
    parent: null,
    showMenu: true,
    title: '消息'
  }, {
    path: urls.MINE,
    exact: true,
    component: Mine,
    parent: null,
    showMenu: true,
    title: '我的'
  }, {
    path: urls.LOGIN,
    exact: true,
    component: Login,
    parent: null,
    showMenu: false,
    title: '登录'
  }
  ...
]
```
**配置参数**
 ```javascript
path: 路由路径
exact: 路由是否精确匹配
component: 路由对应的组件
parent：父组件
showMenu: 是否显示footer的菜单
title: 标题
```
## Icon使用说明
Example：
```javascript
import NewIcon from 'Components/NewIcon'
<NewIcon type='home' onClick={this.onClick} className='homeBtn'  />
```
**配置参数**
```
type: IconFont的类名
onClick：点击事件回调函数
className：自定义icon的样式类名
```
## APP头部配置
Example:
```javascript
import Header from 'Components/Header'
<Header
  title='首页'
  leftIcon='icon-back'
  rightIcon=''
  rightTitle=''
/>
```
**配置参数**
```
title: 标题
titleClick: 标题点击事件回调函数
leftIcon: 左侧的Icon
leftTitle1: 左侧第一个标题
leftClick1: 左侧Icon和第一个标题公用的点击事件回调函数
leftTitle2: 左侧第二个标题
leftClick2: 左侧第二个标题的点击事件回调函数
rightIcon: 右侧Icon（可与rightTitle并存）
rightTitle: 右侧标题（可与rightIcon并存）
rightClick: 右侧区域的点击事件回调函数
```
## APP底部菜单配置
- 基于antdMobile的tabBar，配置APP的footer部分菜单（路由、样式、名称）
- 以JSON数组格式进行配置，菜单顺序就是配置文件的顺序
- 菜单的key需要与对应路由的模块同名，且为字符串
- 菜单配置文件入口：Components/Menus/index.js

Example：
```javascript
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
**配置参数**
```javascript
path: 路由地址,
key: 每项菜单必须配的key
icon: 默认时候的icon
onIcon: 被选中状态时候的icon
title: 菜单名称
```

## 数据请求
### 说明
1、已经对axios进行了二次封装在Util/fetch.js，在此文件内可以添加相关的请求头部、请求拦截器、请求的跳转等操作

2、目前只封装了POST请求，如需要封装更多请求方式可根据需求进行进一步封装

3、所有的请求接口都是在Util/api.js内完成，请求完的数据响应在组件内体现和操作，与此同时api.js也封装了2个常用的操作：Fetch（用于请求数据的拉取，主要用于查询）、FetchSave(用于请求数据的保存类的操作，主要用于新增、修改、删除等)

### 实际应用
例如请求菜单数据

1、配置api.js
```javascript
export default {
  getMenu(param = {}) {
    return Fetch('/Sso/findMenuList', param)
  }
}
```
2、组件内使用请求到的数据，需要注意的是，async需要和await配合起来使用才可以
```javascript
async componentWillMount() {
  const data = await api.getMenu({ timestamp: (new Date()).getTime() }) || []
  if (data) {
    this.setState({
      data
    })
  }
}
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
```javascript
git clone https://github.com/flyctrl/yaqueApp.git
cd youmingApp
yarn（或者npm install）
npm start
```
### 发布
```javascript
npm run build:test
npm run build:pre
npm run build
```
