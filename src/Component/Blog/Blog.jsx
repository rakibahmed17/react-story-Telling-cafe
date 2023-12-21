import PropTypes from "prop-types";
import {MdOutlineBookmarkBorder} from "react-icons/md";
const Blog = ({blog, hndleToAddBookmarks}) => {
    const {title, cover, author_img, author, posted_date, hashtags, reading_time} = blog;
    return (
        <div className=" mb-20">
            <img className="w-full mb-5 rounded-lg" src={cover} alt={`this is cover${title}`} />

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="mr-25 pr-10">
                    <span className="font-bold">{reading_time}min read</span>
                    <button className="text-2xl" onClick={() => hndleToAddBookmarks(blog)}>
                        <MdOutlineBookmarkBorder />
                    </button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx}>
                        <a href="">#{hash}</a>
                    </span>
                ))}
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hndleToAddBookmarks: PropTypes.func.isRequired,
};

export default Blog;
