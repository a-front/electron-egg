1. 方案设计
主要采用 ipc 通信


2. 项目结构
print 包含两个项目 eprint/electron 和 eprint/web
- eprint/electron print-main 主进程 注册渲染进程传入的事件 ipc 通信的封装;
- eprint/web npm包 通过preload 注入的函数的类型定义 electron 环境的检测; 



问题
1. 调试问题 如何给业务组调试; 云桌面里面拉不到electron的包;
2. 打印机问题;