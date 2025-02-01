import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Authentication/Login.jsx';
import Register from "./components/Authentication/Register.jsx";
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/> ,
    children:[]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
]);
createRoot(document.getElementById("root")).render(
  
  <UserProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </UserProvider>
);
