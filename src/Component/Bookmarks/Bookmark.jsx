import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className=" bg-orange-500 ml-4">
            <div className="ml-4 bg-slate-500 rounded-lg my-3 p-5 text-white">
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
