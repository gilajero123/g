import express from 'express';
import ProfileRoute from './routes/profile.js';
import FirstName from './routes/firstname.js';
import LastName from './routes/lastname.js';
import Age from './routes/age.js';
import Email from './routes/email.js';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my server.');
});

app.use(ProfileRoute);
app.use(FirstName);
app.use(LastName);
app.use(Age);
app.use(Email);

// const PORT = 3333;
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:3333`);
});