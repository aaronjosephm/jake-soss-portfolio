import React, { Component } from 'react';
import styled from 'styled-components';
import jakeSoss from '../assets/jake_soss.png'
import {
	HomeTitle,
	SubTitle,
	ImageContainer,
	DishCard,
	DishCardWrapper,
	DisplayContainer,
	FeaturedRecipes,
	Banner,
	JakeSossImg,
} from './commonStyleComponents/commonDivs';
import { BackButton } from './commonStyleComponents/commonButtons';


class HomeComponent extends Component {
	state = {
		selectedRecipe: undefined,
	}

	handleDishClick(e, dish) {
		console.log('Setting dish: ', dish.title);
		this.setState({ selectedRecipe: dish });
	}

	render () {
		return (
			<div>
			  <HomeTitle>
			    <h1>Hi I'm Jake Soss</h1>
			    <h3>Aspiring actor, and playwrite</h3>
			    <br/>
			    <br/>
			  </HomeTitle>
			  <Banner/>
			  <img image={jakeSoss} width={100} className="jakeSossImg" />
			  <JakeSossImg 
			    image={jakeSoss}
			  />
			  <SubTitle>
			    <h2>Here's some of Aaron's featured recipes:</h2>
			  </SubTitle>
			</div>
		);
	}
}

export default HomeComponent;
