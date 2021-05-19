const med = require("../../model/admin/pharmacy/medicine")
const labTest = require("../../model/admin/investigation_daignosic/lab_test")
const alergis = require("../../model/admin/alergies")

exports.medicine_list =(req,res)=>{
    med.find()
    .select('medicine_name')
    .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'medicine list not found'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.lab_test_list =(req,res)=>{
   labTest.find()
   .select('lab_name')
   .exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'labTest list not found'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.list_alergies =(req,res)=>{
    alergis.find().exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'alergies list not found'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.add_alergies =(req,res)=>{
    var alergisObj = new alergis(req.body)
    alergisObj.save((err,resp)=>{
        if(err){
            res.json({code:400,msg:'alergies not add'})
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}


exports.add_prescription =(req,res)=>{
    console.log(req.body)
    var preObj = new Prescription(req.body)
    preObj.save((err,resp)=>{
        if(err){
            res.json({code:400,msg:'prescription not add'})
        }else{
            Patient.updateOne({_id:req.body.patientId},{$push:{prescription:resp.id}},(err,resp)=>{
                if(err){
                    res.json({code:400,msg:'prescription not add in patient'})
                }else{
                    res.json({code:200,msg:resp})
                }
            })
        }
    })

}