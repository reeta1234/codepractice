const model = require('../model/mode')


exports.getAll = function(req,res){
    model.getAll((error,data)=>{
        if(error){
            res.status(500).send({
                'message': error.message || 'somthhing wenrt wrong'
            })
        }else{
            res.send({'data':data})
        }
    })
}

exports.create = function(req,res){
    if(!req.body){
        res.status(404).send({
            message: 'Empty Data'
        })
    }
    model.createUser(req.body,(error,data)=>{
            if(error){
                res.status(500).send({
                    message:error.message || 'Somthing Went wrong'
                })
            }else{
                res.send({'data':data})
            }
    })
}

exports.update = function(req,res){
    //console.log(req.body)
    // if(!req.body){
    //     res.status(404).send({
    //         message: 'Empty Data'
    //     })
    // }
    const updateData = new model(req.body)
    const tt = model.updateUser(req.params.userId,req.body)
    tt.then(ress=>{
        res.send(ress)
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.delete = function(req,res){
    res.send('sdfsdf')
}