export const roleMid = (role:string)=>{
    return(req:any,res:any,next:any)=>{
        console.log(req.user.role)
        if(req.user.role != role){
            return res.status(401).json({message: "sem permissao"})
        }
        next()
    }
}