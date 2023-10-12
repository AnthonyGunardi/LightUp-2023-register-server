const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    nama_perusahaan:{
        type:String,
        required:true,
    },
    jumlah_peserta:{
      type:String,
      required:true,
    },
    nama_peserta:{
      type:String,
      required:true,
    },
    jabatan_peserta:{
      type:String,
      required:true,
    },
    nama_peserta2:{
      type:String,
      default: ''
    },
    jabatan_peserta2:{
      type:String,
      default: ''
    },
    nama_peserta3:{
      type:String,
      default: ''
    },
    jabatan_peserta3:{
      type:String,
      default: ''
    },
    nomor_telp:{
      type:String,
      required:true,
    }
});
module.exports = mongoose.model('Users',userSchema);