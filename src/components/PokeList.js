import React from "react";
import { Link, Outlet } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      PokeList will be here
      <Link to="pokesingle">Some cool link</Link>
      {/* Outlet component that will display the content of the link in the pokelist */}
      <Outlet />
    </div>
  );
};

export default PokeList;
