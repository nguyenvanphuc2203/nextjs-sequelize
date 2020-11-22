'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transactions', {
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    gate: DataTypes.STRING,
    quality: DataTypes.INTEGER,
    product_type: DataTypes.STRING,
    product_category_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {});
  transaction.associate = function(models) {
    transaction.belongsTo(models.users, {
      foreignKey: "userId",
      as: "author",
      onDelete: "CASCADE",
    });
    transaction.belongsTo(models.product_categories, {
      foreignKey: "product_category_id",
      as: "product_category",
      onDelete: "CASCADE",
    });
  };
  return transaction;
};