const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://2295467:ZhQhH6EHy24jWLMa@cluster0.zvckhsd.mongodb.net/?retryWrites=true&w=majority";
console.log("aaaaa");
app.use(bodyParser.json());
console.log("bbb");

app.get("/", (req, res) => {
  console.log("ccc")
  // console.log(req.params);

  console.log("ddd")
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db('mongodemo');
      const student = database.collection('student');

      // const query = { name: "Peter" };
      const result = await student.find({}).toArray();
    

      console.log(result);
      res.send(result);
      // res.send("HHHHHHHHH")
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir); 

  // console.log(req.body)

})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


