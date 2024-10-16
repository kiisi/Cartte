import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages";
import Register from "./pages/register";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import ConfirmEmail from "./pages/confirm-email";


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
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/confirm-email',
        element: <ConfirmEmail />
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}