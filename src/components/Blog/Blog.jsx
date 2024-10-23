import PropTypes from 'prop-types';
import {CiBookmark} from 'react-icons/ci';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
     
      const {title,cover_pic,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 '>
            <img className="w-[840px] h-[400px] object-cover mb-8" src ={cover_pic} alt={`cover pic of the title ${title}`}/>
            <div className='flex justify-between'>
                <div className='flex '>
                   <img className='w-14 rounded-full mb-4' src={author_img} alt="" />
                   <div className='ml-6 items-center'>
                   <h3>{author}</h3>
                   <p className='text-left'>{posted_date}</p>
                   </div>
                </div>
                <div className='flex items-center'>
                    <p>{reading_time}</p>
                    <button onClick={() =>handleAddToBookmark(blog)} className='ml-2 '><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-2xl text-left mb-4'>{title}</h2>
            <p className='text-left'>
                {
                    hashtags.map((hash,idx) =><span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>handleMarkAsRead(parseInt(reading_time,10))}
            className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = { 
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;