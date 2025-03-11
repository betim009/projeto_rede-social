const connection = require("./connection");

const selectPage = async (count, page) => {
    const [result] = await connection.query(
        'SELECT * FROM users LIMIT ? OFFSET ?',
        [count, page]
    );
    return result;
};

async function selectUser(user) {
    const { email, password } = user;
    const [[result]] = await connection.execute(
        'SELECT * FROM users WHERE email = ?', [email]
    );

    if (!result) {
        return 1
    };

    if (password !== result.password) {
        return 2
    };

    return result;
};

async function insertUser(user) {
    const { name, email, password } = user;
    const [{ insertId }] = await connection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );
    return insertId;
}

async function updateUserByID(id, data) {
    const { address, phone } = data;

    const result = await connection.execute(
        'UPDATE users SET address = ?, phone = ? WHERE id = ?',
        [address, phone, id]
    );
    return result;
};

async function deleteUserByID(id) {
    const result = await connection.execute(
        'DELETE FROM users WHERE id = ?',
        [id]
    );
    return result;
};

module.exports = {
    selectUser,
    selectPage,
    insertUser,
    updateUserByID,
    deleteUserByID
};