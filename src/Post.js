import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{
                (post.body).length <= 280
                    ? post.body
                    : `${(post.body).slice(0, 280)}...`
            }</p>
        </article>
    )
}

export default Post
