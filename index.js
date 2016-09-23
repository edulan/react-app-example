const { app, BrowserWindow } = require('electron')
const installExtension = require('electron-devtools-installer').default
const REACT_DEVELOPER_TOOLS = require('electron-devtools-installer').REACT_DEVELOPER_TOOLS
const chalk = require('chalk')

function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

const APP_NAME = isDevelopment() ? 'React example (development)' : 'React example'

let win

function onReady() {
  if (isDevelopment()) {
    installDevExtensions()
  }

  createWindow()
}

function installDevExtensions() {
  console.log(chalk.blue(`Installing DevTools extensions...`));

  return new Promise((resolve, reject) => {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => {
        console.log(`${chalk.green(`✓`)} ${name}`)
        console.log()
        resolve()
      })
      .catch((err) => {
        console.log(chalk.red(`An error occurred: ${err}`))
        console.log()
        reject()
      })
  })
}

function createWindow () {
  win = new BrowserWindow({title: APP_NAME})

  win.maximize()

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

app.on('ready', onReady)

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
