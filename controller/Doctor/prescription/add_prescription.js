const prescription= require("../../../model/Doctor/prescription/add_prescription")
const cloud = require("../../../cloudinary")
const fs = require('fs')



exports.add_prescription=(req,res)=>{
    console.log(req.body)
    var preObj = new prescription(req.body)
    preObj.save((err,resp)=>{
        if(err){
            res.json({code:400,msg:'prescription details not add'})
        }
        else{
            if(req.file){
                var path = req.file.path
                cloud.prescription_image(path).then((data)=>{
                    fs.unlinkSync(path)
                    prescription.findByIdAndUpdate(resp._id,{$set:{patient_image :data.url}}).then((preUpdate)=>{
                        res.json({code:200,msg:preUpdate})
                    })
                }).catch((err)=>{
                    res.json({code:400,msg:'patient image url not create'})
                })
            }
            else{
                res.json({code:200,msg:resp})
            }
        }
    })
}

exports.list_prescription =(req,res)=>{
    console.log('run')
    patient.find()
    .select('patient_name')
    .select('patient_img')
    .select('age')
    .populate('Appoinment','appoinment_id doctor_name department app_date app_time status')
    .exec((err,resp)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(resp)
        }
    })
}