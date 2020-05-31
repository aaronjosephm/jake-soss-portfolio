import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 100px;
  background-color: white;
`;

export const HomeContent = styled.div`
  left: 500px;
  top: 186px;
  position: absolute;
  width: 50vw;

  & p {
    font-size: 14px !important;
    font-weight: bold !important;
    color: #37352F;
  }

  @media (max-width: 425px) {
    left: 0px;
    top: 0px;
    position: relative;
    width: 80vw;
    margin-left: 10vw;
    margin-bottom: 13vh;
  }
`;

export const ContactTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 25vw;
  margin-top: 13vh;
  width: 50vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;
  border-bottom: 26px solid #E0D9C6;

  @media (max-width: 425px) {
    font-size: 25px;
    width: 80vw;
    border-bottom: 16px solid #E0D9C6;
    height: 40px;
    margin-left: 10vw;
  }
`;

export const ShowTitle = styled.div`
  margin-top: 5vh;
  position: relative;
  display: flex;
  margin-left: 25vw;
  width: 50vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;

  @media (max-width: 425px) {
    margin-left: 10vw;
    width: 80vw;
    font-size: 25px;
  }
`;

export const ContactContent2 = styled.div`
  margin-top: 30vh;
  position: absolute;
  display: flex;
  margin-left: 13vw;
  width: 30vw;

  & p {
    font-size: 20px !important;
    font-weight: bold !important;
    color: #37352F;
  }

  @media (max-width: 425px) {
    position: relative;
    margin-top: 1vh;
    margin-left: 5vw;
    width: 90vw;

    & p {
      font-size: 12px !important;
    }
  }
`;

export const ContactContent = styled.div`
  margin-top: 10vh;
  position: absolute;
  display: flex;
  margin-left: 13vw;
  width: 30vw;

  & p {
    font-size: 20px !important;
    font-weight: bold !important;
    color: #37352F;
  }

  @media (max-width: 425px) {
    position: relative;
    margin-top: 3vh;
    margin-left: 5vw;
    width: 90vw;

    & p {
      font-size: 12px !important;
    }
  }
`;

export const ShowContent = styled.div`
  margin-top: 5vh;
  position: relative;
  display: flex;
  margin-left: 25vw;
  width: 50vw;

  & p {
    font-size: 14px !important;
    font-weight: bold !important;
    color: #37352F;
  }

  @media (max-width: 425px) {
    margin-left: 10vw;
    margin-top: 2vh;
    width: 80vw;
    font-size: 25px;
  }
`;

export const EventsTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 25vw;
  margin-top: 13vh;
  width: 50vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;
  border-bottom: 26px solid #E0D9C6;

  @media (max-width: 425px) {
    height: 40px;
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
  }
`;

export const EventsTitle2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 25vw;
  margin-top: 8vh;
  width: 50vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;
  border-bottom: 26px solid #E0D9C6;

  @media (max-width: 425px) {
    height: 40px;
    margin-left: 20vw;
    width: 60vw;
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
  }
`;


export const Title = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 291px;
  top: 103px;
  width: 40vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;
  border-bottom: 26px solid #E0D9C6;

  @media (max-width: 425px) {
    right: 0px;
    top: 0px;
    position: relative;
    margin-top: 10vh;
    margin-left: 10vw;
    width: 80vw;
    height: 40px;
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
  }
`;

export const PlayImage1 = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  margin-left: 40vw;
  margin-top: 5vh;
  background-repeat: no-repeat;
  width: 20vw;
  height: 386px;
  padding-left: 100px;
  z-index: 100;
  position: relative;

  @media (max-width: 425px) {
    margin-left: 20vw;
    width: 60vw;
  }
`;

export const PlayImage3 = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  margin-left: 35vw;
  margin-top: 5vh;
  background-repeat: no-repeat;
  width: 458px;
  height: 386px;
  padding-left: 100px;
  z-index: 100;
  position: relative;

  @media (max-width: 425px) {
    margin-left: 5vw;
    width: 90vw;
  }
