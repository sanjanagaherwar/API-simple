import users from '../data/users.data';

const insert = (details) =>{
    //users[0]=id:1
    const newUser = { ...details, id: users.length+1 };
    users.push(newUser);

    return newUser;
}

const get = (userID) =>{
    const findUser = users.find(user => {
        if (users.id === userID){
            return users;
        }
        return null
    });
    return findUser;
}

const getAll =()=>{
    return users;
}

const update = (newDetails) =>{
    users.map((user, index) => {
        if (user.id === newDetails.id){

        }
    });
}

const remove = (userID) =>{
    const deleteUser = (user, index)=>{
        if (user.id === userID) {
            //remove the array element of the found user
            users.splice(index, deleteCount=1);
            return true;
        }
        return false;
    };
    return users.find(deleteUser)
}

export default{
    insert,
    get,
    getAll,
    update,
    remove
}