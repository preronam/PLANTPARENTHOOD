module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define("users", {
    memberid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    favorites: DataTypes.STRING

  });
  return users;
};