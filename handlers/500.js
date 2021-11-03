'use strict';
let err500 =(err,req,res,next)=>{
    res.status(500).send (
        {
            errorCode:500 ,
            errorMessage:'Bad Request',
            error:err.message
        }) ;
}

module.exports = err500;