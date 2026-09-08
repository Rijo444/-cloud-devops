const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Cloud DevOps Backend!");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
