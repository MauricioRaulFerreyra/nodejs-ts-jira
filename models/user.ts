import { DataTypes } from 'sequelize';
import db_sequelize from '../db_sequelize/connection.sequelize';

const User = db_sequelize.define('User',{
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    state:{
        type: DataTypes.BOOLEAN,
    }
});

export default User;