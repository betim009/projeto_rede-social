const validateUsers = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name) {
        return res.status(400).json({ "message": "name empty"})
    }

    if (!email) {
        return res.status(400).json({ "message": "email empty"})
    }

    if (!password) {
        return res.status(400).json({ "message": "password empty"})
    }
    next();
};

module.exports = {
    validateUsers
};