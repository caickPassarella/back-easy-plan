const express = require("express");
const routes = require("./routes/question");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/question", routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
