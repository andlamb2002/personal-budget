// Budget API

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const budgetModel = require('./models/budget_data_schema');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); 
app.use("/", express.static('public'));

let url = "mongodb://localhost:27017/myBudget";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/budget', async (req, res) => {
    try {
        const budgetData = await budgetModel.find();
        res.json(budgetData);
    } catch (error) {
        console.error('Error fetching data', error);
        res.status(500).send('Error fetching data');
    }
});

app.post('/budget', async (req, res) => {
    try {
        const newBudgetItem = new budgetModel(req.body);
        await newBudgetItem.save();
        res.status(201).send('Data added successfully');
    } catch (error) {
        console.error('Error adding data', error);
        res.status(400).send('Error adding data');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
