import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

function ContactTab({ profile: p, editable, setProfile }) {
	return (
		<div>
			<FieldContainer>
				<Label>Email:</Label>
				<Field
					disabled={editable ? false : true}
					tabIndex={editable ? 1 : -1}
					value={`${p.email}`}
					onChange={(e) =>
						setProfile((prev) => ({
							...prev,
							email: e.target.value,
						}))
					}
					editable={editable}
				/>
			</FieldContainer>

			<FieldContainer>
				<Label>Cell:</Label>
				<Field
					disabled={editable ? false : true}
					tabIndex={editable ? 2 : -1}
					value={p.cell
						.replace(/-/g, '')
						.replace(/ /g, '')
						.replace('(', '')
						.replace(')', '')}
					onChange={(e) =>
						setProfile((prev) => ({
							...prev,
							cell: e.target.value,
						}))
					}
					maxLength='10'
					editable={editable}
				/>
			</FieldContainer>

			<FieldContainer>
				<Label>Phone:</Label>
				<Field
					disabled={editable ? false : true}
					tabIndex={editable ? 3 : -1}
					value={p.phone
						.replace(/-/g, '')
						.replace(/ /g, '')
						.replace('(', '')
						.replace(')', '')}
					onChange={(e) => {
						setProfile((prev) => ({
							...prev,
							phone: e.target.value.replace(
								/[a-zA-Z&^!@#,` +()$~%.'":*?<>{}]/g,
								''
							),
						}));
					}}
					maxLength='10'
					editable={editable}
				/>
			</FieldContainer>
		</div>
	);
}

export default ContactTab;

// ########## styled components ##########
const Field = styled.input`
	box-sizing: border-box;
	color: #424242;
	width: 20vw;
	height: 100%;
	padding: 0 0.5rem;
	border: solid 1px black;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '60vw' })}

	${(props) =>
		props.editable.toString() === 'true'
			? css`
					border: solid 1px black;
			  `
			: css`
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

	${mobile({ width: '25vw' })}
`;

const FieldContainer = styled.div`
	height: 3rem;
	padding: 0.4rem 0;
	display: flex;
	align-items: center;

	${mobile({ width: '90vw' })}
`;
