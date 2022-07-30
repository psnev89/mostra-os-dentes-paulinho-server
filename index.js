const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "mostra-os-dentes-paulinho.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/", (req, res) => {
  res.send("From Vercel hosting");
});

app.listen(5000, () => {
  console.log("Running on port: 5000.");
});

module.exports = app;