import React, { useState, useEffect } from "react";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import './Contacts.scss';

import { BiPlusMedical, BiEditAlt } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FcEmptyFilter } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import ip from "../../../ip-config/ip";

const Contacts = () => {
    const navigate = useNavigate()
    const win = sessionStorage;
    const [msg, setMsg] = useState(null)

    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const fetchContacts = async () => {
            console.log('jajajja')
            await Axios.get(`http://${ip}:5000/api/admin/contact`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
            }).then((response) => {
                if (response.data.success == 1) {
                    setContacts(response.data.data);
                    setMsg()
                }
                else if (response.data.success == 0) {
                    setMsg(response.data.message);
                }
                console.log('response:', response.data)
            });
        }
        fetchContacts();
        console.log(contacts)
    }, []);

    const deleteContact = (delId) => {
        // eslint-disable-next-line no-restricted-globals
        const shouldDelete = confirm('Do You Want to Delete This Contact Details?');

        if(shouldDelete){
            Axios.delete(`http://${ip}:5000/api/admin/contact`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
                data: {
                    contact_id: delId
                }
            }).then((response) => {
                if(response.data.success == 1){
                    window.location.href = '/contacts'
                    // navigate('/admin-blogs')
                }
            })
        }
    }

    const clearAll = () => {
        // eslint-disable-next-line no-restricted-globals
        const shouldClear = confirm('Do You Want to Clear All Contact Details?');

        if(shouldClear){
            Axios.get(`http://${ip}:5000/api/admin/clearc`, {
                headers: {
                    Authorization: `Bearer ${win.getItem('token')}`
                },
            }).then((response) => {
                console.log(response.data)
                if(response.data.success == 0){
                    window.location.href = '/contacts'
                }
            })
        }
    }
    return msg==null?
    (
        (
            <>
                <AdminNavigation />
                <div className="contacts-table">
                    <div className="clear-button" onClick={() => clearAll()}><RiDeleteBinLine /><p>Clear All</p></div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts
                                ?
                                contacts.map((contact) => {
                                    return (
                                        // <div className="blog mainBlog">
                                        //     <div className="img">
                                        //         <img src={`http://192.168.206.193:5000/blog/${blog.blog_image}`} alt=""/>
                                        //     </div>
                                        //     <h4>{blog.title} - {blog.writer_name}hahahah</h4>
                                        // </div>
                                        <tr>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.message}</td>
                                            <td><RiDeleteBinLine className="delete" onClick={() => deleteContact(contact.contact_id)} /></td>
                                        </tr>
                                    )
                                })
    
                                : ''
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    )
    :
    (
        <>
                <AdminNavigation />
                <div className="contacts-table">
                    <div className="clear-button" onClick={() => clearAll()}><RiDeleteBinLine /><p>Clear All</p></div>
                    <div className="empty">
                        <FcEmptyFilter />
                        {msg}
                    </div>
                </div>
            </>
    )
}

export default Contacts;