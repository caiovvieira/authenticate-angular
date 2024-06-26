const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/sign", (req, res) => {
  const email = "admin@test.com";
  const password = "1234";

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "User",
      email,
      role: ["sysAdmin"],
    };

    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: "Usuário ou senha incorreta" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
