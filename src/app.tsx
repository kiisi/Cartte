import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages";
import Register from "./pages/register";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import ConfirmEmail from "./pages/confirm-email";
import DashboardLayout from "./layout/dashboard-layout";
import Dashboard from "./pages/dashboard";
import Explore from "./pages/explore";


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
      },
      {
        path: '/dashboard',
        element: (
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: 'explore',
            element: <Explore />
          }
        ]
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}