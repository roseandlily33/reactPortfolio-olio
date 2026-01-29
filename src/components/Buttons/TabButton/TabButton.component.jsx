import React from "react";
import { TabButtonContainer } from "./TabButton.styles";

const TabButton = ({ isActive, onClick, span }) => {
  return (
    <TabButtonContainer className={isActive ? "active" : ""} onClick={onClick}>
      {span}
    </TabButtonContainer>
  );
};

export default TabButton;
