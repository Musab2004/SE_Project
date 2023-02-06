const express=require('express');
const User=require('../model/userSchema')
const router=express.Router();

router.get('/',(req,res)=>{
res.send('Hello world from the server');
});
router.post('/register', async (req,res)=>{
 
    const{name,email,password}=req.body;
    if(!name|| !email|| !password){
        return res.status(422).json({error:"Plz filled the field properly"});
    }
    // res.json({message:req.body})
try{
 const userExists = await User.findOne({email:email})
if(userExists){
    return res.status(422).json({error:"email already exists"})
}
const user =new User({name,email,password}) 
const UserRegister=await user.save();
if(UserRegister){
    res.status(201).json({message:"user registration successfull"});
}
else{
    res.status(500).json({error:"FAiled to registered"})
}
    
}
catch(err){
    console.log(err);
}




    });




    router.post('/Logine',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         const{email,password}=req.body;
       
        
         if(!email|| !password){
             return res.status(422).json({error:"Plz filled the field properly"});
         }
   
         // res.json({message:req.body})
     
    //   User.findOne({email:email}).then((userExist)=>{
    //  if(userExist){
    //      return res.status(422).json({"error:email already exist"})
    //  }
    // });
   
    //  User.findOne({password:password,email:email}).then((userExist)=>{
    //     if(userExist){
    //         return res.status(422).json({error:"password incorrect"})
    //     }
    // res.send("Log in sucessfull");
     
     
    //   })
         const user= await User.findOne({email:email});
         console.log(user);
       if(!user){
           res.status(422).json({error:"user not exists"});
       }
       else{
           if(user.password==password){
            res.send(user);
            res.status(200).json({error:"Login sucessful"});
           }
           else{
            res.status(422).json({error:"incorrect password"});
           }
       }

     

    });











// get all users
router.post("/all", async (req, res) => {
//    results='hey here i am'
//     res.send(JSON.stringify(results));
// reslt=JSON.stringify(req.params.product)
const{name2}=req.body
console.log(name2)
    User.find({ name: name2}, function (err, docs) {
        if (err){
            console.log("hello here i am")
            console.log(err);
        }
        else{
          if(docs.dataSize()==0){
              console.log("password incorrect")
              res.send("pssword incorrect");
          }
          else{
            console.log("hello here i am")
            res.send(docs)
          }
            // console.log("First function call : ", docs[0].email);
            // docs.body().email
        }
    });
    // const user=User.find();
    // console.log(user);
    // User.find((error, data) => {
    //   if (error) {
    //     return next(error);
    //   } else {
          
    //     res.json(data);
        
    //     console.log(data.email);
    //   }
    // });

  

    // console.log(data.email);
  });    

module.exports=router;