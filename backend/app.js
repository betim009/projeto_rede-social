const usersRoute = require('./src/routes/users');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(cors());
app.use(express.json());

// app.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use('/users', usersRoute);

module.exports = app;