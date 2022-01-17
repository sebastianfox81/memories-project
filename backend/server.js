const express = require('express');
const cors = require('cors');
require('./db')

const app = express();

app.use(express.json({ limit:'50mb' }));
app.use(cors());
app.use('/uploads', express.static('uploads'))

const postRoutes = require('./routes/posts')

app.use('/api/posts', postRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})