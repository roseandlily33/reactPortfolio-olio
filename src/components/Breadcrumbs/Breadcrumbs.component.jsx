import React from "react";
import {
    BreadcrumbsContainer,
    CrumbLink,
    CrumbText,
    CurrentCrumb,
} from "./Breadcrumbs.styles";

const Chevron = () => (
    <span
        aria-hidden="true"
        style={{
            display: 'inline-block',
            margin: '0 0.3em',
            color: 'var(--yellow)',
            fontWeight: 900,
            fontSize: '1.2em',
            transform: 'translateY(-1px)',
            transition: 'color 0.18s',
            userSelect: 'none',
            pointerEvents: 'none',
            animation: 'chevWiggle 1.2s infinite cubic-bezier(0.77,0,0.18,1)'
        }}
    >
        &#8594;
        <style>{`
            @keyframes chevWiggle {
                0% { transform: translateY(-1px) scale(1) rotate(0deg); }
                20% { transform: translateY(-2px) scale(1.08) rotate(-8deg); }
                40% { transform: translateY(-1px) scale(1) rotate(0deg); }
                60% { transform: translateY(0px) scale(1.08) rotate(8deg); }
                80% { transform: translateY(-1px) scale(1) rotate(0deg); }
                100% { transform: translateY(-1px) scale(1) rotate(0deg); }
            }
        `}</style>
    </span>
);

const Breadcrumbs = ({ prev, prevLink, current }) => {
    return (
        <BreadcrumbsContainer aria-label="Breadcrumb">
            {prev && prevLink && (
                <CrumbLink href={prevLink} aria-label={`Go to ${prev}`}>
                    <CrumbText>{prev}</CrumbText>
                </CrumbLink>
            )}
            {prev && prevLink && current && <Chevron />}
            {current && (
                <CurrentCrumb>{current}</CurrentCrumb>
            )}
        </BreadcrumbsContainer>
    );
};

export default Breadcrumbs;
