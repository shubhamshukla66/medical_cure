const mongoose = require('mongoose')
const schema = mongoose.Schema

const prescriptionSchema = new schema(
    {
        patient_id: {
            type: String
        },
        patient_name: {
            type: String
        },
        patient_age: {
            type: String
        },
        gender: {
            type: String
        },
        specialization: {
            type: String
        },
        patient_image: {
            type: Array
        },
        height: {
            type: String
        },
        blood_presure: {
            type: String
        },
        weight: {
            type: String
        },
        diagnosis:{
            type: String
        },
        allergies:{
            type:String
        },
        patient: [{
            type: schema.Types.ObjectId,
            ref: "patient"
        }],
    }
    ,
    { timestamps: true }
)

module.exports = mongoose.model('prescription', prescriptionSchema)
