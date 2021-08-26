const mongoose = require("mongoose")


/* mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
}) */

mongoose.connect(`mongodb+srv://Fisi:Fisi123@cluster0.jridy.mongodb.net/Clase7?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

var db = mongoose.connection;
db.on("error", console.error.bind(console, "error al conectar bd"));
db.once("open", function () {
    console.log("Conectado a DB")
})