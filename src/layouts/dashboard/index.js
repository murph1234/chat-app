

import React from "react";
import { Outlet } from "react-router-dom";

import Stack from "@mui/material/Stack";

import SideBar from "./SideBar";

const DashboardLayout = () => {


  return (
    <Stack direction={"row"}>
      {/*SideBar*/}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
