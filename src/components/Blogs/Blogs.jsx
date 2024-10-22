import { useEffect } from "react";


const Blogs = () => {
    // const [blogs,setBlogs] = useState([]);

    useEffect (() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data =>console.log(data))
  
    },[])
    return (
        <div>
            <div>
                  <h1 className="text-4xl">Blogs</h1>
            </div>
        </div>
    );
};

export default Blogs;