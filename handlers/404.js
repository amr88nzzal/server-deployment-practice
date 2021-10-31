'use strict';
let err404 =(req,res)=>{
    res.status(404).send (
        {
            errorCode:404 ,
            errorMessage:'Page Not Found',
        }) ;
}

module.exports = err404;