const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 3000;
const chefs = require('./chefs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('good chef server is running now')

})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const recipe = chefs.find(n => n.id == id);
    res.send(recipe);
})



app.listen(port, () => {
    console.log(`server is running on: ${port}`);
})