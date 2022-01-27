const { app, BrowserWindow } = require('electron')

let win

async function createWindow() {
  win = new BrowserWindow({
    title: 'Main window',
  })

  if (process.env.npm_lifecycle_event === 'electron:dev') {
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
  } else {
    win.loadFile('./dist/index.html')
  }

}

app.whenReady().then(createWindow)
