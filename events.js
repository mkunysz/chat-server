'use strict';

class Events {
  constructor(io){
    this.io = io;
    this.users = {};
  }

  socketEvents(io) {
    io.on('connection', (socket) => {
      socket.on('connected', (user) => {
        this.users[socket.id] = user;
        io.emit('users', this.users);
      });

      socket.on('disconnect', () => {
        delete this.users[socket.id];
        io.emit('users', this.users);
      });

      socket.on('message', (message) => {
        io.emit('message', message);
      });
    });
  }

  /**
   *  Initialize socket events
   */

  eventsConfig() {
    this.socketEvents(this.io);
  }
}

module.exports = Events;
