import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className=" max-w-xl bg-slate-300 ml-4 p-5">
            <h2 className="text-center font-bold">Bookmarks Blogs:{bookmarks.length}</h2>
            {bookmarks.map((bookmark) => (
                <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
            ))}
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
};

export default Bookmarks;
