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
				<div className='text active'>Personal</div>
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
	cursor: pointer;

	margin: 0 5px;
	padding: 10px;

	height: 2.5rem;
	background-color: #1e1727;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 1s;

	border-radius: 3rem;

	${(props) =>
		props.en === 't'
			? css`
					width: 40%;
					animation: animate 0.7s;
					@keyframes animate {
						from {
							width: 20%;
						}
						to {
							width: 40%;
						}
					}
			  `
			: css`
					width: 3.5rem;
					animation: ranimate 0.3s;
					@keyframes ranimate {
						from {
							width: 40%;
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
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 3.5rem;
	font-family: Dongle;

	position: absolute;
	bottom: 0;
	background-color: white;
	border-radius: 10px 10px 0 0;
	width: 30vw;
	height: 10%;

	${mobile({ width: '100vw', fontSize: '2.5rem' })}
`;
