const express = require('express');
const app = express();
const weather = require('./routes/weatherRoutes');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) =>{
    res.send('Weather API')
})

app.use('/weather', weather);

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))