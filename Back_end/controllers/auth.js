const jwt = require('jsonwebtoken')
const verifyToken  = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access Denied. No token provided' });
    }
    const token = authHeader.split(' ')[1]
    try{

        const decode = jwt.verify(token,'@ambika')
        req.user = decode
        next()
    }catch(err){
        return res.status(403).json({ message: 'Invalid or expired token' })
    }
}
module.exports = verifyToken 