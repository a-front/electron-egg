const { app } = require('electron')
const EE = require('ee-core/ee');
const { whichValue, isMac } = require('./utils')


const localMenuTemplate = [
  // { role: 'appMenu' }
  ...(isMac
    ? [{
        label: app.name,
        submenu: [
          // { 
          //   label: '关于混合云',
          //   click: async () => {
          //     const { shell } = require('electron')
          //     await shell.openExternal('https://electronjs.org')
          //   }
          // },
          { type: 'separator' },
          { label: '服务', role: 'services' },
          { type: 'separator' },
          { label: '隐藏混合云', role: 'hide' },
          { label: '隐藏其他', role: 'hideOthers' },
          { label: '显示', role: 'unhide' },
          { 
            label: '键盘快捷方式',
            click: async () => {
              EE.app.mainWindow.webContents.send('controller.setting.showShortkey', true);
            }
          },
          { type: 'separator' },
          { label: '退出混合云平台', role: 'quit' }
        ]
      }]
    : [
        { 
          label: '键盘快捷方式',
          click: async () => {
            EE.app.mainWindow.webContents.send('controller.setting.showShortkey', true);
          }
        }
    ]),
  // { role: 'fileMenu' }
  {
    label: '文件',
    submenu: [
      isMac ? { label: '关闭窗口', role: 'close' } : { label: '关闭窗口', role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: '编辑',
    submenu: [
      { label: '撤销', role: 'undo' },
      { label: '重做', role: 'redo' },
      { type: 'separator' },
      { label: '剪切', role: 'cut' },
      { label: '复制', role: 'copy' },
      { label: '粘贴', role: 'paste' },
      ...(isMac
        ? [
            // { role: 'pasteAndMatchStyle' },
            { label: '删除', role: 'delete' },
            { label: '全选', role: 'selectAll' },
            { type: 'separator' },
            {
              label: '语音',
              submenu: [
                { label: '开始朗读', role: 'startSpeaking' },
                { label: '停止朗读', role: 'stopSpeaking' }
              ]
            }
          ]
        : [
            { label: '删除', role: 'delete' },
            { type: 'separator' },
            { label: '全选', role: 'selectAll' }
          ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: '显示',
    submenu: [
      { label: '加载', role: 'reload' },
      { label: '强制加载', role: 'forceReload' },
      { label: '进入开发者工具', role: 'toggleDevTools' },
      { type: 'separator' },
      { label: '默认大小', role: 'resetZoom' },
      { label: '加大', role: 'zoomIn' },
      { label: '缩小', role: 'zoomOut' },
      { type: 'separator' },
      { label: '进入全屏幕', role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: '窗口',
    submenu: [
      { label: '最小化', role: 'minimize' },
      { label: '缩放', role: 'zoom' },
      ...(isMac
        ? [
            { type: 'separator' },
            { label: '前置窗口', role: 'front' },
            // { type: 'separator' },
            // { role: 'window' }
          ]
        : [
            { label: '关闭窗口', role: 'close' }
          ])
    ]
  },
  // {
  //   label: '帮助',
  //   role: 'help',
  //   submenu: [
  //     {
  //       label: '了解更多',
  //       click: async () => {
  //         const { shell } = require('electron')
  //         await shell.openExternal('https://electronjs.org')
  //       }
  //     }
  //   ]
  // }
]

const registerGlobalShortCuts = (globalShortcut) => {
  globalShortcut.register('Alt+CommandOrControl+I', () => {
    console.log('Electron loves global shortcuts!')
  })
}

module.exports = {
  localMenuTemplate,
  registerGlobalShortCuts,
}
