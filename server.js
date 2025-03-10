import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';



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
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  photo: { type: String }, // Optional field
});
const User = mongoose.model('User', userSchema);


// Registration API
app.post('/api/register', async (req, res) => {
  try {
    const { userId, password, name, email, role, photo } = req.body;

    // Password hash karein
    const hashedPassword = await bcrypt.hash(password, 10);

    // Naya user create karein
    const newUser = new User({
      userId,
      password: hashedPassword,
      name,
      email,
      role,
      photo
    });

    // User ko database mein save karein
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error!' });
  }
});




// Login API
app.post('/api/login', async (req, res) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ message: 'UserId and password are required!' });
    }

    // Database se user ko fetch karein
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // Password match karein
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password!' });
    }

    // Login successful
    return res.status(200).json({ message: 'Login successful!', user });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error!' });
  }
});


//Feedback Form

// pages/api/feedback.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { feedback } = req.body;

    // Yahan aap feedback ko database mein save kar sakte hain
    console.log('Received feedback:', feedback);

    // Success response
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}





// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});