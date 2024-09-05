const mongoose = require("mongoose");


const DbConnection = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://karanrabidas1478:VZzy20UZ0otXVtNa@chatdp-update.0npiq.mongodb.net/", {
        });
        console.log("DB connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }

}

module.exports = DbConnection;