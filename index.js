#!/usr/bin/env node

require('dotenv').config();

const Blynk = require('blynk-library');
const speedTest = require('speedtest-net');

const blynk = new Blynk.Blynk(process.env.TOKEN, {
  connector: new Blynk.TcpClient(options = {
    addr: process.env.SERVER,
    port: process.env.PORT,
  })
});

const PIN_DOWNLOAD = new blynk.VirtualPin(process.env.PIN_DOWNLOAD);
const PIN_UPLOAD = new blynk.VirtualPin(process.env.PIN_UPLOAD);

const testSpeed = () => {
  const test = speedTest({ maxTime: 5000 });

  test.once('data', data => {
    console.log(data);
    PIN_DOWNLOAD.write(data.speeds.download);
    PIN_UPLOAD.write(data.speeds.upload);
  });
  test.on('error', err => {
    console.log(err);
    return process.exit(1);
  });
};

blynk.on('connect', () => {
  console.log('Blynk ready.');
  testSpeed();
  setInterval(testSpeed, 1000*60*5);
});

blynk.on('disconnect', () => {
  console.log('DISCONNECT');
  return process.exit(1);
});
