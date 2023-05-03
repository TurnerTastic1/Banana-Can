
// Importing module
import express from 'express';

const app = express();

const PORT = 8080;

// Handling GET / Request
app.get('/', (req, res) => {
  res.send('Have some bananas!');
});

app.use(express.json());

// Server setup
app.listen(PORT,() => {
  console.log('The application is listening on port' + ':' + PORT);
});

