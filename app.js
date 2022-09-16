const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const { figletify } = require('./helpers/figletify');
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.post('/figletify', (req, res) => {

    console.log(req.body);
    console.log(req.query);
    figletify(req?.body?.data?.text)
    .then(figletified => {

      if (req?.body?.options?.type === 'json') {
        res.json({figletified});
      }

      if (req?.body?.options?.type === 'text') {
        res.send(figletified);
      }

      res.status(400).json({message: "type can be either text or json"})
    })

})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// _ _ _
// | |__ ___| | | ___
// | '_ \ / _ \ | |/ _ \
// | | | | __/ | | (_) |
// |_| |_|\___|_|_|\___/