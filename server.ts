import express from 'express';

let counter: number = 0;

main();

function main(): void {
  const app: Application = express();

  serveStaticFilesFromDir(app, "public");
  initializeGETResponse(app);
  initializeButtonClickResponse(app);
  initializeCounterGetResponse(app);
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

function initializeButtonClickResponse(app: any): void {
  app.post('/increment-counter', (req, res) => {
    counter++;
    console.log("INCREMENT COUNTER: " + counter);
  })
}

function initializeCounterGetResponse(app: any): void {
  app.get('/get-counter', (req, res) => {
    res.json({counter});
  })
}

function startServer(app: any, portNumber : number): void {
  app.listen(portNumber, () => {
    console.log('Server started on port 3000');
  });
}