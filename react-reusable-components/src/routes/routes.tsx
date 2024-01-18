import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'about',
            element: <About/>
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout/>,
      children: [
        {
          index: true,
          element: <h1>This is Admin Dashboard</h1>
        },
        {
          path: 'add-admin',
          element: <h1>This is Add Admin Page</h1>
        },
      ]
    }
  ]);

  export default router;