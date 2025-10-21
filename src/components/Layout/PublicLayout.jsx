import React from "react";
import PublicHeader from "../UI/PublicHeader";
import { Outlet } from "react-router-dom";
import PublicFooter from "../UI/PublicFooter";

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <div className="pt-16">
        <Outlet />
      </div>
      <PublicFooter/>
    </>
  );
};

export default PublicLayout;
