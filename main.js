const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');

function onReady () {     
	win = new BrowserWindow(
		{
			width: 1800, 
			height: 1000,
			autoHideMenuBar: true,
		})
	win.loadURL(url.format({
		pathname: path.join(
			__dirname,
			'dist/sistemafinanceirodkt/index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

app.on('ready', onReady);