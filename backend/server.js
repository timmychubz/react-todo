const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
})
