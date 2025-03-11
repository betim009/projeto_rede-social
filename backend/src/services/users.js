const { selectUser, selectPage, insertUser, updateUserByID, deleteUserByID } = require("../models/users");

async function findPage(count, page) {
    const results = await selectPage(count, page);
    return results;
};

async function getLogin(user) {
    const result = await selectUser(user);
    const { id } = result;

    if (id) {
        const new_result = {
            message: "Success",
            id,
        };

        return new_result;
    };

    return result;
};

async function createNewUser(user) {
    const result = insertUser(user);
    return result;
};

async function updateUser(id, user) {
    const result = updateUserByID(id, user);
    return result;
};

async function deleteUser(id) {
    const result = deleteUserByID(id);
    return result;
};

module.exports = {
    getLogin,
    findPage,
    createNewUser,
    updateUser,
    deleteUser
};