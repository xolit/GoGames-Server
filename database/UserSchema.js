
const mongoose = require('mongoose');
const { hashPassword } = require('./db');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlenght: 16
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlenght: 8
  }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
