import express from "express";
import Tests from "./files/tests";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const test = new Tests();
  test.funcionOperaciones(1, 2);
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
