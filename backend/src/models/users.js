const connection = require("./connection");

const modelGetAll = async (count, page) => {
    const [result] = await connection.query(
        'SELECT * FROM usuarios LIMIT ? OFFSET ?',
        [count, page]
    );
    return result;
};

async function selectUser(user) {
    const { email, password } = user;
    const [[result]] = await connection.execute(
        'SELECT * FROM usuarios WHERE email = ?', [email]
    );

    if (!result) {
        return { error: 'not found email' }
    };

    if (password !== result.password) {
        return { error: 'password not equal' }
    };

    return result;
};

async function insertUser(user) {
    const { name, email, password } = user;
    const [{ insertId }] = await connection.execute(
        'INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );
    return insertId;
}

async function updateUserByID(id, data) {
    const { address, phone } = data;

    const result = await connection.execute(
        'UPDATE usuarios SET address = ?, phone = ? WHERE id = ?',
        [address, phone, id]
    );
    return result;
};

async function deleteUserByID(id) {
    const result = await connection.execute(
        'DELETE FROM usuarios WHERE id = ?',
        [id]
    );
    return result;
};

module.exports = {
    selectUser,
    modelGetAll,
    insertUser,
    updateUserByID,
    deleteUserByID
};