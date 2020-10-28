class ErrorMiddleware{
    constructor(){

    }

    async checkErrors(err, req, res, next){
        if(err.code != undefined)
        {
            let message = req.polyglot.t(err.message);
            return res.status(err.code).send({ message });
        }else{
            console.log(err);
            return res.status(500).send({message:"It is a new error on the system"}); 
        }
    }
}

module.exports = ErrorMiddleware;