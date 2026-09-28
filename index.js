const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("welcome to my test lab");
});
app.listen(3000);