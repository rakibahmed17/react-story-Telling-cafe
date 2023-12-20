import "./App.css";
import Header from "../src/Component/Heder/Header";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";

function App() {
    return (
        <>
            <Header></Header>
            <div className="md:flex max-w-6xl mx-auto">
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </div>
        </>
    );
}

export default App;
