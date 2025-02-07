import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Components/AppLayout/Applayout";
import Body from "./Components/Body/Body";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
