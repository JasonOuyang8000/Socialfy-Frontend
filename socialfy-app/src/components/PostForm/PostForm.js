import './PostForm.css';


const PostForm = () => {

    return (
        <div className="post-form mb-5 p-4 d-flex flex-column align-items-center shadow">
            <textarea placeholder="Write a post..."/>
            <button className="w-75 btn-post">Send a Post</button>
        </div>
    );
}

export default PostForm;