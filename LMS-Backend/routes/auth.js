const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const secretKey = process.env.SECRET_KEY;

// ROUTE 1 for creating a new user
router.post("/newuser", async (req, res) => {
  let success = false;
  try {
    const { name, email, password, role } = req.body;
    // for encypting password and generating salt
    const salt = await bcrypt.genSalt(10);
    const secretPass = await bcrypt.hash(password, salt);
    // entering the hash value of password into database
    const user = new User({
      name: name,
      email: email,
      password: secretPass,
      role: role,
    });

    await user
      .save()
      .then((value) => {
        success = true;
        const userId = value.id;
        const authToken = jwt.sign(userId, secretKey);
        res.json({ success, authToken });
      })
      .catch((err) => {
        success = false;
        res.json({ success, Error: err.message });
      });
  } catch (error) {
    success = false;
    res.status(500).json({ success, Error: "Internal server error" });
  }
});

// ROUTE 2 login
router.post("/login", async (req, res) => {
  let success = false;
  const { email, password } = req.body;
  try {
    await User.findOne({ email }).then(async (value) => {
      if (!value) {
        return res
          .status(400)
          .json({ success, Error: "please try to login with correct credentials" });
      }
      const passwordDcrypt = await bcrypt.compare(password, value.password);

      if (!passwordDcrypt) {
        return res
          .status(400)
          .json({ success, Error: "please try to login with correct credentials 2" });
      } else {
        success = true;
        const userId = value.id;
        const authToken = jwt.sign(userId, secretKey);
        res.json({ success, authToken, blocked:value.blocked });
      }
    });
  } catch (error) {
    success = false;
    // catching error
    res.status(500).json({ success, Error: "Internal server error" });
  }
});
// ROUTE 3 getuser
router.post("/getuser", fetchUser, async (req, res) => {
  let success = false;
  try {
    const id = req.id;
    await User.findOne({ _id: id })
      .select("-password")
      .then((value) => {
        success = true;
        res.status(200).json({ value });
      });
  } catch (error) {
    res.status(500).json({ success, Error: "Internal server error" });
  }
});
// ROUTE 3 fetchallusers
router.get("/fetchallusers",fetchUser,async (req,res)=>{
  let success = false;
  try {
    const id = req.id;
    await User.findOne({ _id: id }).then(async (value)=>{
  if(value){
    await User.find({}).select('-password').then((value)=>{res.status(200).json({value})})
  }
    })
  } catch (error) {
    res.status(500).json({ success, Error: "Internal server error" });
  }
})
module.exports = router;