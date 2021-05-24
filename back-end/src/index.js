const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const dbConfig = require("./configs/database.config");
const Routes = require("./routers/routes");

const app = express();

app.use(bodyParser.json());

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

mongoose
    .connect(dbConfig.URL_DB, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((error) => {
        console.log(error);
        process.exit();
    });

app.use("/", Routes);

app.listen(4001, () => {
    console.log("server started at port 4001");
});
