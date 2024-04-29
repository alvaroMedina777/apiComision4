const express = require('express');
const initdb = require('./config/db');

const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);


//routes 
app.get('/', (req, res) => {
    res.send('bienvenidossss')
})

app.listen(port, () => console.log('servidor conectado en port', port));

initdb()