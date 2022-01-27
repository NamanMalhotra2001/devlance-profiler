import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

function PersonalTab({ profile: p, editable, setProfile }) {
	return (
		<div>
			<FieldContainer>
				<Label>Name:</Label>
				<Field
					value={`${p.name.first} ${p.name.last}`}
					onChange={(e) =>
						setProfile((prev) => ({
							...prev,
							name: {
								first: e.target.value.split(' ')[0],
								last: e.target.value.split(' ')[1],
							},
						}))
					}
					editable={editable}
				/>
			</FieldContainer>

			<FieldContainer>
				<Label>Address:</Label>
				<Field
					value={`${p.location.city}, ${p.location.country}`}
					onChange={(e) =>
						setProfile((prev) => ({
							...prev,
							location: {
								city: e.target.value.split(', ')[0],
								country: e.target.value.split(', ')[1],
							},
						}))
					}
					editable={editable}
				/>
			</FieldContainer>

			<div style={{ display: 'flex' }}>
				<AgeGenderContainer>
					<Label>Age:</Label>
					<Age
						value={p.dob.age}
						onChange={(e) =>
							setProfile((prev) => ({
								...prev,
								dob: { age: e.target.value },
							}))
						}
						type='number'
						editable={editable}
					/>
				</AgeGenderContainer>

				<AgeGenderContainer>
					<Label>Gender:</Label>
					<Gender
						editable={editable}
						value={p.gender}
						onChange={(e) =>
							setProfile((prev) => ({
								...prev,
								gender: e.target.value,
							}))
						}
					>
						<option value='male'>M</option>
						<option value='female'>F</option>
					</Gender>
				</AgeGenderContainer>
			</div>
		</div>
	);
}

export default PersonalTab;

// ########## styled components ##########
const Gender = styled.select`
	box-sizing: border-box;
	width: 5rem;
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '4rem' })}

	${(props) =>
		props.editable === true
			? css`
					border: solid 1px black;
			  `
			: css`
					pointer-events: none;
					border: none;
					-moz-appearance: none;
					-webkit-appearance: none;
			  `}
`;

const Age = styled.input`
	box-sizing: border-box;
	width: 5vw;
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '15vw' })}

	${(props) =>
		props.editable === true
			? css`
					border: solid 1px black;
			  `
			: css`
					pointer-events: none;
					border: none;
			  `}
`;

const AgeGenderContainer = styled.div`
	width: 50%;
	height: 3rem;
	padding: 0.4rem 0;
	display: flex;
	align-items: center;
`;

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

	${mobile({ width: '60vw' })}

	${(props) =>
		props.editable === true
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

	${mobile({ width: '25vw' })}
`;

const FieldContainer = styled.div`
	height: 3rem;
	padding: 0.4rem 0;
	display: flex;
	align-items: center;

	${mobile({ width: '90vw' })}
`;
