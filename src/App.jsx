import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
 
     const [bookmarks,setBookmarks] = useState([]);
     const [readingTime,setReadingTime] = useState([]);
 
     const handleAddToBookmark = (blog) =>{

       console.log(blog);
       const newBookmarks = [...bookmarks,blog];
       setBookmarks(newBookmarks);
     }

     const handleMarkAsRead =(id,time) =>{
        let newReadingTime =Number(readingTime)+Number(time);
        setReadingTime(newReadingTime);
        // remove the read blog from bookmark
        const remainingBookmarks =bookmarks.filter(bookmark =>bookmark.id  !== id)
        setBookmarks(remainingBookmarks);
     }
     
  return (
    <>
    <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={Number(readingTime)} ></Bookmarks>
     
     </div>
      
      
    </>
  )
}

export default App
