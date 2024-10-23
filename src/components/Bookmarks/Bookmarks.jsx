import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 text-center mt-4 ml-4 pt-4 rounded-xl" >
            <div>
                <h2>Reading Time:{readingTime}</h2>
            </div>
            <h2 className="text-4xl"
            
            >Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime:PropTypes.number

}
export default Bookmarks;