export const roleMid = (role:string)=>{
    return(req:any,res:any,next:any)=>{
        if(req.user.role != role){
            return res.status(401).json({message: "sem permissao"})
        }
        next()
    }
}