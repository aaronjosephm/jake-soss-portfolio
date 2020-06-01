import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 100px;
  background-color: white;
`;

export const HomeContent = styled.div`
  left: 35vw;
  top: 25vh;
  position: absolute;
  width: 50vw;
  margin-bottom: 5vh;

  & p {
    font-size: 14px !important;
    font-weight: bold !important;
    color: #37352F;
  }

  @media (max-width: 425px) {
    left: 0vw !important;
    top: 0vh !important;
    position: relative;
    width: 80vw !important;
    margin-left: 10vw !important;
    margin-bottom: 13vh !important;
  }

   @media (max-width: 920px) {
    left: 0vw;
    top: 0vh;
    margin-top: 5vh;
    margin-left: 40vw;
    margin-bottom: 13vh;
    position: relative;
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

  @media (max-width: 712px) {
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
    height: 40px;
  }

  @media (max-width: 448px) {
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

  @media (max-width: 436px) {
    margin-left: 10vw;
    width: 80vw;
    font-size: 25px;
  }
`;

export const ContactContent = styled.div`
  margin-top: 10vh;
  position: absolute;
  margin-left: 13vw;
  width: 30vw;

  & p {
    font-size: 20px !important;
    font-weight: bold !important;
    color: #37352F;
  }

  @media (max-width: 826px) {
    & p {
      font-size: 15px !important;
    }
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

  @media (max-width: 436px) {
    height: 40px;
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const EventsTitle2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 8vh;
  width: 50vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;
  border-bottom: 26px solid #E0D9C6;

  @media (max-width: 668px) {
    width: 80vw;
  }

  @media (max-width: 436px) {
    height: 40px;
    width: 60vw;
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
  }
`;

export const Title = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 39vw;
  top: 13vh;
  width: 40vw;
  font-weight: bold;
  font-size: 40px;
  color: #37352F;
  height: 60px;
  border-bottom: 26px solid #E0D9C6;

  @media (max-width: 425px) {
    left: 0vw !important;
    top: 0vh !important;
    position: relative !important;
    margin-top: 10vh !important;
    margin-left: 10vw !important;
    width: 80vw !important;
    height: 40px !important;
    font-size: 25px !important;
    border-bottom: 16px solid #E0D9C6 !important;
  } 

  @media (max-width: 654px) {
    margin-top: 3vh;
    margin-left: 5vw;
    position: relative;
    width: 65vw;
    height: 35px;
    font-size: 20px;
    border-bottom: 13px solid #E0D9C6;
  }

  @media (max-width: 776px) {
    margin-top: 3vh;
    margin-left: 5vw;
    position: relative;
    width: 47vw;
    height: 40px;
    font-size: 20px;
    border-bottom: 16px solid #E0D9C6;
  }

  @media (max-width: 920px) {
    margin-top: 3vh;
    margin-left: 5vw;
    position: relative;
    width: 35vw;
    height: 40px;
    font-size: 25px;
    border-bottom: 16px solid #E0D9C6;
  }

  @media (max-width: 1216px) {
    left: 39vw;
    top: 13vh;
    position: relative;
    width: 40vw;
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
  margin-top: 5vh;
  background-repeat: no-repeat;
  width: 350px;
  height: 530px;
  padding-left: 100px;
  z-index: 100;
  position: relative;

  @media (max-width: 425px) {
    width: 60vw;
  }
`;

export const PlayImage3 = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  margin-top: 5vh;
  background-repeat: no-repeat;
  width: 458px;
  height: 386px;
  z-index: 100;
  position: relative;

  @media (max-width: 425px) {
    width: 90vw;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const PlayImage4 = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  margin-top: 5vh;
  background-repeat: no-repeat;
  width: 458px;
  height: 386px;
  z-index: 100;
  position: relative;

  @media (max-width: 425px) {
    width: 90vw;
  }
`;

export const HeadShot = styled.div`
  background-image: url(${props => props.image});
  background-position: 60% 40%;
  border: none !important;
  background-size: cover;
  display: flex;
  left: 2vw;
  background-repeat: no-repeat;
  width: 23vw;
  height: 65vh;
  padding-left: 100px;
  z-index: 100;
  position: absolute;
  top: 10vh;

  @media (max-width: 988px) {
    width: 30vw;
  }

  @media (max-width: 425px) {
    padding-left: 0px;
    position: relative;
    height: 100vh;
    margin-top: 5vh;
    width: 100vw;
    left: 0vw;
    top: 0vh;
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

export const HamburgerIcon = styled.div`
  margin-left: 5px;
  width: 40px;
  height: 40px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  border: none !important;
`;

export const SideBar = styled.div`
  position: fixed;
  padding-top: 5px;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  background-color: #3A475B;
  animation-name: slide;
  animation-duration: 0.3s;

  @keyframes slide {
    from {
      width: 0vw;
    }
    to {
      width: 90vw;
    }
  }
`;

export const SideBarItem = styled.div`
  position: absolute;
  opacity: 1;
  animation-name: fade;
  animation-duration: 1.5s;
  width: 95%;
  margin-left: 5px;
  border-bottom: 5px solid #FFFFFF;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SideBarButton = styled.div`
  position: absolute;
  margin-top: ${props => props.position}px;
  opacity: 1;
  animation-name: fade;
  animation-duration: 1.5s;
  margin-left: 10px;
  width: 90%;
  border-bottom: 1px solid #FFFFFF;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SideBarItems = styled.div`
  display: flex;
  font-size: 30px;
`;

export const Close = styled.div`
  margin-right: 10px;
  display: flex;
  font-size: 30px;
  z-index: 250;
  font-weight: bold;
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