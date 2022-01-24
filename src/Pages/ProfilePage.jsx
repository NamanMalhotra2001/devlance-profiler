import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
// Components
import Navigator from '../Components/Navigator';

function ProfilePage() {
	// ########## states ##########
	const [profile, setProfile] = useState(undefined);
	const [activePage, setActivePage] = useState('per');

	// ########## fetching data ##########
	useEffect(() => {
		setTimeout(() => {
			fetch('https://randomuser.me/api/')
				.then((res) => res.json())
				.then((data) => {
					setProfile(data.results[0]);
					localStorage.setItem('profile', data.results[0]);
				});
		}, 100);
	}, []);

	return (
		<Wrapper>
			{profile === undefined ? (
				<Loading />
			) : (
				<Container>
					<Photo src={profile.picture.large} alt='' />

					<TabContainer>
						<FieldContainer>
							<Label>Name</Label>
							<Field />
						</FieldContainer>
					</TabContainer>

					<Navigator
						activePage={activePage}
						setActive={setActivePage}
					/>
				</Container>
			)}
		</Wrapper>
	);
}

export default ProfilePage;

// ########## styled components ##########
const Field = styled.input`
	width: 50%;
	height: 2.5rem;
	border: solid 1px black;
	border-radius: 10px;
`;

const Label = styled.h1`
	font-size: 2rem;
	font-family: Dongle;
	width: 5rem;
	/* text-align: center; */
`;

const FieldContainer = styled.div`
	width: 100%;
	/* background-color: red; */
	display: flex;
	justify-content: left;
	align-items: center;
`;

const TabContainer = styled.div`
	background-color: white;
	margin-top: 15%;
	padding-top: 12%;
	padding-left: 5%;
	padding-right: 5%;
	border-radius: 1rem;
	width: 70%;
	height: 48%;

	${mobile({
		width: '85%',
		marginTop: '40%',
		paddingTop: '40%',
	})}
`;

const Photo = styled.img`
	position: absolute;
	margin-top: -1rem;
	width: 15vw;
	height: 15vw;
	border: solid 3px black;
	border-radius: 50%;
	object-fit: contain;

	${mobile({ width: '15rem', height: '15rem', marginTop: '5%' })}
`;

const Container = styled.div`
	position: relative;
	width: 60%;
	height: 80%;

	margin: 3rem;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 15px;

	background: rgb(46, 34, 48);
	background: linear-gradient(
		173deg,
		rgba(46, 34, 48, 1) 0%,
		rgba(55, 66, 100, 1) 100%
	);

	box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.7);
	-webkit-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.7);
	-moz-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.7);

	${mobile({
		margin: '0',
		padding: '0',
		width: '100%',
		height: '100%',
		boxShadow: 'none',
		borderRadius: '0',
	})}
`;

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2f2f2f;
`;

const Loading = styled.div`
	margin: 10% auto;
	border: 7px solid lightgray;
	border-top: 7px solid black;
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	animation: spin 0.8s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;
