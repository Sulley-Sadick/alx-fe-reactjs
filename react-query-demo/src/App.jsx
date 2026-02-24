import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import PostComponents from "./components/PostsComponent";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <PostComponents />
    </QueryClientProvider>
  );
}

export default App;
