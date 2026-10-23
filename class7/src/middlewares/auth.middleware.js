import jwt from "jsonwebtoken";

export function authenticateToken(req,res,next){
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        req.user = jwt.verify(token,"0ed127bf813f2f9224813e45631b1571")
        if( req.user.role !== "admin"){
            return res.status(403).json({
                message:"Forbidden"
            })
        }
        next()
    }catch(err){
        res.status(401).json({
            message:"Invalid Token",
            err: err.message
        })
    }

}