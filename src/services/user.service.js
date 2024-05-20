import userDao from '../models/persistence/user.dao';

const addUser = (details) =>{
    userDao.insert(details);
};

const getUser = (userID) =>{
    return userDao.get(userID);
};

const getAllUsers = () =>{
    return userDao.getAll();
};


const updateUser = (userID, details) =>{
    return userDao.update(userID, details);
};

const removeUser = (userID) =>{
    userDao.remove(userID);
};

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser
}