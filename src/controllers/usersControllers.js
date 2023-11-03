// Contoh data
const userData = require('../models/usersModels');

// HANDLER

// FETCH ALL DATA USER
const userGetAll = async (req, res)=>{
    try {
        const [data] = await userData.getUsersData();
        res.status(200).json({
            message: 'Data users',
            data: data
        });  
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    };

};

// SHOW DATA BY USER ID
const userFetch = async (req, res)=>{
    try {
        const {idUser}  = req.params;
        const [data]    = await userData.getUserBy(idUser);
        res.status(200).json({
            message: 'Data user',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Not Found',
            serverMessage: error
        }); 
    };

}

// CREATE DATA USER
const userPost = async (req, res) => {
    try {
        const {body}    = req;
        await userData.storeUserData(body);
        res.status(201).json({
            message: 'Create success',
            data:body
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Created failed',
            serverMessage:error
        });
    };
};

// UPDATE DATA USER
const userUpdate = async (req, res) => {
    try {
        const {idUser}  = req.params;
        const {body}    = req;
        const [data]    = await userData.updateUserData(body,idUser);
        res.status(201).sjson({
            message: 'Data Updated',
            data: data.affectedRows
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Updated failed',
            serverMessage:error
        }); 
    };
};

// DELETE DATA USER
const userDelete = async (req, res) => {
    try {
        const {idUser} = req.params;
        const[data]    = await userData.deleteUserData(idUser);
        res.json({
            message: 'Data deleted',
            data: data.affectedRows
        })
    } catch (error) {
        res.status(500).json({
            message: 'Deleted failed',
            serverMessage:error
        });
    };
};

module.exports = {userGetAll,userPost,userUpdate,userDelete,userFetch}