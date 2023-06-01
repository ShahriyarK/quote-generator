import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Root = () => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <>
      <NavBar />
      <Outlet context={[userAuth, setUserAuth]} />
    </>
  );
};

export default Root;
