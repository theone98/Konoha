const express = require('express');
const cors = require('cors');
const monk = require('monk');
const app = express();
const ratelimit = require('express-rate-limit');
const db = monk('localhost/admin');
const mews = db.get('blog');
app.use(cors());
app.use(express.json());
app.get('/',(req,res) => {
    res.json({
        message: 'Hello World!!!'
    });
});

app.get('/blog', (req, res) => {
  mews
    .find()
    .then( me => {
      res.json(me);
    });
});

function isValid(s){
    return s.title && s.title.toString().trim() !== '' && s.theme && s.theme.toString().trim() !== '' && s.content && s.content.toString().trim() !== '';
}
app.post('/blog',(req,res) =>{
    if(isValid(req.body)){
        const mew ={title: req.body.title.toString(),theme: req.body.theme.toString(),content: req.body.content.toString(),created: new Date()
        };
        console.log(mew);
        mews.insert(mew).then(createdMew => {
            res.json(createdMew);
        });
    }
    else{
        res.status(422); res.json({ message: 'Hey!Title,Theme and Content are required!'
        });
    }
});
app.listen(5023, () => {
    console.log('Listening on http://localhost:5023');
});
