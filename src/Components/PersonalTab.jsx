import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

function PersonalTab({ profile: p, editable, setProfile }) {
	return (
		<div>
			<FieldContainer>
				<Label>Name:</Label>
				{!editable ? (
					<Field
						disabled
						tabIndex={editable ? 1 : -1}
						defaultValue={`${p.name.first} ${p.name.last}`}
					/>
				) : (
					<div style={{ height: '100%' }}>
						<EditField
							value={p.name.first}
							placeholder='first name'
							onChange={(e) =>
								setProfile((prev) => ({
									...prev,
									name: {
										...prev.name,
										first: e.target.value,
									},
								}))
							}
						/>
						<EditField
							value={p.name.last}
							placeholder='last name'
							onChange={(e) =>
								setProfile((prev) => ({
									...prev,
									name: {
										...prev.name,
										last: e.target.value,
									},
								}))
							}
						/>
					</div>
				)}
			</FieldContainer>

			<FieldContainer>
				<Label>Address:</Label>
				{!editable ? (
					<Field
						disabled
						tabIndex={editable ? 2 : -1}
						defaultValue={`${p.location.state}, ${p.location.country}`}
					/>
				) : (
					<div style={{ height: '100%' }}>
						<EditField
							value={p.location.state}
							placeholder='state'
							onChange={(e) =>
								setProfile((prev) => ({
									...prev,
									location: {
										...prev.location,
										state: e.target.value,
									},
								}))
							}
						/>
						<EditField
							value={p.location.country}
							placeholder='country'
							onChange={(e) =>
								setProfile((prev) => ({
									...prev,
									location: {
										...prev.location,
										country: e.target.value,
									},
								}))
							}
						/>
					</div>
				)}
			</FieldContainer>

			<div style={{ display: 'flex' }}>
				<AgeGenderContainer>
					<Label>Age:</Label>
					<Age
						disabled={editable ? false : true}
						tabIndex={editable ? 3 : -1}
						value={p.dob.age}
						onChange={(e) =>
							setProfile((prev) => ({
								...prev,
								dob: {
									...prev.dob,
									age: e.target.value,
								},
							}))
						}
						type='number'
						editable={editable}
					/>
				</AgeGenderContainer>

				<AgeGenderContainer>
					<Label>Gender:</Label>
					<Gender
						disabled={editable ? false : true}
						tabIndex={editable ? 4 : -1}
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
const Field = styled.input`
	box-sizing: border-box;
	color: #424242;
	width: 20vw;
	height: 100%;
	padding: 0 0.5rem;
	border: none;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '60vw' })}
`;

const EditField = styled.input`
	box-sizing: border-box;
	color: #424242;
	width: 9vw;
	margin-right: 1vw;
	height: 100%;
	padding: 0 0.5rem;
	border: solid 1px black;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '29vw' })}
`;

const Gender = styled.select`
	box-sizing: border-box;
	color: #424242;
	width: 5rem;
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 10px;
	font-family: Rubik;
	font-size: 1.4rem;
	text-align: left;

	${mobile({ width: '4rem' })}

	${(props) =>
		props.editable.toString() === 'true'
			? css`
					border: solid 1px black;
			  `
			: css`
					border: none;
					-moz-appearance: none;
					-webkit-appearance: none;
			  `}
`;

const Age = styled.input`
	box-sizing: border-box;
	color: #424242;
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
