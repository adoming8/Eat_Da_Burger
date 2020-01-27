module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Burger', {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false,
    }});

    return Model;
}