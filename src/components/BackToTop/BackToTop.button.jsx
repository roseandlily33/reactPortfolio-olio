import React from "react";
import { BackToTop } from "./BackToTop.styles";
const BackToTopButton = () => {
  return (
    <BackToTop onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      Back to Top
    </BackToTop>
  );
};

export default BackToTopButton;
