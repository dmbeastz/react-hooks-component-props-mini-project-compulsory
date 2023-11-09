import Article from "../components/Article";

function ArticleList ({posts}) {
const daposts = posts.map(post =>{
    return <Article 
    key={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
    minutes = {post.minutes}/>
});
 
    return (
        <main>
         {daposts}
        </main>
    )
};

export default ArticleList;