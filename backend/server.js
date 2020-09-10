const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const entriesRouter = require('./routes/entries');
const driversRouter = require('./routes/drivers');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connected successfully");
})

app.use('/entries', entriesRouter);
app.use('/drivers', driversRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
