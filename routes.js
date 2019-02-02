'use strict';

class Routes {
  constructor(app, io){
    this.io = io;
    this.users = [];
  }

  socketEvents(io) {
    io.on('connection', (socket) => {
      socket.on('connected', (user) => {
        user.socketId = socket.id;
        this.users.push(user);
        io.emit('connected', user);
      });

      socket.on('disconnected', (user) => {
        for(let i = 0; i < this.users.length; i++) {
          if (user.name === this.users[i].name){
            this.users.splice(i, 1);
            return;
          }
        }
      });
      socket.on('message', (message) => {
        io.emit('message', message);
      });
    });
  }

  /**
   *  Initialize socket events
   */

  routesConfig() {
    this.socketEvents(this.io);
  }
}

module.exports = Routes;
