export default function Comment(props) {
    let {comments} = props;
    return (
        <div>{comments.postId} - {comments.name}</div>
    )
}