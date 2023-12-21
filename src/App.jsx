import "./App.css";
import Header from "../src/Component/Heder/Header";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import {useState} from "react";

function App() {
    const [bookmarks, setBookmarks] = useState([]);

    const hndleToAddBookmarks = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };
    return (
        <>
            <Header></Header>
            <div className="md:flex max-w-6xl mx-auto">
                <Blogs hndleToAddBookmarks={hndleToAddBookmarks}></Blogs>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>
        </>
    );
}

export default App;
