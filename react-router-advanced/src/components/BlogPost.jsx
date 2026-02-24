import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <div>Post Id : {id}</div>;
}

export default BlogPost;
