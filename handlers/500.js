'use strict';
let err500 =(req,res)=>{
    res.status(500).send (
        {
            errorCode:500 ,
            errorMessage:'Bad Request',
        }) ;
}

module.exports = err500;