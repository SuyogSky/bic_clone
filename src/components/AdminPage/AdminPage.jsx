import React, { useEffect } from "react";
import './AdminPage.scss';
import NavBar from "../NavBar/NavBar";
import Axios from 'axios';
import ip from '../../ip-config/ip'
import AdminNavigation from "./AdminNavigation/AdminNavigation";
const AdminPage = () => {
    // useEffect(()=>{
    //     const adminLogin = ()=>{
    //         const win = sessionStorage;
    //         console.log(win.getItem('token'))
    //         Axios.get(`http://192.168.206.193:5000/api/admin/enquiry`,{
    //             headers: {
    //                 Authorization: `Bearer ${win.getItem('token')}`
    //               }
    //         }).then((response) =>{
    //             console.log(response.data)
    //         })
    //     }
    //     adminLogin()
    // })
    return(
        <AdminNavigation/>
    )
}

export default AdminPage;