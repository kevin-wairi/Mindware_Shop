import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

// components
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/",
      element: (
        <Layout>
          <Index />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: (
        <AuthenticatedRoute>
          <Products />
        </AuthenticatedRoute>
      ),
    },
    {
      path: "/cart",
      element: (
        <AuthenticatedRoute>
          <Cart />
        </AuthenticatedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <AuthenticatedRoute>
          <Profile />
        </AuthenticatedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
