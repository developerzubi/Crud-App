import React, { useEffect } from 'react'
import Navbar from './Navbar'
import User from './User'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Edit = () => {
    const user = {
        fname: '',
        lname: '',
        email: ''
    }
    const {id} = useParams();
    const navigate = useNavigate(); 
    const [userData, setUserData] = useState(user)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`,userData)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")
        }).catch(error =>console.log(error))
    };
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            console.log(response)
           setUserData(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[id])
    const fields = [
        { label: 'First Name', type: 'text', name: 'fname', value: userData.fname},
        { label: 'Last Name', type: 'text', name: 'lname', value: userData.lname },
        { label: 'Email', type: 'email', name: 'email',value: userData.email }
    ];
    return (
        <>
            <Navbar />
            <User
                formTitle="Edit User"
                buttonText="Update"
                fields={fields}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default Edit
