const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
      super.init({
          username: DataTypes.STRING,
          password: DataTypes.STRING,
          isAdmin: DataTypes.BOOLEAN,
      }, {
        sequelize
      })
    }
}

module.exports = User