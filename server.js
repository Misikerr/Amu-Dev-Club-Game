const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// ✅ Serve static files (CSS, JS, images) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// POST endpoint to set card
let card;
app.post("/send", (req, res) => {
  const { fullCard } = req.body;
  card = fullCard;
  console.log("Received card:", card);
  res.json({ message: "Processed successfully" }); // Correct response format
});

// Serve the player page
app.get("/player", (req, res) => {
  res.json({ card: card || "No card set" }); // ✅ Corrected response
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
