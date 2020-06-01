import React, { Component } from 'react';
import styled from 'styled-components';
import jakeSoss from '../assets/jake_soss.png';
import headShot from '../assets/headshot.jpg';
import {
	HomeTitle,
	SubTitle,
	ImageContainer,
	DishCard,
	DishCardWrapper,
	DisplayContainer,
	FeaturedRecipes,
	Banner,
	HeadShot,
	Title,
	JakeSossImg,
	HomeContent,
	HeadWrapper,
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
		const isMobile = window.innerWidth <= 600 ? true : false;

		return (
			<div>
			  {isMobile ? 
			  	(<div>
				  	<Title>
				 	    Actor | Jake Soss
				    </Title>
				    <HeadWrapper>
					    <HeadShot 
					      image={headShot}
					     /> 
				     </HeadWrapper>
			     </div>) : 
			     (<div>
				     <HeadShot 
				      image={headShot}
				     /> 
				     <Title>
				 	   Aspiring Actor | Jake Soss
				     </Title>
			     </div>)
			   }
			 <HomeContent>
			   <p>
			 	&nbsp;&nbsp;&nbsp;&nbsp;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			 	deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
			 	similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quide
			 	m rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque 
			 	nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor 
			 	repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut 
			 	et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delect
			 	us, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
			 	.  
			 	</p>
			 	<p>
			 	&nbsp;&nbsp;&nbsp;&nbsp;Aporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates r
			 	epudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
			 	reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella.
			   </p>
			 </HomeContent>
			</div>
		);
	}
}

export default HomeComponent;
