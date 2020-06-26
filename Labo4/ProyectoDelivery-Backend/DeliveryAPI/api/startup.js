//aqui se ejecuta el server
class StartUp {
  //constructor: recibe -> server
  constructor({ server }) {
    this._server = server;
  }

  async start() {
    await this._server.start(); //metodo start() de la clase server en server.js
  }
}

module.exports = StartUp;
