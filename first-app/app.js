const express = require("express");
const app = express();
const path = require("path");

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3000);
