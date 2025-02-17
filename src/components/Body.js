import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import MovieWatch from "./movieWatchPage/MovieWatch";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/moviewatch",
      element: <MovieWatch />
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
