const mongoose = require("mongoose")

try {

    const path = "mongodb+srv://brunobocardi:<password>@cluster0.ptvknzc.mongodb.net/test"
    mongoose.connect(
        path
    )

    console.log("Conexão com o Mongo OK")
}
catch (e) {
    console.log(e)
}

mongoose.Promise = global.Promise

module.exports = mongoose