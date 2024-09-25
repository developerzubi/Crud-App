import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from "react-icons/fa";
import Navbar from './Navbar';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Home = () => {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userdata = await axios.get("http://localhost:8000/api/getall/");
                setUser(userdata.data);
            } catch (e) {   
                console.log("Error fetching user data:", e);
            }
        };
        fetchData();
    },[]);

    const deleteUser = async (userid) => {
        await axios.delete(`http://localhost:8000/api/delete/${userid}`)
            .then((response) => {
                setUser(prevUser => prevUser.filter(user => user._id !== userid))
                toast.success(response.data.msg, { position: "top-right" })
            }).catch(e => console.log(e))
    }
    return (
        <>
            <Navbar />
            <div className="w-[60%] bg-white rounded-xl shadow-2xl my-14 mx-auto p-14">
                <table className='w-full border text-center' border={1} cellPadding={10} cellSpacing={0}>
                    <thead className='bg-blue-700 text-white'>
                        <tr>
                            <td>Sr.No.</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className='bg-red-500 text-white py-1 px-[10px] rounded m-2'
                                    >
                                        <FaTrash />
                                    </button>
                                    <button className='bg-green-500 text-white py-1 px-[10px] rounded m-2'>
                                        <Link to={`/edit/${user._id}`}>
                                            <FaEdit />
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;
