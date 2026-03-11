// index.js
// where your node app starts

//##########
// views/      → HTML files (front-end pages)
// public/     → static files (CSS, JS, images) served directly to the browser
// index.js    → server (back-end) running on Node + Express

// Everything inside the public/ folder can be accessed directly by the browser.
// Example:
// public/script.js  →  http://localhost:3000/script.js
// public/style.css  →  http://localhost:3000/style.css
//###########

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html ########
//app.get("/", function (req, res) {
//  res.sendFile(__dirname + '/views/index.html');
//});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//############

app.get("/api/:date?", (req, res)=>{
    let dateParam = req.params.date;
    let date = new Date(dateParam);

    res.json({ unix: date.getTime() });
});

//teste1
app.get("/", (req, res) => [
  res.send("Hello World!")
]);
//teste2
app.get("/api/name/1", (req, res) => {
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;

  if (firstname && lastname) {
      res.send(`Nome completo: ${firstname} ${lastname}`)
  } else {
      res.send("Por favor forneça o nome e sobrenome.")
  }
});




//############



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
