const logRequest = (req, res, next) =>{
    console.log(`terjadi request ke ${req.path}`);
    next();
};


module.exports = logRequest;