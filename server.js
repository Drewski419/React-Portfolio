const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

const URI = "mongodb+srv://Drewski419:brandon25@cluster0.gdjnu.mongodb.net/React-Portfolio?retryWrites=true&w=majority";

mongoose.connect(
    URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));