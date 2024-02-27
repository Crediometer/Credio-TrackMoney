import { useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./Component/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Auth/Signup";
import Settings from "./pages/Settings/Settings";

export default function Router() {
    const routes = useRoutes([
        // {
        //     path: '/',
        //     element: <LoginPage />, // Renders LoginPage component when the root path is accessed
        // },
        {
          path: '/',
          element: <Login/>, // Renders LoginPage component when the root path is accessed
        },
        {
          path: '/signup',
          element: <Signup/>, // Renders LoginPage component when the root path is accessed
        },
        {
            path: '/dashboard',
            element: <Layout/>,
            children: [
              { index: true, element: <Dashboard/> },
              { path: 'settings', element: <Settings/> },
            ],
        },
    ]);
    
  
    return routes;
  }