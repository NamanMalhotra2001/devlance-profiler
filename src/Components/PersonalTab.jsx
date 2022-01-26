import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

function PersonalTab() {
	return (
		<div>
			<FieldContainer>
				<Label>Name</Label>
				<Field />
			</FieldContainer>

			<FieldContainer>
				<Label>Address</Label>
				<Field />
			</FieldContainer>

			<div style={{ display: 'flex' }}>
				<AgeGenderContainer>
					<Label>Age</Label>
					<Field width={'3rem'} />
				</AgeGenderContainer>

				<AgeGenderContainer>
					<Label>Gender</Label>
					<Field width={'3rem'} />
				</AgeGenderContainer>
			</div>
		</div>
	);
}

export default PersonalTab;

// ########## styled components ##########
const Field = styled.input`
	width: ${(props) => (props.width ? props.width : '20vw')};
	height: 100%;
	border: solid 1px black;
	border-radius: 10px;

	@media only screen and (max-width: 800px) {
		width: ${(props) => (props.width ? props.width : '60vw')};
	}
`;

const Label = styled.h1`
	width: 6vw;
	height: 100%;
	margin-right: 1rem;
	font-size: 2rem;
	font-family: Dongle;
	text-align: left;

	${mobile({ width: '25vw' })}
`;

const AgeGenderContainer = styled.div`
	width: 50%;
	height: 3rem;
	padding: 0.4rem 0;
	display: flex;
	align-items: center;
`;

const FieldContainer = styled.div`
	height: 3rem;
	padding: 0.4rem 0;
	display: flex;
	align-items: center;

	${mobile({ width: '90vw' })}
`;
