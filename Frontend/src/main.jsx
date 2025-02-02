import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import Home from "./components/Home/Home.jsx";
import ExploreCourses from "./components/Courses/ExploreCourses.jsx";
import Course from "./components/Courses/Course.jsx";
import Create from "./components/Create/Create.jsx";
import Dashboard from "./components/Profile/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "explore",
        element: <ExploreCourses />,
        children: [
          {
            path: ":category",
            element: <ExploreCourses />,
            children: [{
              path: ":subcategory",
              element: <ExploreCourses />
            }],
          },
        ],
      },
      {
        path: "course/:courseId",
        element: <Course />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
createRoot(document.getElementById("root")).render(
  <UserProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </UserProvider>
);
