import {FormEvent, useState} from "react";
import "./App.css";
import Card from "./components/Card";
import {useGetPostsQuery, useNewPostMutation} from "./redux/api";

const App = () => {
    const [newPost] = useNewPostMutation();
    const {isError, isLoading, isSuccess, data, error} = useGetPostsQuery("");

    console.log(isError, isLoading, isSuccess, data, error);

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const myPost: PostType = {
            title,
            body,
            id: Math.random() * 100,
            userId: Math.random() * 1000,
            author: "Bhupendra Jogi",
        };

        setTitle("");
        setBody("");

        newPost(myPost);
    };

    return (
        <>
            <div>
                <h1>RTK Query Tutorial</h1>

                <div className="card-container">
                    {isLoading ? (
                        <p>I am Loading</p>
                    ) : (
                        data &&
                        data.map((item: PostType) => {
                            return <Card post={item} key={item.id} />;
                        })
                    )}
                </div>

                <br />

                <h1> ________ &nbsp; Add a New Post &nbsp; ________ </h1>

                <form onSubmit={submitHandler}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title of the Post"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Body of the Post"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="button">
                        Add Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default App;
