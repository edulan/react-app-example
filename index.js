const { app, BrowserWindow } = require('electron')

function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

const APP_NAME = isDevelopment() ? 'React example (development)' : 'React example'

let win

function createWindow () {
  win = new BrowserWindow({title: APP_NAME})

  win.maximize();

  if (isDevelopment()) {
    win.loadURL(`http://localhost:${process.env.PORT || 3000}/`)
  } else {
    // Load prod build
    win.loadURL(`file://${__dirname}/build/index.html`)
  }

  // Do not update window title after loading pages
  win.on('page-title-updated', (event) => event.preventDefault())

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
