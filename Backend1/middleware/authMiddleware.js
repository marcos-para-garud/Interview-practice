// import jwt from "jsonwebtoken"
// import dotenv from "dotenv"

// dotenv.config();

// const auth = async(req , res , next)=>{
//     try {
//         const token = req.body.token;

//     // If the token is present
//     if (token) {

//         // Verify the token using jwt.verify method
//         const decode = jwt.verify(token, process.env.JWT_SECRET);

//         //  Return response with decode data
//         res.json({
//             login: true,
//             data: decode,
//         });
//     }

//         next();
//     } catch (error) {
//         console.log("authentication failed:" + error);
        
//     }
// }

// export default auth;







import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  try {
    // Token should be in headers: "Authorization: Bearer <token>"
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Extract token after "Bearer"
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user to request
    req.user = decoded;

    // Go to next controller
    next();
  } catch (error) {
    console.log("Authentication failed:", error);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default auth;
