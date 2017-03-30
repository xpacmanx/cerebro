'use strict'

let exec = require('child_process').exec;
let fs = require('fs');
let SerialPort = require('serialport').SerialPort;
let express = require('express');

let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

let config = require('./config.json');

var TcpClient = require('multiwii-msp').TcpClient;
var port = new SerialPort(config.port, {baudrate: 115200});
console.log(port);
