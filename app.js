const express = require("express");
const app = express();
const port = 3001;
//ejs set up 
app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

//basic routing to home page
app.get("/", (req, res) => {
 res.render('index')
});
app.get("/explore", (req, res) => {
 res.render('explore')
});
app.get("/watchlist", (req, res) => {
 res.render('watchlist')
});
app.get("/details", (req, res) => {
 res.render('details')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
