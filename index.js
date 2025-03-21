require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./database/db');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as templating engine

// Home route
app.get('/', (req, res) => {
  res.render('home', { title: 'My App' });
});


app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
const userRoutes = require('./Routes/UserRoutes');
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})