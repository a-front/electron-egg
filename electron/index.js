const { Application } = require('ee-core');
const { Menu } = require('electron')
const { localMenuTemplate } = require('./model/shortCuts')


class Index extends Application {

  constructor() {
    super();
    // this === eeApp;
  }

  /**
   * core app have been loaded
   */
  async ready () {
    // do some things
  }

  /**
   * electron app ready
   */
  async electronAppReady () {
    // do some things
     /* 1. 配置本地快捷键 */
    const menu = Menu.buildFromTemplate(localMenuTemplate)
    Menu.setApplicationMenu(menu)
  }

  /**
   * main window have been loaded
   */
  async windowReady () {
    // do some things
    // 延迟加载，无白屏
    const winOpt = this.config.windowsOption;
    if (winOpt.show == false) {
      const win = this.electron.mainWindow;
      win.once('ready-to-show', () => {
        win.show();
        win.focus();
      })
    }
  }

  /**
   * before app close
   */  
  async beforeClose () {
    // do some things
    console.log('-close--')
  }
}

Index.toString = () => '[class Index]';
module.exports = Index;