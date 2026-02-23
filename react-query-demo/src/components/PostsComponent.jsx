import { useQuery } from "react-query";

const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) return "Network response was not ok";

  return response.json();
};

function PostComponents() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({ queryKey: ["fetchPosts"], queryFn: fetchPost, staleTime: 1000 * 60 });

  console.log("errorMessge", isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading the data</div>;

  return (
    <div style={{ padding: "1rem" }}>
      {isFetching && <p>Refreshing...</p>}

      {data.slice(0, 10).map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
      <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#6400ed", marginInline: "auto", width: "50%", border: "none", padding: "1rem", color: "white", borderRadius: "1rem", cursor: "pointer" }} onClick={refetch}>
        {" "}
        Refresh
      </button>
    </div>
  );
}

export default PostComponents;
