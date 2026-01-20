import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  RetainerSection,
  RetainerTitle,
  RetainerGrid,
  RetainerCard,
  RetainerCardTitle,
  RetainerCardBase,
  RetainerPrice,
  RetainerDescription,
  RetainerFeatures,
  RetainerIncludes,
} from "./Retainer.styles";
import { Retainer } from "./RetainerInfo";

const RetainerComponent = () => (
  <RetainerSection>
    <RetainerTitle>Retainer Packages</RetainerTitle>
    <RetainerGrid>
      {Retainer.map((ret, idx) => (
        <RetainerCard key={ret.name || idx}>
          <RetainerCardTitle>{ret.name}</RetainerCardTitle>
          <RetainerCardBase>
            {ret.base}
            <span className="base-line" />
          </RetainerCardBase>
          {ret.price && (
            <RetainerPrice>
              <strong>Starting at:</strong> {ret.price}
            </RetainerPrice>
          )}
          <RetainerDescription>{ret.description}</RetainerDescription>
          <RetainerIncludes>
            <summary>
              Includes {" "}
              <span className="chev">⌄</span>
            </summary>
            <div className="includes-content">
              <RetainerFeatures>
                {ret.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle
                      style={{ color: "var(--darkPink)", marginRight: "0.5em" }}
                    />
                    {feature}
                  </li>
                ))}
              </RetainerFeatures>
            </div>
          </RetainerIncludes>
        </RetainerCard>
      ))}
    </RetainerGrid>
  </RetainerSection>
);

export default RetainerComponent;
