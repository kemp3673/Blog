const userLogin = async (req, res) => {
  res.status(200).json({ message: "Logged in" });
};

const userLogout = async (req, res) => {
  res.status(200).json({ message: "Logged out" });
};

const getUserInfo = async (req, res) => {
  res.status(200).json({ message: "User info" });
};

const updateUserInfo = async (req, res) => {
  res.status(200).json({ message: "User info updated" });
};

module.exports = {
  userLogin,
  userLogout,
  getUserInfo,
  updateUserInfo,
};
