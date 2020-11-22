'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    product_category_id: DataTypes.INTEGER,
    product: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    buyed: DataTypes.BOOLEAN,
  }, {});
  products.associate = function(models) {
    products.belongsTo(models.product_categories, {
        foreignKey: "product_category_id",
        as: "product_category",
        onDelete: "CASCADE",
      });
  };
  return products;
};