require("dotenv").config();
const express = require("express");
const { generateEmail } = require("./controllers/emailController");

const app = express();

app.use(express.json());

app.get("/email", generateEmail);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
