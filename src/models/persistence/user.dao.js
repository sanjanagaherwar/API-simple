import users from '../data/users.data';

const insert = (details) =>{
    //users[0]=id:1
    const newUser = { id: users.length+1 ,
        ...details };
    users.push(newUser);

    return newUser;
}

const get = (userID) =>{
    const findUser = users.find(user => {
        if (user.id === userID){
            return user;
        }
        return null
    });
    return findUser;
}

const getAll =()=>{
    return users;
}

const update = (userID, newDetails) => {
    let existingUser = null;
    let userIndex = -1;

    users.forEach((user, index) => {
        if (user.id === userID) {
            existingUser = user;
            userIndex = index; // Correctly assign the index
        }
    });

    if (userIndex === -1) { // No user found with the given ID
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    };

    users.splice(userIndex, 1, updatedUser);
    return updatedUser;
};


const remove = (userID) => {
    const index = users.findIndex(user => user.id === userID);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
}

export default{
    insert,
    get,
    getAll,
    update,
    remove
}