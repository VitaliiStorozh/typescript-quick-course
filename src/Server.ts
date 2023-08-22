interface IServer {
  startServer(): void;
  stopServer(): void;
}

class Server implements IServer {
  protected port: number;
  protected address: string;

  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  async startServer() {
    const data = await this.getData();
    console.log(`Server started at ${this.address}:${this.port}`);
  }

  stopServer(): void {}

  async getData(): Promise<string> {
    return 'some data'
  }
}

const someServer = new Server(8080, 'localhost');
someServer.startServer();
const somePort = (someServer as any).port;
console.log(somePort);
