const express = require('express');
const cors = require('cors');
const faker = require('faker');

const app = express();
app.use(cors());

const PORT = 8000;
const MAX_MOBILE = 100;

app.get('/api/mobiles', (req, res) => {
  
})


app.get('/', (req, res) => {
  return res.send('Nothing to see here... Just go to `/Mobiles/`');
})

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));
