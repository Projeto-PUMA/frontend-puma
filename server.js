const express= require('express'),
	 path = require('path');

const app =express();
const cors = require('cors');

app.use(cors());
app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/frontend-puma/index.html'));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})