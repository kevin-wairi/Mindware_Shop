import React from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import Chat from "./pages/Chat";
import FileUpload from "./pages/UploadFile";
import UploadFunctions from "./pages/UploadFunctions";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const App = () => {
  return (
    <div>
      {/* <Index />
      <SignUp />
      <SignIn />      
      <Layout children={<Chat />} />
      <Layout children={<FileUpload />} /> */}
      <Layout children={<UploadFunctions />} />
    </div>
  );
};

export default App;
