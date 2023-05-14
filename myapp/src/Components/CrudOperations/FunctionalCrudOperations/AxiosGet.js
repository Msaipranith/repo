import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const AxiosGet=()=> {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
        console.log(response)
        setPost(response.data)});
  }, []);

 if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
export default AxiosGet;