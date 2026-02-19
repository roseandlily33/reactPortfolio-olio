import styled from "styled-components";

export const StyledCTAContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	max-width: 82vw;
	min-width: 0;
	margin-left: 50%;
	transform: translateX(-50%);
	text-align: center;
	background: linear-gradient(120deg, var(--pink-1) 0%, var(--pinkBackground) 100%);
	box-shadow: 0 4px 32px rgba(241, 116, 150, 0.07);
	position: relative;
	border-radius: var(--borderRadius);
	padding: var(--spacing-xxxl) var(--spacing-xxl);
	h4 {
		text-align: center !important;
		font-family: var(--headerFont);
		font-size: 2.1rem;
		color: var(--pink-5);
		font-weight: 700;
		margin-bottom: 0.7rem;
		letter-spacing: 0.01em;
		text-shadow: 0 2px 12px var(--pink-1);
	}
	p {
		color: var(--grey-7);
		font-size: 1.18rem;
		margin-bottom: 2.2rem;
		font-weight: 500;
		max-width: 520px;
	}
`;


