const mongoose = require('mongoose');
const budgetModel = require('./models/budget_data_schema');

let url = "mongodb://localhost:27017/myBudget";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to the database");
        budgetModel.find({})
            .then((data) => {
                console.log(data);
                mongoose.connection.close();
            })
            .catch((connectionError) => {
                console.log(connectionError);
            })
    })
    .catch((connectionError) => {
        console.log(connectionError);
    });

