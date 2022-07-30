const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  methods: ["GET"],
  origin: ["http://localhost:5173", "http://mostra-os-dentes-paulinho.netlify.app"]
}))

app.get("/", (req, res) => {
  res.send("From Vercel hosting");
});

app.listen(5000, () => {
  console.log("Running on port: 5000.");
});

module.exports = app;