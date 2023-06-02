// CREATE A SERVER WITHOUT EXPRESS
const http = require("http");
const port = process.env.port || 5000;

// here we will use our .createServer method to accept our request and response
//here we created a server for our computer without EXPRESS
http
  //The createServer method creates a server on your computer:
  .createServer((req, res) => {
    //this is where we can set any headers for our response
    res.writeHead(200, { "Content-Type": "text/html" }); //

    // Add Routes

    const url = req.url;

    if (url === "/profile") {
      res.write("<h1>Welcome to your profile</h1>");
      res.write("<p>You are a Teacher for Road to Hire</p>");
      res.write("<p>You are 21 years old </p>");
      res.end();
    } else if (url === "/job") {
      // Send JSON example
      const work = {
        address: {
          street: "Red Ventures ",
          city: "Charlotte NC",
        },
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(work));
      res.end();
    } else {
      res.write("<h1>Hey There Cohort 13!</h1>");
      res.end();
    }
  })
  .listen(port, () => {
    // here is where the serveris running on the defined port
    console.log(`Server listening on port ${port}...`);
  });
