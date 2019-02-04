'use strict';

const express = require('express');
const io = require('socket.io');
const events = require('./events');

class Server {
  constructor() {
    this.port = 8081;
    this.app = express();
    this.server = this.app.listen(this.port, () => {
      console.log(`server running http://localhost:${this.port}`);
    });
    this.io = io(this.server);
    new events(this.io).eventsConfig();
  }
}

new Server();
