import express from "express";

const app: express.Application = express();

const port: number = 3000;

app.get("/", (_req, _res) => {
  _res.send("Life log API");
});

app.listen(port, () => {
  console.log(`Life log @ http://localhost:${port}/`);
});
