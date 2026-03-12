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
/*
app.get("/api/:date?", (req, res)=>{ // route definition
    let dateParam = req.params.date;
    let date = new Date(dateParam);

    // For an invalid date, Express converts NaN to null when sending JSON.

    if (isNaN(date.getTime())) {
          res.send("Please provide a valid date.")
    
    } else {
            // It does not show as normal webpage content
            //  because sending an object
            // makes Express set the response 
            // as JSON instead of plain text.
           //res.send({ unix: date.getTime() });
           res.send(`Unix time: ${date.getTime()}`);
    }
});

// ➡️ : creates a route parameter (a dynamic value that comes 
// from the URL path and is stored in 
// req.params.date, inside the req.params object).

// ➡️ ? in the route definition = optional parameter.


//test1
app.get("/", (req, res) => [
  res.send("Hello World!")
]);
//test2
app.get("/test2", (req, res) => {
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;

  if (firstname && lastname) {
      res.send(`Full name: ${firstname} ${lastname}`)
  } else {
      res.send("Please provide both first name and last name.")
  }
});
// ➡️ ? in the URL = start of the query string (optional key=value data).

//URL => http://localhost:3000/test2?firstname=John&lastname=Doe




//test3
app.get("/api/test3/", (req, res) =>{

})



//############
*/

app.get("/api/:date?", (req, res) =>{
  let dateParam = req.params.date;
  let date = new Date(dateParam);

  res.json({ 
    unix: date.getTime(),
    utc: date.toUTCString()
   });
  
});






// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
