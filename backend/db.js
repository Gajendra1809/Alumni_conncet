const mongoose = require('mongoose');
//1:-
//const mongoURI='mongodb+srv://Gofood:Gofood123@cluster0.3neizjm.mongodb.net/Gofoodmern?retryWrites=true&w=majority&appName=AtlasApp';
// const mongoDB= async()=>{
//     await mongoose.connect(mongoURI,()=>{
//         console.log("Connected");
//     });
// }
// module.exports = mongoDB;
//2:-
//const mongoose = require('mongoose')

// const mongoDB = async () => {
//     try {
        
//         mongoose.connect(mongoURI) ;
//         console.log('Mongo connected');
//         const fetched_data=  mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else console.log(data);
//         });
//     } catch(error) {
//         console.log(error);
//         process.exit();
//     }
// }


//chatGPT gave the correct one :)
const mongoDB = async () => {
    try {
        // Replace 'mongoURI' with your actual MongoDB URI
        
        //const mongoURI='mongodb+srv://Gofood:Gofood123@cluster0.3neizjm.mongodb.net/Gofoodmern?retryWrites=true&w=majority&appName=AtlasApp';
        const mongoURI='mongodb+srv://Test:Test123@cluster0.qyrvgqa.mongodb.net/testdb?retryWrites=true&w=majority&appName=AtlasApp'
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongo connected');
        
        const fetched_data = mongoose.model('fetched_data', new mongoose.Schema({}), 'users');
        const fetched_jobs= mongoose.model('fetched_jobs', new mongoose.Schema({}), 'jobs');
        
        const data = await fetched_data.find({});
        const jobs=await fetched_jobs.find({});
        
        global.person=data;
        global.jobs=jobs;
        //console.log(data);
        console.log(jobs)
        
        //mongoose.disconnect(); // Disconnect from the database after fetching data
    } catch(error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = mongoDB