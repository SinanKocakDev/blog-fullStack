import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
  };

export const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const exist = await User.findOne({ username });
  if (exist) {
    return res.status(400).json({ error: "Username is already taken" });
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {

    await User.create({ username, password: hashedPassword });

    res.status(201).json({ success: "user registered!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req,res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: "Incorrect username." });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: "Incorrect password." });
  }

  try {
    const token = createToken(user._id)

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
