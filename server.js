const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers',(req,res) => {
    res.send([
        {
          id : 1,
          image : 'https://placeimg.com/64/64/1',
          name : '이신헌',
          birthday : '950725',
          gender : 'male',
          job : '대학생'
        },
        {
          id : 2,
          image : 'https://placeimg.com/64/64/2',
          name : '박주영',
          birthday : '890712',
          gender : 'male',
          job : '대학생'
        },
        {
          id : 3,
          image : 'https://placeimg.com/64/64/3',
          name : '이병훈',
          birthday : '920125',
          gender : 'male',
          job : '대학생'
        }
        ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));