`;

export const PlayImage4 = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  margin-left: 35vw;
  margin-top: 5vh;
  background-repeat: no-repeat;
  width: 458px;
  height: 386px;
  padding-left: 100px;
  z-index: 100;
  position: relative;

  @media (max-width: 425px) {
    margin-left: 5vw;
    width: 90vw;
  }
`;

export const HeadShot = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  left: 70px;
  background-repeat: no-repeat;
  width: 258px;
  height: 386px;
  padding-left: 100px;
  z-index: 100;
  position: absolute;
  top: 86px;

  @media (max-width: 425px) {
    padding-left: 0px;
    position: relative;
    margin-top: 5vh;
    margin-left: 10vw;
    width: 80vw;
    left: 0px;
    top: 0px;
  }
`;

export const SubText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;

export const HomeTitle = styled.div`
  text-align: left;
  position: absolute;
  color: white;
  z-index: 100;
  width: 100%;
  padding-left: 100px;
  bottom: 75px;
  animation-name: slide;
  animation-duration: 1.5s;

  @keyframes slide {
    from {
    	padding-left: 0px;
    }
    to {
    	padding-left: 100px;
    }
  }
`;

export const SubTitle = styled.div`
`;

export const ImageContainer = styled.div`
	height: 300px;
	width: 300px;
	background-image: url(${props => props.image ? props.image : ''});
`;

export const DishCard = styled.div`
  height: 300px;
  width: 300px;
  text-overflow: false;
  text-align: center;
  height: 150px;
  box-shadow: 0 0 25px 0 black; 
`;

export const DishCardWrapper = styled.div`
  &:hover {
  	cursor: pointer;
  }
`;

export const NameAndEmail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
  margin-left: 45vw;

  @media (max-width: 425px) {
    margin-left: 0px;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  width: 50vw;
  margin-left: 40vw;

  @media (max-width: 425px) {
    postion: relative;
    margin-left: 5vw;
    width: 90vw;
  }
`;

export const FormGroup = styled.div`
  color: palevioletred;
  display: flex;
  width: 18vw;
  margin-bottom: 5vh;
  margin-top: 5vh;

  @media (max-width: 425px) {
    postion: relative;
    margin-left: 5vw;
    width: 90vw;
    display: flex;
  }
`;

export const FormGroupMessage = styled.div`
	color: palevioletred;
  display: block;
	width: 40vw;
	margin: auto;
	margin-bottom: 30px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: black;
  display: block;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: ${props => props.error ? 'papayawhip' : 'white'};
	border: 1px solid #ccc !important;
	width: 100%;

  &:focus {
    outline: none !important;
  }
`;

export const TextArea = styled.textarea`
	padding: 0.5em;
	color: black;
	background: ${props => props.error ? 'papayawhip' : 'white'};
	border: 1px solid #ccc !important;
  margin-bottom: 5vh;
	width: 100%;
  height: 20vh;

  &:focus {
    outline: none !important;
  }
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
  display: block;
`;

export const RecipeImageContainer = styled.div`
	height: 450px;
	width: 300px;
	background-image: url(${props => props.image ? props.image : ''});
`;

export const RecipeCard = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 25px 0 black; 
`;

export const Recipe = styled.div`
  padding: 15px 20px 15px 20px;
  width: 900px;
`;

export const DisplayContainer = styled.div`
  height: 500px;
`;

export const FeaturedRecipes = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;

export const AboutImg = styled.div`
  background-image: url(${props => props.image});
  bottom: 0;
  border: none !important;
  background-position: 50% 10%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  z-index: 0;
  position: relative;
`;

export const JakeSossImg = styled.div`
  background-image: url(${props => props.image});
  right: 0;
  filter: grayscale(55%);
  bottom: 0;
  border: none !important;
  background-position: 50% 40% 10%;
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 700px;
  z-index: 100;
  position: absolute;
`;

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  position: absolute;
  background-position: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(180deg);
  right: 0;
  background-image: url('https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
`;