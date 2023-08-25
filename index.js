const express = require('express');
const db = require('./config/connection');
const thoughtControllers = require('./controllers/thoughtsContollers');
const userControllers = require('./controllers/userControllers')

const cwd = process.cwd();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(thoughtControllers, userControllers);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});