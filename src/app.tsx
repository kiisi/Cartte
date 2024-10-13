import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages";


const Root = () => {

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Fatal Error occurred</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}