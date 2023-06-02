const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
    params: { count: "5" },
    headers: {
      "X-RapidAPI-Key": "1dfd4996bfmsh3115406d6c98c97p1ab17cjsn80b077c93b0d",
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
