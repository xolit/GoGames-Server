require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/db');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./Routes/UserRoutes');
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})