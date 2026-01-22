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
    <RetainerTitle style={{ color: "var(--darkOrange)" }}>
      Retainer Packages
    </RetainerTitle>
    <p
      style={{
        marginBottom: "1.5rem",
        fontWeight: 500,
      }}
    >
      Retainer packages provide ongoing support and updates for your website,
      with flexible options to fit your needs. Pricing reflects the base
      investment for each retainer tier and includes a set number of support
      hours. Additional hours or services beyond the included scope may be
      billed separately. For a custom support plan or to discuss which retainer
      is right for you, please reach out!
    </p>
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
              Includes <span className="chev">⌄</span>
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
