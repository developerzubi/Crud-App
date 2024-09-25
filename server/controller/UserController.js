import User from '../model/UserModel.js';
import bcrypt from 'bcrypt'

const securepassword = async (password) => {
    try {

        const hashedpassword = await bcrypt.hash(password, 10);
        return hashedpassword;

    } catch (error) {
        console.log(error.message)

    }
}

export const create = async (req, res) => {
    try {

        const spassword = await securepassword(req.body.password)
        const userData = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: spassword
        })
        if (!userData) {
            return res.status(404).json({ msg: "Enter correct details" });
        }
        const data = await userData.save();
        res.status(200).json({msg:"User created successfully"});
    } catch (e) {
        res.status(500).json({ error: e })
    }
}

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userData);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}

export const getone = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findById(id);
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userData);
    }
    catch (e) {
        res.status(500).json({ error: e});
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const spassword = await securepassword(req.body.password)
        const userData = await User.findByIdAndUpdate(id,{
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: spassword
        },{new:true});
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json({msg:"User updated successfully"});
    }
    catch (e) {
        res.status(500).json({ error: e});
    }
}

export const deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findByIdAndDelete(id);
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json({msg:"User deleted successfully"});
    }
    catch (e) {
        res.status(500).json({ error: e});
    }
}

