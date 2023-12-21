import {useEffect, useState} from "react";
import Blog from "../Blog/Blog";
import PropTypes  from "prop-types";

const Blogs = ({hndleToAddBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl p-2 font-bold  text-green-600 ">Blogs:{blogs.length}</h1>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} hndleToAddBookmarks={hndleToAddBookmarks}></Blog>
            ))}
        </div>
    );
};
Blogs.propTypes = {
    hndleToAddBookmarks:PropTypes. object.isRequired
}

export default Blogs;
