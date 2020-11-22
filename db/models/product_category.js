'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_categories = sequelize.define('product_categories', {
    product_type: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
  }, {});
  product_categories.associate = function(models) {
    product_categories.hasMany(models.products, {
        foreignKey: "product_category_id",
        as: "product",
        onDelete: "CASCADE"
    });
  };
  return product_categories;
};