import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  role: String,
  userId: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Login API
// Login API
app.post('/api/login', async (req, res) => {
  try {
    const { userId, password } = req.body;

    // MongoDB se user ko find karo
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Password check karo
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Login successful
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role,
        userId: user.userId,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Start server
app.listen(6000, () => {
  console.log('Server is running on http://localhost:6000');
});