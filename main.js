const {app, BrowserWindow} = require('electron');
const path = require('path');
const spawn = require('child_process').spawn;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  const binaryFileName = process.platform == 'win32' ? 'xmentccnbg.exe' : 'xmentccnbg';
  const binaryFile = path.join(process.resourcesPath, `bin/${binaryFileName}`);
  spawn(binaryFile);

  let mainWindow = new BrowserWindow({width: 1024, height: 768, webPreferences: {nodeIntegration: true, webviewTag: true} });
  mainWindow.webContents.session.setProxy({proxyRules:"socks5://127.0.0.1:2588"});

  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  // mainWindow.openDevTools();
});
