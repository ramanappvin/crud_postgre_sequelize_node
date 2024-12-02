const {Sequelize} = require ('sequelize');
const { createUserModel } = require('../model/userSchema');

const sequelize = new Sequelize('postgres', 'postgres', '<Enter password>', {
    host: 'localhost',
    dialect:'postgres'
  });

let UserModel = null;
const connection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database successful.');
        
        // after connection, create Model
        UserModel = await createUserModel(sequelize); /* Asynchronous function returning a Promise.The await keyword pauses the execution of the current function until the Promise is resolved (i.e., the model creation process completes). Then the model is returned. */
        await sequelize.sync(); // to sync database
        console.log('Database synced.');
    } catch (error) {
        console.log('Unable to connect to database: ', error)
    }
}

// module.exports = {connection, UserModel}; // EARLIER

// FUNCTION TO ACCESS UserModel AFTER ITS INITIALIZATION
const getUserModel = () => {
    if (!UserModel) {
        throw new Error('UserModel is not initialized');
    }
    return UserModel;  // Return the model once it's initialized
};

module.exports = { connection, getUserModel };
