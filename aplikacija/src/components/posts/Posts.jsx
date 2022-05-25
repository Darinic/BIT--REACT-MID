import Post from "../post/post";
import PostsData from "../../data/PostsData";

const Posts = (props) => {
    return (  
        <section class="pt-4">
        <div class="container px-lg-5">
            {/*<!-- Page Features-->*/}
            <div class="row gx-lg-5">
                {props.posts.map((post)=>
                <Post
                key= {post.id}
                title ={post.title}
                content ={post.content}
                category= {post.category}
                    />
                    )}
                {/* <Post
                title="Labai geras postas"
                content="Labai labai geras postas"/>
                <Post
                title="Nelabai geras postas"
                content="Nelabai labai labai geras postas"/>
                <Post
                title=" Labai labai geras postas"
                content="Labai Labai labai labai geras postas"/>
                <Post
                title="Nelabai geras postas"
                content="Visiškai negeras postas"/>
                <Post
                title="Baisiai geras postas"
                content="Dieviškai geras postas"/>
                <Post
                title="Tragiškas postas"
                content="Dievo apsaugok nuo tokio postas"/> */}
                {/* <Post
                data= {{title:"1 Labai geras postas", content:"Labai labai geras post'as"}} <--- kaip variantas */}
            </div>
        </div>
    </section>
    );
}
 
export default Posts;