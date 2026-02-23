import { useQuery } from "react-query";

const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
};

function PostComponents() {
  const { data, error, isLoading } = useQuery({ queryKey: ["fetchPost"], queryFn: fetchPost, staleTime: 1000 });

  console.log(isLoading);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading the data</div>;

  return (
    <div style={{ padding: "1rem" }}>
      {data.slice(0, 10).map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
      <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#6400ed", marginInline: "auto", width: "100%", border: "none", padding: "1rem", color: "white" }}>
        {" "}
        Refresh
      </button>
    </div>
  );
}

export default PostComponents;
