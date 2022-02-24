import bodyParser from 'body-parser'
import app from './app/index';

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', (req,res) => res.send("I am root."))
app.listen(port);

console.log('Server Listening on port ' + port);