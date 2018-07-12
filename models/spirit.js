const DataTypes = require('sequelize');
const moment = require('moment');

const sequelize = require('../db/sequelize');

module.exports = sequelize.connect.define(
  'spirit',
  {
    index: {
      // 编号
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      // 名称
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      // 状态
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'normal',
    },
    brand: {
      // 品牌
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      // 产地
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      // 生产年费
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    degree: {
      // 度数
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specification: {
      // 规格
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentPrice: {
      // 当前价格
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nextPrice: {
      // 下一价格
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    freezeTo: {
      // 提货时间
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    history: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    timestamps: true,
    indexes: [],
  },
);
