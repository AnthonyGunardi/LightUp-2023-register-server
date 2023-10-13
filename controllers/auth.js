const User = require('../model/user');

exports.register = async (req,res,next)=>{
    try {
        const {
          sesi_program, nama_perusahaan, jumlah_peserta, nama_peserta, jabatan_peserta, nama_peserta2, jabatan_peserta2, nama_peserta3, jabatan_peserta3, nomor_telp
        } = req.body
 
        const user = await User.findOne({nama_perusahaan, nama_peserta})
        if (user) {
            return res.status(401).json({message:"User already exist!"})
        }
        const newUser = await User.create({ sesi_program, nama_perusahaan, jumlah_peserta, nama_peserta, jabatan_peserta, nama_peserta2, jabatan_peserta2, nama_peserta3, jabatan_peserta3, nomor_telp
        })
        return res.status(201).json(newUser)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}