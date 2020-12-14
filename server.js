const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const port = 3000;


app.use(express.json());


// prepare server
//app.use('/api', api); // redirect API calls
app.use(express.static(path.join(__dirname, '/website'))); //set static folder
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))); //set another static folder with bootstrap

app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))); // redirect bootstrap JS
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist'))); // redirect JS jQuery
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))); // redirect CSS bootstrap


console.log(path.join(__dirname, 'node_modules/bootstrap/dist/css'));
console.log(path.join(__dirname, '/website'));

//Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website/index.html'));
});








app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
