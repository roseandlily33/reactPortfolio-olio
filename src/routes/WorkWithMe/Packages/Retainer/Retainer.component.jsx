import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
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
    <RetainerTitle style={{ color: "var(--grey-8)", textAlign: 'center' }}>
      Retainer Packages
    </RetainerTitle>
    <p
      style={{
        // marginBottom: "1.5rem",
        fontWeight: 500,
        // textAlign: "left",
        textAlign: 'center',
        width: "100%",
        marginBottom: "var(--spacing-xxl)",
      }}
    >
      Retainer packages offer ongoing support and updates for your website.
      Choose the tier that fits your needs—extra hours or services can be added
      anytime.
    </p>
    <RetainerGrid>
      {Retainer?.map((ret, idx) => (
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
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
              onClick={(e) => {
                // Remove focus after click to prevent lingering :focus styles
                e.currentTarget.blur();
              }}
            >
              <span>Includes</span>
              <FaChevronDown className="chev" />
            </summary>
            <div className="includes-content">
              <RetainerFeatures>
                {ret.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle
                      style={{
                        color: "var(--pink-5)",
                        marginRight: "var(--spacing-xs)",
                      }}
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
