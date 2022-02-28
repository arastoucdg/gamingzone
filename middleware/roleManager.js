exports.isAdmin = (req, res, next) => {
    console.log("The user is from the middleware", req.user)
    //check if there's a user
    if(req.user == null){
        return res.status(401).json({message:'No user configured'});
    }
    //check if roles exist on this user
    if(req.user.roles == null){
        return res.status(401).json({message:'No roles found'});
    }

    //check if the user has the admin role. 
    if(!req.user.roles.includes('ADMIN')){
        return res.status(401).json({messsage:'Only allowed for admin users'});
    }
    
    next();
}