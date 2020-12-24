//setting up the express server
import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const PORT = 3000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// bodyparser setup
app.use(bodyparser.urlencoded({extended:true }));
app.use(bodyparser.json());

app.get('/', (req, res) => 
    res.send(`Our app is running on PORT ${PORT}`)
);

app.listen(PORT,() =>
    console.log(`Your server is running on port ${PORT}`)
);

