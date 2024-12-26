import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import sendEmail from "../utils/mailer.js";


//login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user= await userModel.findOne({email});
        if(!user){
            res.json({success:false,message:"User Doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}
const createToken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


//register user
const registerUser = async (req,res)=>{
    const {name,password,email,confirmPassword} = req.body;
    try {
        //checking if user already exists
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }
        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a Strong passeord"})
        }
        if(password !== confirmPassword){
            return res.json({success:false,message:"Passwords do not match"})
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await  bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
           
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }

    try {
      
    
        // Save the verification token
        newUser.verificationToken = token;
        await newUser.save();
    
        // Send verification email
        const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
        const html = `
          <h1>Verify Your Email</h1>
          <p>Please click the link below to verify your email address:</p>
          <a href="${verificationLink}">Verify Email</a>
        `;
        await sendEmail(email, 'Email Verification', html);
    
        res.status(200).json({ success: true, message: 'Verification email sent' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
      }
    };
    
    // Verify email using the token
    export const verifyEmail = async (req, res) => {
      const { token } = req.query;
    
      try {
        // Decode the token to get the email
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ email: decoded.email });
    
        if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
    
        // Update the user as verified
        user.isVerified = true;
        user.verificationToken = null;
        await user.save();
    
        res.status(200).json({ success: true, message: 'Email verified successfully' });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: 'Invalid or expired token' });
      }
}




export {loginUser,registerUser}