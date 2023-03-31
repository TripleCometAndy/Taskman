const express = require('express');
const path = require('path')

main();

function main(): void {
  const app = express();

  serveStaticFilesFromDir(app, "public");
  initializeGETResponse(app);
  startServer(app, 3000);
}

function serveStaticFilesFromDir(app: any, directoryName : string) {
  app.use(express.static(path.join(__dirname, directoryName)));
}

function initializeGETResponse(app: any): void {
    //TODO. This will return index.html for any GET request. Don't do that. Figure out the right way
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });
}

function startServer(app: any, portNumber : number): void {
  app.listen(portNumber, () => {
    console.log('Server started on port 3000');
  });
}