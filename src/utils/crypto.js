const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hashSync(password,10);
    // console.log(`This is the hashed password ${hashedPassword}`)
    return hashedPassword
};


const comparePassword = async (plainPassword, hashedPassword) => {
    const data = await bcrypt.compareSync(plainPassword,hashedPassword)
    // console.log(data)
    return data
};

// const plainPassword = "abcde"
// hashPassword(plainPassword)
// comparePassword(plainPassword,"$2b$10$0Jo6D3myrG4LzswBhQxXnOZCUI9r9T47udH8.Er5gnDddkQtQjZbW")
module.exports = {hashPassword,comparePassword}