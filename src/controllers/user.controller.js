import  { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.models.js";


const registerUser=asynchandler(async(req,res)=>{
    
        //get user details from postman
        //validation not empty
        // check if user already exists : username , email
        // check for images,check for avatar
        // upload them to cloudinary , avatar 
        // create user object- create entry in db
        // remove password and refresh token field from response
        // check for user creation
        // return res

       const {fullname,email,username,password}= req.body
       console.log("email :" , email);
    

//        if(fullname===""){
//         throw new ApiError(400,"fullname is required")
//        }
       
         if(
                [fullname,email,username,password].some((field) =>
                field?.trim==="")
         ){
                throw new ApiError(400,"All fields are required")
         }


         User.findOne({
                $or: [{username},{email}]
         })
})

export {registerUser}