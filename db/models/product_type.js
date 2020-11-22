'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_types = sequelize.define('product_types', {
    type: DataTypes.STRING,
  }, {});
  product_types.associate = function(models) {
    
  };
  return product_types;
};