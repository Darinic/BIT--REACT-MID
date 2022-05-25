import React, {useState} from "react";
import Search from "../search/Search";
import PostsData from "../../data/PostsData";
import Posts from "../posts/Posts";

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const filteredPosts = PostsData.filter((post) => {
        return post.title.includes(searchTerm)
    }
    )
    return (  
        <div className="main">
            <Search onSearch={handleInputChange} val={searchTerm}/>
            <Posts posts={filteredPosts}/>
        </div>
    );
}
 
export default Main;