import React from "react";
import { SecondaryButtonContainer } from "./SecondaryButton.styles";
const SecondaryButton = ({ onClick, span }) => {
  return (
    <SecondaryButtonContainer onClick={() => onClick()}>
      {span}
    </SecondaryButtonContainer>
  );
};

export default SecondaryButton;
