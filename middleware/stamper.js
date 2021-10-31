'use strict';
let stamper =(req,res,next)=>{
    req.timestamp = new Date();
    next();
}

module.exports = stamper;