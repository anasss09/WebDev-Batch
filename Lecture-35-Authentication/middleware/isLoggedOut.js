module.exports = (req,res,next)=>{
    if(req.session.isLoggedIn == undefined) return next();
    res.redirect('/login');
}