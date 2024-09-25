import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import User from "./User"
import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";

const Add = () => {
    const user = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }
    const [userData, setUserData] = useState(user);
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        // console.log(userData)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",userData)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")
        }).catch(error =>console.log(error))
        // console.log('User Added:', userData);
      };
      const fields = [
        { label: 'First Name', type: 'text', name: 'fname', value: userData.fname},
        { label: 'Last Name', type: 'text', name: 'lname', value: userData.lname },
        { label: 'Email', type: 'email', name: 'email',value: userData.email },
        { label: 'Password', type: 'password', name: 'password', value: userData.password },
    ];
    return (
        <>
            <Navbar />
            <User
                formTitle="Add User"
                buttonText="Add"
                fields={fields}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default Add
