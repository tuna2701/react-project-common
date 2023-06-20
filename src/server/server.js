const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api/authenticate", (req, res) => {
  res.send({
    token: "19102001",
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/api/authenticate")
);
