const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  let mainWindow = new BrowserWindow({width: 1024, height: 768, webPreferences: {nodeIntegration: true, webviewTag: true} });
  mainWindow.webContents.session.setProxy({proxyRules:"socks5://127.0.0.1:2588"});

  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  // mainWindow.openDevTools();
});
