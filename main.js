'use strict';

//console.log(__dirname);

const {app, BrowserWindow} = require('electron');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 325
        ,width: 300
		,resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

	//mainWindow.webContents.openDevTools()
});

