## Blog 前端建设笔记

### 2022/5/29 

### tailwind 使用：

1. 用的 `create-react-app` 建的项目参考的官网的步骤安装的 [tailwind](https://www.tailwindcss.cn/docs/guides/create-react-app) 
2. 运行时报错，网上查了下说的是 `tailwind` 的 `craco` 不支持最新的`create-react-app` ,升级` @craco/craco` 到 `7.0.0-alpha.3` 就可以了，后续应该是支持的
3. index.css 引入下面的没起作用

```
    /* ./src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
    改成了这样,算是可以了：

```
@import 'tailwindcss/dist/base';

@import 'tailwindcss/dist/components';

@import 'tailwindcss/dist/utilities';
```
4. 网上有些方法自定义写发 `bg-[#xxx]` `w-[xx px]` 没有作用,有点难受，也没找到解决办法,导致我响应式做的有点挫


### Router 使用

1. 路由变化了，但是页面没有变化，最直接的解决办法 更组件上的 `React.StrictMode` 去掉就解决了，找了半天也没有更好的解决办法，其他要么说 是不是没有引入 `Switch` ，要不就是说多套了一次 `Router` ，与我的不对应;
2. `react-router-dom` 与 `react-router-config` 版本不对应用不了，只能将`react-router-dom` 降级到 `5.2.1`，后续看能不能不降级，就不使用 `react-router-config` 了

### scroll 方法

window.scrollTo(0,0)