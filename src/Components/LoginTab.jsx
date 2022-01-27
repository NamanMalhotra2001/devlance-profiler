import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

function LoginTab({ profile: p, editable, setProfile }) {
	return (
		<div>
			<FieldContainer>
				<Label>Username:</Label>
				<Field
					value={`${p.login.username}`}
					onChange={(e) =>
						setProfile((prev) => ({
							...prev,
							login: {
								...prev.login,
								username: e.target.value,
							},
						}))
					}
					editable={editable}
				/>
			</FieldContainer>

			<FieldContainer>
				<Label>Password:</Label>
				<Field
					type={editable ? 'text' : 'password'}
					value={`${p.login.password}`}
					onChange={(e) =>
						setProfile((prev) => ({
							...prev,
							login: {
								...prev.login,
								password: e.target.value,
							},
						}))
					}
					editable={editable}
				/>
			</FieldContainer>
		</div>
	);
}

export default LoginTab;

// ########## styled components ##########
const Field = styled.input`
	box-sizing: border-box;
	width: 20vw;
	height: 100%;
	padding: 0 0.5rem;
	border: solid 1px black;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '58vw' })}

	${(props) =>
		props.editable.toString() === 'true'
			? css`
					border: solid 1px black;
			  `
			: css`
					pointer-events: none;
					border: none;
			  `}
`;

const Label = styled.h1`
	user-select: none;
	width: 8vw;
	margin-right: 1rem;
	font-family: Rubik;
	font-size: 1.5rem;
	text-align: left;

	${mobile({ width: '28vw' })}
`;

const FieldContainer = styled.div`
	height: 3rem;
	padding: 0.4rem 0;
	display: flex;
	align-items: center;

	${mobile({ width: '90vw' })}
`;
