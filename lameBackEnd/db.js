const { default: mongoose } = require("mongoose");

module.exports = () => {
    const ConnenctionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB,ConnenctionParams);
        console.log("Connected to dataBase Successfully")
    }catch(error){
        console.log(error);
        console.log("Cound'nt Connect to DB");
    }
}