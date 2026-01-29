import React from "react";
import { PrimaryButtonContainer } from "./PrimaryButton.styles";
const PrimaryButton = ({ onClick, span }) => {
  return (
    <PrimaryButtonContainer onClick={() => onClick()}>{span}</PrimaryButtonContainer>
  );
};

export default PrimaryButton;
