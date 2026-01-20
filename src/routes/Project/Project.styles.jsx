
import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
	max-width: 1100px;
	margin: 2.5rem auto;
	background: #fff;
	border-radius: 28px;
	box-shadow: 0 4px 32px rgba(241,116,150,0.10);
	padding: 2.5rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

export const ProjectDetailHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
	margin-bottom: 1.2rem;
	h1 {
		font-size: 2.2rem;
		font-family: var(--headerFont);
		color: var(--darkPink);
		margin-bottom: 0.2rem;
	}
	.project-detail-links {
		display: flex;
		gap: 1.2rem;
		a {
			color: var(--darkPink);
			font-weight: 600;
			text-decoration: underline;
			font-size: 1.08rem;
			transition: color 0.2s;
			&:hover {
				color: var(--medPink);
			}
		}
	}
`;

export const ProjectDetailMain = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2.5rem;
	@media (max-width: 900px) {
		flex-direction: column;
		gap: 1.5rem;
	}
`;

export const ProjectDetailImageWrapper = styled.div`
	min-width: 320px;
	max-width: 420px;
	width: 100%;
	height: 260px;
	overflow: hidden;
	border-radius: 18px;
	background: #f8f8f8;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 12px rgba(241,116,150,0.10);
	@media (max-width: 900px) {
		min-width: 0;
		max-width: 100%;
		height: 200px;
	}
`;

export const ProjectDetailImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 18px;
`;

export const ProjectDetailInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
`;

export const ProjectDetailStatusType = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1.2rem;
	margin-bottom: 0.2rem;
`;

export const ProjectDetailStatus = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: var(--medBrown);
	display: flex;
	align-items: center;
	gap: 0.3rem;
	.complete {
		color: #5CB85C;
		font-weight: 600;
	}
	.in-progress {
		color: #e6b607;
		font-weight: 600;
	}
`;

export const ProjectDetailType = styled.span`
	font-size: 0.98rem;
	color: var(--medPink);
	font-weight: 500;
	background: rgba(241,116,150,0.08);
	border-radius: 999px;
	padding: 0.2em 0.8em;
	letter-spacing: 0.01em;
`;

export const ProjectDetailImportant = styled.span`
	font-size: 1rem;
	color: var(--darkPink);
	font-weight: 600;
	background: rgba(241,116,150,0.10);
	border-radius: 999px;
	padding: 0.2em 0.8em;
	margin-bottom: 0.5rem;
	display: inline-block;
`;

export const ProjectDetailDescription = styled.p`
	font-size: 1.08rem;
	color: var(--darkGrey);
	margin-bottom: 0.5rem;
	line-height: 1.6;
`;

export const ProjectDetailRole = styled.p`
	font-size: 1.01rem;
	color: var(--medBrown);
	margin-bottom: 0.3rem;
`;

export const ProjectDetailTech = styled.p`
	font-size: 1.01rem;
	color: var(--darkPink);
	margin-bottom: 0.3rem;
`;

export const ProjectDetailSection = styled.div`
	margin: 1.2rem 0 0.5rem 0;
`;

export const ProjectDetailSectionTitle = styled.p`
	margin-bottom: 0.3rem;
	font-weight: 600;
	color: var(--darkPink);
`;

export const ProjectDetailList = styled.ul`
	margin-top: 0;
	margin-bottom: 1rem;
	padding-left: 1.2rem;
	li {
		font-size: 1rem;
		margin-bottom: 0.3rem;
	}
`;
