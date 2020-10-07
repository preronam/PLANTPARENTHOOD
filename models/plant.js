module.exports = function (sequelize, DataTypes) {
    var plants = sequelize.define("plants", {
        Common_Name: DataTypes.STRING,
        Scientific_Name: DataTypes.STRING,
        Sunlight_Needs: DataTypes.STRING,
        Water_Needs: DataTypes.STRING,
        Moisture_Levels: DataTypes.STRING,
        Poisonous: DataTypes.BOOLEAN,
        Maintenance_Level: DataTypes.STRING,
        Affordability: DataTypes.STRING,
        img_path: DataTypes.STRING

    });
    return plants;
};