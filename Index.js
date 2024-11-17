const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const agenda = require('./agenda'); // Import Agenda config

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
            .then((data)=>{
                console.log(`Mongodb connected with server ${data.connection.host}`);})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
            
  app.listen(process.env.PORT,()=>{
    console.log(`Server is connected to port : ${process.env.PORT}`);
})

app.use('/api/campaigns', require('./routes/route'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));