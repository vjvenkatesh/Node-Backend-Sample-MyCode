const PASSWORD=process.env.ROUTE_PASSWORD;


const verifyAuth=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        return res.status(401).json({message:"UnAuthorized Request"});
    }
    if(authorization !== PASSWORD){
        return res.status(401).json({message:"Password Not Matched!. please provide valid password"});
    }
    next();

}




module.exports={verifyAuth};