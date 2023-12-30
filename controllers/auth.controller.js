const User = require("../models/user.model");
const { createSecretToken } = require("../utils/secret.token");


module.exports.login = async (req, res, next) => {
    try {
        const { username, email, password, createdAt } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists!" });
        }
        const user = await new User.create({ username, email, password, createdAt });
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        });

        res
            .status(201)
            .json({ message: "User login successfully!", success: true, user });
        next();
    }
    catch (error) {
        console.error(error);
    }
}