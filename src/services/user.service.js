import userDao from '../models/persistence/user.dao';

const addUser = (details) =>{
    userDao.insert(details);
};

const getUser = (userID) =>{
    userDao.get(userID);
};

const updateUser = (userID) =>{
    userDao.update(userID);
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