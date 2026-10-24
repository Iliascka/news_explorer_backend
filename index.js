import express from "express";
const main = express();
main.get("/", (req, res) => {
  res.send("Hello Friend");
});
main.listen(3000);
