import { FcBusinessman, FcLock, FcPhone } from 'react-icons/fc';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

function Navigator({ activePage, setActive }) {
	return (
		<Container>
			<Tab
				en={activePage === 'con' ? 't' : ''}
				onClick={() => setActive('con')}
			>
				<FcPhone style={{ transform: 'rotate(-90deg)' }} />
				<div className='text'>Contact</div>
			</Tab>
			<Tab
				en={activePage === 'per' ? 't' : ''}
				onClick={() => setActive('per')}
			>
				<FcBusinessman />
				<div className='text'>Personal</div>
			</Tab>
			<Tab
				en={activePage === 'log' ? 't' : ''}
				onClick={() => setActive('log')}
			>
				<FcLock />
				<div className='text'>Login</div>
			</Tab>
		</Container>
	);
}

export default Navigator;

// ########## styled components ##########
const Tab = styled.span`
	overflow: hidden;
	background-color: #1e1727;
	color: white;
	cursor: pointer;
	height: 2.5rem;
	margin: 0 5px;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 1s;

	border-radius: 3rem;

	${(props) =>
		props.en === 't'
			? css`
					width: 60%;
					font-size: 2rem;
					animation: animate 0.8s;
					@keyframes animate {
						from {
							width: 20%;
						}
						to {
							width: 60%;
						}
					}
			  `
			: css`
					width: 3.5rem;
					font-size: 3rem;
					animation: ranimate 0.3s;
					@keyframes ranimate {
						from {
							width: 60%;
						}
						to {
							width: 3.5rem;
						}
					}
			  `}

	${mobile({ height: '2rem', cursor: 'default' })}

	.text {
		${(props) =>
			props.en === 't'
				? css`
						display: unset;
				  `
				: css`
						display: none;
				  `}
		margin-top: 5px;
	}
`;

const Container = styled.div`
	user-select: none;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	background-color: white;
	border-radius: 10px 10px 0 0;
	width: 30vw;
	height: 10%;

	${mobile({ width: '100vw', fontSize: '2rem' })}
`;
