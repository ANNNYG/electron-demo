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
