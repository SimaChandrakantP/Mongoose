var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    Supplier_name: {
        type : String,
        required : true
    },
    Supplier_id: {
        type : String,
        unique:true,
        required : true
    },
    email:{
    type: String,
    unique:true,
    required:true
    },

    age:{
    type: Number,
    default:21
    },
    location:{
        type:String,
        required:true
    },

});

var supplier = mongoose.model('SupplierRegistration', UserSchema);

module.exports = supplier;