import React, { useState, useEffect } from "react";
import './BlogPage.scss';
import NavBar from "../NavBar/NavBar";
import Axios from "axios";
import { FaAngleDown } from 'react-icons/fa'
import ip from "../../ip-config/ip";
import Footer from "../Footer/Footer";
import SingleBlog from "./SingleBlogPage/SingleBlog";
import { useNavigate } from "react-router-dom";



const BlogPage = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () =>{
            await Axios.get(`http://${ip}:5000/api/post`).then((response) =>{
                setBlogs(response.data.data);
            });
        }
        fetchBlogs();
    }, []);

    const [dropped, setDropped] = useState(false);
    const seeMore = () => {
        dropped?setDropped(false):setDropped(true)
    }

    return(
        <>
            <NavBar blogs='blogs-opt'/>
            <section className="blog-page">
                <div className="display-blogs">
                    {blogs
                        ?
                            blogs.slice(0,1).map((blog)=>{
                                return(
                                    <div className="blog mainBlog" onClick={()=>{window.location.href=`/blog?id=${blog.post_id}`}}>
                                        <div className="img">
                                            <img src={`http://192.168.206.193:5000/blog/${blog.blog_image}`} alt=""/>
                                        </div>
                                        <h4>{blog.title} - {blog.writer_name}</h4>
                                    </div>
                                )
                            })
                            
                        :''
                    }
                    

                    <div className="second-blog-container">
                        {blogs
                            ?
                                blogs.slice(1,5).map((blog)=>{
                                    return(
                                        <div className="second-blog" onClick={()=>{window.location.href=`/blog?id=${blog.post_id}`}}>
                                            <div className="img">
                                                <img src={`http://192.168.206.193:5000/blog/${blog.blog_image}`} alt=""/>
                                            </div>
                                            <h4>{blog.title} - {blog.writer_name}</h4>
                                        </div>
                                    )
                                })
                            :''
                        }
                        

                        {/* <div className="second-blog">
                            <div className="img">
                                <img src={require('../../assets/Img/The Power of Darkness (1).png')} alt=""/>
                            </div>
                            <h4>The Power of Darkness: Lesson Learned - Rohan Roka Chettri</h4>
                        </div>

                        <div className="second-blog">
                            <div className="img">
                                <img src={require('../../assets/Img/The Power of Darkness (1).png')} alt=""/>
                            </div>
                            <h4>The Power of Darkness: Lesson Learned - Rohan Roka Chettri</h4>
                        </div>

                        <div className="second-blog">
                            <div className="img">
                                <img src={require('../../assets/Img/The Power of Darkness (1).png')} alt=""/>
                            </div>
                            <h4>The Power of Darkness: Lesson Learned - Rohan Roka Chettri</h4>
                        </div> */}
                    </div>
                </div>

                <div className="button">
                    <button className="see-more" onClick={()=>seeMore()}><p>See {dropped?'Less':'More'}</p><FaAngleDown className={dropped?'dropped':''}/></button>
                </div>
                {dropped
                    ?
                        <div className="other-blogs">
                            {blogs
                                ?
                                    blogs.slice(5).map((blog)=>{
                                        return(
                                            <div className="other-blog" onClick={()=>{window.location.href=`/blog?id=${blog.post_id}`}}>
                                                <div className="img">
                                                    <img src={`http://192.168.206.193:5000/blog/${blog.blog_image}`} alt=""/>
                                                </div>
                                                <h4>{blog.title} - {blog.writer_name}</h4>
                                            </div>
                                        )
                                    })
                                :''
                            }
                        </div>
                    :
                        ''
                
                }
            </section>
            <Footer/>
        </>
    )
}

export default BlogPage;