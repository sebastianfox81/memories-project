const express = require('express');
const cors = require('cors');
require('./db')

const app = express();

app.use(express.json());
app.use(cors());

const postRoutes = require('./routes/posts')

app.use('/api/posts', postRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})