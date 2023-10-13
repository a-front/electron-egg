const { Application } = require('ee-core');
const path = require("path")
const registerPrint = require('eprint-electron')

class Index extends Application {

  constructor() {
    super();
    registerPrint();
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
        // const CoreElectronWindow = require('ee-core/electron/window');
        // CoreElectronWindow.createMainWindow({
          
        // })
        // CoreElectronWindow.restoreMainWindow();
        // win.show();
        // win.focus();
        win.webContents.loadFile(path.resolve(__dirname, '../debug.html')); // win.
        console.log(this.mainWindow.webContents.loadFile)
        win.show();
      })
    }
  }

  /**
   * before app close
   */  
  async beforeClose () {
    // do some things

  }
}

Index.toString = () => '[class Index]';
module.exports = Index;