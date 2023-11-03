const dbPool = require('../config/database');

const getUsersData = () => {
    let SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
};

const getUserBy = (idUser) => {
    let SQLQuery = `SELECT * FROM users where id = '${idUser}'`;

    return dbPool.execute(SQLQuery);
};

const storeUserData = (data) => {
    let SQLQuery = `INSERT INTO users (name,address,email) 
                    VALUES ('${data.nama}','${data.address}','${data.email}')`;

    return dbPool.execute(SQLQuery);
};

const updateUserData = (data,idUser) => {
    let SQLQuery = `UPDATE users 
                    SET name = '${data.nama}',address = '${data.address}',email='${data.email}' WHERE id = '${idUser}'`;

    return dbPool.execute(SQLQuery);

};

const deleteUserData = (idUser) => {
    let SQLQuery = `DELETE FROM users WHERE id = '${idUser}'`;

    return dbPool.execute(SQLQuery);
};


module.exports = {getUsersData,storeUserData,getUserBy,updateUserData,deleteUserData}