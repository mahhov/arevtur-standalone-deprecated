const path = require('path');
const {app, BrowserWindow, ipcMain: ipc} = require('electron');

app.on('ready', () => {
	let window = new BrowserWindow({width: 1800, height: 1000, webPreferences: {nodeIntegration: true}});
	window.setMenu(null);
	window.webContents.openDevTools();
	window.loadFile(path.resolve(__dirname, 'trade.html'));

	ipc.on('x', (...args) => console.log('request', args));
});

app.once('window-all-closed', app.quit);
