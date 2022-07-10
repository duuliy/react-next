## SSR大体流程

- 启动步骤

```
yarn dev:client  利用react的hydrate打包react代码，为静态SSR的水合反应注水做准备

yarn dev:server  利用react的renderToString在服务端静态生成html

yarn dev:start   利用nodemon启动SSR框架服务器
```

