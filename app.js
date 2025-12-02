const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader("requesId", "irvan");
  next();
});

const sequelize = new Sequelize(
  "mysql://test:test@152.42.169.143:3306/db_test"
);

async function getUser() {
  await sequelize.authenticate();
  const [results, metadata] = await sequelize.query("SELECT * FROM murid");

  return results;
}

app.get("/murid", async (req, res) => {
  try {
    const user = await getUser();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
