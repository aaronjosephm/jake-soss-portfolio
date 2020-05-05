import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 100px;
  background-color: white;
`;

export const Title = styled.div`
  display: flex;
  justify-content: right;
`;

export const AboutTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  padding-left: 100px;
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
  bottom: 100px;
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

export const FormGroup = styled.div`
	color: palevioletred;
  display: block;
	width: 300px;
	margin: auto;
	margin-bottom: 30px;
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
	border: 1px solid #ccc!important;
	border-radius: 10px;
	width: 100%;
`;

export const TextArea = styled.textarea`
	padding: 0.5em;
	color: black;
	background: ${props => props.error ? 'papayawhip' : 'white'};
	border: 1px solid #ccc!important;
	border-radius: 10px;
	width: 100%;
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