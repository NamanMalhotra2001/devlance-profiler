import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
// Components
import Navigator from '../Components/Navigator';
import PersonalTab from '../Components/PersonalTab';
import ContactTab from '../Components/ContactTab';
import LoginTab from '../Components/LoginTab';

function ProfilePage() {
	// ########## states ##########
	const [profile, setProfile] = useState(undefined);
	const [activeTab, setActiveTab] = useState('per');
	const [editable, setEditable] = useState(false);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setHeight(window.innerHeight);
	}, []);

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
		<Wrapper height={height}>
			{profile === undefined ? (
				<Loading />
			) : (
				<Container>
					<Photo src={profile.picture.large} alt='' />

					<TabContainer>
						{activeTab === 'per' ? (
							<PersonalTab
								profile={profile}
								editable={editable}
								setProfile={setProfile}
							/>
						) : (
							''
						)}

						{activeTab === 'con' ? (
							<ContactTab
								profile={profile}
								editable={editable}
								setProfile={setProfile}
							/>
						) : (
							''
						)}

						{activeTab === 'log' ? (
							<LoginTab
								profile={profile}
								editable={editable}
								setProfile={setProfile}
							/>
						) : (
							''
						)}
						<EditButton
							onClick={() => setEditable((prev) => !prev)}
						>
							{editable ? 'Save' : 'Edit'}
						</EditButton>
					</TabContainer>

					<Navigator
						activeTab={activeTab}
						setActive={setActiveTab}
					/>
				</Container>
			)}
		</Wrapper>
	);
}

export default ProfilePage;

// ########## styled components ##########
const EditButton = styled.button`
	cursor: pointer;
	background-color: #2e223c;
	color: white;
	position: absolute;
	width: 30%;
	min-height: 15%;
	bottom: 5%;
	font-family: Rubik;
	font-size: 1.6rem;
	font-weight: bolder;
	border-radius: 1rem;
	transition: 0.2s;

	:hover {
		background-color: #2e223cf7;
	}

	${mobile({ cursor: 'default' })}
`;

const TabContainer = styled.div`
	background-color: white;
	position: relative;
	padding: 0 5%;
	min-height: 60%;
	margin-top: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;

	${mobile({
		width: '85%',
		minHeight: '30%',
		marginTop: '15vh',
		padding: '20% 5%',
	})}
`;

const Photo = styled.img`
	width: 15vw;
	height: 15vw;
	position: absolute;
	z-index: 10;
	margin-top: -1rem;
	border: solid 3px black;
	border-radius: 50%;
	object-fit: contain;

	${mobile({ width: '20vh', height: '20vh', marginTop: '5%' })}
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
	background-color: #2f2f2f;
	height: ${(props) => `${props.height}px`};
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	font-family: Rubik;
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
