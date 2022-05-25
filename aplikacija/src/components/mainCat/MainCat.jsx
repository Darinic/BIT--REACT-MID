import React, {useState} from "react";
import SearchCat from "../searchCat/SearchCat";
import PostsData from "../../data/PostsData";
import Posts from "../posts/Posts";

const MainCat = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const filteredPosts = PostsData.filter((post) => {
        return post.category.includes(searchTerm)
    }
    )
    return (  
        <div className="main">
            <SearchCat onSearch={handleInputChange} val={searchTerm}/>
            <Posts posts={filteredPosts}/>
        </div>
    );
}
 
export default MainCat;