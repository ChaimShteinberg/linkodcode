function Post(props: {imgUrl:string, description: string, name: string, time: string}){
    return <>
    <img src={props.imgUrl} alt="post-img" />
    <h2>Description</h2>
    <p>{props.description}</p>
    <footer>
        {/* like */}
        <p>{props.name}</p>
        <time>{props.time}</time>
    </footer>
    </>
}

export default Post