const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to MongoDB Successfully")
}).catch((error)=>{
    alert(error)
})

const student = mongoose.Schema({
    Name:String,
    Age:Number,
    Workout:Boolean
})

const Student = mongoose.model("Student",student);

const adder = async() => {

    

    const ss = await Student.find();
    
    console.log(ss)
}

adder();