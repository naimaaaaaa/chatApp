const express = require("express");
const cors = require("cors");
const axios = require('axios');
//xconst { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r= await axios.put(
        'https://api.chatengine.io/users/',
        {  username: username, secret: username, first_name: username},
        {headers:{"private-key":"554ab858-1242-4d99-a0cd-2d95ef573ba3"}}
        //this key allows us to create and destroy users
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)
  }

});

app.listen(3001);