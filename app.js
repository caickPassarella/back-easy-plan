const express = require("express");
const mongoose = require("mongoose");
const QuestionRoutes = require("./routes/question");
const config = require("./config");

const PORT = config.PORT;
const database = config.DATABASE.replace('<PASSWORD>', config.DATABASE_PASSWORD);

mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/question", QuestionRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
