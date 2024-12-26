import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        // Extract token from the Authorization header
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Not Authorized! Login Again" });
        }

        // Extract the actual token from the header
        const token = authHeader.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach userId to the request object
        req.body.userId = decoded.id;

        // Proceed to the next middleware or route
        next();
    } catch (error) {
        console.error(error.message);

        // Handle invalid or expired tokens
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default authMiddleware;











// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next) =>{
//     const {token} = req.headers;
//     if(!token){
//         res.json({success:false,message:"Not Authorized! Login Again"})
//     }
//     try {
//         const token_decode =jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error occured"})
        
        
//     }


// }
// export default authMiddleware;