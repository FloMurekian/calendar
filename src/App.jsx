import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./views/DefaultPage";
import Create from "./views/Create";
import Update from "./views/Update";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DefaultPage />
        },
        {
          path: "/create",
          element: <Create />
        },
        {
          path: "/update/:id",
          element: <Update />
        }
      ]
    }
  ],
  {
    basename: "/calendar"
}
)

export default function App() {
  return (
    <RouterProvider router={router} />
   )  
}