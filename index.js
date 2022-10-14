const express = require('express');
const  PORT = 3001;
const app = express();
const knex = require('./knex/knex');
const cors = require('cors');
require("dotenv").config();


app.use(cors());
app.use(express.json());

knex();


app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`);
});