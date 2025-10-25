import React from "react";
import PublicHeader from "../UI/PublicHeader";
import { Outlet } from "react-router-dom";
import PublicFooter from "../UI/PublicFooter";
import { Toaster } from "react-hot-toast";

const PublicLayout = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} toastOptions={{
    className: '',
    style: {
      padding: '16px',
      fontSize : '18px',
      color: '#713200',
    },
  }
    } />
      <PublicHeader />
      <div>
        <Outlet />
      </div>
      <PublicFooter/>
    </>
  );
};

export default PublicLayout;
