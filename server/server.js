const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./index");
const bodyParser=require('body-parser')
const path = require('path')

app.use(express.json());

const db = require("./config.js").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected"));
  app.use(bodyParser.json({ type: "*/*" }));
app.use(cors());
router(app);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('store/build'))
  app.get('*',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'store','build','index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
