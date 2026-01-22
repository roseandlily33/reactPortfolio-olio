import {
    ProcessSectionContainer,
    TimelineWrapper,
    TimelineLine,
    TimelineLineWhite,
    TimelineStep,
    TimelineIcon,
    TimelineNumber,
    TimelineTitle,
    TimelineDesc,
    TimelineGlow,
} from "./Process.styles";
import { FaLightbulb, FaPencilRuler, FaTools, FaRocket } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const processSteps = [
    {
        title: "Strategy & Clarity",
        icon: <FaLightbulb />,
        desc: "We start with a deep-dive into your goals, audience, and vision to set a clear direction.",
        color: "#f17496",
    },
    {
        title: "Design with Intention",
        icon: <FaPencilRuler />,
        desc: "Thoughtful, user-focused design brings your brand and ideas to life with purpose.",
        color: "#f7b267",
    },
    {
        title: "Build for Longevity",
        icon: <FaTools />,
        desc: "Robust, scalable development ensures your site is fast, secure, and easy to maintain.",
        color: "#7ec4cf",
    },
    {
        title: "Support Beyond Launch",
        icon: <FaRocket />,
        desc: "Ongoing support, updates, and guidance help your project thrive long after launch.",
        color: "#b388eb",
    },
];

const ProcessSection = () => {
    // Animate the timeline progress and glow at each step, 5s per step
    const [activeStep, setActiveStep] = useState(-1);
    const stepsCount = processSteps.length;
    useEffect(() => {
        setActiveStep(0);
        const interval = setInterval(() => {
            setActiveStep((prev) => {
                if (prev < stepsCount - 1) {
                    return prev + 1;
                } else {
                    return 0; // Loop back to the first step
                }
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [stepsCount]);

    return (
        <ProcessSectionContainer>
            <h3>What to expect</h3>
            <TimelineWrapper>
                <TimelineLine steps={stepsCount} activeStep={activeStep} />
                <TimelineLineWhite steps={stepsCount} activeStep={activeStep} />
                {processSteps.map((step, idx) => (
                    <TimelineStep key={step.title} idx={idx} steps={stepsCount}>
                        <TimelineGlow
                            style={{
                                opacity: activeStep === idx ? 1 : 0,
                                boxShadow: activeStep === idx ? `0 0 24px 10px #fff, 0 0 18px 6px ${step.color}` : `0 0 0 0 ${step.color}`,
                                background: step.color
                            }}
                        />
                        <TimelineNumber style={{ background: step.color, borderColor: step.color }}>
                            {idx + 1}
                        </TimelineNumber>
                        <TimelineIcon style={{ color: step.color }}>{step.icon}</TimelineIcon>
                        <TimelineTitle>{step.title}</TimelineTitle>
                        <TimelineDesc>{step.desc}</TimelineDesc>
                    </TimelineStep>
                ))}
            </TimelineWrapper>
        </ProcessSectionContainer>
    );
};

export default ProcessSection;
