const mongoose=require('mongoose');

const url="mongodb+srv://admin1:admin.123@cluster0.ef9wk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery",true,'useNewurlIppass',true);

//db conection

const conection=async()=>{
    try {
        await mongoose.connect(url);
        console.log("Mongo DB conected")
        
    } catch (e) {
        console.error(e.masage);
        process.exit();
    }
}

module.exports=conection();