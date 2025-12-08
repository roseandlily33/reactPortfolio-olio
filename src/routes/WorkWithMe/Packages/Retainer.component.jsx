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
      {Retainer.map((ret, idx) => (
        <RetainerCard key={ret.name || idx}>
          <RetainerCardTitle>
            {ret.name} <span style={{ fontWeight: 400, fontSize: "1rem", marginLeft: "0.5em" }}>{ret.base}</span>
          </RetainerCardTitle>
          {ret.price && (
            <RetainerPrice>
              <strong>Starting at:</strong> {ret.price}
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