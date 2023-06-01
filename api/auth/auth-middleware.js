const User = require('./auth-model')

const checkUsername = async (req, res, next) => {
    const result = await User.findBy({ username: req.body.username}).first()
    if (result != null) {
        res.status(422).json({ message: 'username taken' })
        return;
    }
    next()
};

const validate = (req, res, next) => {
    const {username, password} = req.body;
    if ( typeof username !== 'string' || typeof password !== 'string' || username.trim() === '' || password.trim() === '') {
        res.status(400).json({ message: 'username and password required' })
        return;
    }
    next()
};

module.exports = {
    validate,
    checkUsername,
};