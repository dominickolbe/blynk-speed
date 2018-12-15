# Blynk Speed Tester (Node.js)

I created this application to monitor my speed (download and upload). This app is running on my Raspberry Pi and is sending the values to my own blynk server.

[Install your own blynk server using my docker image](https://github.com/dominickolbe/blynk-server-dockerized)

### Install node dependencies

```bash
// install node dependencies
yarn

// create .env file and add your server + token
cp .env.example .env
```

### Run

```bash
node index.js
```

### PM2

```bash
pm2 start pm2.json
```

### Screenshot Blynk dashboard

<img src="https://cdn.jsdelivr.net/npm/@dominickolbe/blynk-speed/screenshot.jpg" width="300">

___

### Useful Blynk usage

- [Monitor your local ping a Raspberry Pi and Node.js](https://github.com/dominickolbe/blynk-ping)

___

## License

MIT License - 2018 - [Dominic Kolbe](https://dominickolbe.dk)
