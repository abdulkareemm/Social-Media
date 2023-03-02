const UserModel = require("../modules/User");
const bcrypt = require("bcryptjs");

// Registering a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      username,
      password: hash,
      firstname,
      lastname,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// Login USer
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json("Wrong Password or Username");
    } else res.status(404).json("Wrong Password or Username");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// Get User
exports.getUser = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findById(id);
  try {
    user ? res.status(200).json(user) : res.status(404).json("Wrong User");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      console.log(user);
      res.status(201).json("User Deleted");
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// Follow User
exports.followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (id === currentUserId) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!")
      }else{
        res.status(403).json("User Already followed by you")
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
};
// UnFollow User
exports.unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (id === currentUserId) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User unfollowed!")
      }else{
        res.status(403).json("User is not followed by you")
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
};