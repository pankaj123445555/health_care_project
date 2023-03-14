const {user} = require('../Model/User');

const jwt = require("jsonwebtoken");
const {generateToken} = require('../Config/Jsonwebtoken');

 

    const registerUser = async (req, res) => {
      console.log('.......',req.body);
        const { name, email, password, age } = req.body;
        // just print it
        console.log(req.body);
        if (!name || !email || !password) {
          
          res.status(400);
          throw new Error("please Enter all the Field");
        }
        const userExist = await user.findOne({ email: email });
      
        if (userExist) {
          res.status(400);
      
          throw new Error("user already exists");
        }
        const users = await user.create({
          email,
          name,
          password,
          age,
        });
        if (users) {
          res.status(201).json({
            _id: users._id,
            name: users.name,
            email: users.email,
            token:  generateToken(users._id)
          });
        } else {
          res.status(400);
          throw new Error("user not found");
        }
      };


      // lets write the code for authentication purpose

const authUser = async (req,res) =>{
   
    const { email, password } = req.body;
    console.log(req.body)
    
    const userExist = await user.findOne({ email });
    if(!userExist)
    {
        res.status(401);
       throw new Error("user not existed");
    }
   if(password!=userExist.password)
   {
       res.status(401);
       throw new Error("invalid email and password");
   }
    // console.log(user);
    if (userExist) {
      res.status(201).json({
        _id: userExist._id,
        name: userExist.name,
        email: userExist.email,
      });
    }  
}

module.exports = {registerUser,authUser};