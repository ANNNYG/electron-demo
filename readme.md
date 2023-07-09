# Electron Demo

安装步骤根据官网就可以
国内安装 electron 会有坑
起初使用 cnpm 安装，但 cnpm 没有添加 lock 文件

改用 pnpm，但会卡在 postinstall 脚本一直卡住
解决方案

```shell
 　　　pnpm config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
      pnpm install electron --save-dev

      npm config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
      npm install electron --save-dev
```

## 生命周期

- ready:app 初始化完成
- dom-ready: 一个窗口中的文本加载完成
- did-finish-load: 导航完成时触发
- window-all-closed: 所有窗口都被关闭时触发
- before-quite: 在关闭窗口之前触发
- will-quit: 在窗口关闭并且应用退出时触发
- quite: 当所有窗口被关闭时触发
- closed: 当窗口关闭时触发，此时应删除窗口引用
