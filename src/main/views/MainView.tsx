import React from "react";
import SideMenu from "../components/SideMenu";
import ProjectBrowser from "../components/ProjectBrowser";

export const MainView: React.FC = () => {
  return (
    <>
      <SideMenu></SideMenu>
      <ProjectBrowser></ProjectBrowser>
    </>
  );
};
