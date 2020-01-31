const express = require("express");
const mongoose = require("mongoose");
const QuestionRoutes = require("./routes/question");
const config = require("./config");
const cors = require("cors");

const connect = async (database) => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }
    catch (error) {
        console.error(error);
    }
};

const PORT = config.PORT;
const database = config.DATABASE.replace('<PASSWORD>', config.DATABASE_PASSWORD);

connect(database);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/question", QuestionRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
