import {FC} from "react";

interface Props {
    post: PostType;
}

const Card: FC<Props> = ({post}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{post.title}</h2>
                <p>Author: {post.author}</p>
            </div>
            <div className="card-body">
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default Card;
