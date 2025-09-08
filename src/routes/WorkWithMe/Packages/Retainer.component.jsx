import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  RetainerSection,
  RetainerTitle,
  RetainerGrid,
  RetainerCard,
  RetainerCardTitle,
  RetainerPrice,
  RetainerDescription,
  RetainerFeatures,
} from "./Retainer.styles";
import { Retainer } from "./RetainerInfo";

const RetainerComponent = () => (
  <RetainerSection>
    <RetainerTitle>Retainer Packages</RetainerTitle>
    <RetainerGrid>
      {Retainer.filter(r => r.title).map((ret, idx) => (
        <RetainerCard key={ret.title || idx}>
          <RetainerCardTitle>{ret.title}</RetainerCardTitle>
          {ret.price && (
            <RetainerPrice>
              <strong>Starting at:</strong> ${ret.price}
            </RetainerPrice>
          )}
          <RetainerDescription>{ret.description}</RetainerDescription>
          <RetainerFeatures>
            {ret.features.map((feature, i) => (
              <li key={i}>
                <FaCheckCircle style={{ color: "var(--darkPink)", marginRight: "0.5em" }} />
                {feature}
              </li>
            ))}
          </RetainerFeatures>
        </RetainerCard>
      ))}
    </RetainerGrid>
  </RetainerSection>
);

export default RetainerComponent;
 
export default RetainerCards;