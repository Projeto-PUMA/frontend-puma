const express= require('express'),
	 path = require('path');

const app =express();


app.use(express.static('./dist/frontend-puma'));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/frontend-puma/index.html'));

});

const cors = require('cors'); //<-- required installing 'cors' (npm i cors --save)
const express = require('express');
const app = express();
app.use(cors());

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})