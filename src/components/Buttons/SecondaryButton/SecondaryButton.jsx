import React from "react";
import { SecondaryButtonContainer } from "./SecondaryButton.styles";
const SecondaryButton = ({ onClick, span }) => {
  return (
    <SecondaryButtonContainer
      onClick={onClick ? () => onClick() : undefined}
      tabIndex={0}
      role="button"
    >
      {span}
    </SecondaryButtonContainer>
  );
};

export default SecondaryButton;
