import express from "express";
import http from "http";

let app = express();
app.server = http.createServer(app);

// Root URL test endpoint to see if API is running
app.get("/", (req, res) => {
  res.json({ message: "Chatwire API is ALIVE!" });
});

app.server.listen(3000);
console.log(`Chatwire-Server Started on port ${app.server.address().port}`);
