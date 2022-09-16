const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;
const path = require('path');
const { figletify } = require('./helpers/figletify');
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.post('/figletify', (req, res) => {

    console.log(req.body);
    figletify(req?.body?.data?.text)
    .then(figletified => {
        
        res.json({figletified});
    })

})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})