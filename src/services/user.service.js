import userDao from '../models/persistence/user.dao';

const addUser = (details) =>{
    userDao.insert(details);
};

const getUser = (userID) =>{
    userDao.get(userID);
};

const updateUser = (userID, details) =>{
    return userDao.update(userID, details);
};

const removeUser = (userID) =>{
    userDao.remove(userID);
};

export default {
    getUser,
    updateUser,
    addUser,
    removeUser
}