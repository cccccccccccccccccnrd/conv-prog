const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL('http://localhost:3000')
}

console.log(app)
app.whenReady().then(createWindow)