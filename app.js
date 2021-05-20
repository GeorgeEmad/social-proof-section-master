const express = require("express");
const PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static('public'))
app.get("/", function (req, res) {
    res.sendFile(public + '/index.html');
    });
app.listen(PORT, () => {console.log("server on");});
