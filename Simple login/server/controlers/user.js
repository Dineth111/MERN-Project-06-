const User=require('./model/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.register = async (req, res) => {   //register
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User registered" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.login = async (req, res) => {   //login
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };