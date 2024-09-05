const jwt = require("jsonwebtoken");

const GenerateToken = (id) => {
    return jwt.sign({ id }, "Param god", {
        expiresIn: "10d",
    });
}

module.exports = GenerateToken;