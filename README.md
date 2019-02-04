# chat-server

> NodeJS/socketIO chat server

## Project setup

Install dependencies: `express`, `socket.io` and `nodemon`:

```
yarn install
```

## Run express server with hot-reloads for development
```
yarn start
```

to restart server at any time type `rs`

## Configuration

Server runs by default on localhost:8081, port and host can be changed in `server.js`

## Broadcast events

Events that are received by server are located in `events.js`:

 * `connected` new client is connected to server
 * `disconnected` client is disconnected from server
 * `message` client send message

Events that are broadcasted to connected clients:

 * `message` send message content with username
 * `users` send user list

## License

[MIT](https://opensource.org/licenses/MIT) © Marcin Kunysz
